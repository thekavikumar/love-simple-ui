import React from 'react';
import { Story, Meta } from '@storybook/react';
import Breadcrumbs, { BreadcrumbsProps } from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  paths: ['Home', 'Clothing', "Women's Clothing", 'Dresses', 'Summer Collection'],
};


/*he Template function represents the base structure of the story and takes the args as its argument. It renders the Breadcrumbs component with the spread operator ({...args}) to pass the provided arguments to the component.

Lastly, we define a Default story by binding the Template function to the Breadcrumbs component. The args object is set to an example configuration where paths prop is an array of breadcrumb paths.
*/