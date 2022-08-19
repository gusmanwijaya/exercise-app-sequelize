import callApi from '../../configs/callApi';
import {HOST_API} from '../../configs/hostApi';

const ROOT_API = HOST_API.url;

export async function getProfile(token) {
  const url = `${ROOT_API}/users/detail`;
  return callApi({url, method: 'GET', token});
}
