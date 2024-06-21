import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type ProgressBarProps = {
  /**
   * the percentage of how much of the bar =will fill
   */
  fillPercentage: number;
};

const ProgressBar = (props: ProgressBarProps) => {
  const { fillPercentage = 0 } = props;

  // Limit percentage to  100%
  const limitedFillPercentage = Math.min(fillPercentage, 100);

  const barClass = cva(['w-full h-10  rounded-md', `bg-gray-300`]);

  const barProgressClass = cva([
    'h-full rounded-md transition-all ease-linear',
    `bg-blue-600`,
  ]);

  return (
    <div
      className={barClass()}
      style={{ filter: 'drop-shadow( 2px 4px 8px hsl(0deg 0% 0% / 0.15))' }}
    >
      <div
        className={barProgressClass()}
        style={{ width: `${limitedFillPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
