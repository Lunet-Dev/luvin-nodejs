import { put, takeLatest, all, call } from "redux-saga/effects";
import { toast } from 'react-toastify';

import {
  LOGIN,
  REGISTER,
  GET_USER_INFO,
  LOGOUT,
  UPDATE_USER_INFO,
  UPDATE_PASSWORD,
} from "../constants/auth";

import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  getUserInfoSuccess,
  updateUserInfoSuccess,
  updateUserInfoError,
  updatePasswordSuccess,
  updatePasswordError,
} from "../actions/auth";

import Request from "../utils/request";
import Authendication from "../utils/authendication";

export function* handleLogin(action) {
  const url = "/auth/login";
  try {
    const response = yield call(Request, url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: action.phone, password: action.password }),
    });
    Authendication.saveAuthToCookie(response.data.token);
    yield put(loginSuccess(response.data.user));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

export function* handleRegister(action) {
  const url = "/auth/register";
  try {
    const response = yield call(Request, url, {
      method: "POST",
      body: JSON.stringify(action.registerInfo),
    });
    Authendication.saveAuthToCookie(response.data.token);
    toast.success('Đăng ký tài khoản thành công!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    yield put(registerSuccess(response.data.user));
  } catch (error) {
    yield put(registerError(error.message));
  }
}

export function* handleGetUserInfo(action) {
  const url = "/auth/me";
  try {
    const response = yield call(Request, url, {}, action.accessToken);
    yield put(getUserInfoSuccess(response.data));
  } catch (error) {
    // yield put(registerError(error.message));
  }
}

export function* handleLogout(action) {
  Authendication.logout();
}

export function* handleUpdateUserInfo(action) {
  try {
    const url = `/user/${action.userId}`;
    const response = yield call(Request, url, {
      method: "PUT",
      body: JSON.stringify(action.userInfo),
    });
    yield put(updateUserInfoSuccess(response.data));
  } catch (error) {
    yield put(updateUserInfoError(error.message));
  }
}

export function* handleUpdatePassword(action) {
  try {
    const url = "/auth/update-password";
    const response = yield call(Request, url, {
      method: "PUT",
      body: JSON.stringify(action.passwordData),
    });
    yield put(updatePasswordSuccess());
  } catch (error) {
    yield put(updatePasswordError(error.message));
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(LOGIN, handleLogin),
    yield takeLatest(REGISTER, handleRegister),
    yield takeLatest(GET_USER_INFO, handleGetUserInfo),
    yield takeLatest(LOGOUT, handleLogout),
    yield takeLatest(UPDATE_USER_INFO, handleUpdateUserInfo),
    yield takeLatest(UPDATE_PASSWORD, handleUpdatePassword),
  ]);
}
