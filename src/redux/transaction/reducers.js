import {
  GET_TRANSACTION,
  GET_DETAIL_TRANSACTION,
  ERROR_TRANSACTION,
  GET_TRANSACTION_PENDING,
  GET_TRANSACTION_SETTLEMENT,
  GET_TRANSACTION_CANCEL,
} from './types';

const initialState = {
  data: [],
  detail: {},
  transactionByStatus: {
    pending: [],
    settlement: [],
    cancel: [],
  },
  error: {},
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION:
      return {
        ...state,
        data: action.data,
      };

    case GET_DETAIL_TRANSACTION:
      return {
        ...state,
        detail: action.detail,
      };

    case GET_TRANSACTION_PENDING:
      return {
        ...state,
        transactionByStatus: {
          ...state.transactionByStatus,
          pending: action.pending,
        },
      };

    case GET_TRANSACTION_SETTLEMENT:
      return {
        ...state,
        transactionByStatus: {
          ...state.transactionByStatus,
          settlement: action.settlement,
        },
      };

    case GET_TRANSACTION_CANCEL:
      return {
        ...state,
        transactionByStatus: {
          ...state.transactionByStatus,
          cancel: action.cancel,
        },
      };

    case ERROR_TRANSACTION:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducers;
