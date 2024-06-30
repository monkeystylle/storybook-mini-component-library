import { cn } from '@/lib/utils';
import React from 'react';

interface SwitchButtonGroupProps {
  /**
   * options to display as toggle buttons
   */
  options: string[];
  /**
   * currently active option
   */
  activeOption: string;
  /**
   * handler for selecting option
   */
  onOptionSelect: (selectedOption: string) => void;
}

const SwitchButtonGroup = (props: SwitchButtonGroupProps) => {
  const { options, activeOption, onOptionSelect } = props;

  const switchContainerClass = cn(
    'flex items-center justify-center ',
    'rounded-xl w-fit p-1 bg-gray-300 ',
    'drop-shadow'
  );

  return (
    <div className={switchContainerClass}>
      {options.map(option => (
        <button
          className={cn(
            'flex items-center justify-center ',
            'text-sm font-semibold p-2 w-fit rounded-lg ',
            {
              'bg-blue-500 text-white customBoxShadow': option === activeOption,
            }
          )}
          key={option}
          onClick={() => onOptionSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SwitchButtonGroup;
