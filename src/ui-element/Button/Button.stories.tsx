import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ChevronLeft, SideBarIcon } from '../../icons';

const meta: Meta<typeof Button> = {
  title: 'UI-element/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div className='flex w-[300px] bg-gray-300 p-4'>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary button',
    color: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    color: 'secondary'
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    outline: true
  },
};

export const Icon: Story = {
  args: {
    children: 'Button',
    icon: <ChevronLeft />,
  },
};

export const Active: Story = {
  args: {
    icon: <SideBarIcon />,
    active: true,
    size: 'large'
  },
};



