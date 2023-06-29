import React from 'react';
import InfiniteScroll from './infinitescroll';

export default {
  title: 'Components/InfiniteScroll',
  component: InfiniteScroll,
  argTypes: {
    apiUrl: { control: 'text' },
  },
};

const Template = (args) => <InfiniteScroll {...args} />;

export const Default = Template.bind({});
Default.args = {
  apiUrl: 'https://api.example.com/data',
};
