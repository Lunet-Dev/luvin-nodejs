'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _values = require('lodash/values');

var _values2 = _interopRequireDefault(_values);

var _keys = require('../../config/keys');

var _keys2 = _interopRequireDefault(_keys);

var _constants = require('../../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _keys$jwt = _keys2.default.jwt,
    secret = _keys$jwt.secret,
    tokenLife = _keys$jwt.tokenLife;


var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    // unique: true,
    lowercase: true,
    validate: {
      validator: function validator(email) {
        // eslint-disable-next-line max-len
        var emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
        return emailRegex.test(email);
      },

      message: 'Email không hợp lệ'
    }
  },
  holderId: {
    type: String
  },
  phone: {
    type: String
    // unique: true,
  },
  password: {
    type: String,
    required: [true, 'Mật khẩu không được bỏ trống']
  },
  avatar: {
    type: String
  },
  birthday: {
    type: Date
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  level: {
    type: String,
    default: _constants.USER_LEVELS.Bzonze,
    enum: (0, _values2.default)(_constants.USER_LEVELS)
  },
  point: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    default: _constants.USER_ROLES.Customer,
    enum: (0, _values2.default)(_constants.USER_ROLES)
  }
}, {
  timestamps: true
});

UserSchema.set('toJSON', {
  virtuals: true,
  transform: function transform(doc, obj) {
    // obj.id = obj._id;
    // delete obj._id;
    delete obj.__v;
    delete obj.password;
    return obj;
  }
});

UserSchema.path('email').validate(function (email, respond) {
  UserModel.findOne({ email: email }).then(function (user) {
    respond(user ? false : true);
  }).catch(function () {
    respond(false);
  });
}, 'Email đã được sử dụng.');

UserSchema.path('phone').validate(function (phone, respond) {
  UserModel.findOne({ phone: phone }).then(function (user) {
    respond(user ? false : true);
  }).catch(function () {
    respond(false);
  });
}, 'Số điện thoại đã được sử dụng.');

// Validate password field
UserSchema.path('password').validate(function (password) {
  return password.length >= 6;
}, 'Mật khẩu ít nhất 6 kí tự');

//
UserSchema.pre('save', function (done) {
  var _this = this;

  // Encrypt password before saving the document
  if (this.isModified('password')) {
    this._hashPassword(this.password, function (err, hash) {
      _this.password = hash;
      done();
    });
  } else {
    done();
  }
  // eslint-enable no-invalid-this
});

/**
 * User Methods
 */
UserSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   * @public
   * @param {String} password
   * @return {Boolean} passwords match
   */
  authenticate: function authenticate(password) {
    return _bcrypt2.default.compareSync(password, this.password);
  },


  /**
   * Generates a JSON Web token used for route authentication
   * @public
   * @return {String} signed JSON web token
   */
  generateToken: function generateToken() {
    return _jsonwebtoken2.default.sign({ _id: this._id }, secret, {
      expiresIn: tokenLife
    });
  },


  /**
   * Create password hash
   * @private
   * @param {String} password
   * @param {Number} saltRounds
   * @param {Function} callback
   * @return {Boolean} passwords match
   */
  _hashPassword: function _hashPassword(password, callback) {
    return _bcrypt2.default.hash(password, 10, callback);
  }
};

var UserModel = _mongoose2.default.model('User', UserSchema);

exports.default = UserModel;