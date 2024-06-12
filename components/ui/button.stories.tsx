import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    onClick: action('default clicked'),
    className: 'shadow-lg',
    children: 'Default',
  },
};
