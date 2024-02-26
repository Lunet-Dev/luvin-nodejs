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

var _review = require('./review.manager');

var _review2 = _interopRequireDefault(_review);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createReview: function createReview(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var reviewData, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              reviewData = req.body;
              _context.next = 4;
              return _review2.default.createReview(reviewData);

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
  getReviews: function getReviews(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _review2.default.findReviewsShowOnWeb();

            case 3:
              result = _context2.sent;
              return _context2.abrupt('return', res.status(200).json({ data: result }));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(400).json({ message: _context2.t0.message }));

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 7]]);
    }))();
  },
  getAllReviews: function getAllReviews(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _req$query, limit, page, name, _ref, _ref2, reviews, count;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _req$query = req.query, limit = _req$query.limit, page = _req$query.page, name = _req$query.name;
              _context3.next = 4;
              return Promise.all([_review2.default.findReviews(name, limit, page), _review2.default.countReview(name)]);

            case 4:
              _ref = _context3.sent;
              _ref2 = (0, _slicedToArray3.default)(_ref, 2);
              reviews = _ref2[0];
              count = _ref2[1];
              return _context3.abrupt('return', res.status(200).json({
                data: {
                  total: count,
                  reviews: reviews
                }
              }));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(400).json({ message: _context3.t0.message }));

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3, [[0, 11]]);
    }))();
  },
  updateReview: function updateReview(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var reviewId, reviewData, result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              reviewId = req.params.reviewId;
              reviewData = req.body;
              _context4.next = 5;
              return _review2.default.updateReview(reviewId, reviewData);

            case 5:
              result = _context4.sent;
              return _context4.abrupt('return', res.status(200).json({ data: result }));

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(400).json({ message: _context4.t0.message }));

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 9]]);
    }))();
  }
};