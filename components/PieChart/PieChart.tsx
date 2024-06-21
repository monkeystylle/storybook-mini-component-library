import React from 'react';
import { getDegreeRotation } from './PieChart.helpers';
import { cn } from '@/lib/utils';

type PieChartProps = {
  /**
   * percentage of the pie chart , from 1 to 100
   */
  fillPercentage: number;
};

const PieChart = (props: PieChartProps) => {
  const { fillPercentage } = props;

  const degreeCircle2 = cn(
    'absolute top-0 h-1/2 w-full bg-gray-300  origin-[center_bottom] ',
    {
      'bg-blue-600': fillPercentage > 50,
      'bg-gray-300': fillPercentage <= 50,
    }
  );

  return (
    <div
      className="bg-gray-300 rounded-full relative overflow-hidden h-[192px] w-[192px]"
      style={{ filter: 'drop-shadow( 2px 4px 8px hsl(0deg 0% 0% / 0.4))' }}
    >
      <div className="absolute top-0 h-1/2 w-full bg-blue-600 origin-[center_bottom] " />
      <div
        className={degreeCircle2}
        style={{ transform: `rotate(${getDegreeRotation(fillPercentage)}deg)` }}
      />
    </div>
  );
};

export default PieChart;
