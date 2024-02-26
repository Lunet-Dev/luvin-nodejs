'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PageSettingSchema = new Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  type: {
    type: String
  }
}, {
  collation: {
    locale: 'vi@collation=traditional',
    strength: 1, // so sánh string bỏ qua diacritics, ví dụ Tú và Tu là như nhau
    caseLevel: true, // sắp xếp string không tính đến hoa thường, ví dụ "A a B b" thay vì "a b A B" (chỉ có ý nghĩa khi strength < 3)
    normalization: true, // chuẩn hóa Unicode
    numericOrdering: true // sắp xếp "số_10" ra sau "số_2" thay vì "số_2" đứng sau "số_10"
  },
  timestamps: true
});

var PageSettingModel = _mongoose2.default.model('PageSetting', PageSettingSchema);

_mongoose2.default.connection.on('connected', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(err) {
    var config;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!err) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', console.error(err));

          case 2:
            _context.next = 4;
            return PageSettingModel.find({}).lean();

          case 4:
            config = _context.sent;

            if (config.length) {
              _context.next = 8;
              break;
            }

            _context.next = 8;
            return PageSettingModel.insertMany([{
              name: 'Chính sách bảo mật',
              content: '',
              type: 'privacy-policy'
            }, {
              name: 'Chỉnh sách đổi trả',
              content: '',
              type: 'return-policy'
            }, {
              name: 'Chỉnh sách giao nhận',
              content: '',
              type: 'forwarding-policy'
            }, {
              name: 'Hướng dẫn mua hàng',
              content: '',
              type: 'shopping-guide'
            }, {
              name: 'Điều khoản chung',
              content: '',
              type: 'dieu-khoan-chung'
            }]);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

exports.default = PageSettingModel;