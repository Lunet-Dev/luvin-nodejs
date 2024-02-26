import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

const ListFanpage = ({ fanpages }) => {
  const columns = [
    {
      title: 'Id',
      width: 150,
      dataIndex: 'fanpageId',
      key: 'fanpageId',
      fixed: 'left',
    },
    {
      title: 'Name',
      width: 300,
      dataIndex: 'fanpageName',
      key: 'fanpageName',
    },
    {
      title: 'Token',
      dataIndex: 'fanpageToken',
      key: 'fanpageToken',
    },
  ];

  return <Table columns={columns} dataSource={fanpages} scroll={{ x: 1300 }} />;
};

ListFanpage.propTypes = {
  fanpages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListFanpage;
