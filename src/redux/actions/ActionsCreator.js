import * as ActionsType from './ActionsType';
import { DISHES } from "../../shared/dishes";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionsType.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionsType.DISHES_LOADING
})

export const dishesFailed = (error) => ({
  type: ActionsType.DISHES_FAILED,
  payload: error
});

export const addDishes = (dishes) => ({
  type: ActionsType.ADD_DISHES,
  payload: dishes
});