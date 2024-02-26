// import { Error, Success } from '../utils/notifications';
import request from '../utils/request';

// eslint-disable-next-line
export const getUsedWidgets = async (eventId) => {
  try {
    const response = await request(`/api/event/${eventId}/used-widgets`);
    if (response.status === 200) {
      const { data } = await response.json();
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createUsedWidget = async (eventId, usedWidgetData) => {
  try {
    const response = await request(`/api/event/${eventId}/used-widget`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usedWidgetData),
    });
    if (response.status === 201) {
      const { data } = await response.json();
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUsedWidget = async (
  eventId,
  usedWidgetId,
  usedWidgetData
) => {
  try {
    const response = await request(
      `/api/event/${eventId}/used-widget/${usedWidgetId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usedWidgetData),
      }
    );
    if (response.status === 200) {
      const { data } = await response.json();
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUsedWidget = async (eventId, usedWidgetId) => {
  try {
    const response = await request(
      `/api/event/${eventId}/used-widget/${usedWidgetId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 200) {
      const { data } = await response.json();
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
