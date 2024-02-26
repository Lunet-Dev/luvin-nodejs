import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Content from "../../components/Layout/Content";
import Loading from "../../components/UI/Loading";

import { forgotPassword as forgotPasswordAction } from "../../actions/forgotPassword";

const authStateSelector = (state) => state.auth;
const forgotPasswordStateSelector = (state) => state.forgotPassword;

function ForgotPassword(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useSelector(authStateSelector);
  const [state, setState] = useState({
    username: "",
  });
  const { forgotPassword } = useSelector(forgotPasswordStateSelector);

  useEffect(() => {
    if (userInfo._id) {
      router.push("/tai-khoan");
    }
  }, [userInfo._id]);

  const handleForgotPassword = (event) => {
    event.preventDefault();
    dispatch(forgotPasswordAction(state.username));
  };

  return (
    <Content className="page-template-default page page-id-10 wp-custom-logo theme-hello-elementor woocommerce-account woocommerce-page woocommerce-lost-password woocommerce-no-js elementor-default elementor-kit-76">
      <Head>
        <title>Quên mật khẩu - Luvin</title>
        <meta
          name="description"
          content="Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quên mật khẩu - Luvin" />
        <meta property="og:url" content="https://luvin.com.vn" />
        <meta property="og:site_name" content="Luvin" />
        <meta
          property="og:image"
          content="https://luvin.com.vn/images/banner.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      {forgotPassword.loading && <Loading />}

      <main
        className="site-main post-10 page type-page status-publish hentry"
        role="main"
      >
        <header className="page-header">
          <h1 className="entry-title">Quên mật khẩu</h1>
        </header>
        <div className="page-content">
          <div className="woocommerce">
            <div className="woocommerce-notices-wrapper"></div>
            <form
              className="woocommerce-ResetPassword lost_reset_password"
              onSubmit={handleForgotPassword}
            >
              <p>
                Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email.
                Bạn sẽ nhận được một liên kết tạo mật khẩu mới qua email.
              </p>
              <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                <label for="user_login">Tên đăng nhập hoặc email</label>
                <input
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  type="text"
                  name="user_login"
                  id="user_login"
                  autocomplete="username"
                  value={state.username}
                  onChange={(event) =>
                    setState({ ...state, username: event.target.value })
                  }
                />
              </p>

              <div className="clear"></div>

              <p className="woocommerce-form-row form-row">
                <button
                  type="submit"
                  className="woocommerce-Button button"
                  value="Đặt lại mật khẩu"
                >
                  Đặt lại mật khẩu
                </button>
              </p>

              {forgotPassword.success && (
                <p style={{ color: "green", fontSize: "14px" }}>
                  Yêu cầu đặt lại mật khẩu thành công! Vui lòng kiểm tra email
                  và làm theo hướng dẫn
                </p>
              )}
              {forgotPassword.errorMessage && (
                <p style={{ color: "red", fontSize: "14px" }}>
                  {forgotPassword.errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </Content>
  );
}

ForgotPassword.propTypes = {};

export default ForgotPassword;
