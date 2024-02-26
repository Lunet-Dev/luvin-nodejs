import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Input, Checkbox } from 'antd';

const ModalDetailWidget = ({
  visible,
  onClose,
  handleCreate,
  handleUpdate,
  widgetDetail,
}) => {
  const [form] = Form.useForm();
  const [loading, updateLoading] = useState(false);

  const handleClose = () => {
    form.setFieldsValue({
      name: null,
      url: null,
      description: null,
      types: [],
    });
    onClose();
  };

  useEffect(() => {
    if (visible === 'update') {
      form.setFieldsValue({
        name: widgetDetail.name,
        url: widgetDetail.url,
        types: widgetDetail.types,
        description: widgetDetail.description,
      });
    }
  }, [visible]);

  const onSave = async () => {
    updateLoading(true);
    const widgetData = form.getFieldsValue([
      'name',
      'url',
      'types',
      'description',
    ]);
    await handleCreate(widgetData);
    updateLoading(false);
    handleClose();
  };

  const onUpdate = async () => {
    updateLoading(true);
    const widgetData = form.getFieldsValue([
      'name',
      'url',
      'types',
      'description',
    ]);
    await handleUpdate(widgetDetail.id, widgetData);
    updateLoading(false);
    handleClose();
  };

  return (
    <Modal
      visible={!!visible}
      title={visible === 'add' ? 'Add Widget' : 'Update Widget'}
      onOk={onSave}
      onCancel={handleClose}
      footer={[
        <Button key="back" onClick={handleClose}>
          Cancel
        </Button>,
        <Button
          htmlType="submit"
          key="submit"
          type="primary"
          loading={loading}
          onClick={() => (visible === 'add' ? onSave() : onUpdate())}
        >
          {visible === 'add' ? 'Add' : 'Update'}
        </Button>,
      ]}
    >
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        form={form}
      >
        <Form.Item label="Name" name="name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input placeholder="Description" />
        </Form.Item>
        <Form.Item name="url" label="Url">
          <Input placeholder="Url" />
        </Form.Item>
        <Form.Item name="types" label="Types">
          <Checkbox.Group
            options={[
              { label: 'Comment', value: 'comment' },
              { label: 'Reaction', value: 'reaction' },
              { label: 'Spam reaction', value: 'spam-reaction' },
              { label: 'Share', value: 'share' },
              { label: 'View', value: 'view' },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModalDetailWidget.defaultProps = {
  visible: false,
  onClose: () => {},
  handleCreate: () => {},
  handleUpdate: () => {},
  widgetDetail: {},
};

ModalDetailWidget.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  handleCreate: PropTypes.func,
  handleUpdate: PropTypes.func,
  widgetDetail: PropTypes.objectOf(PropTypes.object),
};

export default ModalDetailWidget;
