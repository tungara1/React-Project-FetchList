import { handleActions } from "redux-actions";
import { types } from "./actions";

const actionHandlers = {
  [types.GET_MOVIE_DETAILS]: (state) => ({
    ...state,
    loader: true,
  }),
  [types.GET_MOVIE_DETAILS_SUCCESS]: (state, { payload }) => ({
    ...state,
    loader: false,
    movies: [payload, ...state.movies],
  }),
  [types.GET_MOVIE_DETAILS_FAILED]: (state) => ({
    ...state,
    loader: false,
  }),
  [types.CLEAR_MOVIE_LIST]: (state, { payload }) => ({
    ...state,
    movies: [],
  }),
};

export default handleActions(actionHandlers, {
  loader: false,
  movies: [],
});
