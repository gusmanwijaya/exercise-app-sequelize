import callApi from '../../configs/callApi';
import {HOST_API} from '../../configs/hostApi';

const ROOT_API = HOST_API.url;

export async function getRefreshToken(user_id) {
  const url = `${ROOT_API}/refresh-tokens/get?user_id=${user_id}`;
  return callApi({url, method: 'GET'});
}

export async function getNewAccessToken(data) {
  const url = `${ROOT_API}/refresh-tokens/new-access-token`;
  return callApi({url, method: 'POST', data});
}

export async function destroyRefreshToken(user_id) {
  const url = `${ROOT_API}/refresh-tokens/destroy/${user_id}`;
  return callApi({url, method: 'DELETE'});
}
