import { all } from "redux-saga/effects";
import es6promise from "es6-promise";

import AuthSaga from "./auth";
import ConfigsSaga from "./configs";
import CategoriesSaga from "./categories";
import ProductsSaga from "./products";
import ProductSaga from "./product";
import OrderSaga from "./order";
import SalesSaga from "./sales";
import EventsSaga from "./events";
import EventSaga from "./event";
import NewsSaga from "./news";
import NewSaga from "./new";
import FaqsSaga from "./faqs";
import FaqSaga from "./faq";
import VideosSaga from "./videos";
import FeedbackSaga from "./feedback";
import ForgotPasswordSaga from "./forgotPassword";
import SearchSaga from "./search";
import PageSaga from "./page";
import TastySaga from "./tasty";
import AboutUsSaga from "./aboutUs";

es6promise.polyfill();

export default function* rootSaga() {
  yield all([
    ConfigsSaga(),
    AuthSaga(),
    CategoriesSaga(),
    ProductsSaga(),
    ProductSaga(),
    OrderSaga(),
    SalesSaga(),
    EventsSaga(),
    EventSaga(),
    NewsSaga(),
    NewSaga(),
    FaqsSaga(),
    FaqSaga(),
    VideosSaga(),
    FeedbackSaga(),
    ForgotPasswordSaga(),
    SearchSaga(),
    PageSaga(),
    TastySaga(),
    AboutUsSaga(),
  ]);
}
