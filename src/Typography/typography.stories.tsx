import React from 'react';
import { Story, Meta } from '@storybook/react';
import Typography, { TypographyProps } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'Heading 1',
};

export const BodyText = Template.bind({});
BodyText.args = {
  variant: 'body',
  children: 'Some body text',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  variant: 'caption',
  children: 'Caption text',
  className: 'custom-class',
};

/*
the Heading1 story represents the h1 variant of the Typography component with the text "Heading 1". Similarly, the BodyText story represents the body variant with the text "Some body text". The CustomClassName story demonstrates using a custom CSS class (custom-class) along with the caption variant.
*/