import {
  ERROR_REFRESH_TOKEN,
  GET_REFRESH_TOKEN,
  SET_ACCESS_TOKEN,
} from './types';
import {setLoading} from '../loading/actions';
import {getRefreshToken} from '../../services/refresh-token';

const setAccessToken = accessToken => {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken,
  };
};

const setRefreshToken = refreshToken => {
  return {
    type: GET_REFRESH_TOKEN,
    refreshToken,
  };
};

const setErrorRefreshToken = error => {
  return {
    type: ERROR_REFRESH_TOKEN,
    error,
  };
};

const fetchRefreshToken = user_id => {
  return async dispatch => {
    dispatch(setLoading(true));

    const response = await getRefreshToken(user_id);
    if (response?.data?.statusCode === 200) {
      dispatch(setLoading(false));
      dispatch(setRefreshToken(response?.data?.data?.refresh_token));
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorRefreshToken(response));
    }
  };
};

export {fetchRefreshToken, setAccessToken};
