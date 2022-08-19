import axios from 'axios';
import {getData} from '../utils/asyncStorage';

export default async function callApi({
  url,
  method,
  isFormData = false,
  data,
  token,
}) {
  let headers = {};

  const getTokenLocalStorage = await getData('token');

  if (getTokenLocalStorage) {
    headers = {
      Authorization: `Bearer ${getTokenLocalStorage}`,
      'Content-Type': 'application/json',
    };
  } else if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  }

  if (isFormData) {
    headers = {
      ...headers,
      'Content-Type': 'multipart/form-data',
    };
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch(error => error.response);

  return response;
}
