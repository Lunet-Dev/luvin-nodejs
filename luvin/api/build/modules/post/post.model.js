'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _slugify = require('slugify');

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String
  },
  content: {
    type: String
  },
  slug: {
    type: String,
    unique: true
  },
  type: {
    type: String,
    enum: ['article', 'video', 'faq', 'event'],
    default: 'article'
  },
  image: {
    type: String
  },
  video: {
    type: String
  },
  startedAt: {
    type: Date
  },
  endedAt: {
    type: Date
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

PostSchema.index({
  type: 1
});

PostSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = (0, _slugify2.default)(this.title, '-');
  }
  next();
});

var PostModel = _mongoose2.default.model('Post', PostSchema);

exports.default = PostModel;