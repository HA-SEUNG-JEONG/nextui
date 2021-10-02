import * as React from 'react';
import { IconProps } from './index';
import { useTheme } from '@nextui-org/react';

const VolumeUp: React.FC<IconProps> = ({
  fill,
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
      <path
        fill={fill || theme.palette.foreground}
        d="M16,21c3.527-1.547,5.999-4.909,5.999-9S19.527,4.547,16,3v2c2.387,1.386,3.999,4.047,3.999,7S18.387,17.614,16,19V21z"
      ></path>
      <path
        fill={fill || theme.palette.foreground}
        d="M16 7v10c1.225-1.1 2-3.229 2-5S17.225 8.1 16 7zM4 17h2.697L14 21.868V2.132L6.697 7H4C2.897 7 2 7.897 2 9v6C2 16.103 2.897 17 4 17z"
      ></path>
    </svg>
  );
};

export default VolumeUp;
