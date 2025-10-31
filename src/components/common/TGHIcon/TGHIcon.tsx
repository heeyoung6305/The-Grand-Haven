import { Image } from '@mantine/core';
import { StaticImageData } from 'next/image';

import { icons } from '@/assets';

import type { ITGHIconProps } from '@/types';

type IconsType = {
  [key: string]: StaticImageData;
};

/**
 * TGH Icon 컴포넌트
 * @param width
 * @param height
 * @param style
 * @param icon
 * @param sizes
 * @param onClick
 * @param props
 * @constructor
 */
const TGHIcon = ({ width, height, style, icon, sizes, onClick, ...props }: ITGHIconProps) => (
  <Image
    w={width}
    style={style}
    h={height}
    sizes={sizes}
    src={(icons as IconsType)[icon].src}
    alt={icon}
    onClick={onClick}
    {...props}
  />
);

export default TGHIcon;
