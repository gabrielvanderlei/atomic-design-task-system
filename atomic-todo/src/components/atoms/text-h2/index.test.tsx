import { render, screen } from '@testing-library/react'
import { TextH2 } from './index'

describe('Atoms - Text H2', () => {
  test('renders Text H2', () => {
    render(<TextH2>Test</TextH2>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})