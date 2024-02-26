import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import Content from "../components/Layout/Content";
import Loading from "../components/UI/Loading";

import { register as registerAction } from "../actions/auth";

const authStateSelector = (state) => state.auth;

const regexp = /^[0-9\b]+$/;
function index(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { userInfo, login, register } = useSelector(authStateSelector);

  const [state, setState] = useState({
    registerInfo: {
      phone: "",
      email: "",
      password: "",
      name: "",
      address: "",
    },
    step: 1,
  });

  const handleChangeRegisterInfo = (prop, value) => {
    setState({
      ...state,
      registerInfo: {
        ...state.registerInfo,
        [prop]: value,
      },
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (state.step === 1) {
      setState({ ...state, step: 2 });
    } else {
      dispatch(registerAction(state.registerInfo));
    }
  };

  useEffect(() => {
    if (userInfo._id) {
      router.push("/tai-khoan");
    }
  }, userInfo._id);

  return (
    <Content className="page-template-default page page-id-10 wp-custom-logo theme-hello-elementor woocommerce-account woocommerce-page woocommerce-no-js elementor-default elementor-kit-76">
      <Head>
        <title>Đăng ký - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Đăng ký - Luvin" />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta
          property="og:image"
          content="https://luvin.com.vn/images/banner.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      {register.loading && <Loading />}
      <main
        className="site-main post-10 page type-page status-publish hentry"
        role="main"
      >
        <div className="page-content">
          <div className="woocommerce">
            <div className="woocommerce-notices-wrapper"></div>
            <h2>Đăng ký</h2>
            {register.errorMessage && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {register.errorMessage}
              </p>
            )}

            {state.step === 1 && (
              <form
                className="woocommerce-form woocommerce-form-register register"
                onSubmit={handleRegister}
              >
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_phone">
                    Số điện thoại&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="phone"
                    id="reg_phone"
                    autoComplete="phone"
                    value={state.registerInfo.phone}
                    onChange={(event) => {
                      let telephone = event.target.value;

                      // if value is not blank, then test the regex
                      if (telephone === "" || regexp.test(telephone)) {
                        handleChangeRegisterInfo("phone", telephone);
                      }
                    }}
                  />
                </p>

                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_email">
                    Địa chỉ email&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="email"
                    id="reg_email"
                    autoComplete="email"
                    value={state.registerInfo.email}
                    onChange={(event) =>
                      handleChangeRegisterInfo("email", event.target.value)
                    }
                  />
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_password">
                    Mật khẩu&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="password"
                    id="reg_password"
                    autoComplete="password"
                    value={state.registerInfo.password}
                    onChange={(event) =>
                      handleChangeRegisterInfo("password", event.target.value)
                    }
                  />
                </p>
                <div className="woocommerce-privacy-policy-text">
                  <p>
                    Thông tin cá nhân của bạn sẽ được sử dụng để tăng trải
                    nghiệm sử dụng website, quản lý truy cập vào tài khoản của
                    bạn, và cho các mục đích cụ thể khác được mô tả trong{" "}
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
                    className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                    name="register"
                    value="Tiếp theo"
                    style={{ float: "right" }}
                    type="submit"
                  >
                    Tiếp theo
                  </button>
                </p>
              </form>
            )}

            {state.step === 2 && (
              <form onSubmit={handleRegister}>
                {/* <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_password">
                    Mật khẩu&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="password"
                    id="reg_password"
                    autoComplete="password"
                    value={state.registerInfo.password}
                    onChange={(event) =>
                      handleChangeRegisterInfo("password", event.target.value)
                    }
                  />
                </p> */}

                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_name">
                    Tên&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="name"
                    id="reg_name"
                    autoComplete="name"
                    value={state.registerInfo.name}
                    onChange={(event) =>
                      handleChangeRegisterInfo("name", event.target.value)
                    }
                  />
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_address">
                    Địa chỉ&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="address"
                    id="reg_address"
                    autoComplete="address"
                    value={state.registerInfo.address}
                    onChange={(event) =>
                      handleChangeRegisterInfo("address", event.target.value)
                    }
                  />
                </p>
                <div className="woocommerce-privacy-policy-text">
                  <p>
                    Thông tin cá nhân của bạn sẽ được sử dụng để tăng trải
                    nghiệm sử dụng website, quản lý truy cập vào tài khoản của
                    bạn, và cho các mục đích cụ thể khác được mô tả trong{" "}
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
                    className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                    name="register"
                    value="Tiếp theo"
                    onClick={() => setState({ ...state, step: 1 })}
                  >
                    Quay lại
                  </button>
                  <button
                    type="submit"
                    className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                    name="register"
                    value="Tiếp theo"
                    style={{
                      float: "right",
                      color: "#fff",
                      border: "1px solid #c36",
                      backgroundColor: "#c36",
                    }}
                  >
                    Đăng ký
                  </button>
                </p>
              </form>
            )}

            <div className="woocommerce-privacy-policy-text">
              <p>
                Đã có tài khoản?{" "}
                <Link href="/dang-nhap">
                  <a className="woocommerce-privacy-policy-link">Đăng nhập</a>
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
