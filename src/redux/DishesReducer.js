import * as ActionsType from "./actions/ActionsType";

export const DishesReducer = (
  state = {
    isLoading: true,
    error: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionsType.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        error: null,
        dishes: action.payload
      };
    case ActionsType.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        dishes: []
      };
    case ActionsType.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        dishes: []
      };
    default:
      return state;
  }
};
