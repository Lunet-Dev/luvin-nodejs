import request from '../utils/request';

export const findFeedbacks = async (limit, page, name) => {
  try {
    const response = await request(
      `/review/all?limit=${limit}&page=${page}&name=${name}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateFeedback = async (feedbackId, feedbackData) => {
  try {
    const response = await request(`/review/${feedbackId}`, {
      method: 'PUT',
      body: JSON.stringify(feedbackData),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteFeedback = async (feedbackId) => {
  try {
    const response = await request(`/review/${feedbackId}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw error;
  }
};
