import type { Meta, StoryObj } from '@storybook/react';

import PieChart from './PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Components/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PieChart>;

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

export const Empty: Story = {
  args: {
    fillPercentage: 0,
  },
};
