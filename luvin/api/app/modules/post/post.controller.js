import PostManager from './post.manager';

export default {
  async createPost(req, res, next) {
    try {
      const postData = req.body;
      const result = await PostManager.createPost(postData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updatePost(req, res, next) {
    try {
      const { postSlug } = req.params;
      const postData = req.body;
      const result = await PostManager.updatePost(postSlug, postData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deletePost(req, res, next) {
    try {
      const { postSlug } = req.params;
      const result = await PostManager.deletePost(postSlug);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getPosts(req, res, next) {
    try {
      const { type, limit, page, name } = req.query;
      const [posts, count] = await Promise.all([
        PostManager.findPosts(limit, page, type, name),
        PostManager.countPosts(type, name),
      ]);
      return res.status(200).json({ data: { total: count, posts } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getPost(req, res, next) {
    try {
      const { postSlug } = req.params;
      const result = await PostManager.findPostBySlug(postSlug);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getUpcommingEvents(req, res, next) {
    try {
      const result = await PostManager.findUpcommingEvents();
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getOccurredEvents(req, res, next) {
    try {
      const { limit, page, month } = req.query;
      const [events, count] = await Promise.all([
        PostManager.findOccurredEvents(limit, page, month),
        PostManager.countOccurredEvents(limit, page, month),
      ]);
      return res.status(200).json({ data: { total: count, events } });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
