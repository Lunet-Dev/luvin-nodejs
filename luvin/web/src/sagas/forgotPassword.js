import { put, takeLatest, all, call } from "redux-saga/effects";

import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_CONFIRMATION,
} from "../constants/forgotPassword";

import {
  forgotPasswordSuccess,
  forgotPasswordError,
  forgotPasswordConfirmationSuccess,
  forgotPasswordConfirmationError,
} from "../actions/forgotPassword";

import { loginSuccess } from "../actions/auth";

import Request from "../utils/request";
import Authendication from "../utils/authendication";

export function* handleForgotPassword(action) {
  const url = "/auth/forgot-password";
  try {
    const response = yield call(Request, url, {
      method: "POST",
      body: JSON.stringify({ username: action.username }),
    });
    yield put(forgotPasswordSuccess(response.data));
  } catch (error) {
    yield put(forgotPasswordError(error.message));
  }
}

export function* handleForgotPasswordConfirmation(action) {
  const url = "/auth/forgot-password/confirmation";
  try {
    const response = yield call(Request, url, {
      method: "POST",
      body: JSON.stringify({
        token: action.token,
        password: action.password,
      }),
    });
    Authendication.saveAuthToCookie(response.data.token);
    yield put(loginSuccess(response.data.user));
    yield put(forgotPasswordConfirmationSuccess());
  } catch (error) {
    yield put(forgotPasswordConfirmationError(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(FORGOT_PASSWORD, handleForgotPassword),
    yield takeLatest(
      FORGOT_PASSWORD_CONFIRMATION,
      handleForgotPasswordConfirmation
    ),
  ]);
}
