import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../../shared/baseUrl";

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));

  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)));
};

export const fetchDepts = () => (dispatch) => {
  dispatch(deptsLoading(true));

  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((staffs) => dispatch(addDepts(staffs)));
};

export const fetchSalary = () => (dispatch) => {
  dispatch(salaryLoading(true));

  return fetch(baseUrl + "staffsSalary")
    .then((response) => response.json())
    .then((salary) => dispatch(addSalary(salary)));
};

// staffs relate actions
export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = (errorMess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errorMess,
});

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

export const addStaff = (staff) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staff,
});

export const postStaff = (
  name,
  doB,
  salaryScale,
  startDate,
  departmentId,
  annualLeave,
  overTime,
) => (dispatch) => {
  const newStaff = {
    name: name,
    doB: doB,
    startDate: startDate,
    departmentId: departmentId,
    salaryScale: salaryScale,
    annualLeave: annualLeave,
    overTime: overTime,
    image: "/asset/images/alberto.png",
  }
  return fetch(baseUrl + 'staffs', {
    method: 'POST',
    body: JSON.stringify(newStaff),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
  })
  .then(
    (response) => {
      if (response.ok) {
        return response;
      } else {
        let error = new Error(
          "Error " + response.status + ": " + response.statusText
        );
        error.response = response;
        throw error;
      }
    },
    (error) => {
      let errmess = new Error(error.message);
      throw errmess;
    }
  )
  .then((response) => response.json())
  .then((response) => dispatch(fetchStaffs()))
  .catch((error) => {
    alert("Your staff could not be posted\nError: " + error.message);
  });
};

export const delStaff = (staffId) => (dispatch) => {
  return fetch(baseUrl + "staffs/" + staffId, {
    method: 'DELETE',
    payload: staffId,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
  .then(
    (response) => {
      if (response.ok) {
        return response;
      } else {
        let error = new Error(
          "Error " + response.status + ": " + response.statusText
        );
        error.response = response;
        throw error;
      }
    },
    (error) => {
      let errmess = new Error(error.message);
      throw errmess;
    }
  )
  .then((response) => response.json())
  .then((response) => dispatch(fetchStaffs()))
  .catch((error) => {
    alert("Your staff could not be delete\nError: " + error.message);
  });
};

//departments relate actions
export const deptsLoading = () => ({
  type: ActionTypes.DEPTS_LOADING,
});

export const deptsFailed = (errorMess) => ({
  type: ActionTypes.DEPTS_FAILED,
  payload: errorMess,
});

export const addDepts = (staffs) => ({
  type: ActionTypes.ADD_DEPTS,
  payload: staffs,
});

//staffs salary relate actions
export const salaryLoading = () => ({
  type: ActionTypes.SALARY_LOADING,
});

export const salaryFailed = (errorMess) => ({
  type: ActionTypes.SALARY_FAILED,
  payload: errorMess,
});

export const addSalary = (salary) => ({
  type: ActionTypes.ADD_SALARY,
  payload: salary,
});
