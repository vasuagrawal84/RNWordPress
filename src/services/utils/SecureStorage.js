import SecureStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import StorageKeys from './StorageKeys';
import { Platform } from 'react-native';

if (Platform.OS === 'ios') {
  SecureStore.setResetOnAppUninstallTo(false);
}

const defaultOptions = {
  accessible: ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
};

const get = (key) => SecureStore.get(key);

const remove = (key) => SecureStore.remove(key);

const set = (key, value, options = defaultOptions) =>
  SecureStore.set(key, value, options);

const clear = async () => {
  try {
    await remove(StorageKeys.AUTH_TOKEN);
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
