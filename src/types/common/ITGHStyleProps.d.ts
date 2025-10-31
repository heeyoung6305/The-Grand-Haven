import type { CSSProperties } from 'react';

export interface ITGHStyleProps {
  style?: CSSProperties;
  classNames?: { [key: string]: string };
  className?: string;
  w?: CSSProperties['width'];
}
