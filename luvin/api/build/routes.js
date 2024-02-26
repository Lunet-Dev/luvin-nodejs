'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./modules/config');

var _config2 = _interopRequireDefault(_config);

var _user = require('./modules/user');

var _user2 = _interopRequireDefault(_user);

var _auth = require('./modules/auth');

var _auth2 = _interopRequireDefault(_auth);

var _category = require('./modules/category');

var _category2 = _interopRequireDefault(_category);

var _product = require('./modules/product');

var _product2 = _interopRequireDefault(_product);

var _order = require('./modules/order');

var _order2 = _interopRequireDefault(_order);

var _review = require('./modules/review');

var _review2 = _interopRequireDefault(_review);

var _event = require('./modules/event');

var _event2 = _interopRequireDefault(_event);

var _post = require('./modules/post');

var _post2 = _interopRequireDefault(_post);

var _upload = require('./modules/upload');

var _upload2 = _interopRequireDefault(_upload);

var _pageSetting = require('./modules/page-setting');

var _pageSetting2 = _interopRequireDefault(_pageSetting);

var _tasty = require('./modules/tasty');

var _tasty2 = _interopRequireDefault(_tasty);

var _aboutUs = require('./modules/about-us');

var _aboutUs2 = _interopRequireDefault(_aboutUs);

var _voucher = require('./modules/voucher');

var _voucher2 = _interopRequireDefault(_voucher);

var _pos = require('./modules/pos');

var _pos2 = _interopRequireDefault(_pos);

var _vnpay = require('./services/vnpay');

var _vnpay2 = _interopRequireDefault(_vnpay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/config', _config2.default);
app.use('/auth', _auth2.default);
app.use('/user', _user2.default);
app.use('/category', _category2.default);
app.use('/product', _product2.default);
app.use('/order', _order2.default);
app.use('/review', _review2.default);
app.use('/event', _event2.default);
app.use('/post', _post2.default);
app.use('/page', _pageSetting2.default);
app.use('/create_payment_url', _vnpay2.default.createPaymentUrl);
app.use('/vnpay_return', _vnpay2.default.vnPayReturn);
app.use('/vnpay_ipn', _vnpay2.default.vnPayIPN);
app.use('/upload', _upload2.default);
app.use('/tasty', _tasty2.default);
app.use('/about-us', _aboutUs2.default);
app.use('/voucher', _voucher2.default);
app.use('/pos', _pos2.default);
// app.use((req, res) => res.status(404).json('No API route found'));

exports.default = app;