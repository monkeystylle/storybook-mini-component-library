import type { Meta, StoryObj } from '@storybook/react';

import RadialProgressBar from './RadialProgressBar';

const meta: Meta<typeof RadialProgressBar> = {
  title: 'Components/RadialProgressBar',
  component: RadialProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadialProgressBar>;

export const Default: Story = {
  args: {
    fillPercentage: 13,
  },
};

export const Quarter: Story = {
  args: {
    fillPercentage: 25,
  },
};

export const Half: Story = {
  args: {
    fillPercentage: 50,
  },
};

export const Full: Story = {
  args: {
    fillPercentage: 100,
  },
};

export const Empy: Story = {
  args: {
    fillPercentage: 0,
  },
};
