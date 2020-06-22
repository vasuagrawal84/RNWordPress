import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_VERIFICATION_ERROR,
} from '../constants/constants';

const defaultState = {
  username: null,
  loading: false,
  error: false,
  jwtToken: null,
};

// TODO: start recording errors from login journey for clearer error messages

export default (previousState = defaultState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...previousState,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...previousState,
        loading: false,
        username: action.username,
        jwtToken: action.jwtToken,
      };
    case LOGIN_VERIFICATION_ERROR:
      return {
        ...previousState,
        loading: false,
        error: false,
      };
    case LOGIN_ERROR:
      return {
        ...previousState,
        loading: false,
        username: null,
        error: true,
      };
    default:
      return previousState;
  }
};
