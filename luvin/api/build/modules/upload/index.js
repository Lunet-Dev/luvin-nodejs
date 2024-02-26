'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _upload = require('./upload.controller');

var _upload2 = _interopRequireDefault(_upload);

var _constants = require('../../config/constants');

var _accessControl = require('../../middleware/access-control');

var _accessControl2 = _interopRequireDefault(_accessControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var storage = _multer2.default.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, _path2.default.resolve(__dirname, '..', '..', 'public', 'uploads'));
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

var imageUploader = (0, _multer2.default)({
  storage: storage
});

router.post('/single', imageUploader.single('file'), _upload2.default.saveFile);
router.post('/array', imageUploader.array('files', 20), _upload2.default.saveFiles);

router.get('/all', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _upload2.default.findFiles);

router.delete('/:fileId', (0, _accessControl2.default)(_constants.USER_ROLES.CsStaff), _upload2.default.deleteFile);

exports.default = router;