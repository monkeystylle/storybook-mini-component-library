import type { Meta, StoryObj } from '@storybook/react';

import SlimProgressBar from './SlimProgressBar';

const meta: Meta<typeof SlimProgressBar> = {
  title: 'Components/SlimProgressBar',
  component: SlimProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: '288px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SlimProgressBar>;

export const Default: Story = {
  args: {
    fillPercentage: 40,
  },
};

export const EmptyBar: Story = {
  args: {},
};

export const FullBar: Story = {
  args: {
    fillPercentage: 100,
  },
};
