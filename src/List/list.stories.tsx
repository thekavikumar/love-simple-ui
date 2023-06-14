import React from 'react';
import { Story, Meta } from '@storybook/react';
import List, { ListProps } from './List';

export default {
  title: 'List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

// Default List
export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ],
};

// List with Custom Items
export const CustomItems = Template.bind({});
CustomItems.args = {
  items: [
    { id: 1, text: 'Custom Item 1' },
    { id: 2, text: 'Custom Item 2' },
    { id: 3, text: 'Custom Item 3' },
  ],
};


/*The 'Default' story represents the default state of the list. It uses the Default export and sets the items prop to an array of items with their respective id and text properties.

The 'CustomItems' story demonstrates a list with custom items. It uses the CustomItems export and provides a different array of items with custom text content.
*/