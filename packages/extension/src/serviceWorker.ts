import { registerExtensionStorage } from '@vocably/pontis';
import { registerServiceWorker } from '@vocably/extension-service-worker';

const storage = registerExtensionStorage('sync');

registerServiceWorker({
  auth: {
    region: process.env.AUTH_REGION,
    userPoolId: process.env.AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.AUTH_USER_POOL_WEB_CLIENT_ID,
    storage,
  },
  api: {
    baseUrl: process.env.API_BASE_URL,
    region: process.env.API_REGION,
    cardsBucket: process.env.API_CARDS_BUCKET,
  },
});

chrome.runtime.onInstalled.addListener(async () => {
  for (const cs of chrome.runtime.getManifest().content_scripts) {
    for (const tab of await chrome.tabs.query({ url: cs.matches })) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: cs.js,
      });
    }
  }
});
