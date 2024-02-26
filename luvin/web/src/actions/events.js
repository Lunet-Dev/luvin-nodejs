import * as TYPES from "../constants/events";

export const getUpcommingEvents = () => ({
  type: TYPES.GET_UPCOMMING_EVENTS,
});

export const getUpcommingEventsSuccess = (events) => ({
  type: TYPES.GET_UPCOMMING_EVENTS_SUCCESS,
  events,
});

export const getUpcommingEventsError = (errorMessage) => ({
  type: TYPES.GET_UPCOMMING_EVENTS_ERROR,
  errorMessage,
});

export const getOccurredEvents = (limit, page, month) => ({
  type: TYPES.GET_OCCURRED_EVENTS,
  limit,
  page,
  month,
});

export const getOccurredEventsSuccess = (total, events) => ({
  type: TYPES.GET_OCCURRED_EVENTS_SUCCESS,
  total,
  events,
});

export const getOccurredEventsError = (errorMessage) => ({
  type: TYPES.GET_OCCURRED_EVENTS_ERROR,
  errorMessage,
});

export const resetState = () => ({
  type: TYPES.RESET_STATE,
});
