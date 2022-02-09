import { COMMENTS } from "../shared/comments";
import * as ActionsType from './actions/ActionsType';

export const CommentsReducer = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionsType.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return state.concat(comment);

    default: 
      return state;
  }
};