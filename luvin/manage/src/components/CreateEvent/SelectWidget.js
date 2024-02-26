/* eslint-disable no-else-return, eqeqeq */
import React, { useState, useEffect } from 'react';
import { Card, Button, Table } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

// import WidgetSetting from '../WidgetSetting';
import SettingBottAttack from '../WidgetSetting/AttackBoss';
import SettingAttackBossShowCode from '../WidgetSetting/AttackBossShowCode';
import SettingComment from '../WidgetSetting/Comment';
import SettingVoteGifts from '../WidgetSetting/VoteGifts';
import SettingTakeCarePet from '../WidgetSetting/TakeCarePet';
import SettingRace from '../WidgetSetting/Race';

import useWidgets from '../../hooks/useWidgets';

import {
  getUsedWidgets,
  createUsedWidget,
  deleteUsedWidget,
} from '../../apis/used-widget';
import { Error } from '../../utils/notifications';

const SelectWidget = ({ eventDetail }) => {
  const [rightTableData, updateRightTableData] = useState([]);
  const [widgets] = useWidgets();

  const handleGetUsedWidgets = async () => {
    try {
      const usedWidgets = await getUsedWidgets(eventDetail.id);
      updateRightTableData(usedWidgets);
    } catch (error) {
      Error(error.message);
    }
  };

  useEffect(() => {
    handleGetUsedWidgets();
  }, []);

  const onAddedWidget = async (widget) => {
    try {
      const usedWidgetData = {
        eventId: eventDetail.id,
        widgetId: widget.id,
        customName: widget.name,
      };
      if (widget.name === 'Top comment') {
        usedWidgetData.configs = JSON.stringify({ isTopComment: true });
      }
      const usedWidget = await createUsedWidget(eventDetail.id, usedWidgetData);
      updateRightTableData([usedWidget, ...rightTableData]);
    } catch (error) {
      Error(error.message);
    }
  };

  const onRemovedWidget = async (widget) => {
    try {
      await deleteUsedWidget(eventDetail.id, widget.id);
      updateRightTableData(rightTableData.filter(({ id }) => id !== widget.id));
    } catch (error) {
      Error(error.message);
    }
  };

  const leftColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      render: (widget) => (
        <Button
          size="small"
          style={{ marginBottom: '5px' }}
          icon={<PlusOutlined />}
          type="default"
          onClick={() => onAddedWidget(widget)}
        />
      ),
    },
  ];

  const rightColumns = [
    {
      render: (widget) => (
        <Button
          size="small"
          style={{ marginBottom: '5px' }}
          icon={<MinusOutlined />}
          type="default"
          onClick={() => onRemovedWidget(widget)}
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'customName',
      key: 'customName',
    },
    // {
    //   title: 'Url',
    //   dataIndex: 'url',
    //   key: 'url',
    //   // width: '12%',
    // },
  ];

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Card
        // title="Default size card"
        // extra={<a href="#">More</a>}
        style={{ width: '50%' }}
      >
        <Table
          pagination={false}
          rowKey="id"
          columns={leftColumns}
          dataSource={widgets}
        />
      </Card>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 5px',
          justifyContent: 'center',
          width: '20px',
        }}
      />
      <Card
        // title="Default size card"
        // extra={<a href="#">More</a>}
        style={{ width: '50%' }}
      >
        <Table
          pagination={false}
          rowKey="id"
          columns={rightColumns}
          // rowSelection={rightTableRowSelection}
          expandable={{
            expandedRowRender: (record) => {
              const widget = widgets.find(({ id }) => id === record.widgetId);
              console.log('widget', widget);
              if (widget.name == 'Đánh boss') {
                return (
                  <SettingBottAttack
                    widget={widget}
                    usedWidget={record}
                    eventDetail={eventDetail}
                  />
                );
              } else if (widget.name == 'Vote quà') {
                return (
                  <SettingVoteGifts
                    widget={widget}
                    usedWidget={record}
                    eventDetail={eventDetail}
                  />
                );
              } else if (
                widget.name == 'Comment' ||
                widget.name == 'Top comment'
              ) {
                return (
                  <SettingComment
                    widget={widget}
                    usedWidget={record}
                    eventDetail={eventDetail}
                  />
                );
              } else if (widget.name == 'Đánh boss hiện code') {
                return (
                  <SettingAttackBossShowCode
                    widget={widget}
                    usedWidget={record}
                    eventDetail={eventDetail}
                  />
                );
              } else if (widget.name == 'Nuôi pet') {
                return (
                  <SettingTakeCarePet
                    widget={widget}
                    usedWidget={record}
                    eventDetail={eventDetail}
                  />
                );
              } else if (widget.name == 'Đua ngựa') {
                return (
                  <SettingRace
                    widget={widget}
                    usedWidget={record}
                    eventDetail={eventDetail}
                  />
                );
              }
              // return (
              //   <WidgetSetting
              //     widget={widgets.find(({ id }) => id === record.widgetId)}
              //     usedWidget={record}
              //     eventDetail={eventDetail}
              //   />
              // );
            },
            rowExpandable: (record) => record.name !== 'Not Expandable',
          }}
          dataSource={rightTableData}
        />
      </Card>
    </div>
  );
};

export default SelectWidget;
