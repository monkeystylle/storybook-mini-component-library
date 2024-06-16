import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
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
type Story = StoryObj<typeof ProgressBar>;

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
