import express from 'express';
import multer from 'multer';
import path from 'path';

import UploadController from './upload.controller';

import { USER_ROLES } from '../../config/constants';
import accessControlMiddleware from '../../middleware/access-control';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', '..', 'public', 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageUploader = multer({
  storage,
});

router.post('/single', imageUploader.single('file'), UploadController.saveFile);
router.post(
  '/array',
  imageUploader.array('files', 20),
  UploadController.saveFiles
);

router.get(
  '/all',
  accessControlMiddleware(USER_ROLES.CsStaff),
  UploadController.findFiles
);

router.delete(
  '/:fileId',
  accessControlMiddleware(USER_ROLES.CsStaff),
  UploadController.deleteFile
);

export default router;
