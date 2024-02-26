"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (params, whitelist) {
  var filtered = {};
  for (var key in params) {
    if (whitelist.indexOf(key) > -1) {
      filtered[key] = params[key];
    }
  }
  return filtered;
};