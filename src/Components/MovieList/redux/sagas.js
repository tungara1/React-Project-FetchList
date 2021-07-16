import { call, put, takeEvery } from "redux-saga/effects";
import api from "../api";
import { actions, types } from "./actions";

const getMovieDetails = function* getMovieDetails({ payload }) {
  try {
    const { data } = yield call(api.getMovieDetails, payload);
    if (data) {
      yield put(actions.getMovieDetailsSuccess(data));
    } else {
      yield put(actions.getMovieDetailsFailed());
    }
  } catch (err) {
    yield put(actions.getMovieDetailsFailed());
  }
};
export default function* sagas() {
  yield takeEvery(types.GET_MOVIE_DETAILS, getMovieDetails);
}
