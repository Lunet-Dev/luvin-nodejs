/* eslint-disable camelcase, no-underscore-dangle */
import React, { useState } from 'react';
import { Modal, Button, Form, Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const ModalUpdateEventStatus = ({ onClose, onUpdate, eventDetail }) => {
  const [form] = Form.useForm();
  const [loading, updateLoading] = useState(false);

  // const handleClose = () => {
  //   form.setFieldsValue({
  //     widgetInProcess: null,
  //   });
  //   onClose();
  // };

  const _onUpdate = async () => {
    updateLoading(true);
    const { widgetInProcess } = form.getFieldsValue(['widgetInProcess']);
    await onUpdate(widgetInProcess);
    updateLoading(false);
    // handleClose();
  };

  return (
    <Modal
      visible
      title="Update Event Status"
      onOk={_onUpdate}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          htmlType="submit"
          key="submit"
          type="primary"
          loading={loading}
          onClick={_onUpdate}
        >
          Update
        </Button>,
      ]}
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        initialValues={{
          status: eventDetail.status,
        }}
      >
        <Form.Item name="widgetInProcess" label="Status">
          <Select placeholder="Select status">
            {(eventDetail.usedWidget || [])
              .filter(({ runInBackground }) => !runInBackground)
              .map(({ customName, id }) => (
                <Option key={id} value={id}>
                  {customName}
                </Option>
              ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModalUpdateEventStatus.propTypes = {
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  eventDetail: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ModalUpdateEventStatus;
