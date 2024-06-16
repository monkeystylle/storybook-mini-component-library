import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type SlimProgressbarProps = {
  /**
   * the percentage of how much of the bar =will fill
   */
  fillPercentage: number;
};

const SlimProgressBar = (props: SlimProgressbarProps) => {
  const { fillPercentage = 0 } = props;

  // Limit percentage to  100%
  const limitedFillPercentage = Math.min(fillPercentage, 100);

  const barClass = cva(['w-full h-1  rounded-sm', `bg-gray-300`]);

  const barProgressClass = cva([
    'h-full rounded-sm transition-all ease-linear',
    `bg-blue-600`,
  ]);

  return (
    <div className={barClass()}>
      <div
        className={barProgressClass()}
        style={{ width: `${limitedFillPercentage}%` }}
      ></div>
    </div>
  );
};

export default SlimProgressBar;
