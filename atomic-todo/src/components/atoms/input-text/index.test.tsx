import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {InputText} from './index'

describe('Atoms - InputText', () => {
  test('renders input text', () => {
    const handleChange = jest.fn()
    
    render(<InputText value="" onChange={handleChange} />)
    
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('calls onChange when typing', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    
    render(<InputText value="" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    await user.type(input, 'Hello')
    
    expect(handleChange).toHaveBeenCalled()
    expect(handleChange).toHaveBeenCalledTimes(5) // Uma chamada para cada letra
  })
})