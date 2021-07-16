import { call, put, takeLatest } from "redux-saga/effects";
import api from "../api";
import { actions, types } from "./actions";

const getAllPeople = function* getAllPeople({ payload }) {
  try {
    const { data } = yield call(api.getAllPeople);

    if (data) {
      yield put(actions.getAllPeopleSuccess(data));
    } else {
      yield put(actions.getAllPeopleFailed());
    }
  } catch (err) {
    yield put(actions.getAllPeopleFailed());
  }
};
export default function* sagas() {
  yield takeLatest(types.GET_ALL_PEOPLE, getAllPeople);
}
