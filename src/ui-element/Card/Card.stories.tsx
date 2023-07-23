import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const meta: Meta<typeof Card > = {
  title: 'UI-element/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div className='flex w-[600px] p-4 bg-slate-50'>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: 'Basic Card Text',
    noBorder: true
  },
};

export const WithHeader: Story = {
  args: {
    children: <>
      <CardHeader>Card Header</CardHeader>
      Card Text Content
    </>,
    noBorder: true
  },
};

const WithContentTemplate = () => {
  return(
    <div className='flex w-full gap-4'>
      <Card className='basis-1/2' noBorder>
        <CardHeader>Card Header</CardHeader>
        <CardContent>Card Text Content</CardContent>
      </Card>
      <Card className='basis-1/2' noShadow>
        <CardHeader>Card Header</CardHeader>
        <CardContent bgGray>Card Text Content</CardContent>
      </Card>
    </div>
  )
}

export const WithContent = {
  render: () => <WithContentTemplate />
};

const WithFooterTemplate = () => {
  return(
    <div className='flex w-full gap-4'>
      <Card className='basis-1/2' noBorder>
        <CardHeader>Card Header</CardHeader>
        <CardContent>Card Text Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      <Card className='basis-1/2' noShadow>
        <CardHeader>Card Header</CardHeader>
        <CardContent bgGray noRounded>Card Text Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </div>
  )
}

export const WithFooter = {
  render: () => <WithFooterTemplate />
}
