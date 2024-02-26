import * as TYPES from "../constants/feedback";

export const getFeedback = () => ({
  type: TYPES.GET_FEEDBACK,
});

export const getFeedbackSuccess = (feedbacks) => ({
  type: TYPES.GET_FEEDBACK_SUCCESS,
  feedbacks,
});

export const getFeedbackError = (errorMessage) => ({
  type: TYPES.GET_FEEDBACK_ERROR,
  errorMessage,
});

export const sendFeedback = (feedbackData) => ({
  type: TYPES.SEND_FEEDBACK,
  feedbackData,
});

export const sendFeedbackSuccess = (feedbackData) => ({
  type: TYPES.SEND_FEEDBACK_SUCCESS,
  feedbackData,
});

export const sendFeedbackError = (errorMessage) => ({
  type: TYPES.SEND_FEEDBACK_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
