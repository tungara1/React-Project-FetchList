import { createAction } from "redux-actions";

// actions types
const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
const GET_MOVIE_DETAILS_SUCCESS = "GET_MOVIE_DETAILS_SUCCESS";
const GET_MOVIE_DETAILS_FAILED = "GET_MOVIE_DETAILS_FAILED";

const CLEAR_MOVIE_LIST = "CLEAR_MOVIE_LIST";

// actions methods

const getMovieDetails = createAction(GET_MOVIE_DETAILS);
const getMovieDetailsSuccess = createAction(GET_MOVIE_DETAILS_SUCCESS);
const getMovieDetailsFailed = createAction(GET_MOVIE_DETAILS_FAILED);

const clearMovieList = createAction(CLEAR_MOVIE_LIST);

export const actions = {
  getMovieDetails,
  getMovieDetailsSuccess,
  getMovieDetailsFailed,
  clearMovieList,
};

export const types = {
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILED,
  CLEAR_MOVIE_LIST,
};
