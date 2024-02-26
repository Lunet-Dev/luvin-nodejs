import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ListFanpage = ({ widgets, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Name',
      width: 300,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Url',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: 'Types',
      dataIndex: 'types',
      key: 'types',
      render: (types) => types.join(', '),
    },
    // {
    //   title: 'Configs',
    //   dataIndex: 'configs',
    //   key: 'configs',
    //   render: (configs) => JSON.stringify(configs),
    // },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (widget) => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(widget)}
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            style={{ marginLeft: '10px' }}
            onClick={() => onDelete(widget)}
          />
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={widgets} scroll={{ x: 1300 }} />;
};

ListFanpage.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListFanpage;
