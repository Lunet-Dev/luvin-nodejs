'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var Reviewchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  rate: {
    type: Number
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  isShow: {
    type: Boolean,
    default: false
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

var ReviewModel = _mongoose2.default.model('Review', Reviewchema);

exports.default = ReviewModel;