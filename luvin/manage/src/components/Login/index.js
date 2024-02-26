/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Card } from 'antd';

import './style.css';

const LoginComponent = () => {
  const onClickLoginBtn = () => {
    window.location.href = '/auth/google';
  };

  return (
    <div className="login-page">
      <Card
        title="Login"
        bordered={false}
        style={{ width: 500, marginTop: '-200px' }}
      >
        <div className="google-btn" onClick={onClickLoginBtn}>
          <div className="google-icon-wrapper">
            <img
              alt=""
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginComponent;
