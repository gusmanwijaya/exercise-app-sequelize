import {
  GET_REFRESH_TOKEN,
  ERROR_REFRESH_TOKEN,
  SET_ACCESS_TOKEN,
} from './types';

const initialState = {
  accessToken: '',
  refreshToken: '',
  error: {},
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };

    case GET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.refreshToken,
      };

    case ERROR_REFRESH_TOKEN:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducers;
