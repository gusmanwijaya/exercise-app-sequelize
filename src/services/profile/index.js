import callApi from '../../configs/callApi';
import {HOST_API} from '../../configs/hostApi';

const ROOT_API = HOST_API.url;

export async function getProfile() {
  const url = `${ROOT_API}/users/detail`;
  return callApi({url, method: 'GET'});
}

export async function updateProfile(isFormData, data) {
  const url = `${ROOT_API}/users/update-profile`;
  return callApi({url, method: 'PUT', data, isFormData});
}
