import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constants/constants';
import { postRequest } from '../../services/utils/restRequest';

const loginEndpoint = 'https://js1.10up.com/wp-json/jwt-auth/v1/token';

export const attemptLogin = (username, password) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    try {
      await postRequest(loginEndpoint, { username, password });
      dispatch({
        type: LOGIN_SUCCESS,
        username: username,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
};
