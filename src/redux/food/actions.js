import {
  ERROR_FOOD,
  GET_DETAIL_FOOD,
  GET_FOOD,
  SET_PAGE,
  GET_FOOD_NEW_TASTE,
  GET_FOOD_POPULAR,
  GET_FOOD_RECOMMENDED,
} from './types';
import {getFood, getDetailFood, getFoodByTypes} from '../../services/food';
import {setLoading} from '../loading/actions';

const setGetFood = (total_page, data) => {
  return {
    type: GET_FOOD,
    total_page,
    data,
  };
};

const setDetailFood = detail => {
  return {
    type: GET_DETAIL_FOOD,
    detail,
  };
};

const setPage = page => {
  return {
    type: SET_PAGE,
    page,
  };
};

const setErrorFood = error => {
  return {
    type: ERROR_FOOD,
    error,
  };
};

const setFoodNewTaste = newTaste => {
  return {
    type: GET_FOOD_NEW_TASTE,
    newTaste,
  };
};

const setFoodPopular = popular => {
  return {
    type: GET_FOOD_POPULAR,
    popular,
  };
};

const setFoodRecommended = recommended => {
  return {
    type: GET_FOOD_RECOMMENDED,
    recommended,
  };
};

const fetchFood = () => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));

    const params = {
      page: getState().foodReducers?.food?.page || 1,
      limit: getState().foodReducers?.food?.limit || 10,
    };

    const response = await getFood(params?.page, params?.limit);

    if (response?.data?.statusCode === 200) {
      dispatch(setLoading(false));
      dispatch(setGetFood(response?.data?.total_page, response?.data?.data));
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorFood(response));
    }
  };
};

const fetchFoodByTypes = types => {
  return async dispatch => {
    dispatch(setLoading(true));

    const response = await getFoodByTypes(types);

    if (response?.data?.statusCode === 200) {
      dispatch(setLoading(false));

      if (types === 'newTaste') {
        dispatch(setFoodNewTaste(response?.data?.data));
      }

      if (types === 'popular') {
        dispatch(setFoodPopular(response?.data?.data));
      }

      if (types === 'recommended') {
        dispatch(setFoodRecommended(response?.data?.data));
      }
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorFood(response));
    }
  };
};

const fetchDetailFood = id => {
  return async dispatch => {
    dispatch(setLoading(true));

    const response = await getDetailFood(id);
    if (response?.data?.statusCode === 200) {
      dispatch(setLoading(false));
      dispatch(setDetailFood(response?.data?.data));
    } else {
      dispatch(setLoading(false));
      dispatch(setErrorFood(response));
    }
  };
};

export {fetchFood, setPage, fetchDetailFood, fetchFoodByTypes};
