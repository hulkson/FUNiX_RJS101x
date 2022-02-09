import * as ActionsType from './ActionsType';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionsType.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});