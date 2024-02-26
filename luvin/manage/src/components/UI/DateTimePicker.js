import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import isDate from 'lodash/isDate';

import './DateTimePicker.css';

const DateTimePicker = ({ onChange, value, minDate }) => {
  const [date, setDate] = useState(new Date().setHours(17, 30));

  useEffect(() => {
    if (value && isDate(new Date(value))) {
      setDate(new Date(value));
    }
  }, [value]);

  const handleChange = (_date) => {
    onChange(_date.getTime());
    setDate(_date);
  };

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      showTimeSelect
      timeFormat="HH:mm"
      className="date-time-picker"
      minDate={minDate}
      // excludeTimes={[
      //   setHours(setMinutes(new Date(), 0), 17),
      //   setHours(setMinutes(new Date(), 30), 18),
      //   setHours(setMinutes(new Date(), 30), 19),
      //   setHours(setMinutes(new Date(), 30), 17),
      // ]}
      dateFormat="dd/MM/yyyy HH:mm"
    />
  );
};

export default DateTimePicker;
