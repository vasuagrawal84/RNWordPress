import {
  PAGES_LOADING,
  PAGES_SUCCESS,
  PAGES_ERROR,
} from '../constants/constants';
import { getRequest } from '../../services/utils/restRequest';

export const getPages = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: PAGES_LOADING,
    });

    try {
      const response = await getRequest(
        'https://js1.10up.com/wp-json/wp/v2/pages',
      );

      dispatch({
        type: PAGES_SUCCESS,
        pages: response.data,
      });
    } catch (e) {
      console.warn('error', e);
      dispatch({
        type: PAGES_ERROR,
      });
    }
  };
};
