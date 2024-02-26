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
var TastySchema = new Schema({
  ident: {
    type: Number,
    default: 1
  },
  title: {
    type: String
  },
  ctaImage: {
    type: String
  },
  ctaDescription: {
    type: String
  },
  title1: {
    type: String
  },
  title2: {
    type: String
  },
  ctaDescription2: {
    type: String
  },
  // products: {
  //   type: String,
  // },
  products: [{
    name: {
      type: String
    },
    type: {
      type: String
    },
    origin: {
      type: String
    },
    description: {
      type: String
    },
    price25: {
      type: Number
    },
    price75: {
      type: Number
    },
    price125: {
      type: Number
    },
    bottle: {
      type: Number
    }
  }],
  housePoursTitle: {
    type: String
  },
  housePoursDescription: {
    type: String
  },
  sparklingTitle: {
    type: String
  },
  // housePours: {
  //   type: String,
  // },
  housePours: [{
    name: {
      type: String
    },
    price: {
      type: Number
    }
  }]
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

var TastyModel = _mongoose2.default.model('Tasty', TastySchema);

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
            return TastyModel.find({}).lean();

          case 4:
            config = _context.sent;

            if (config.length) {
              _context.next = 8;
              break;
            }

            _context.next = 8;
            return new TastyModel({
              title: 'Tasty',
              ctaImage: 'http://luvinhtml.ekipapi.com/wp-content/uploads/bg.jpg',
              ctaDescription: 'Due to Covid-19 we are no longer offering wine to drink in. Apologies for any inconvenience caused, but we hope that you appreciate that we are taking best measures to prevent the spread of Covid-19. We are looking forward to welcoming you back as soon as we can.',
              title1: 'Wines By The Glass',
              title2: 'List of Products',
              ctaDescription2: 'We are no longer serving wine \'By The Glass\'. These are the type of wines you\'ll be able to try once we are safely able to.',
              products: [],
              housePoursTitle: 'House Pours',
              housePoursDescription: 'Why not keep it simple? Our House Pours board is designed to make having a glass of wine and trying something new as easy as possible. Take a look at what we’re serving right now!',
              sparklingTitle: 'Sparkling',
              housePours: []
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

exports.default = TastyModel;