import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_VERIFICATION_ERROR,
} from '../constants/constants';
import { postRequest } from '../../services/utils/restRequest';
import SecureStorage from '../../services/utils/SecureStorage';
import { AUTH_TOKEN, USER } from '../../services/utils/StorageKey';

const loginEndpoint = 'https://js1.10up.com/wp-json/jwt-auth/v1/token';
const validateUserEndpoint =
  'https://js1.10up.com/wp-json/jwt-auth/v1/token/validate';

export const attemptLogin = (username, password, onSuccess) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    try {
      const response = await postRequest(loginEndpoint, { username, password });
      await SecureStorage.set(USER, username, response.data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        username,
        jwtToken: response.data.token,
      });

      onSuccess();
    } catch (err) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
};

export const verifyLogin = (onSuccess) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    try {
      const { username, password } = await SecureStorage.get(USER);

      await postRequest(
        validateUserEndpoint,
        {},
        {
          headers: { Authorization: `Bearer ${password}` },
        },
      );

      dispatch({
        type: LOGIN_SUCCESS,
        username,
        jwtToken: password,
      });

      onSuccess();
    } catch (e) {
      dispatch({
        type: LOGIN_VERIFICATION_ERROR,
      });
    }
  };
};

export const signOut = (onSuccess) => {
  return async (dispatch, getState) => {
    await SecureStorage.clear();

    onSuccess();
  };
};
