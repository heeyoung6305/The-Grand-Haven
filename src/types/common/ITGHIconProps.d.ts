import type { ITGHStyleProps } from '@/types';

export interface ITGHIconProps extends ITGHStyleProps {
  /** icon key 값, @/assets/image 내 export name 을 그대로 사욜한다. */
  icon: string;
  width?: number;
  height?: number;

  /** next/image size props */
  sizes?: string; // 	sizes="(max-width: 768px) 100vw, 33vw"
  onClick?: (e?: ReactMouseEvent<HTMLImageElement>) => void;
  onMouseDown?: (e: ReactMouseEvent<HTMLImageElement>) => void;
}
