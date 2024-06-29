import type { Meta, StoryObj } from '@storybook/react';
import AvatarPic1 from '../../public/assets/avatar.jpg';

import AvatarGroup from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const mockUser = {
  uid: '1',
  username: 'Batman',
  avatarImgUrl: AvatarPic1,
};

const generateMockUsers = (count: number) => {
  return Array.from({ length: count }, () => ({ ...mockUser }));
};

export const TwoUsers: Story = {
  args: {
    users: generateMockUsers(2),
  },
};

export const ThreeUsers: Story = {
  args: {
    users: generateMockUsers(3),
  },
};

export const FourUsers: Story = {
  args: {
    users: generateMockUsers(4),
  },
};

export const FiveUsers: Story = {
  args: {
    users: generateMockUsers(5),
  },
};

export const SevenUsers: Story = {
  args: {
    users: generateMockUsers(7),
  },
};

export const TenUsers: Story = {
  args: {
    users: generateMockUsers(10),
  },
};
