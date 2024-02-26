'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _review = require('./review.model');

var _review2 = _interopRequireDefault(_review);

var _buildPaginationQuery = require('../../lib/build-pagination-query');

var _buildPaginationQuery2 = _interopRequireDefault(_buildPaginationQuery);

var _mailer = require('../../services/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createReview: function createReview(reviewData) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var review, reviewDetail;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return new _review2.default(reviewData).save();

            case 3:
              review = _context.sent;
              _context.next = 6;
              return _review2.default.findById({ _id: review._id }).populate('product').lean();

            case 6:
              reviewDetail = _context.sent;
              _context.next = 9;
              return (0, _mailer2.default)(process.env.EMAIL_ADMIN, 'review', null, reviewDetail);

            case 9:
              return _context.abrupt('return', review);

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);
              throw _context.t0;

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 12]]);
    }))();
  },
  findReviewsShowOnWeb: function findReviewsShowOnWeb() {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var query, reviews;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              query = _review2.default.find({ isShow: true }).populate('product').sort({ updatedAt: -1 });

              query = (0, _buildPaginationQuery2.default)(query, 5, 1);
              _context2.next = 5;
              return query.lean().exec();

            case 5:
              reviews = _context2.sent;
              return _context2.abrupt('return', reviews);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);
              throw _context2.t0;

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 9]]);
    }))();
  },
  findReviews: function findReviews(name, limit, page) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var query, reviews;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              query = _review2.default.find({}).populate('product').sort({ createdAt: -1 });

              query = (0, _buildPaginationQuery2.default)(query, limit, page);
              if (name) {
                query.or([{ name: new RegExp(name, 'i') }, { email: new RegExp(name, 'i') }, { title: new RegExp(name, 'i') }, { description: new RegExp(name, 'i') }]);
              }
              _context3.next = 6;
              return query.lean().exec();

            case 6:
              reviews = _context3.sent;
              return _context3.abrupt('return', reviews);

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
  countReview: function countReview(name) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var query, count;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              query = _review2.default.count();

              if (name) {
                query.or([{ name: new RegExp(name, 'i') }, { email: new RegExp(name, 'i') }, { title: new RegExp(name, 'i') }, { description: new RegExp(name, 'i') }]);
              }
              _context4.next = 5;
              return query.exec();

            case 5:
              count = _context4.sent;
              return _context4.abrupt('return', count);

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](0);
              throw _context4.t0;

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4, [[0, 9]]);
    }))();
  },
  updateReview: function updateReview(reviewId, reviewData) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var review;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _review2.default.findByIdAndUpdate(reviewId, { $set: reviewData }, { new: true });

            case 3:
              review = _context5.sent;
              return _context5.abrupt('return', review);

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](0);
              throw _context5.t0;

            case 10:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5, [[0, 7]]);
    }))();
  }
};