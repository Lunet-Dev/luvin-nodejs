import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import ListWidget from './List';
import ModalDetail from './ModalDetail';

import { createWidget, updateWidget, deleteWidget } from '../../apis/widget';

import useWidgets from '../../hooks/useWidgets';
import withLayout from '../../hocs/withLayout';

const { confirm } = Modal;

const WidgetComponent = () => {
  const [widgets, setWidgetsState] = useWidgets();
  const [editWidgetType, updateEditWidgetType] = useState(null);
  const [widgetDetail, updateWidgetDetail] = useState(null);

  const handleCreateWidget = async (widgetData) => {
    const widget = await createWidget(widgetData);
    if (widget) setWidgetsState([widget, ...widgets]);
  };

  const handleUpdateWidget = async (widgetId, widgetData) => {
    const widget = await updateWidget(widgetId, widgetData);
    if (widget) {
      setWidgetsState(
        widgets.map((wDetail) => {
          if (wDetail.id === widgetId) return widget;
          return wDetail;
        })
      );
    }
    updateWidgetDetail(null);
  };

  const handleDeleteWidget = async (widgetId) => {
    const success = await deleteWidget(widgetId);
    if (success) {
      setWidgetsState(widgets.filter(({ id }) => id !== widgetId));
    }
  };

  const onEditWidget = (widget) => {
    updateEditWidgetType('update');
    updateWidgetDetail(widget);
  };

  const onDeleteWidget = (widget) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: `Delete widget ${widget.name}?`,
      onOk() {
        handleDeleteWidget(widget.id);
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
        onClick={() => updateEditWidgetType('add')}
      >
        Add Widget
      </Button>
      {editWidgetType && (
        <ModalDetail
          handleCreate={handleCreateWidget}
          handleUpdate={handleUpdateWidget}
          widgetDetail={widgetDetail}
          visible={editWidgetType}
          onClose={() => updateEditWidgetType(null)}
        />
      )}
      <ListWidget
        widgets={widgets}
        onEdit={onEditWidget}
        onDelete={onDeleteWidget}
      />
    </>
  );
};

export default withLayout(WidgetComponent);
