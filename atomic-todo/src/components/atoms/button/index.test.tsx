import { render, screen } from '@testing-library/react'
import { Button } from './index'
import userEvent from '@testing-library/user-event'

describe('Atoms - Button', () => {
  test('renders button', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('test button onClick', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Test</Button>)
    
    const button = screen.getByText('Test')
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})