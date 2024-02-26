import slugify from 'slugify';

import PostModel from './post.model';

import buildPaginationQuery from '../../lib/build-pagination-query';

export default {
  async createPost(postData) {
    try {
      const post = await new PostModel(postData).save();
      return post;
    } catch (error) {
      throw error;
    }
  },

  async updatePost(slug, postData) {
    try {
      if (postData.name) {
        postData.slug = slugify(postData.name.toLowerCase(), '-');
      }
      const post = await PostModel.findOneAndUpdate(
        { slug },
        { $set: postData },
        { new: true }
      ).lean();
      return post;
    } catch (error) {
      throw error;
    }
  },

  async deletePost(slug) {
    try {
      const result = await PostModel.remove({ slug });
      return result;
    } catch (error) {
      throw error;
    }
  },

  async findPosts(limit, page, type, name) {
    try {
      const conditions = {};
      if (type) {
        conditions.type = type;
      }
      let query = PostModel.find(conditions).sort({ createdAt: -1 });
      query = buildPaginationQuery(query, limit, page);
      if (name) {
        query.or([
          { title: new RegExp(name, 'i') },
          { desctiption: new RegExp(name, 'i') },
        ]);
      }
      const posts = await query.lean().exec();
      return posts;
    } catch (error) {
      throw error;
    }
  },

  async countPosts(type, name) {
    try {
      const conditions = {};
      if (type) {
        conditions.type = type;
      }
      let query = PostModel.count(conditions);
      if (name) {
        query.or([
          { title: new RegExp(name, 'i') },
          { desctiption: new RegExp(name, 'i') },
        ]);
      }
      const count = await query.exec();
      return count;
    } catch (error) {
      throw error;
    }
  },

  async findPostBySlug(slug) {
    try {
      const now = new Date().getTime();
      const post = await PostModel.findOne({ slug }).lean();
      const isOccurred = post.endedAt <= now;
      return { ...post, isOccurred };
    } catch (error) {
      throw error;
    }
  },

  async findUpcommingEvents() {
    try {
      const now = new Date().getTime();
      let query = PostModel.find({
        startedAt: { $gt: now },
        type: 'event',
      }).sort({
        createdAt: -1,
      });
      query = buildPaginationQuery(query, 6, 1);
      const events = await query.lean().exec();
      return events;
    } catch (error) {
      throw error;
    }
  },

  async findOccurredEvents(limit, page, month) {
    try {
      const now = new Date().getTime();
      const conditions = { type: 'event', endedAt: { $lt: now } };
      // if (month) {
      //   conditions.
      // }
      // TODO: find by time
      let query = PostModel.find(conditions).sort({ createdAt: -1 });
      query = buildPaginationQuery(query, limit, page);
      const events = await query.lean().exec();
      return events;
    } catch (error) {
      throw error;
    }
  },

  async countOccurredEvents() {
    try {
      const now = new Date().getTime();
      const conditions = { type: 'event', endedAt: { $lt: now } };
      // if (month) {
      //   conditions.
      // }
      // TODO: find by time
      const count = await PostModel.count(conditions);
      return count;
    } catch (error) {
      throw error;
    }
  },
};
