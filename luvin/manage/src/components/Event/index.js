import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import ModalUpdateEventStatus from './ModalUpdateEventStatus';

import { getEvents, deleteEvent, updateMode } from '../../apis/event';
import withLayout from '../../hocs/withLayout';
import useWidgets from '../../hooks/useWidgets';

import EventList from './List';

const { confirm } = Modal;

const EventComponent = () => {
  const history = useHistory();
  useWidgets();
  const [events, updateEvents] = useState([]);

  const [isUpdateEventStatus, setIsUpdateEventStatus] = useState(false);
  const [eventDetail, updateEventDetail] = useState({});

  const handleGetEvents = async () => {
    const resEvents = await getEvents();
    if (resEvents) updateEvents(resEvents);
  };

  const handleDeleteEvent = async (eventId) => {
    const success = await deleteEvent(eventId);
    if (success) {
      updateEvents(events.filter((event) => event.id !== eventId));
    }
  };

  const handleUpdateMode = async (usedWidgetIdInProcess) => {
    const event = await updateMode(eventDetail.id, usedWidgetIdInProcess);
    updateEvents(
      events.map((e) => {
        if (e.id === eventDetail.id) {
          return event;
        }
        return e;
      })
    );
  };

  useEffect(() => {
    handleGetEvents();
  }, []);

  const onDeleteEvent = (event) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: `Delete event ${event.eventName}?`,
      onOk() {
        handleDeleteEvent(event.id);
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
        onClick={() => {
          history.push('/event/new');
        }}
      >
        Add Event
      </Button>
      {isUpdateEventStatus && (
        <ModalUpdateEventStatus
          eventDetail={eventDetail}
          onClose={() => {
            setIsUpdateEventStatus(false);
            updateEventDetail({});
          }}
          onUpdate={(widgetInProcess) => {
            // TODO: handle
            handleUpdateMode(widgetInProcess);
            setIsUpdateEventStatus(false);
            updateEventDetail({});
          }}
        />
      )}

      <EventList
        events={events}
        onEdit={(event) => {
          history.push(`/event/${event.id}`);
        }}
        onEditStatus={(event) => {
          updateEventDetail(event);
          setIsUpdateEventStatus(true);
        }}
        onDelete={onDeleteEvent}
      />
    </>
  );
};

export default withLayout(EventComponent);
