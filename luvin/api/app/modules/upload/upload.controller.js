import UploadManager from './upload.manager';

export default {
  async saveFile(req, res, next) {
    try {
      const processedFile = req.file || {};
      const fileData = {
        name: processedFile.originalname || '',
        path: processedFile.originalname || '',
      };
      const result = await UploadManager.saveFile(fileData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async saveFiles(req, res, next) {
    try {
      const savedTasks = req.files.map(async (processedFile) => {
        const fileData = {
          name: processedFile.originalname || '',
          path: processedFile.originalname || '',
        };
        const result = await UploadManager.saveFile(fileData);
        return result;
      });
      const result = await Promise.all(savedTasks);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deleteFile(req, res, next) {
    try {
      const { fileId } = req.params;
      const result = await UploadManager.deleteFile(fileId);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async findFiles(req, res, next) {
    try {
      const { limit, page } = req.query;
      const [files, total] = await Promise.all([
        UploadManager.findFiles(limit, page),
        UploadManager.countFiles(),
      ]);
      return res.status(200).json({ data: { files, total } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
