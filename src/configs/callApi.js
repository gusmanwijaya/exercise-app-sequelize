import axios from 'axios';
import {getData} from '../utils/asyncStorage';

export default async function callApi({url, method, isFormData, data, token}) {
  let headers = {};

  const getTokenLocalStorage = await getData('access-token');
  if (getTokenLocalStorage) {
    headers = {
      Authorization: `Bearer ${getTokenLocalStorage}`,
    };
  } else if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  if (data) {
    if (isFormData) {
      headers = {
        ...headers,
        'Content-Type': 'multipart/form-data',
      };
    } else {
      headers = {
        ...headers,
        'Content-Type': 'application/json',
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch(error => error.response);

  return response;
}
