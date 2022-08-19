import callApi from '../../configs/callApi';
import {HOST_API} from '../../configs/hostApi';

const ROOT_API = HOST_API.url;

export async function signUp(isFormData, data) {
  const url = `${ROOT_API}/users/sign-up`;
  return callApi({url, method: 'POST', isFormData, data});
}

export async function signIn(data) {
  const url = `${ROOT_API}/users/sign-in`;
  return callApi({url, method: 'POST', data});
}
