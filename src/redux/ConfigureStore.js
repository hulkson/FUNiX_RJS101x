import { createStore, combineReducers } from 'redux';
import { DishesReducer } from './DishesReducer';
import { CommentsReducer } from './CommentsReducer';
import { LeadersReducer } from './LeadersReducer';
import { PromotionsReducer } from './PromotionsReducer';

export const ConfigureStore = () => {
  const store = createStore(combineReducers({
    dishes: DishesReducer,
    comments: CommentsReducer,
    leaders: LeadersReducer,
    promotions: PromotionsReducer
  }));

  return store;
}