import {
  BLOGS_LOADING,
  BLOGS_SUCCESS,
  BLOGS_ERROR,
} from '../constants/constants';

const defaultState = {
  loading: false,
  error: false,
  blogs: [],
};

// TODO: start recording errors from login journey for clearer error messages

export default (previousState = defaultState, action) => {
  switch (action.type) {
    case BLOGS_LOADING:
      return {
        ...previousState,
        loading: true,
        error: false,
      };
    case BLOGS_SUCCESS:
      return {
        ...previousState,
        blogs: action.blogs,
        loading: false,
      };
    case BLOGS_ERROR:
      return {
        ...previousState,
        blogs: [],
        error: true,
        loading: false,
      };
    default:
      return previousState;
  }
};
