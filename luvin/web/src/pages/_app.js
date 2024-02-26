import App from "next/app";
import { compose } from "recompose";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import ScrollToTop from "react-scroll-to-top";
import "react-modal-video/css/modal-video.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import createStore from "../store";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

import { getUserInfo } from "../actions/auth";
import { getConfigs } from "../actions/configs";
import { getCategories } from "../actions/categories";

import withAuthSync from "../hocs/withAuthSync";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (ctx.req) {
      // server?
      ctx.store.dispatch(getConfigs());
      ctx.store.dispatch(getCategories());
      if (ctx.accessToken) {
        ctx.store.dispatch(getUserInfo(ctx.accessToken));
      }
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        {/* <Header /> */}
        <ToastContainer />
        <Component {...pageProps} />
        {/* <Footer /> */}
        <ScrollToTop smooth />
      </Provider>
    );
  }
}

export default compose(
  withRedux(createStore),
  withReduxSaga,
  withAuthSync
)(MyApp);
