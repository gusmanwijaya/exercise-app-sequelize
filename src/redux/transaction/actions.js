import {
  GET_TRANSACTION,
  GET_DETAIL_TRANSACTION,
  ERROR_TRANSACTION,
  GET_TRANSACTION_CANCEL,
  GET_TRANSACTION_PENDING,
  GET_TRANSACTION_SETTLEMENT,
} from './types';
import {
  getTransaction,
  getDetailTransaction,
  getTransactionByStatus,
} from '../../services/transaction';
import {setLoading} from '../loading/actions';

const setGetTransaction = data => {
  return {
    type: GET_TRANSACTION,
    data,
  };
};

const setGetDetailTransaction = detail => {
  return {
    type: GET_DETAIL_TRANSACTION,
    detail,
  };
};

const setGetTransactionPending = pending => {
  return {
    type: GET_TRANSACTION_PENDING,
    pending,
  };
};

const setGetTransactionCancel = cancel => {
  return {
    type: GET_TRANSACTION_CANCEL,
    cancel,
  };
};

const setGetTransactionSettlement = settlement => {
  return {
    type: GET_TRANSACTION_SETTLEMENT,
    settlement,
  };
};

const setErrorTransaction = error => {
  return {
    type: ERROR_TRANSACTION,
    error,
  };
};

const fetchTransaction = () => {
  return async dispatch => {
    dispatch(setLoading(true));

    const response = await getTransaction();
    if (response?.data?.statusCode === 200) {
      dispatch(setLoading(false));
      dispatch(setGetTransaction(response?.data?.data));
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorTransaction(response));
    }
  };
};

const fetchTransactionByStatus = status => {
  return async dispatch => {
    dispatch(setLoading(true));

    const response = await getTransactionByStatus(status);
    if (response?.data?.statusCode === 200) {
      dispatch(setLoading(false));

      if (status === 'pending') {
        dispatch(setGetTransactionPending(response?.data?.data));
      }

      if (status === 'cancel') {
        dispatch(setGetTransactionCancel(response?.data?.data));
      }

      if (status === 'settlement') {
        dispatch(setGetTransactionSettlement(response?.data?.data));
      }
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorTransaction(response));
    }
  };
};

const fetchDetailTransaction = id => {
  return async dispatch => {
    dispatch(setLoading(true));

    const response = await getDetailTransaction(id);
    if (response?.data?.statusCode === 200) {
      dispatch(setLoading(false));
      dispatch(setGetDetailTransaction(response?.data?.data));
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorTransaction(response));
    }
  };
};

export {fetchTransaction, fetchDetailTransaction, fetchTransactionByStatus};
