import { registerContentScript } from '../src';

registerContentScript({
  api: {
    appBaseUrl: 'http://localhost:8030',
    isLoggedIn: () =>
      Promise.resolve(
        (document.getElementById('isLoggedIn') as HTMLInputElement).checked
      ),
    analyze: (payload) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            JSON.parse(
              (document.getElementById('response') as HTMLTextAreaElement).value
            )
          );
        }, parseInt((document.getElementById('delay') as HTMLInputElement).value));
      }),
    cleanUp: () => Promise.resolve({ success: true, value: null }),
  },
}).then();
