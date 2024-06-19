import React from 'react';
import { cn } from '@/lib/utils';
import { getDegreeRotation } from '../PieChart/PieChart.helpers';

type RadialProgressBarProps = {
  /**
   * percentage of the radialProgressBar , from 1 to 100
   */
  fillPercentage: number;
};

const RadialProgressBar = (props: RadialProgressBarProps) => {
  const { fillPercentage } = props;

  // Normalize the percentage to be within 0 to 100
  const clampedPercentage = Math.min(100, Math.max(0, fillPercentage));

  // Define the degree circle rotation class
  const degreeCircle2 = cn(
    'absolute top-0 h-1/2 w-full bg-gray-300  origin-[center_bottom] ',
    {
      'bg-blue-600': fillPercentage > 50,
      'bg-gray-300': fillPercentage <= 50,
    }
  );

  return (
    <div className="bg-gray-300 rounded-full relative overflow-hidden h-32 w-32 ">
      <div className="absolute top-0 h-1/2 w-full bg-blue-600 origin-[center_bottom] " />
      <div
        className={degreeCircle2}
        style={{ transform: `rotate(${getDegreeRotation(fillPercentage)}deg)` }}
      />

      {/* center */}
      <div
        className={cn(
          ' bg-white flex justify-center items-center rounded-full h-[80%] w-[80%]',
          ' absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          ' text-lg font-medium'
        )}
      >
        {`${clampedPercentage}%`}
      </div>
    </div>
  );
};

export default RadialProgressBar;
