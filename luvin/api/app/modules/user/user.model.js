import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import values from 'lodash/values';

import keys from '../../config/keys';
import { USER_ROLES, USER_LEVELS } from '../../config/constants';

const { secret, tokenLife } = keys.jwt;

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      // unique: true,
      lowercase: true,
      validate: {
        validator(email) {
          // eslint-disable-next-line max-len
          const emailRegex = /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
          return emailRegex.test(email);
        },
        message: 'Email không hợp lệ',
      },
    },
    holderId: {
      type: String,
    },
    phone: {
      type: String,
      // unique: true,
    },
    password: {
      type: String,
      required: [true, 'Mật khẩu không được bỏ trống'],
    },
    avatar: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    level: {
      type: String,
      default: USER_LEVELS.Bzonze,
      enum: values(USER_LEVELS),
    },
    point: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: USER_ROLES.Customer,
      enum: values(USER_ROLES),
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.set('toJSON', {
  virtuals: true,
  transform(doc, obj) {
    // obj.id = obj._id;
    // delete obj._id;
    delete obj.__v;
    delete obj.password;
    return obj;
  },
});

UserSchema.path('email').validate((email, respond) => {
  UserModel.findOne({ email })
    .then((user) => {
      respond(user ? false : true);
    })
    .catch(() => {
      respond(false);
    });
}, 'Email đã được sử dụng.');

UserSchema.path('phone').validate((phone, respond) => {
  UserModel.findOne({ phone })
    .then((user) => {
      respond(user ? false : true);
    })
    .catch(() => {
      respond(false);
    });
}, 'Số điện thoại đã được sử dụng.');

// Validate password field
UserSchema.path('password').validate((password) => {
  return password.length >= 6;
}, 'Mật khẩu ít nhất 6 kí tự');

//
UserSchema.pre('save', function (done) {
  // Encrypt password before saving the document
  if (this.isModified('password')) {
    this._hashPassword(this.password, (err, hash) => {
      this.password = hash;
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
  authenticate(password) {
    return bcrypt.compareSync(password, this.password);
  },

  /**
   * Generates a JSON Web token used for route authentication
   * @public
   * @return {String} signed JSON web token
   */
  generateToken() {
    return jwt.sign({ _id: this._id }, secret, {
      expiresIn: tokenLife,
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
  _hashPassword(password, callback) {
    return bcrypt.hash(password, 10, callback);
  },
};

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
