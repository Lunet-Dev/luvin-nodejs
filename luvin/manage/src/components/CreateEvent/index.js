import React, { useState, useRef, useEffect } from 'react';
import { Steps, Button, message, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import CreateEvent from './CreateEvent';
import SelectWidget from './SelectWidget';

import withLayout from '../../hocs/withLayout';
import { Error } from '../../utils/notifications';

import { getEvent } from '../../apis/event';

const { Step } = Steps;

const EventComponent = () => {
  const { eventId } = useParams();
  const [currentStep, updateCurrentStep] = useState(0);
  const [event, updateEvent] = useState({});
  const [loading, updateLoading] = useState(false);
  const createEventCompRef = useRef();
  const steps = [
    {
      title: 'Create event',
      content: <CreateEvent ref={createEventCompRef} eventDetail={event} />,
    },
    {
      title: 'Select widgets',
      content: <SelectWidget eventDetail={event} />,
    },
  ];

  const next = async () => {
    updateLoading(true);
    try {
      const _event = await createEventCompRef.current.onCreateEvent();
      updateEvent(_event);
      updateCurrentStep(currentStep + 1);
    } catch (error) {}
    updateLoading(false);
  };

  const prev = () => {
    updateCurrentStep(currentStep - 1);
  };

  const handleGetEvent = async () => {
    try {
      const resEvent = await getEvent(eventId);
      updateEvent(resEvent);
    } catch (error) {
      Error(error.message);
    }
  };

  useEffect(() => {
    if (eventId) {
      handleGetEvent();
    }
  }, [eventId]);

  console.log('event', event);

  return (
    <>
      <Steps current={currentStep} style={{ padding: '30px 0' }}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {loading && <Spin />}
        {steps[currentStep].content}
      </div>
      <div
        className="steps-action"
        style={{ textAlign: 'right', marginTop: '20px' }}
      >
        {currentStep < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {currentStep > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={prev}>
            Previous
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default withLayout(EventComponent);
