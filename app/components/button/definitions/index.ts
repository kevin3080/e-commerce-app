export const ALLOW_VARIANT = ['button', 'submit', 'reset'] as const
export const ALLOW_SIZE = ['small', 'medium', 'large'] as const

export type ButtonVariant = (typeof ALLOW_VARIANT)[number]
export type ButtonSize = (typeof ALLOW_SIZE)[number]

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type?: ButtonVariant
  size?: ButtonSize
}
