import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from 'react-redux-form';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { DishesReducer } from "./DishesReducer";
import { CommentsReducer } from "./CommentsReducer";
import { LeadersReducer } from "./LeadersReducer";
import { PromotionsReducer } from "./PromotionsReducer";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: DishesReducer,
      comments: CommentsReducer,
      leaders: LeadersReducer,
      promotions: PromotionsReducer,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
