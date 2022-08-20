import {
  GET_FOOD,
  GET_DETAIL_FOOD,
  ERROR_FOOD,
  SET_PAGE,
  GET_FOOD_NEW_TASTE,
  GET_FOOD_POPULAR,
  GET_FOOD_RECOMMENDED,
} from './types';

const initialState = {
  food: {
    page: 1,
    limit: 10,
    total_page: 1,
    data: [],
  },
  foodByTypes: {
    newTaste: [],
    popular: [],
    recommended: [],
  },
  detail: {},
  error: {},
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD:
      return {
        ...state,
        food: {
          ...state.food,
          total_page: action.total_page,
          data: action.data,
        },
      };

    case GET_DETAIL_FOOD:
      return {
        ...state,
        detail: action.detail,
      };

    case SET_PAGE:
      return {
        ...state,
        food: {
          ...state.food,
          page: action.page,
        },
      };

    case GET_FOOD_NEW_TASTE:
      return {
        ...state,
        foodByTypes: {
          ...state.foodByTypes,
          newTaste: action.newTaste,
        },
      };

    case GET_FOOD_POPULAR:
      return {
        ...state,
        foodByTypes: {
          ...state.foodByTypes,
          popular: action.popular,
        },
      };

    case GET_FOOD_RECOMMENDED:
      return {
        ...state,
        foodByTypes: {
          ...state.foodByTypes,
          recommended: action.recommended,
        },
      };

    case ERROR_FOOD:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducers;
