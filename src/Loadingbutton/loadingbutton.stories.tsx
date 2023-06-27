import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingButton from './LoadingButton';

// Story: Loading Button
storiesOf('LoadingButton', module)
  .add('Default', () => (
    <LoadingButton onClick={handleClick}>Submit</LoadingButton>
  ))
  .add('Loading', () => (
    <LoadingButton onClick={handleClick} isLoading>
      Submit
    </LoadingButton>
  ));

// Mock click handler for demonstration
const handleClick = async () => {
  // Simulating an asynchronous action
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Button clicked');
};

/*
1)The 'Default' story represents the default state of the button without the loading state. It renders the LoadingButton component without the isLoading prop set to true.
2)The 'Loading' story represents the loading state of the button. It renders the LoadingButton component with the isLoading prop set to true.

To run this story file, make sure you have Storybook set up in your React project and the necessary dependencies installed.

The handleClick function is a mock click handler provided for demonstration purposes. It simulates an asynchronous action by using a setTimeout function. You can replace it with your own click handler logic.

By using this story file, you can visualize and interact with the LoadingButton component in Storybook, allowing you to preview different states and behaviors of the component without needing to navigate through your entire application.
*/