import { render, screen } from '@testing-library/react'
import { Typography } from '..'

describe('Typography', () => {
  it('should render as h1 with correct text', () => {
    render(<Typography variant="h1">Hello</Typography>)
    const element = screen.getByText('Hello')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('H1')
  })

  it('should render as pharagraph by default', () => {
    render(<Typography>Hello</Typography>)
    const element = screen.getByText('Hello')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('P')
  })

  it('should apply custom className', () => {
    render(
      <Typography variant="span" className="custom-class">
        Hello
      </Typography>
    )
    const element = screen.getByText('Hello')
    expect(element).toHaveClass('custom-class')
    expect(element.tagName).toBe('SPAN')
  })
})

describe('Typography fallback', () => {
  it('renders <p> when passed an invalid variant', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const invalidVariant = 'invalidTag' as any
    render(<Typography variant={invalidVariant}>Fallback</Typography>)

    const element = screen.getByText('Fallback')
    expect(element.tagName).toBe('P')
  })
})
