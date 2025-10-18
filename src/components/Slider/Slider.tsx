import React from 'react';
import clsx from 'clsx';

import styles from './Slider.module.css';

interface SliderPropsType {
  className?: string;
  [key: string]: unknown
}

function Slider({ className, ...delegated }: SliderPropsType) {
  return (
    <input
      type="range"
      className={clsx(styles.slider, className)}
      {...delegated}
    />
  );
}

export default Slider;
