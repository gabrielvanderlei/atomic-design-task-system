import { render, screen } from '@testing-library/react'
import { TextH1 } from './index'

describe('Atoms - Text H1', () => {
  test('renders Text H1', () => {
    render(<TextH1>Test</TextH1>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})