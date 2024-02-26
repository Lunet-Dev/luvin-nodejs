import { Success, Error } from '../utils/notifications';
import request from '../utils/request';

export const getUsers = async () => {
  try {
    const response = await request('/api/users?active=true');
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

export const createUser = async (userData) => {
  try {
    const response = await request('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (response.status === 201) {
      const { data } = await response.json();
      Success('Success', 'Add User success!');
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

export const updateUser = async (userData) => {
  try {
    const response = await request('/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (response.status === 200) {
      const { data } = await response.json();
      Success('Success', 'Update user success!');
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

export const deleteUser = async (email) => {
  try {
    const response = await request('/api/user', {
      method: 'DELETE',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      Success('Success', 'Delete user success!');
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
