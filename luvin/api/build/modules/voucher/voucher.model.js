'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var Voucherchema = new Schema({
  code: {
    type: String
  },
  type: {
    type: String,
    enum: ['percent', 'price'],
    default: 'price'
  },
  value: {
    type: Number
  },
  userIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  validAt: {
    type: Date
  },
  isAll: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
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

var VoucherModel = _mongoose2.default.model('Voucher', Voucherchema);

exports.default = VoucherModel;