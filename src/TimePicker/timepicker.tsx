import React, { useState } from 'react';

interface TimePickerProps {
  onChange: (selectedTime: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
    onChange(event.target.value);
  };

  return (
    <input
      type="time"
      value={selectedTime}
      onChange={handleTimeChange}
    />
  );
};

export default TimePicker;