import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { StaffsReducer } from './reducer/StaffReducer';
import { DepartmentsReducer } from './reducer/DepartmentsReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialForm } from './Form';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: StaffsReducer,
      departments: DepartmentsReducer,
      ...createForms({
        addForm: InitialForm,
      })
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
}