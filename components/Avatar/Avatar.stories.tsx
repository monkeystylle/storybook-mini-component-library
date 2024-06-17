import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

import AvatarPic1 from '../../public/assets/avatar.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imageUrl: AvatarPic1,
    userName: 'Batman',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    imageUrl: AvatarPic1,
    userName: 'Batman',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    imageUrl: AvatarPic1,
    userName: 'Batman',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    imageUrl: AvatarPic1,
    userName: 'Batman',
  },
};

export const NoImageUrlSmall: Story = {
  args: {
    size: 'small',
    userName: 'Batman',
  },
};

export const NoImageUrlMedium: Story = {
  args: {
    size: 'medium',
    userName: 'Batman',
  },
};

export const NoImageUrlLarge: Story = {
  args: {
    size: 'large',
    userName: 'Batman',
  },
};
