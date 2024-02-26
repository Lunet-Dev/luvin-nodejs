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

var _upload = require('./upload.manager');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  saveFile: function saveFile(req, res, next) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var processedFile, fileData, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              processedFile = req.file || {};
              fileData = {
                name: processedFile.originalname || '',
                path: processedFile.originalname || ''
              };
              _context.next = 5;
              return _upload2.default.saveFile(fileData);

            case 5:
              result = _context.sent;
              return _context.abrupt('return', res.status(200).json({ data: result }));

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(400).json({ message: _context.t0.message }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 9]]);
    }))();
  },
  saveFiles: function saveFiles(req, res, next) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var savedTasks, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              savedTasks = req.files.map(function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(processedFile) {
                  var fileData, result;
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          fileData = {
                            name: processedFile.originalname || '',
                            path: processedFile.originalname || ''
                          };
                          _context2.next = 3;
                          return _upload2.default.saveFile(fileData);

                        case 3:
                          result = _context2.sent;
                          return _context2.abrupt('return', result);

                        case 5:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this2);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
              _context3.next = 4;
              return Promise.all(savedTasks);

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
      }, _callee3, _this2, [[0, 8]]);
    }))();
  },
  deleteFile: function deleteFile(req, res, next) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var fileId, result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              fileId = req.params.fileId;
              _context4.next = 4;
              return _upload2.default.deleteFile(fileId);

            case 4:
              result = _context4.sent;
              return _context4.abrupt('return', res.status(200).json({ data: result }));

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(400).json({ message: _context4.t0.message }));

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this3, [[0, 8]]);
    }))();
  },
  findFiles: function findFiles(req, res, next) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var _req$query, limit, page, _ref2, _ref3, files, total;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _req$query = req.query, limit = _req$query.limit, page = _req$query.page;
              _context5.next = 4;
              return Promise.all([_upload2.default.findFiles(limit, page), _upload2.default.countFiles()]);

            case 4:
              _ref2 = _context5.sent;
              _ref3 = (0, _slicedToArray3.default)(_ref2, 2);
              files = _ref3[0];
              total = _ref3[1];
              return _context5.abrupt('return', res.status(200).json({ data: { files: files, total: total } }));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', res.status(400).json({ message: _context5.t0.message }));

            case 14:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this4, [[0, 11]]);
    }))();
  }
};