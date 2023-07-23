import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { MagicIcon } from '../../icons';

const meta: Meta<typeof Input> = {
  title: 'UI-element/Input',
  component: Input,
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

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    placeholder: 'Insertar Prompt',
    iconTwo: <MagicIcon />,
    onActionButton: (value: string) => {alert(value)} 
  },
};


