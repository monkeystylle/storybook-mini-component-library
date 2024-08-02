import type { Meta, StoryObj } from '@storybook/react';

import DividerWithText from './DividerWithText';

const meta: Meta<typeof DividerWithText> = {
  title: 'Components/DividerWithText',
  component: DividerWithText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: '500px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DividerWithText>;

export const Default: Story = {
  args: {
    text: 'Divider Text',
  },
};
