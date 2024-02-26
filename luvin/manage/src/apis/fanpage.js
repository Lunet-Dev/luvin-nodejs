import { Success, Error } from '../utils/notifications';
import request from '../utils/request';

export const getFanpages = async () => {
  try {
    const response = await request('/api/fanpages?active=true');
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

export const syncFanpages = async () => {
  try {
    const response = await request('/api/fanpages/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const { data } = await response.json();
      Success('Success', 'Sync Fanpage success!');
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
