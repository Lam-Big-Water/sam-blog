import React from 'react';
import clsx from 'clsx';

import styles from './VisuallyHidden.module.css';

interface VisuallyHidden {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

function VisuallyHidden({
  as: Element = 'span',
  className,
  children,
  ...delegated
}: VisuallyHidden) {
  return (
    <Element
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      {children}
    </Element>
  );
}

export default VisuallyHidden;
