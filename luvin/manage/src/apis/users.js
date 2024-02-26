import request from '../utils/request';

export const getUsers = async (limit, page, name, level, role) => {
  try {
    const response = await request(
      `/user/all?limit=${limit}&page=${page}&name=${name}&level=${level}&role=${role}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userInfo) => {
  try {
    const response = await request('/user', {
      method: 'POST',
      body: JSON.stringify(userInfo),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId, userInfo) => {
  try {
    const response = await request(`/user/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(userInfo),
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId, userInfo) => {
  try {
    const response = await request(`/user/${userId}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw error;
  }
};
