import classNames from 'classnames';
import { ButtonHTMLAttributes, memo } from 'react'

import './Button.tailwind.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accepts a component or a string as a child */
  children?: JSX.Element | string;
  /** Button with transparent background and border and text according to its variant color */
  outline?: boolean;
  /** Takes the full width of the container */
  fullWidth?: boolean;
  /** Indicates the type of button */
  typeButton?: 'button' | 'reset' | 'submit';
  /** Accepts an icon that is positioned to the left */
  icon?: JSX.Element;
  /** color button */
  color?: 'primary' | 'secondary'
  /** indicates that the button is active */
  active?: boolean;
  /** size button */
  size?: 'normal' | 'large';
}

const Button = ({
  children,
  outline = false,
  fullWidth,
  icon, 
  color = 'primary', 
  typeButton,
  active,
  size = 'normal',
  className,
  ...restOfProps
}: ButtonProps) => {
  const classesButton = classNames('button', {
    'w-full': fullWidth,
    [`button-color-${color}`]: color && !outline,
    [`button-color-outline-${color}`]: color && outline,
    [`button-size-${size}`]: size,
    'button-active': active,
    '!px-[10px]': icon && children === undefined
  }, className)

  return (
    <button className={classesButton} type={typeButton} {...restOfProps}>
      {icon}
      {typeof children === 'string' ? <span>{children}</span> : children}
    </button>
  )
}

export default memo(Button);