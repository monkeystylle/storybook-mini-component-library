import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Switch from './Switch';

const SwitchWithHooks = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return <Switch value={isEnabled} onChange={setIsEnabled} />;
};

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
  render: args => {
    const [isEnabled, setIsEnabled] = useState(args.value);

    return <Switch value={isEnabled} onChange={setIsEnabled} />;
  },
};

export const ToggleOn: Story = {
  args: {
    value: true,
  },
  render: args => {
    const [isEnabled, setIsEnabled] = useState(args.value);

    return <Switch value={isEnabled} onChange={setIsEnabled} />;
  },
};

export const ToggleOff: Story = {
  args: {
    value: false,
  },
  render: args => {
    const [isEnabled, setIsEnabled] = useState(args.value);

    return <Switch value={isEnabled} onChange={setIsEnabled} />;
  },
};
