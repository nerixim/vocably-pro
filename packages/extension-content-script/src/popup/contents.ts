import { api } from '../api';

type Options = {
  popup: HTMLElement;
  phrase: string;
};

export type TearDown = () => void;

export const setContents = async ({
  popup,
  phrase,
}: Options): Promise<TearDown> => {
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const tearDown = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const setTranslation = () => {
    const translation = document.createElement('vocably-translation');
    translation.phrase = phrase;

    api.translate({ phrase }).then((translationResult) => {
      console.info('The word has been translated.', translationResult);
      translation.result = translationResult;
    });

    popup.innerHTML = '';
    popup.appendChild(translation);
  };

  if (await api.isLoggedIn()) {
    setTranslation();
    return tearDown;
  }

  const unauthorized = document.createElement('vocably-unauthorized');

  unauthorized.addEventListener('signIn', () => {
    const windowProxy = window.open(`${api.appBaseUrl}/hands-free`, '_blank');

    windowProxy.focus();

    intervalId = setInterval(async () => {
      if (await api.isLoggedIn()) {
        setTranslation();
        clearInterval(intervalId);
        intervalId = null;
      }
    }, 1000);
  });

  popup.innerHTML = '';
  popup.appendChild(unauthorized);

  return tearDown;
};
