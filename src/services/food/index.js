import callApi from '../../configs/callApi';
import {HOST_API} from '../../configs/hostApi';

const ROOT_API = HOST_API.url;

export async function getFood(page, limit) {
  const url = `${ROOT_API}/foods/get?page=${page}&limit=${limit}`;
  return callApi({url, method: 'GET'});
}

export async function getFoodByTypes(types) {
  const url = `${ROOT_API}/foods/get-by-types?types=${types}`;
  return callApi({url, method: 'GET'});
}

export async function getDetailFood(id) {
  const url = `${ROOT_API}/foods/detail/${id}`;
  return callApi({url, method: 'GET'});
}
