import * as ActionTypes from "../actions/ActionTypes";

export const DepartmentsReducer = (
  state = {
    isLoading: true,
    errorMess: null,
    depts: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPTS:
      return {
        ...state,
        isLoading: false,
        errorMess: null,
        depts: action.payload,
      };

    case ActionTypes.DEPTS_LOADING:
      return { ...state, isLoading: true, errorMess: null, depts: [] };

    case ActionTypes.DEPTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMess: action.payload,
        depts: [],
      };

    default:
      return state;
  }
}