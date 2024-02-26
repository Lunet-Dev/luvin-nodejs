'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _post = require('./post.manager');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createPost: function createPost(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var postData, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              postData = req.body;
              _context.next = 4;
              return _post2.default.createPost(postData);

            case 4:
              result = _context.sent;
              return _context.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(400).json({ message: _context.t0.message }));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 8]]);
    }))();
  },
  updatePost: function updatePost(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var postSlug, postData, result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              postSlug = req.params.postSlug;
              postData = req.body;
              _context2.next = 5;
              return _post2.default.updatePost(postSlug, postData);

            case 5:
              result = _context2.sent;
              return _context2.abrupt('return', res.status(200).json({ data: result }));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).json({ message: _context2.t0.message }));

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 9]]);
    }))();
  },
  deletePost: function deletePost(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var postSlug, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              postSlug = req.params.postSlug;
              _context3.next = 4;
              return _post2.default.deletePost(postSlug);

            case 4:
              result = _context3.sent;
              return _context3.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(400).json({ message: _context3.t0.message }));

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 8]]);
    }))();
  },
  getPosts: function getPosts(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var _req$query, type, limit, page, name, _ref, _ref2, posts, count;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _req$query = req.query, type = _req$query.type, limit = _req$query.limit, page = _req$query.page, name = _req$query.name;
              _context4.next = 4;
              return Promise.all([_post2.default.findPosts(limit, page, type, name), _post2.default.countPosts(type, name)]);

            case 4:
              _ref = _context4.sent;
              _ref2 = (0, _slicedToArray3.default)(_ref, 2);
              posts = _ref2[0];
              count = _ref2[1];
              return _context4.abrupt('return', res.status(200).json({ data: { total: count, posts: posts } }));

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(400).json({ message: _context4.t0.message }));

            case 14:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 11]]);
    }))();
  },
  getPost: function getPost(req, res, next) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var postSlug, result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              postSlug = req.params.postSlug;
              _context5.next = 4;
              return _post2.default.findPostBySlug(postSlug);

            case 4:
              result = _context5.sent;
              return _context5.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', res.status(400).json({ message: _context5.t0.message }));

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5, [[0, 8]]);
    }))();
  },
  getUpcommingEvents: function getUpcommingEvents(req, res, next) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var result;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _post2.default.findUpcommingEvents();

            case 3:
              result = _context6.sent;
              return _context6.abrupt('return', res.status(200).json({ data: result }));

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6['catch'](0);
              return _context6.abrupt('return', res.status(400).json({ message: _context6.t0.message }));

            case 10:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6, [[0, 7]]);
    }))();
  },
  getOccurredEvents: function getOccurredEvents(req, res, next) {
    var _this7 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var _req$query2, limit, page, month, _ref3, _ref4, events, count;

      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _req$query2 = req.query, limit = _req$query2.limit, page = _req$query2.page, month = _req$query2.month;
              _context7.next = 4;
              return Promise.all([_post2.default.findOccurredEvents(limit, page, month), _post2.default.countOccurredEvents(limit, page, month)]);

            case 4:
              _ref3 = _context7.sent;
              _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
              events = _ref4[0];
              count = _ref4[1];
              return _context7.abrupt('return', res.status(200).json({ data: { total: count, events: events } }));

            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7['catch'](0);
              return _context7.abrupt('return', res.status(400).json({ message: _context7.t0.message }));

            case 14:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7, [[0, 11]]);
    }))();
  }
};