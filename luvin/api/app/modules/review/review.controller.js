import ReviewManager from './review.manager';

export default {
  async createReview(req, res, next) {
    try {
      const reviewData = req.body;
      const result = await ReviewManager.createReview(reviewData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getReviews(req, res, next) {
    try {
      const result = await ReviewManager.findReviewsShowOnWeb();
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getAllReviews(req, res, next) {
    try {
      const { limit, page, name } = req.query;
      const [reviews, count] = await Promise.all([
        ReviewManager.findReviews(name, limit, page),
        ReviewManager.countReview(name),
      ]);
      return res.status(200).json({
        data: {
          total: count,
          reviews,
        },
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateReview(req, res, next) {
    try {
      const { reviewId } = req.params;
      const reviewData = req.body;
      const result = await ReviewManager.updateReview(reviewId, reviewData);
      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
