import { Success, Error } from '../utils/notifications';
import request from '../utils/request';

export const getEvents = async () => {
  try {
    const response = await request('/api/events?active=true');
    if (response.status === 200) {
      const { data } = await response.json();
      return data;
    }
    console.error(response);
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    console.error(error);
    Error('Error', error.message);
    return null;
  }
};

export const getEvent = async (eventId) => {
  try {
    const response = await request(`/api/event/${eventId}`);
    if (response.status === 200) {
      const { data } = await response.json();
      return data;
    }
    console.error(response);
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    console.error(error);
    Error('Error', error.message);
    return null;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await request('/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });
    if (response.status === 201) {
      const { data } = await response.json();
      Success('Success', 'Add Event success!');
      return data;
    }
    console.error(response);
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    Error('Error', error.message);
    console.error(error);
    return null;
  }
};

export const updateEvent = async (eventId, eventData) => {
  try {
    const response = await request(`/api/event/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });
    if (response.status === 200) {
      const { data } = await response.json();
      Success('Success', 'Update Event success!');
      return data;
    }
    console.error(response);
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    Error('Error', error.message);
    console.error(error);
    return null;
  }
};

export const updateMode = async (eventId, usedWidgetId) => {
  try {
    const response = await request(`/api/event/${eventId}/update-mode`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usedWidgetId }),
    });
    if (response.status === 200) {
      const { data } = await response.json();
      Success('Success', 'Update Event success!');
      return data;
    }
    console.error(response);
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    Error('Error', error.message);
    console.error(error);
    return null;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await request(`/api/event/${eventId}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      Success('Success', 'Delete Event success!');
      return true;
    }
    console.error(response);
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    Error('Error', error.message);
    console.error(error);
    return null;
  }
};
