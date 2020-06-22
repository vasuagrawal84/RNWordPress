import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constants/constants';
import { postRequest } from '../../services/utils/restRequest';
import SecureStorage from '../../services/utils/SecureStorage';
import { AUTH_TOKEN, USER } from '../../services/utils/StorageKey';

const loginEndpoint = 'https://js1.10up.com/wp-json/jwt-auth/v1/token';

export const attemptLogin = (username, password, onSuccess) => {
  console.warn('!!!aala');
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    try {
      const response = await postRequest(loginEndpoint, { username, password });
      await SecureStorage.set(USER, AUTH_TOKEN, response.data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        username,
      });

      onSuccess();
    } catch (err) {
      console.warn('err', err);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
};
