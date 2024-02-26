import React, { Component } from "react";
import cookies from "next-cookies";

const TOKEN_COOKIE_KEY = "_tl";

/**
 * HOC lấy accessToken
 * @param {*} WrappedComponent
 */
const withAuthSync = (WrappedComponent) =>
  class extends Component {
    static async getInitialProps(props) {
      const allCookies = cookies(props.ctx);
      const accessToken = allCookies[TOKEN_COOKIE_KEY];
      props.ctx.accessToken = accessToken; // eslint-disable-line
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(props));

      return { ...componentProps, accessToken };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withAuthSync;
