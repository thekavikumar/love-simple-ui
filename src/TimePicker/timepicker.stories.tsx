import React from 'react';
import { Story, Meta } from '@storybook/react';
import TimePicker, { TimePickerProps } from './TimePicker';

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
} as Meta;

const Template: Story<TimePickerProps> = (args) => <TimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (selectedTime: string) => {
    console.log('Selected Time:', selectedTime);
    // Perform any other logic with the selected time
  },
};

/*
we define a story for the TimePicker component using Storybook.
The story is configured with the title 'Components/TimePicker' and specifies the component to be used is the TimePicker component.

we define a Default export which represents a story variation. It uses the Template with Template.bind({}) and assigns the default arguments using the args property.
In this case, we provide an onChange callback function that logs the selected time to the console.

You can then view and interact with the TimePicker component in the Storybook UI, where you can select different times and observe the onChange callback behavior.
*/
