import * as TYPES from "../constants/videos";

export const getVideos = (limit = 12, page = 1) => ({
  type: TYPES.GET_VIDEOS,
  limit,
  page,
});

export const getVideosSuccess = (total, videos) => ({
  type: TYPES.GET_VIDEOS_SUCCESS,
  total,
  videos,
});

export const getVideosError = (errorMessage) => ({
  type: TYPES.GET_VIDEOS_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
