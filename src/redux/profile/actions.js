import {ERROR_PROFILE, GET_PROFILE} from './types';
import {setLoading} from '../loading/actions';
import {getProfile} from '../../services/profile';

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
    dispatch(setLoading(true));

    const response = await getProfile();
    if (response?.data?.statusCode === 200) {
      dispatch(setLoading(false));
      dispatch(setGetProfile(response?.data?.data));
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorProfile(response));
    }
  };
};

export {fetchProfile};
