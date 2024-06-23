import type { Meta, StoryObj } from '@storybook/react';

import StarRating from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'Components/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Rating0: Story = {
  args: {
    rating: 0,
  },
};

export const Rating1: Story = {
  args: {
    rating: 1,
  },
};

export const Rating2: Story = {
  args: {
    rating: 2,
  },
};

export const Rating3: Story = {
  args: {
    rating: 3,
  },
};

export const Rating4: Story = {
  args: {
    rating: 4,
  },
};

export const Rating5: Story = {
  args: {
    rating: 5,
  },
};
