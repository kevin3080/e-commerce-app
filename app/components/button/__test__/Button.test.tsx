/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import { Button } from '..'
import { validateButtonProps } from '../validations/validateButtonProps'

describe('render Button', () => {
  it('should render a button with default values if type and size is not defined', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button button__medium')
    expect(button).toHaveTextContent('Click me')
  })

  it('should render a button with custom type and size', () => {
    render(
      <Button type="submit" size="large">
        Click me
      </Button>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button button__large')
    expect(button).toHaveTextContent('Click me')
  })

  it('should render a button with default values if type or size is invalid', () => {
    const validType: any = 'invalid'
    const validSize: any = 'other'
    render(
      <Button type={validType} size={validSize}>
        Click me
      </Button>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button button__medium')
    expect(button).toHaveTextContent('Click me')
  })
})

describe('validateButtonProps', () => {
  it('returns defaults when values are invalid', () => {
    const result = validateButtonProps('invalid', 'big')
    expect(result).toEqual({ validType: 'button', validSize: 'medium' })
  })

  it('returns valid values', () => {
    const result = validateButtonProps('submit', 'small')
    expect(result).toEqual({ validType: 'submit', validSize: 'small' })
  })
})
