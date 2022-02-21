import * as ActionTypes from "../actions/ActionTypes";

export const StaffsReducer = (
  state = {
    isLoading: true,
    errorMess: null,
    staffs: [],
  },
  action
) => {
  switch (action.type) {
    // add single staff from form
    case ActionTypes.ADD_STAFF:
      let staff = action.payload;
      return {
        ...state,
        staffs: state.staffs.concat(staff),
      };

    case ActionTypes.DEL_STAFF:
      let staffId = action.payload;
      return {
        ...state,
        staffs: state.staffs.filter(staff => staff.id !== staffId),
      };

    case ActionTypes.ADD_STAFFS:
      return {
        ...state,
        isLoading: false,
        errorMess: null,
        staffs: action.payload,
      };

    case ActionTypes.STAFFS_LOADING:
      return { ...state, isLoading: true, errorMess: null, staffs: [] };

    case ActionTypes.STAFFS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMess: action.payload,
        staffs: [],
      };

    default:
      return state;
  }
};
