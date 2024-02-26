import express from 'express';

import Config from './modules/config';
import User from './modules/user';
import Auth from './modules/auth';
import Category from './modules/category';
import Product from './modules/product';
import Order from './modules/order';
import Review from './modules/review';
import Event from './modules/event';
import Post from './modules/post';
import Upload from './modules/upload';
import PageSetting from './modules/page-setting';
import Tasty from './modules/tasty';
import AboutUs from './modules/about-us';
import Voucher from './modules/voucher';
import Pos from './modules/pos';

import VnPay from './services/vnpay';

const app = express();

app.use('/config', Config);
app.use('/auth', Auth);
app.use('/user', User);
app.use('/category', Category);
app.use('/product', Product);
app.use('/order', Order);
app.use('/review', Review);
app.use('/event', Event);
app.use('/post', Post);
app.use('/page', PageSetting);
app.use('/create_payment_url', VnPay.createPaymentUrl);
app.use('/vnpay_return', VnPay.vnPayReturn);
app.use('/vnpay_ipn', VnPay.vnPayIPN);
app.use('/upload', Upload);
app.use('/tasty', Tasty);
app.use('/about-us', AboutUs);
app.use('/voucher', Voucher);
app.use('/pos', Pos);
// app.use((req, res) => res.status(404).json('No API route found'));

export default app;
