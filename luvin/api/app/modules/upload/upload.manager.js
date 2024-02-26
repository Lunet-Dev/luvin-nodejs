import fs from 'fs';
import path from 'path';

import FileModel from './file.model';

import buildPaginationQuery from '../../lib/build-pagination-query';

export default {
  async saveFile(fileData) {
    try {
      const file = await new FileModel(fileData).save();
      return file;
    } catch (error) {
      throw error;
    }
  },

  async deleteFile(fileId) {
    try {
      const file = await FileModel.findById(fileId);
      await fs.unlinkSync(
        path.resolve(__dirname, '..', '..', 'public', file.path)
      );
      const result = await FileModel.findByIdAndRemove(fileId);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async findFiles(limit, page) {
    try {
      const conditions = {};
      let query = FileModel.find(conditions).sort({ createdAt: -1 });
      query = buildPaginationQuery(query, limit, page);
      const files = await query.lean().exec();
      return files;
    } catch (error) {
      throw error;
    }
  },

  async countFiles() {
    try {
      const count = await FileModel.count({});
      return count;
    } catch (error) {
      throw error;
    }
  },
};
