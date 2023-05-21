import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from '.RadioButton'; 

test('Radio button should be selectable', () => {
  // Render the radio button component
  const { getByLabelText } = render(<RadioButton label="Option 1" />);

  // Get the radio button element by its label
  const radioButton = getByLabelText('Option 1');

  // Assert that the radio button is not initially checked
  expect(radioButton).not.toBeChecked();

  // Simulate a click event to select the radio button
  fireEvent.click(radioButton);

  // Assert that the radio button is now checked
  expect(radioButton).toBeChecked();
});
