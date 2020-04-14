import React from 'react';
import { COLORS } from '../../../../theme';

interface ProtectIconProps {
  fillColor?: string;
  size?: 'sm' | 'lg';
}

const ProtectIcon: React.FC<ProtectIconProps> = ({ fillColor, size }) => (
  <svg
    width={(size || 'sm') === 'sm' ? '22' : '56'}
    height={(size || 'sm') === 'sm' ? '24' : '73'}
    viewBox="0 0 22 24"
    fill="none"
  >
    >
    <path
      d="M21.143 3.021L11.143 0.021C11.049 -0.007 10.95 -0.007 10.856 0.021L0.856 3.021C0.646 3.084 0.5 3.279 0.5 3.5V14.5C0.5 18.922 7.242 22.854 10.852 23.978C10.899 23.993 10.951 24 11 24C11.049 24 11.101 23.993 11.147 23.978C14.758 22.854 21.5 18.922 21.5 14.5V3.5C21.5 3.279 21.356 3.084 21.143 3.021ZM20.5 14.5C20.5 18.011 14.937 21.703 11 22.976C7.063 21.703 1.5 18.011 1.5 14.5V3.872L11 1.022L20.5 3.872V14.5ZM10.563 3.258L8.188 7.532L3.945 8.003C3.755 8.025 3.593 8.154 3.529 8.335C3.464 8.516 3.51 8.718 3.646 8.854L6.957 12.165L6.01 16.902C5.972 17.093 6.048 17.289 6.205 17.404C6.363 17.519 6.572 17.531 6.743 17.437L11 15.072L15.257 17.437C15.333 17.479 15.417 17.5 15.5 17.5C15.604 17.5 15.707 17.468 15.794 17.404C15.951 17.289 16.027 17.093 15.989 16.902L15.042 12.165L18.353 8.854C18.489 8.718 18.534 8.517 18.471 8.335C18.408 8.153 18.245 8.024 18.055 8.003L13.811 7.532L11.437 3.258C11.26 2.941 10.74 2.941 10.563 3.258ZM13.063 8.243C13.142 8.384 13.285 8.479 13.445 8.497L16.912 8.882L14.147 11.647C14.029 11.766 13.977 11.935 14.01 12.099L14.798 16.038L11.243 14.063C11.167 14.021 11.084 14 11 14C10.916 14 10.833 14.021 10.757 14.063L7.202 16.038L7.99 12.099C8.023 11.935 7.971 11.765 7.853 11.647L5.089 8.882L8.556 8.497C8.716 8.479 8.859 8.385 8.938 8.243L11 4.53L13.063 8.243Z"
      fill={fillColor || COLORS.PURPLE}
    />
  </svg>
);

export default ProtectIcon;
