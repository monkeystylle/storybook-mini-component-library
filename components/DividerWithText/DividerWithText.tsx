import { cn } from '@/lib/utils';
import React from 'react';

interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * text content of bet the divider
   */
  text: string;
}

const dividerClass = cn(
  'mx-auto  flex w-full items-center justify-evenly ',
  'before:mr-4 before:block before:h-px before:flex-grow before:bg-gray-400 ',
  'after:ml-4 after:block after:h-px after:flex-grow after:bg-gray-400 '
);

const DividerWithText = (props: DividerProps) => {
  const { text } = props;

  return <div className={dividerClass}>{text}</div>;
};

export default DividerWithText;
