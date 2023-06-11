import React from 'react';
import { Story, Meta } from '@storybook/react';
import Chip, { ChipProps } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tag 1',
};

export const WithDeleteButton = Template.bind({});
WithDeleteButton.args = {
  label: 'Tag 2',
  onDelete: () => {
    // Handle chip deletion logic
  },
};
