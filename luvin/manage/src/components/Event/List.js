/* eslint-disable camelcase */
import React from 'react';
import { Table, Button, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { EVENT_STATUS } from '../../configs';

const ListEvent = ({ events, onEdit, onDelete, onEditStatus }) => {
  const columns = [
    {
      title: 'No.',
      width: 50,
      fixed: 'left',
      render: (a, b, index) => {
        return index + 1;
      },
    },
    {
      title: 'Fanpage',
      width: 200,
      dataIndex: 'fanpage',
      render: (fanpage = {}) => fanpage.fanpageName,
      // key: 'fanpageId',
      // fixed: 'left',
    },
    {
      title: 'Name',
      width: 150,
      dataIndex: 'eventName',
      key: 'eventName',
    },
    {
      title: 'Post',
      width: 300,
      dataIndex: 'postId',
      // render: (postId) => (post || {}).message || '',
      key: 'postId',
    },
    {
      title: 'Status',
      // dataIndex: 'status',
      width: 100,
      key: 'status',
      render: (event) => {
        const widgetInProcess = (event.usedWidget || []).find(
          ({ inProcess }) => inProcess
        );
        if (widgetInProcess) {
          return (
            <Tag
              style={{ cursor: 'pointer' }}
              onClick={() => onEditStatus(event)}
              color="green"
            >
              {widgetInProcess.customName}
            </Tag>
          );
        }
        return (
          <Tag
            style={{ cursor: 'pointer' }}
            onClick={() => onEditStatus(event)}
            color="geekblue"
          >
            Normal
          </Tag>
        );
      },
    },
    // {
    //   title: 'Gifts',
    //   dataIndex: 'gifts',
    //   width: 100,
    //   key: 'gifts',
    //   render: (gifts) => {
    //     return (
    //       <div style={{ whiteSpace: 'pre-line' }}>
    //         {gifts
    //           .map(
    //             ({ gift_name, reaction_type }) =>
    //               `${gift_name} - ${reaction_type}`
    //           )
    //           .join('\n')}
    //       </div>
    //     );
    //   },
    // },
    // {
    //   title: 'Attack boss damage',
    //   dataIndex: 'damage_configs',
    //   width: 100,
    //   key: 'damage_configs',
    //   render: (damageConfigs) => {
    //     return (
    //       <div style={{ whiteSpace: 'pre-line' }}>
    //         {Object.keys(damageConfigs)
    //           .map(
    //             (reactionType) =>
    //               `${reactionType} - ${damageConfigs[reactionType]}`
    //           )
    //           .join('\n')}
    //       </div>
    //     );
    //   },
    // },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 120,
      render: (event) => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(event)}
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            style={{ marginLeft: '10px' }}
            onClick={() => onDelete(event)}
          />
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={events} scroll={{ x: 1300 }} />;
};

ListEvent.defaultProps = {
  onEdit: () => {},
  onDelete: () => {},
  onEditStatus: () => {},
};

ListEvent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onEditStatus: PropTypes.func,
};

export default ListEvent;
