import axios from 'axios';

export const postRequest = (endpoint, body = {}, options) => {
  return axios.post(endpoint, body, options);
};

export const getRequest = (endpoint, queryParams = {}) => {
  return axios.get('endpoint', { params: queryParams });
};
