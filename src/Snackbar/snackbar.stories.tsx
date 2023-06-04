import React from 'react';
import { Story, Meta } from '@storybook/react';
import Snackbar, { SnackbarProps } from './Snackbar';

export default {
  title: 'Snackbar',
  component: Snackbar,
} as Meta;

const Template: Story<SnackbarProps> = (args) => <Snackbar {...args} />;

// Default Snackbar
export const Default = Template.bind({});
Default.args = {
  message: 'This is a snackbar message',
};

// Snackbar with Custom Duration
export const CustomDuration = Template.bind({});
CustomDuration.args = {
  message: 'Custom duration snackbar',
  duration: 5000,
};

// Snackbar with Close Callback
export const WithCloseCallback = Template.bind({});
WithCloseCallback.args = {
  message: 'Snackbar with close callback',
  onClose: () => {
    console.log('Snackbar closed');
  },
};




/*The 'Default' story represents the default state of the snackbar. It uses the Default export and sets the message prop to "This is a snackbar message".

The 'CustomDuration' story demonstrates a snackbar with a custom duration. It uses the CustomDuration export and sets the message prop to "Custom duration snackbar" and the duration prop to 5000ms (5 seconds).

The 'WithCloseCallback' story shows a snackbar with a close callback function. It uses the WithCloseCallback export and sets the message prop to "Snackbar with close callback" and provides a custom onClose callback function.

By running the Storybook environment, you can see and interact with these different variations of the Snackbar component, allowing you to preview their appearance and behavior in isolation.
*/
