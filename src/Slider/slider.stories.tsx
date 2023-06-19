import React from 'react';
import { Story, Meta } from '@storybook/react';
import Slider, { SliderProps } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 50,
  onChange: (value: number) => {
    console.log('Slider value:', value);
  },
};
