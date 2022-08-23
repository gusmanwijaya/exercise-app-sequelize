import callApi from '../../configs/callApi';
import {HOST_API} from '../../configs/hostApi';

const ROOT_API = HOST_API.url;

export async function postTransaction(data) {
  const url = `${ROOT_API}/transactions/create`;
  return callApi({url, method: 'POST', data});
}

export async function destroyTransaction(id) {
  const url = `${ROOT_API}/transactions/destroy/${id}`;
  return callApi({url, method: 'DELETE'});
}

export async function getTransaction() {
  const url = `${ROOT_API}/transactions/get`;
  return callApi({url, method: 'GET'});
}

export async function getTransactionByStatus(status) {
  const url = `${ROOT_API}/transactions/get?status=${status}`;
  return callApi({url, method: 'GET'});
}

export async function getDetailTransaction(id) {
  const url = `${ROOT_API}/transactions/detail/${id}`;
  return callApi({url, method: 'GET'});
}

export async function cancelTransaction(data) {
  const url = `${ROOT_API}/transactions/cancel`;
  return callApi({url, method: 'POST', data});
}
