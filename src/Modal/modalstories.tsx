import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <p>Modal content goes here</p>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  onClose: () => {},
};

/*
In this example, we're using Storybook to create a story for the Modal component. The Template function is the main component that renders the Modal component and handles its open and close functionality using the useState hook.

The Template function is then bound to the Default story by calling Template.bind({}). The Default story represents the default state of the Modal component and sets the initial values for the isOpen and onClose props.

You can add more stories to this file if you want to showcase different variations or use cases of the Modal component. For example, you can create a LargeModal story with a larger modal size or a CustomContentModal story with custom content inside the modal.

To run and view the stories, make sure you have Storybook set up in your project. Then, you can run npm run storybook or yarn storybook in your project's directory to start the Storybook server. The stories will be accessible through the Storybook UI in your browser, where you can interact with and view different variations of the Modal component.
*/