'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = accessControl;

var _values = require('lodash/values');

var _values2 = _interopRequireDefault(_values);

var _authenticate = require('./authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _constants = require('../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRoles = (0, _values2.default)(_constants.USER_ROLES);

function accessControl(role) {
  if (!role) {
    throw new Error('Provide a role.');
  }

  var requiredRoleIndex = userRoles.indexOf(role);

  if (requiredRoleIndex < 0) {
    throw new Error('Not a valid role.');
  }

  return function (req, res, next) {
    return (0, _authenticate2.default)(req, res, function (err) {
      var currentRoleIndex = userRoles.indexOf(req.currentUser.role);

      if (err || !req.currentUser || currentRoleIndex < requiredRoleIndex) {
        res.sendStatus(403);
        return;
      }

      next();
    });
  };
}