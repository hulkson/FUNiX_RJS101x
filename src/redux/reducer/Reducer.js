import { STAFFS, DEPARTMENTS } from "../../shared/staffs";

export const initialState = {
  staffs: STAFFS,
  departments: DEPARTMENTS,
  selectedStaff: null,
};

export const Reducer = (state = initialState, action) => {
  if (!localStorage.getItem("staffs")) {
    localStorage.setItem("staffs", JSON.stringify(STAFFS));
  }

  state.staffs = JSON.parse(localStorage.getItem("staffs"));

  return state;
};
