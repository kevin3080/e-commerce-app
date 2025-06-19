import { createElement, type HTMLAttributes } from 'react'

const ALLOW_VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'label',
  'strong',
  'small',
  'blockquote',
] as const

type TypographyVariants = (typeof ALLOW_VARIANTS)[number]

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariants
  children: React.ReactNode
}

export const Typography = ({
  variant = 'p',
  children,
  ...props
}: TypographyProps) => {
  if (!ALLOW_VARIANTS.includes(variant)) {
    return createElement('p', props, children)
  }

  return createElement(variant, props, children)
}
