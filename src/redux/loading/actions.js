import {SET_LOADING} from './types';

const setLoading = isLoading => {
  return {
    type: SET_LOADING,
    isLoading,
  };
};

export {setLoading};
