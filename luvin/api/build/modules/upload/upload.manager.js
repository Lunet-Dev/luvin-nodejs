'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _file = require('./file.model');

var _file2 = _interopRequireDefault(_file);

var _buildPaginationQuery = require('../../lib/build-pagination-query');

var _buildPaginationQuery2 = _interopRequireDefault(_buildPaginationQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  saveFile: function saveFile(fileData) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var file;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return new _file2.default(fileData).save();

            case 3:
              file = _context.sent;
              return _context.abrupt('return', file);

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);
              throw _context.t0;

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }))();
  },
  deleteFile: function deleteFile(fileId) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var file, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _file2.default.findById(fileId);

            case 3:
              file = _context2.sent;
              _context2.next = 6;
              return _fs2.default.unlinkSync(_path2.default.resolve(__dirname, '..', '..', 'public', file.path));

            case 6:
              _context2.next = 8;
              return _file2.default.findByIdAndRemove(fileId);

            case 8:
              result = _context2.sent;
              return _context2.abrupt('return', result);

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](0);
              throw _context2.t0;

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 12]]);
    }))();
  },
  findFiles: function findFiles(limit, page) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var conditions, query, files;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              conditions = {};
              query = _file2.default.find(conditions).sort({ createdAt: -1 });

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context3.next = 6;
              return query.lean().exec();

            case 6:
              files = _context3.sent;
              return _context3.abrupt('return', files);

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3['catch'](0);
              throw _context3.t0;

            case 13:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 10]]);
    }))();
  },
  countFiles: function countFiles() {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var count;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _file2.default.count({});

            case 3:
              count = _context4.sent;
              return _context4.abrupt('return', count);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);
              throw _context4.t0;

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 7]]);
    }))();
  }
};