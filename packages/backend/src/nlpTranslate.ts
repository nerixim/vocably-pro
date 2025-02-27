import { NLPLanguage, Result } from '@vocably/model';
import { request } from './utils/request';

export type NlpTranslate = {
  source: string;
  sourceLanguage: NLPLanguage;
  target: string;
  targetLanguage: NLPLanguage;
};

export const nlpTranslate = async (
  source: string,
  sourceLanguage: NLPLanguage,
  targetLanguage: NLPLanguage
): Promise<Result<NlpTranslate>> => {
  if (sourceLanguage === targetLanguage) {
    return {
      success: true,
      value: {
        source,
        sourceLanguage,
        targetLanguage,
        target: source,
      },
    };
  }

  try {
    const requestOptions = {
      host: process.env.NLP_TRANSLATION_HOST,
      path: `/v1/translate?${new URLSearchParams({
        text: source,
        from: sourceLanguage,
        to: targetLanguage,
      }).toString()}`,
      headers: {
        'X-RapidAPI-Host': process.env.NLP_TRANSLATION_HOST,
        'X-RapidAPI-Key': process.env.NLP_TRANSLATION_KEY,
      },
    };

    const result = await request(requestOptions);

    if (result.success === false) {
      return {
        ...result,
        errorCode: 'NLP_TRANSLATION_UNSUCCESSFUL_FETCH',
      };
    }

    const searchResult: any = JSON.parse(result.value);

    if (
      searchResult.translated_text === undefined ||
      searchResult.translated_text[targetLanguage] === undefined
    ) {
      return {
        success: false,
        errorCode: 'NLP_TRANSLATION_MISSING_TRANSLATED_TEXT',
        reason: 'translated_text is not found in the result object',
        extra: searchResult,
      };
    }

    return {
      success: true,
      value: {
        source,
        sourceLanguage,
        targetLanguage,
        target: searchResult.translated_text[targetLanguage],
      },
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'NLP_TRANSLATION_UNCAUGHT_ERROR',
      reason: `An unhandled error while fetching data from NLP Translation.`,
      extra: e,
    };
  }
};
