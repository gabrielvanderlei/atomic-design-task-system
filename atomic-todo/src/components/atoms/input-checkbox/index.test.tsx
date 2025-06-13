import { render, screen } from '@testing-library/react'
import { InputCheckbox } from './index'

describe('Atoms - InputCheckbox', () => {
  test('renders checkbox with correct name', () => {
    const handleChange = jest.fn()
    
    render(<InputCheckbox name="test-checkbox" value={false} onChange={handleChange} />)
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('name', 'test-checkbox')
  })

  test('renders unchecked checkbox when value is false', () => {
    const handleChange = jest.fn()
    
    render(<InputCheckbox name="test" value={false} onChange={handleChange} />)
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  test('renders checked checkbox when value is true', () => {
    const handleChange = jest.fn()
    
    render(<InputCheckbox name="test" value={true} onChange={handleChange} />)
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })
})