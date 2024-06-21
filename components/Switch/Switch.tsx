import React from 'react';
import { cn } from '@/lib/utils';

type SwitchProps = {
  /**
   *  value of the toggle switch
   */
  value: boolean;
  /**
   * change handler for the switch
   */
  onChange: (value: boolean) => void;
};

const Switch = (props: SwitchProps) => {
  const { value = false, onChange } = props;

  return (
    <button
      className={cn(
        'box-content cursor-pointer',
        'w-[60px] h-[30px] rounded-[1000px] p-1  ',
        value ? 'bg-blue-500' : 'bg-gray-300'
      )}
      style={{ filter: 'drop-shadow( 2px 4px 8px hsl(0deg 0% 0% / 0.15))' }}
      onClick={() => onChange(!value)}
    >
      <span
        className="block h-full aspect-square rounded-full bg-white"
        style={{
          transition: 'transform 300ms',
          transform: `translateX(${value ? '100%' : '0%'})`,
          boxShadow: '2px 4px 8px hsl(0deg 0% 0% / 0.1)',
        }}
      />
    </button>
  );
};

export default Switch;
