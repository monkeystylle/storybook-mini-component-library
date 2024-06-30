import type { Meta, StoryObj } from '@storybook/react';

import SwitchButtonGroup from './SwitchButtonGroup';
import { useState } from 'react';

const meta: Meta<typeof SwitchButtonGroup> = {
  title: 'Components/SwitchButtonGroup',
  component: SwitchButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SwitchButtonGroup>;

export const TwoSwitch: Story = {
  parameters: {},
  args: {
    options: ['Monthly', 'Yearly'],
    activeOption: 'Monthly',
  },
  render: args => {
    //state for option on the ToggleButton
    const [selectedOption, setSelectedOption] = useState(args.activeOption);

    //handler for toggle button select
    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
    };

    return (
      <SwitchButtonGroup
        options={args.options}
        onOptionSelect={handleOptionSelect}
        activeOption={selectedOption}
      />
    );
  },
};

export const ThreeSwitch: Story = {
  parameters: {},
  args: {
    options: ['Monthly', 'Yearly', 'Daily'],
    activeOption: 'Yearly',
  },
  render: args => {
    //state for option on the ToggleButton
    const [selectedOption, setSelectedOption] = useState(args.activeOption);

    //handler for toggle button select
    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
    };

    return (
      <SwitchButtonGroup
        options={args.options}
        onOptionSelect={handleOptionSelect}
        activeOption={selectedOption}
      />
    );
  },
};
