import * as TYPES from "../constants/event";

export const getEvent = (eventSlug) => ({
  type: TYPES.GET_EVENT,
  eventSlug,
});

export const getEventSuccess = (event) => ({
  type: TYPES.GET_EVENT_SUCCESS,
  event,
});

export const getEventError = (errorMessage) => ({
  type: TYPES.GET_EVENT_ERROR,
  errorMessage,
});

export const joinEvent = (eventId) => ({
  type: TYPES.JOIN_EVENT,
  eventId,
});

export const joinEventSuccess = (event) => ({
  type: TYPES.JOIN_EVENT_SUCCESS,
  event,
});

export const joinEventError = (errorMessage) => ({
  type: TYPES.JOIN_EVENT_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
