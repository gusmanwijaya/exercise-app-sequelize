import {ERROR_PROFILE, GET_PROFILE} from './types';
import {getProfile} from '../../services/profile';
import debounce from 'debounce-promise';
import {getData} from '../../utils/asyncStorage';

const debouncedGetProfile = debounce(getProfile, 1000);

const setGetProfile = data => {
  return {
    type: GET_PROFILE,
    data,
  };
};

const setErrorProfile = error => {
  return {
    type: ERROR_PROFILE,
    error,
  };
};

const fetchProfile = () => {
  return async dispatch => {
    const token = await getData('token');

    const response = await debouncedGetProfile(token);
    if (response?.data?.statusCode === 200) {
      dispatch(setGetProfile(response?.data?.data));
    } else {
      dispatch(setErrorProfile(response));
    }
  };
};

export {fetchProfile};
