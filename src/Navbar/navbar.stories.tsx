import React from 'react';
import { Story, Meta } from '@storybook/react';

import Navbar, { NavbarProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'My App',
  isLoggedIn: false,
  onLogout: () => {
    // Handle logout action
    console.log('Logged out');
  },
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  title: 'My App',
  isLoggedIn: true,
  onLogout: () => {
    // Handle logout action
    console.log('Logged out');
  },
};
