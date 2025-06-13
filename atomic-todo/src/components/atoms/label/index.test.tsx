import { render, screen } from '@testing-library/react'
import { Label } from './index'

describe('Atoms - Label', () => {
  test('renders label', () => {
    render(<Label>Test</Label>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})