import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Input } from 'antd';

const ModalDetailFanpage = ({
  visible,
  onClose,
  handleCreate,
  handleUpdate,
  fanpageDetail,
}) => {
  const [form] = Form.useForm();
  const [loading, updateLoading] = useState(false);

  const handleClose = () => {
    form.setFieldsValue({
      fanpage_id: null,
      fanpage_name: null,
      fanpage_token: null,
    });
    onClose();
  };

  useEffect(() => {
    if (visible === 'update') {
      form.setFieldsValue({
        fanpage_id: fanpageDetail.fanpage_id,
        fanpage_name: fanpageDetail.fanpage_name,
        fanpage_token: fanpageDetail.fanpage_token,
      });
    }
  }, [visible]);

  const onSave = async () => {
    updateLoading(true);
    const fanpageData = form.getFieldsValue([
      'fanpage_id',
      'fanpage_name',
      'fanpage_token',
    ]);
    await handleCreate(fanpageData);
    updateLoading(false);
    handleClose();
  };

  const onUpdate = async () => {
    updateLoading(true);
    const fanpageData = form.getFieldsValue([
      'fanpage_id',
      'fanpage_name',
      'fanpage_token',
    ]);
    await handleUpdate(fanpageDetail.id, fanpageData);
    updateLoading(false);
    handleClose();
  };

  return (
    <Modal
      visible={!!visible}
      title={visible === 'add' ? 'Add Fanpage' : 'Update Fanpage'}
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
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
      >
        <Form.Item label="Fanpage Id" name="fanpage_id">
          <Input placeholder="Fanpage Id" />
        </Form.Item>
        <Form.Item name="fanpage_name" label="Fanpage name">
          <Input placeholder="Fanpage name" />
        </Form.Item>
        <Form.Item name="fanpage_token" label="Fanpage token">
          <Input placeholder="Fanpage token" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModalDetailFanpage.defaultProps = {
  visible: false,
  onClose: () => {},
  handleCreate: () => {},
  handleUpdate: () => {},
  fanpageDetail: {},
};

ModalDetailFanpage.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  handleCreate: PropTypes.func,
  handleUpdate: PropTypes.func,
  fanpageDetail: PropTypes.objectOf(PropTypes.object),
};

export default ModalDetailFanpage;
