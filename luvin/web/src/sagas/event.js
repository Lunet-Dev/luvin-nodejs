import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_EVENT, JOIN_EVENT } from "../constants/event";

import {
  getEventSuccess,
  getEventError,
  joinEventSuccess,
  joinEventError,
} from "../actions/event";

import Request from "../utils/request";

export function* handleJoinEvent(action) {
  const url = "/event/subscribe";
  try {
    const response = yield call(Request, url);
    yield put(joinEventSuccess(response.data));
  } catch (error) {
    yield put(joinEventError(error.message));
  }
}

export function* handleGetEvent(action) {
  const url = `/post/${action.eventSlug}`;
  try {
    const response = yield call(Request, url);
    yield put(getEventSuccess(response.data));
  } catch (error) {
    yield put(getEventError(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(GET_EVENT, handleGetEvent),
    yield takeLatest(JOIN_EVENT, handleJoinEvent),
  ]);
}
