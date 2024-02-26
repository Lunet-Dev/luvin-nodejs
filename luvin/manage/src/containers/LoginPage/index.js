import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import includes from 'lodash/includes';
import { useSetRecoilState } from 'recoil';

import authState from '../../atoms/auth';

import { login } from '../../apis/auth';

import { USER_ROLES } from '../../configs';
import Authendication from '../../utils/authendication';

function LoginPage(props) {
  const setAuthState = useSetRecoilState(authState);

  const [state, setState] = useState({
    phone: '',
    password: '',
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        phone: state.phone,
        password: state.password,
      });
      if (response.data.user) {
        if (!includes(USER_ROLES, response.data.user.role)) {
          toastr['error'](
            'Tài khoản của bạn không được phép truy cập trang này'
          );
          return;
        }
        Authendication.saveAuthToCookie(response.data.token);
        setAuthState(response.data.user);
      }
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  return (
    <>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-soft-primary">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Luvin dashboard.</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      <img
                        src="https://themesbrand.com/skote/layouts/vertical/assets/images/profile-img.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div>
                    <a href="index.html">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src="/assets/images/arrows.png"
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2">
                    <form className="form-horizontal" onSubmit={handleLogin}>
                      <div className="form-group">
                        <label for="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter username"
                          value={state.phone}
                          onChange={(event) =>
                            setState({ ...state, phone: event.target.value })
                          }
                        />
                      </div>

                      <div className="form-group">
                        <label for="userpassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                          value={state.password}
                          onChange={(event) =>
                            setState({ ...state, password: event.target.value })
                          }
                        />
                      </div>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlInline"
                        />
                        <label
                          className="custom-control-label"
                          for="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      {/* <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="javascript::void()"
                              className="social-list-item bg-primary text-white border-primary"
                            >
                              <i className="mdi mdi-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="javascript::void()"
                              className="social-list-item bg-info text-white border-info"
                            >
                              <i className="mdi mdi-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="javascript::void()"
                              className="social-list-item bg-danger text-white border-danger"
                            >
                              <i className="mdi mdi-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 text-center">
                        <a href="auth-recoverpw.html" className="text-muted">
                          <i className="mdi mdi-lock mr-1"></i> Forgot your
                          password?
                        </a>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="mt-5 text-center">
                <div>
                  <p>
                    Don't have an account ?{' '}
                    <a
                      href="auth-register.html"
                      className="font-weight-medium text-primary"
                    >
                      {' '}
                      Signup now{' '}
                    </a>{' '}
                  </p>
                  <p>
                    © 2020 Skote. Crafted with{' '}
                    <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
