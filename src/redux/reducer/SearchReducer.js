import { SEARCH_STAFFS } from '../actions/types';

export const initialState = {
  searchText: '',
  staffs: [],
  loading: false,
  staff: []
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_STAFFS:
      return {
        ...state,
        searchText: action.payload,
        loading: false
      }
      break;
    default:
      return state;
  }
};
