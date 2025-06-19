import type { ButtonProps } from './definitions'
import { validateButtonProps } from './validations/validateButtonProps'

export const Button = ({
  children,
  className,
  type = 'button',
  size,
  ...rest
}: ButtonProps) => {
  const { validType, validSize } = validateButtonProps(type, size)

  return (
    <button
      className={`button button__${validSize} ${className}`}
      type={validType}
      {...rest}
    >
      {children}
    </button>
  )
}
