import React from 'react';

type SliderProps = {
  /**
   * label description for the slider
   */
  label: string;
  /**
   * the minimum value for the slider
   */
  min: number;
  /**
   * the maximum value for the slider
   */
  max: number;
  /**
   * the current value of the slider
   */
  value: number;
  /**
   * handler for the slider value change
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Slider = (props: SliderProps) => {
  const { label, min, max, value, onChange } = props;

  const id = React.useId();

  return (
    <div className="flex flex-col items-center gap-2">
      <label htmlFor={id} className="text-base font-medium ">
        {label}
      </label>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="slider"
      />
    </div>
  );
};

export default Slider;
