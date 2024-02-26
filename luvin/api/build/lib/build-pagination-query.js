"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryBuilder) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return queryBuilder.limit(parseInt(limit, 10)).skip((parseInt(page, 10) - 1) * parseInt(limit, 10));
};