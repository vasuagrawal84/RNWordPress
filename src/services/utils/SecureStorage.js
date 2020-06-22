import * as Keychain from 'react-native-keychain';
import StorageKeys from './StorageKey';

const get = (storeName) => Keychain.getInternetCredentials(storeName);

const remove = (storeName) => Keychain.resetInternetCredentials(storeName);

const set = (storeName, key, value, options) =>
  Keychain.setInternetCredentials(storeName, key, value, options);

const clear = async () => {
  try {
    await remove('USER');
  } catch (e) {
    // doNothing, it means the key has already been removed.
  }
};

export default {
  clear,
  get,
  remove,
  set,
};
