import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_FEEDBACK, SEND_FEEDBACK } from "../constants/feedback";

import {
  getFeedbackSuccess,
  getFeedbackError,
  sendFeedbackSuccess,
  sendFeedbackError,
} from "../actions/feedback";

import Request from "../utils/request";

export function* handleGetFeedback(action) {
  const url = "/review";
  try {
    const response = yield call(Request, url);
    yield put(getFeedbackSuccess(response.data));
  } catch (error) {
    yield put(getFeedbackError(error.message));
  }
}

export function* handleSendFeedback(action) {
  const url = "/review";
  try {
    const response = yield call(Request, url, {
      method: "POST",
      body: JSON.stringify(action.feedbackData),
    });
    yield put(sendFeedbackSuccess(response.data));
  } catch (error) {
    yield put(sendFeedbackError(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(GET_FEEDBACK, handleGetFeedback),
    yield takeLatest(SEND_FEEDBACK, handleSendFeedback),
  ]);
}
