import { StorageHelper } from '@aws-amplify/core';
import { sendMessage } from './send-message';

export class ExtensionStorage {
  private localStorage = new StorageHelper().getStorage();
  private syncPromise: Promise<void> | null = null;

  constructor() {}

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
    sendMessage('storage.setItem', { key, value });
  }

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
    sendMessage('storage.removeItem', { key });
  }

  clear() {
    this.localStorage.clear();
    sendMessage('storage.clear');
  }

  sync() {
    if (this.syncPromise) {
      return this.syncPromise;
    }

    this.syncPromise = sendMessage<Record<string, string>>(
      'storage.getAll'
    ).then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        this.localStorage.setItem(key, value);
      });
    });

    return this.syncPromise;
  }
}
