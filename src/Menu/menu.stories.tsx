import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';

import CustomMenu, { MenuProps } from './CustomMenu';

export default {
  title: 'Components/CustomMenu',
  component: CustomMenu,
} as Meta;

const Template: Story<MenuProps> = (args) => <CustomMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      label: 'Option 1',
      onClick: () => {
        // Handle option 1 click
        console.log('Option 1 clicked');
      },
    },
    {
      label: 'Option 2',
      icon: <MoreVertIcon />,
      onClick: () => {
        // Handle option 2 click
        console.log('Option 2 clicked');
      },
    },
    {
      label: 'Option 3',
      onClick: () => {
        // Handle option 3 click
        console.log('Option 3 clicked');
      },
    },
  ],
};
