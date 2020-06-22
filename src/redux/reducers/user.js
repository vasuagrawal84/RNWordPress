import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constants/constants';

const defaultState = {
  username: null,
  loading: false,
  error: true,
  jwtToken: null,
};

// TODO: start recording errors from login journey for clearer error messages

export default (previousState = defaultState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...previousState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...previousState,
        loading: false,
        username: action.username,
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
