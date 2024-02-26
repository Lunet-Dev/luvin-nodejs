import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import Content from "../components/Layout/Content";
import Loading from "../components/UI/Loading";

import { login as loginAction } from "../actions/auth";

const authStateSelector = (state) => state.auth;

const regexp = /^[0-9\b]+$/;
function index(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { userInfo, login, register } = useSelector(authStateSelector);

  const [state, setState] = useState({
    loginInfo: {
      phone: "",
      password: "",
    },
  });

  const handleChangeLoginInfo = (prop, value) => {
    setState({
      ...state,
      loginInfo: {
        ...state.loginInfo,
        [prop]: value,
      },
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginAction(state.loginInfo.phone, state.loginInfo.password));
  };

  useEffect(() => {
    if (userInfo._id) {
      router.back();
    }
  }, userInfo._id);

  return (
    <Content className="page-template-default page page-id-10 wp-custom-logo theme-hello-elementor woocommerce-account woocommerce-page woocommerce-no-js elementor-default elementor-kit-76">
      <Head>
        <title>Đăng nhập - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Đăng nhập - Luvin" />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta
          property="og:image"
          content="https://luvin.com.vn/images/banner.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      {login.loading && <Loading />}
      <main
        className="site-main post-10 page type-page status-publish hentry"
        role="main"
      >
        <header className="page-header">
          <h1 className="entry-title">Tài khoản</h1>
        </header>
        <div className="page-content">
          <div className="woocommerce">
            <div className="woocommerce-notices-wrapper"></div>
            <h2>Đăng nhập</h2>
            {login.errorMessage && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {login.errorMessage}
              </p>
            )}
            <form
              className="woocommerce-form woocommerce-form-register register"
              onSubmit={handleLogin}
            >
              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_phone">
                  Số điện thoại&nbsp;<span className="required">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  name="phone"
                  id="reg_phone"
                  autoComplete="phone"
                  value={state.loginInfo.phone}
                  onChange={(event) => {
                    let telephone = event.target.value;

                    // if value is not blank, then test the regex
                    if (telephone === "" || regexp.test(telephone)) {
                      handleChangeLoginInfo("phone", telephone);
                    }
                    // handleChangeLoginInfo("phone", event.target.value)
                  }}
                />
              </p>

              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="reg_email">
                  Mật khẩu&nbsp;<span className="required">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  name="password"
                  id="reg_password"
                  autoComplete="password"
                  value={state.loginInfo.password}
                  onChange={(event) =>
                    handleChangeLoginInfo("password", event.target.value)
                  }
                />
              </p>

              <div className="woocommerce-privacy-policy-text">
                <p>
                  Thông tin cá nhân của bạn sẽ được sử dụng để tăng trải nghiệm
                  sử dụng website, quản lý truy cập vào tài khoản của bạn, và
                  cho các mục đích cụ thể khác được mô tả trong{" "}
                  <a
                    href="../cham-soc-khach-hang/chinh-sach-bao-mat/index.html"
                    className="woocommerce-privacy-policy-link"
                    target="_blank"
                  >
                    chính sách riêng tư
                  </a>
                  .
                </p>
              </div>
              <p className="woocommerce-form-row form-row">
                <button
                  type="submit"
                  className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                  name="register"
                  value="Đăng nhập"
                >
                  Đăng nhập
                </button>
              </p>
            </form>
            <div
              className="woocommerce-privacy-policy-text"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p>
                Chưa có tài khoản?{" "}
                <Link href="/dang-ky">
                  <a className="woocommerce-privacy-policy-link">Đăng ký</a>
                </Link>
              </p>
              <p>
                <Link href="/tai-khoan/quen-mat-khau">
                  <a className="woocommerce-privacy-policy-link">
                    Quên mật khẩu?
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Content>
  );
}

index.propTypes = {};

export default index;
