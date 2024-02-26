import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_OCCURRED_EVENTS, GET_UPCOMMING_EVENTS } from "../constants/events";

import {
  getUpcommingEventsSuccess,
  getUpcommingEventsError,
  getOccurredEventsSuccess,
  getOccurredEventsError,
} from "../actions/events";

import Request from "../utils/request";

export function* handleGetUpcommingEvents(action) {
  const url = "/post/upcomming";
  try {
    const response = yield call(Request, url);
    yield put(getUpcommingEventsSuccess(response.data));
  } catch (error) {
    yield put(getUpcommingEventsError(error.message));
  }
}

export function* handleGetOccurredEvents(action) {
  const url = `/post/occurred?limit=${action.limit}&page=${action.page}&month=${action.month}`;
  try {
    const response = yield call(Request, url);
    yield put(
      getOccurredEventsSuccess(response.data.total, response.data.events)
    );
  } catch (error) {
    yield put(getOccurredEventsError(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(GET_UPCOMMING_EVENTS, handleGetUpcommingEvents),
    yield takeLatest(GET_OCCURRED_EVENTS, handleGetOccurredEvents),
  ]);
}
