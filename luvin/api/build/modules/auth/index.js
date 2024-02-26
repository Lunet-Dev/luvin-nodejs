'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./auth.controller');

var _auth2 = _interopRequireDefault(_auth);

var _authenticate = require('../../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/login', _auth2.default.login);

router.post('/register', _auth2.default.register);

router.post('/forgot-password', _auth2.default.forgotPassword);
router.post('/forgot-password/confirmation', _auth2.default.forgotPasswordConfirmation);

router.get('/me', _authenticate2.default, _auth2.default.getCurrentUser);

router.put('/update-password', _authenticate2.default, _auth2.default.updatePassword);

exports.default = router;