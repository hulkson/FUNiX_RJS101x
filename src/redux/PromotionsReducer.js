import * as ActionsType from './actions/ActionsType';

export const PromotionsReducer = (
  state = {
    isLoading: true,
    error: null,
    promotions: [],
  },
  action
) => {
  switch (action.type) {
    case ActionsType.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        error: null,
        promotions: action.payload,
      };
    case ActionsType.PROMOS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        promotions: [],
      };
    case ActionsType.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        promotions: [],
      };

    default:
      return state;
  }
};
