import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from './TextField';

storiesOf('TextField', module)
  .add('Default', () => (
    <TextField label="Name" value="" onChange={() => {}} />
  ))
  .add('With Value', () => (
    <TextField label="Email" value="example@example.com" onChange={() => {}} />
  ));
