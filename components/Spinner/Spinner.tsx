import React from 'react';
import { cn } from '@/lib/utils';

type SpinnerProps = {};

const Spinner = (props: SpinnerProps) => {
  return (
    <div
      className={cn(
        'h-16 w-16',
        'border-[6px] border-solid border-gray-200 border-t-blue-400  rounded-full',
        'animate-spin'
      )}
    />
  );
};

export default Spinner;
