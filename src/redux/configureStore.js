import { createStore } from 'redux';
import { Reducer, initialState } from './reducer/Reducer';

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
}