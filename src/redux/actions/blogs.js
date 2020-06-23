import {
  BLOGS_LOADING,
  BLOGS_SUCCESS,
  BLOGS_ERROR,
} from '../constants/constants';
import { getRequest } from '../../services/utils/restRequest';

export const getBlogs = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: BLOGS_LOADING,
    });

    try {
      const response = await getRequest(
        'https://js1.10up.com/wp-json/wp/v2/posts',
      );

      dispatch({
        type: BLOGS_SUCCESS,
        blogs: response.data,
      });
    } catch (e) {
      console.warn('error', e);
      dispatch({
        type: BLOGS_ERROR,
      });
    }
  };
};
