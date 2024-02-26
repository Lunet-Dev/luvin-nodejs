'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _keys = require('./config/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var database = _keys2.default.database;


_mongoose2.default.Promise = global.Promise;

_mongoose2.default.set('useCreateIndex', true);
_mongoose2.default.connect(database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

_mongoose2.default.connection.on('connected', function () {
  console.log('==> %s MongoDB connection established!');
});
_mongoose2.default.connection.on('error', function (error) {
  console.log('==> %s MongoDB connection error. Please make sure MongoDB is running.');
  console.error(error);
  process.exit();
});