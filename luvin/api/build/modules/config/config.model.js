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

var ConfigSchema = new Schema({
  ident: {
    type: Number,
    default: 1
  },
  banners: [{
    type: String
  }],
  slogan: {
    type: String
  },
  description: {
    type: String
  },
  ctaImage: {
    type: String
  },
  ctaTitle: {
    type: String
  },
  ctaDescription: {
    type: String
  },
  ctaUrl: {
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

var ConfigModel = _mongoose2.default.model('Config', ConfigSchema);

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
            return ConfigModel.find({}).lean();

          case 4:
            config = _context.sent;

            if (config.length) {
              _context.next = 8;
              break;
            }

            _context.next = 8;
            return new ConfigModel({
              banners: ['http://luvinhtml.ekipapi.com/wp-content/uploads/pexels-helena-lopes-696218.jpg', 'http://luvinhtml.ekipapi.com/wp-content/uploads/pexels-helena-lopes-696218.jpg', 'http://luvinhtml.ekipapi.com/wp-content/uploads/pexels-helena-lopes-696218.jpg'],
              slogan: 'Thưởng thức cuộc sống',
              description: 'Tất cả các sản phẩm rượu vang được lên men tự nhiên và có nồng độ cồn dưới 15 độ',
              ctaImage: 'http://luvinhtml.ekipapi.com/wp-content/uploads/cta1.jpg',
              ctaTitle: 'Rượu vang',
              ctaDescription: 'Món quà đặc biệt của thượng đế',
              ctaUrl: 'http://luvinhtml.ekipapi.com/'
            }).save();

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

exports.default = ConfigModel;