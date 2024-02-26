import { Success, Error } from '../utils/notifications';
import request from '../utils/request';

export const getWidgets = async () => {
  try {
    const response = await request('/api/widgets?active=true');
    if (response.status === 200) {
      const { data } = await response.json();
      return data;
    }
    Error('Error', response.statusText);
    return null;
  } catch (error) {
    console.error(error);
    Error('Error', error.message);
    return null;
  }
};

export const createWidget = async (widgetData) => {
  try {
    const response = await request('/api/widget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(widgetData),
    });
    if (response.status === 201) {
      const { data } = await response.json();
      Success('Success', 'Add Widget success!');
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

export const updateWidget = async (widgetId, widgetData) => {
  try {
    const response = await request(`/api/widget/${widgetId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(widgetData),
    });
    if (response.status === 200) {
      const { data } = await response.json();
      Success('Success', 'Update Widget success!');
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

export const deleteWidget = async (widgetId) => {
  try {
    const response = await request(`/api/widget/${widgetId}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      Success('Success', 'Delete Widget success!');
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
