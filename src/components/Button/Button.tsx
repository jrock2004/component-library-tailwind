import React, { ReactElement, SyntheticEvent } from 'react';

export const Button = ({
  label,
  size = 'medium',
  type = 'button',
  variant = 'primary',
  ...props
}: TButton): ReactElement => {
  let classes = `border rounded`;

  if (variant === 'primary') {
    classes += ` border-primary bg-primary text-slate-900`;
  } else if (variant === 'secondary') {
    classes += ` border-primary text-primaryShade`;
  }

  if (size === 'small') {
    classes += ` px-2 py-1 text-sm`;
  } else if (size === 'medium') {
    classes += ` px-3 py-2 text-lg`;
  } else if (size === 'block') {
    classes += ` px-4 py-3 text-xl w-full`;
  }

  return (
    <button className={classes} type={type} {...props}>
      {label}
    </button>
  );
};

export type TButton = {
  /**
   * The content of the button.
   */
  label: string;
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  size?: 'small' | 'medium' | 'block';
  /**
   * The content of the button.
   * @default 'button'
   */
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
};

export default Button;
