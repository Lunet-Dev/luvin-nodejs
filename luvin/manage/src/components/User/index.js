import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import ListUser from './List';
import ModalDetail from './ModalDetail';

import { getUsers, createUser, updateUser, deleteUser } from '../../apis/user';

import withLayout from '../../hocs/withLayout';

const { confirm } = Modal;

const UserComponent = () => {
  const [users, updateUsers] = useState([]);
  const [editUserType, updateEditUserType] = useState(null);
  const [userDetail, updateUserDetail] = useState(null);

  const handleGetUsers = async () => {
    try {
      const resUsers = await getUsers();
      if (resUsers) updateUsers(resUsers);
    } catch (error) {}
  };

  useEffect(() => {
    if (!users.length) handleGetUsers();
  }, []);

  const handleCreateUser = async (userData) => {
    const user = await createUser(userData);
    if (user) updateUsers([user, ...users]);
  };

  const handleUpdateUser = async (userData) => {
    const user = await updateUser(userData);
    if (user) {
      updateUsers(
        users.map((uDetail) => {
          if (uDetail.email === userData.email) return user;
          return uDetail;
        })
      );
    }
    updateUserDetail(null);
  };

  const handleDeleteUser = async (email) => {
    const success = await deleteUser(email);
    if (success) {
      updateUsers(users.filter((user) => user.email !== email));
    }
  };

  const onEditUser = (user) => {
    updateEditUserType('update');
    updateUserDetail(user);
  };

  const onDeleteUser = (user) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: `Delete user ${user.email}?`,
      onOk() {
        handleDeleteUser(user.email);
      },
    });
  };
  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="large"
        style={{ marginBottom: '20px' }}
        onClick={() => updateEditUserType('add')}
      >
        Add User
      </Button>
      {editUserType && (
        <ModalDetail
          handleCreate={handleCreateUser}
          handleUpdate={handleUpdateUser}
          userDetail={userDetail}
          visible={editUserType}
          onClose={() => updateEditUserType(null)}
        />
      )}
      <ListUser users={users} onEdit={onEditUser} onDelete={onDeleteUser} />
    </>
  );
};

export default withLayout(UserComponent);
