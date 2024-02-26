import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ListUser = ({ users, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Email',
      width: 300,
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Parent',
      dataIndex: 'parentEmail',
      key: 'parentEmail',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (user) => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(user)}
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            style={{ marginLeft: '10px' }}
            onClick={() => onDelete(user)}
          />
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} scroll={{ x: 1300 }} />;
};

ListUser.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListUser;
