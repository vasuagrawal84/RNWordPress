import {
  PAGES_LOADING,
  PAGES_SUCCESS,
  PAGES_ERROR,
} from '../constants/constants';

const defaultState = {
  loading: false,
  error: false,
  pages: [],
};

// TODO: start recording errors from login journey for clearer error messages

export default (previousState = defaultState, action) => {
  switch (action.type) {
    case PAGES_LOADING:
      return {
        ...previousState,
        loading: true,
        error: false,
      };
    case PAGES_SUCCESS:
      return {
        ...previousState,
        pages: action.pages,
        loading: false,
      };
    case PAGES_ERROR:
      return {
        ...previousState,
        pages: [],
        error: true,
        loading: false,
      };
    default:
      return previousState;
  }
};
