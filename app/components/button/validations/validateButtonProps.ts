import {
  type ButtonVariant,
  type ButtonSize,
  ALLOW_VARIANT,
  ALLOW_SIZE,
} from '../definitions'

export function validateButtonProps(
  type?: string,
  size?: string
): { validType: ButtonVariant; validSize: ButtonSize } {
  const validType = ALLOW_VARIANT.includes(type as ButtonVariant)
    ? (type as ButtonVariant)
    : 'button'

  const validSize = ALLOW_SIZE.includes(size as ButtonSize)
    ? (size as ButtonSize)
    : 'medium'

  return { validType, validSize }
}
