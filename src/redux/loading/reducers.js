import {SET_LOADING} from './types';

const initialState = {
  isLoading: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};

export default reducers;
