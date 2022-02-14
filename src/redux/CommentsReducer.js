import * as ActionsType from './actions/ActionsType';

export const CommentsReducer = (state = {comments: [], error: null}, action) => {
  switch (action.type) {
    case ActionsType.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        error: null,
        comments: action.payload
      };

    case ActionsType.COMMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        comments: []
      };

    case ActionsType.ADD_COMMENT:
      let comment = action.payload;
      return {...state, comments: state.comments.concat(comment)};

    default: 
      return state;
  }
};