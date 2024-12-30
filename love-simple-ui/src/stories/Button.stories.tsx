import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Defines the style of the button.',
      table: {
        type: { summary: "'primary' | 'secondary'" },
        defaultValue: { summary: 'primary' },
      },
    },
    className: {
      control: 'text',
      description: 'Custom TailwindCSS classes to override or extend styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function to handle button click events.',
      table: {
        type: { summary: '() => void' },
      },
    },
    children: {
      control: 'text',
      description: 'Content of the button.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable button component with primary and secondary variants.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const WithCustomStyles: Story = {
  args: {
    variant: 'primary',
    children: 'Custom Button',
    className: 'bg-purple-500 hover:bg-purple-600 text-white',
  },
};
