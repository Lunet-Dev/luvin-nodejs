import { put, takeLatest, all, call } from "redux-saga/effects";

import { GET_VIDEOS } from "../constants/videos";

import { getVideosSuccess, getVideosError } from "../actions/videos";

import Request from "../utils/request";

export function* handleGetVideos(action) {
  const url = `/post?limit=${action.limit}&page=${action.page}&type=video`;
  try {
    const response = yield call(Request, url);
    yield put(getVideosSuccess(response.data.total, response.data.posts));
  } catch (error) {
    yield put(getVideosError(error.message));
  }
}

export default function* rootSaga() {
  yield all([yield takeLatest(GET_VIDEOS, handleGetVideos)]);
}
