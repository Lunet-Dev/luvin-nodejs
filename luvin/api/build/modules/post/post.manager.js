'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slugify = require('slugify');

var _slugify2 = _interopRequireDefault(_slugify);

var _post = require('./post.model');

var _post2 = _interopRequireDefault(_post);

var _buildPaginationQuery = require('../../lib/build-pagination-query');

var _buildPaginationQuery2 = _interopRequireDefault(_buildPaginationQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createPost: function createPost(postData) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var post;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return new _post2.default(postData).save();

            case 3:
              post = _context.sent;
              return _context.abrupt('return', post);

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
  updatePost: function updatePost(slug, postData) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var post;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (postData.name) {
                postData.slug = (0, _slugify2.default)(postData.name.toLowerCase(), '-');
              }
              _context2.next = 4;
              return _post2.default.findOneAndUpdate({ slug: slug }, { $set: postData }, { new: true }).lean();

            case 4:
              post = _context2.sent;
              return _context2.abrupt('return', post);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](0);
              throw _context2.t0;

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 8]]);
    }))();
  },
  deletePost: function deletePost(slug) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _post2.default.remove({ slug: slug });

            case 3:
              result = _context3.sent;
              return _context3.abrupt('return', result);

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);
              throw _context3.t0;

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 7]]);
    }))();
  },
  findPosts: function findPosts(limit, page, type, name) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var conditions, query, posts;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              conditions = {};

              if (type) {
                conditions.type = type;
              }
              query = _post2.default.find(conditions).sort({ createdAt: -1 });

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              if (name) {
                query.or([{ title: new RegExp(name, 'i') }, { desctiption: new RegExp(name, 'i') }]);
              }
              _context4.next = 8;
              return query.lean().exec();

            case 8:
              posts = _context4.sent;
              return _context4.abrupt('return', posts);

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4['catch'](0);
              throw _context4.t0;

            case 15:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 12]]);
    }))();
  },
  countPosts: function countPosts(type, name) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var conditions, query, count;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              conditions = {};

              if (type) {
                conditions.type = type;
              }
              query = _post2.default.count(conditions);

              if (name) {
                query.or([{ title: new RegExp(name, 'i') }, { desctiption: new RegExp(name, 'i') }]);
              }
              _context5.next = 7;
              return query.exec();

            case 7:
              count = _context5.sent;
              return _context5.abrupt('return', count);

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5['catch'](0);
              throw _context5.t0;

            case 14:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5, [[0, 11]]);
    }))();
  },
  findPostBySlug: function findPostBySlug(slug) {
    var _this6 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
      var now, post, isOccurred;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              now = new Date().getTime();
              _context6.next = 4;
              return _post2.default.findOne({ slug: slug }).lean();

            case 4:
              post = _context6.sent;
              isOccurred = post.endedAt <= now;
              return _context6.abrupt('return', (0, _extends3.default)({}, post, { isOccurred: isOccurred }));

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6['catch'](0);
              throw _context6.t0;

            case 12:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6, [[0, 9]]);
    }))();
  },
  findUpcommingEvents: function findUpcommingEvents() {
    var _this7 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      var now, query, events;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              now = new Date().getTime();
              query = _post2.default.find({
                startedAt: { $gt: now },
                type: 'event'
              }).sort({
                createdAt: -1
              });

              query = (0, _buildPaginationQuery2.default)(query, 6, 1);
              _context7.next = 6;
              return query.lean().exec();

            case 6:
              events = _context7.sent;
              return _context7.abrupt('return', events);

            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7['catch'](0);
              throw _context7.t0;

            case 13:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this7, [[0, 10]]);
    }))();
  },
  findOccurredEvents: function findOccurredEvents(limit, page, month) {
    var _this8 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      var now, conditions, query, events;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              now = new Date().getTime();
              conditions = { type: 'event', endedAt: { $lt: now } };
              // if (month) {
              //   conditions.
              // }
              // TODO: find by time

              query = _post2.default.find(conditions).sort({ createdAt: -1 });

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              _context8.next = 7;
              return query.lean().exec();

            case 7:
              events = _context8.sent;
              return _context8.abrupt('return', events);

            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8['catch'](0);
              throw _context8.t0;

            case 14:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this8, [[0, 11]]);
    }))();
  },
  countOccurredEvents: function countOccurredEvents() {
    var _this9 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
      var now, conditions, count;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              now = new Date().getTime();
              conditions = { type: 'event', endedAt: { $lt: now } };
              // if (month) {
              //   conditions.
              // }
              // TODO: find by time

              _context9.next = 5;
              return _post2.default.count(conditions);

            case 5:
              count = _context9.sent;
              return _context9.abrupt('return', count);

            case 9:
              _context9.prev = 9;
              _context9.t0 = _context9['catch'](0);
              throw _context9.t0;

            case 12:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this9, [[0, 9]]);
    }))();
  }
};