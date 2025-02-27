import { Auth } from '@aws-amplify/auth';
import {
  analyze,
  configureApi,
  deleteLanguageDeck,
  loadLanguageDeck,
  saveLanguageDeck,
} from '@vocably/api';
import { makeCreate, makeDelete } from '@vocably/crud';
import {
  onAddCardRequest,
  onAnalyzeRequest,
  onCleanUpRequest,
  onGetInternalProxyLanuage,
  onGetInternalSourceLanguage,
  onGetProxyLanguage,
  onIsActiveRequest,
  onIsEligibleForTrialRequest,
  onIsLoggedInRequest,
  onIsUserKnowsHowToAdd,
  onListLanguagesRequest,
  onPing,
  onPingExternal,
  onRemoveCardRequest,
  onSetInternalProxyLanguage,
  onSetInternalSourceLanguage,
  onSetProxyLanguage,
  onSetUserKnowsHowToAdd,
} from '@vocably/extension-messages';
import {
  Analysis,
  AnalyzePayload,
  GoogleLanguage,
  isCardItem,
  isEligibleForTrial,
  LanguageDeck,
  mapUserAttributes,
  Result,
} from '@vocably/model';
import { get, isEqual } from 'lodash-es';
import { createTranslationCards } from './createTranslationCards';
import './fixAuth';
import { addLanguage, getUserLanguages, removeLanguage } from './languageList';
import { getProxyLanguage, setProxyLanguage } from './proxyLanguage';
import { getSourceLanguage, setSourceLanguage } from './sourceLanguage';

type RegisterServiceWorkerOptions = {
  auth: Parameters<typeof Auth.configure>[0];
  api: Parameters<typeof configureApi>[0];
};
export const registerServiceWorker = (
  registerServiceWorkerOptions: RegisterServiceWorkerOptions
) => {
  Auth.configure(registerServiceWorkerOptions.auth);
  configureApi(registerServiceWorkerOptions.api);

  onIsLoggedInRequest(async (sendResponse) => {
    console.info('Login check has been requested.');
    const isLoggedIn = await Auth.currentSession()
      .then(() => true)
      .catch(() => false);

    console.info(`The user is ${isLoggedIn ? 'logged in' : 'not logged in'}.`);
    return sendResponse(isLoggedIn);
  });

  onIsActiveRequest(async (sendResponse) => {
    const user = await Auth.currentAuthenticatedUser().catch(() => false);

    if (!user) {
      return sendResponse(false);
    }

    return sendResponse(
      get(
        user,
        'signInUserSession.accessToken.payload.cognito:groups',
        []
      ).includes('paid')
    );
  });

  onIsEligibleForTrialRequest(async (sendResponse) => {
    const user = await Auth.currentAuthenticatedUser().catch(() => false);

    if (user === false) {
      return sendResponse(false);
    }

    const attributes = await Auth.userAttributes(user);

    const userData = mapUserAttributes({ user, attributes });
    return sendResponse(isEligibleForTrial(userData));
  });

  const getAnalysisAndCards = async (
    analyzePayload: AnalyzePayload
  ): Promise<[Result<Analysis>, Result<LanguageDeck>]> => {
    if (analyzePayload.sourceLanguage) {
      return Promise.all([
        analyze(analyzePayload),
        loadLanguageDeck(analyzePayload.sourceLanguage),
      ]);
    }

    const analysisResult = await analyze(analyzePayload);
    if (analysisResult.success === false) {
      return [
        analysisResult,
        {
          success: false,
          errorCode: 'LANGUAGE_DECK_LOAD_ERROR',
          reason: `The language deck can't be loaded because the source language is not specified and can't be detected.`,
        },
      ];
    }

    return [
      analysisResult,
      await loadLanguageDeck(analysisResult.value.translation.sourceLanguage),
    ];
  };

  onAnalyzeRequest(async (sendResponse, payload) => {
    const analyzePayload = {
      ...payload,
      sourceLanguage:
        payload.sourceLanguage ?? (await getSourceLanguage()) ?? 'en',
      targetLanguage: (await getProxyLanguage()) ?? 'en',
    };

    if (payload.sourceLanguage) {
      await setSourceLanguage(payload.sourceLanguage);
    }

    try {
      const [analysisResult, loadLanguageDeckResult] =
        await getAnalysisAndCards(analyzePayload);

      if (analysisResult.success === false) {
        analysisResult.extra &&
          analysisResult.extra.body &&
          console.info(
            'Backend error body',
            analysisResult.extra.body.toString()
          );
        return sendResponse(analysisResult);
      }

      if (loadLanguageDeckResult.success === false) {
        return sendResponse(loadLanguageDeckResult);
      }

      const languageDeck = loadLanguageDeckResult.value;
      const cards = createTranslationCards(
        languageDeck.cards,
        analyzePayload,
        analysisResult.value
      );

      const value = {
        cards,
        source: analysisResult.value.source,
        translation: analysisResult.value.translation,
      };

      addLanguage(value.translation.sourceLanguage);
      return sendResponse({
        success: true,
        value,
      });
    } catch (e) {
      return sendResponse({
        success: false,
        errorCode: 'EXTENSION_SERVICE_WORKER_ERROR_CREATING_CARDS',
        reason: `An unexpected error has occurred during the cards creation in service worker.`,
        extra: e,
      });
    }
  });

  onRemoveCardRequest(async (sendResponse, payload) => {
    const getLanguageDeckResult = await loadLanguageDeck(
      payload.translationCards.translation.sourceLanguage
    );

    if (getLanguageDeckResult.success === false) {
      return sendResponse(getLanguageDeckResult);
    }

    makeDelete(getLanguageDeckResult.value.cards)(payload.card.id);

    const saveLanguageDeckResult = await saveLanguageDeck(
      getLanguageDeckResult.value
    );

    if (saveLanguageDeckResult.success === false) {
      return sendResponse(saveLanguageDeckResult);
    }

    return sendResponse({
      success: true,
      value: {
        ...payload.translationCards,
        cards: payload.translationCards.cards.map((item) =>
          isEqual(item, payload.card)
            ? {
                data: item.data,
              }
            : item
        ),
      },
    });
  });

  onAddCardRequest(async (sendResponse, payload) => {
    const getLanguageDeckResult = await loadLanguageDeck(
      payload.translationCards.translation.sourceLanguage
    );

    if (getLanguageDeckResult.success === false) {
      return sendResponse(getLanguageDeckResult);
    }

    const addedCard = makeCreate(getLanguageDeckResult.value.cards)(
      payload.card.data
    );

    const saveLanguageDeckResult = await saveLanguageDeck(
      getLanguageDeckResult.value
    );

    if (saveLanguageDeckResult.success === false) {
      return sendResponse(saveLanguageDeckResult);
    }

    return sendResponse({
      success: true,
      value: {
        ...payload.translationCards,
        cards: payload.translationCards.cards.map((item) =>
          isEqual(item, payload.card) ? addedCard : item
        ),
      },
    });
  });

  onCleanUpRequest(async (sendResponse, payload) => {
    console.info(`Clean up has been requested.`, payload);
    try {
      const loadLanguageDeckResult = await loadLanguageDeck(
        payload.translation.sourceLanguage
      );

      if (loadLanguageDeckResult.success === false) {
        return sendResponse(loadLanguageDeckResult);
      }

      const deck = loadLanguageDeckResult.value;

      const deleteCard = makeDelete(deck.cards);
      payload.cards.forEach((item) => {
        if (isCardItem(item)) {
          deleteCard(item.id);
        }
      });

      if (deck.cards.length === 0) {
        console.info(`The entire deck will be deleted.`, payload);
        removeLanguage(deck.language as GoogleLanguage);
        return sendResponse(await deleteLanguageDeck(deck.language));
      }

      console.info(
        `${payload.cards.length} cards will be deleted from the deck.`,
        payload
      );
      return sendResponse(await saveLanguageDeck(deck));
    } catch (e) {
      return sendResponse({
        success: false,
        errorCode: 'EXTENSION_SERVICE_WORKER_ERROR_CLEANING_UP',
        reason: `An unexpected error has occurred during the cards clean up in service worker.`,
        extra: e,
      });
    }
  });

  onListLanguagesRequest(async (sendResponse) =>
    sendResponse(await getUserLanguages())
  );

  onPing((sendResponse) => {
    return sendResponse('pong');
  });

  onPingExternal((sendResponse) => {
    return sendResponse('pong');
  });

  onGetInternalProxyLanuage(async (sendResponse) => {
    return sendResponse(await getProxyLanguage());
  });

  onSetInternalProxyLanguage(async (sendResponse, language) => {
    await setProxyLanguage(language);
    return sendResponse();
  });

  onGetInternalSourceLanguage(async (sendResponse) => {
    return sendResponse(await getSourceLanguage());
  });

  onSetInternalSourceLanguage(async (sendResponse, language) => {
    await setSourceLanguage(language);
    return sendResponse();
  });

  onGetProxyLanguage(async (sendResponse) => {
    return sendResponse(await getProxyLanguage());
  });

  onSetProxyLanguage(async (sendResponse, language) => {
    await setProxyLanguage(language);
    return sendResponse();
  });

  onIsUserKnowsHowToAdd(async (sendResponse) => {
    const { userKnowsHowToAdd } = await chrome.storage.sync.get([
      'userKnowsHowToAdd',
    ]);
    return sendResponse(userKnowsHowToAdd ?? false);
  });

  onSetUserKnowsHowToAdd(async (sendResponse, value) => {
    await chrome.storage.sync.set({
      userKnowsHowToAdd: value,
    });
    return sendResponse();
  });

  console.info('The service worker has been registered.');
};
