import {GET_PROFILE, ERROR_PROFILE} from './types';

const initialState = {
  data: {},
  error: {},
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        data: action.data,
      };

    case ERROR_PROFILE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducers;
