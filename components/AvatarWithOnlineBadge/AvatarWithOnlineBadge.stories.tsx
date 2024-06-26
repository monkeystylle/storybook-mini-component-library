import type { Meta, StoryObj } from '@storybook/react';

import AvatarWithOnlineBadge from './AvatarWithOnlineBadge';
import AvatarPic1 from '../../public/assets/avatar.jpg';

const meta: Meta<typeof AvatarWithOnlineBadge> = {
  title: 'Components/AvatarWithOnlineBadge',
  component: AvatarWithOnlineBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AvatarWithOnlineBadge>;

export const Online: Story = {
  args: {
    size: 'medium',
    imageUrl: AvatarPic1,
    userName: 'Batman',
    isOnline: true,
  },
};

export const Offline: Story = {
  args: {
    size: 'medium',
    imageUrl: AvatarPic1,
    userName: 'Batman',
    isOnline: false,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    imageUrl: AvatarPic1,
    userName: 'Batman',
    isOnline: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    imageUrl: AvatarPic1,
    userName: 'Batman',
    isOnline: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    imageUrl: AvatarPic1,
    userName: 'Batman',
    isOnline: true,
  },
};

export const NoImageUrlSmall: Story = {
  args: {
    size: 'small',
    userName: 'Batman',
    isOnline: true,
  },
};

export const NoImageUrlMedium: Story = {
  args: {
    size: 'medium',
    userName: 'Batman',
    isOnline: true,
  },
};

export const NoImageUrlLarge: Story = {
  args: {
    size: 'large',
    userName: 'Batman',
    isOnline: true,
  },
};
