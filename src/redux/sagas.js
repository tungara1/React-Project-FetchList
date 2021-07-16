import peopleSagas from "Components/CharacterInput/redux/sagas";
import movieSagas from "Components/MovieList/redux/sagas";
import { all, fork, select, takeEvery } from "redux-saga/effects";

function* watchAndLog() {
  yield takeEvery("*", function* logger(action) {
    const state = yield select();
    console.debug("action", action);
    console.debug("state after", state);
  });
}

export default function* root() {
  yield all([fork(watchAndLog), fork(peopleSagas), fork(movieSagas)]);
}
