/* eslint-disable no-useless-catch */
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Form, Select } from 'antd';
import isEmpty from 'lodash/isEmpty';

import DateTimePicker from '../UI/DateTimePicker';
import useFanpages from '../../hooks/useFanpages';
import { getPostsOfFanpage } from '../../apis/post';
import { createEvent, updateEvent } from '../../apis/event';
import { Error } from '../../utils/notifications';

const { Option } = Select;

const CreateEvent = forwardRef(({ eventDetail = {} }, ref) => {
  const [fanpages] = useFanpages();
  const [posts, updatePosts] = useState([]);

  const [form] = Form.useForm();

  const onChangeFanpage = async (fanpageId) => {
    try {
      const resPosts = await getPostsOfFanpage(fanpageId);
      if (resPosts) updatePosts(resPosts);
    } catch (error) {
      Error(error.message);
    }
  };

  useEffect(() => {
    if (!isEmpty(eventDetail)) {
      form.setFieldsValue({
        fanpageId: eventDetail.fanpageId || '',
        postId: eventDetail.postId || '',
        startedAt: eventDetail.startedAt
          ? new Date(eventDetail.startedAt).getTime()
          : new Date().getTime(),
        endedAt: eventDetail.endedAt
          ? new Date(eventDetail.endedAt).getTime()
          : new Date().getTime(),
        widgets: eventDetail.widgets || [],
      });
    }
  }, [eventDetail]);

  useImperativeHandle(ref, () => ({
    async onCreateEvent() {
      try {
        await form.validateFields([
          'fanpageId',
          'postId',
          'startedAt',
          'endedAt',
        ]);
        const eventData = form.getFieldsValue([
          'fanpageId',
          'postId',
          'startedAt',
          'endedAt',
        ]);
        let event = eventDetail;
        if (eventDetail.id) {
          event = await updateEvent(eventDetail.id, eventData);
        } else {
          event = await createEvent(eventData);
        }
        return event;
      } catch (error) {
        throw error;
      }
    },
  }));

  return (
    <Form
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 19 }}
      layout="horizontal"
      form={form}
      initialValues={{
        fanpageId: eventDetail.fanpageId || '',
        postId: eventDetail.postId || '',
        startedAt: eventDetail.startedAt || new Date().setHours(17, 30),
        endedAt: eventDetail.endedAt || new Date().setHours(18, 30),
      }}
    >
      <Form.Item
        label="Fanpage"
        name="fanpageId"
        rules={[{ required: true, message: 'Please select fanpage!' }]}
      >
        <Select placeholder="Select fanpage" onChange={onChangeFanpage}>
          {fanpages.map(({ fanpageId, fanpageName }) => (
            <Option key={fanpageId} value={fanpageId}>
              {fanpageName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="postId"
        label="Post"
        rules={[{ required: true, message: 'Please select post!' }]}
      >
        <Select placeholder="Select post">
          {posts.map(({ postId, message }) => (
            <Option key={postId} value={postId}>
              {message}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="startedAt"
        label="Started at"
        rules={[{ required: true, message: 'Please select started time!' }]}
      >
        <DateTimePicker />
      </Form.Item>
      <Form.Item
        name="endedAt"
        label="Ended at"
        rules={[{ required: true, message: 'Please select ended time!' }]}
      >
        <DateTimePicker
          minDate={form.getFieldValue('startedAt') || new Date()}
        />
      </Form.Item>
    </Form>
  );
});

export default CreateEvent;
