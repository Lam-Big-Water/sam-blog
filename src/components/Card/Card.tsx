import React from 'react';
import clsx from 'clsx';

import styles from './Card.module.css';

interface CardPropsType {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

function Card({ children, className, ...delegated }: CardPropsType) {
  return (
    <div className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </div>
  );
}

export default Card;
