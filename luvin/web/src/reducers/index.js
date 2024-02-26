import { combineReducers } from "redux";

import authReducer from "./auth";
import configsReducer from "./configs";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import productReducer from "./product";
import cartReducer from "./cart";
import orderReducer from "./order";
import salesReducer from "./sales";
import eventsReducer from "./events";
import eventReducer from "./event";
import newsReducer from "./news";
import newReducer from "./new";
import faqsReducer from "./faqs";
import faqReducer from "./faq";
import videosReducer from "./videos";
import feedbackReducer from "./feedback";
import forgotPasswordReducer from "./forgotPassword";
import searchReducer from "./search";
import pageReducer from "./page";
import tastyReducer from "./tasty";
import aboutUsReducer from "./aboutUs";

export default function createReducer() {
  const rootReducer = combineReducers({
    auth: authReducer,
    configs: configsReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    sales: salesReducer,
    events: eventsReducer,
    event: eventReducer,
    news: newsReducer,
    new: newReducer,
    faqs: faqsReducer,
    faq: faqReducer,
    videos: videosReducer,
    feedback: feedbackReducer,
    forgotPassword: forgotPasswordReducer,
    search: searchReducer,
    page: pageReducer,
    tasty: tastyReducer,
    aboutUs: aboutUsReducer,
  });

  return rootReducer;
}
