import axios from 'axios';

export const postRequest = (endpoint, body = {}) => {
  return axios.post(endpoint, body);
};

export const getRequest = (endpoint, queryParams = {}) => {
  return axios.get('endpoint', { params: queryParams });
};
