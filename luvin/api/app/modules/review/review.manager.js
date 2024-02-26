import ReviewModel from './review.model';

import buildPaginationQuery from '../../lib/build-pagination-query';

import sendEmail from '../../services/mailer';

export default {
  async createReview(reviewData) {
    try {
      const review = await new ReviewModel(reviewData).save();
      const reviewDetail = await ReviewModel.findById({ _id: review._id })
        .populate('product')
        .lean();
      await sendEmail(process.env.EMAIL_ADMIN, 'review', null, reviewDetail);
      return review;
    } catch (error) {
      throw error;
    }
  },

  async findReviewsShowOnWeb() {
    try {
      let query = ReviewModel.find({ isShow: true })
        .populate('product')
        .sort({ updatedAt: -1 });
      query = buildPaginationQuery(query, 5, 1);
      const reviews = await query.lean().exec();
      return reviews;
    } catch (error) {
      throw error;
    }
  },

  async findReviews(name, limit, page) {
    try {
      let query = ReviewModel.find({})
        .populate('product')
        .sort({ createdAt: -1 });
      query = buildPaginationQuery(query, limit, page);
      if (name) {
        query.or([
          { name: new RegExp(name, 'i') },
          { email: new RegExp(name, 'i') },
          { title: new RegExp(name, 'i') },
          { description: new RegExp(name, 'i') },
        ]);
      }
      const reviews = await query.lean().exec();
      return reviews;
    } catch (error) {
      throw error;
    }
  },

  async countReview(name) {
    try {
      let query = ReviewModel.count();
      if (name) {
        query.or([
          { name: new RegExp(name, 'i') },
          { email: new RegExp(name, 'i') },
          { title: new RegExp(name, 'i') },
          { description: new RegExp(name, 'i') },
        ]);
      }
      const count = await query.exec();
      return count;
    } catch (error) {
      throw error;
    }
  },

  async updateReview(reviewId, reviewData) {
    try {
      const review = await ReviewModel.findByIdAndUpdate(
        reviewId,
        { $set: reviewData },
        { new: true }
      );
      return review;
    } catch (error) {
      throw error;
    }
  },
};
