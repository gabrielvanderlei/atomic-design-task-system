import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskNewItem } from './index'

describe('Molecules - Task New Item', () => {
  test('renders Task New Item', () => {
    const handleCreateTask = jest.fn()
    
    render(
      <TaskNewItem 
        name="new-task" 
        value="" 
        onCreateTask={handleCreateTask} 
      />
    )
    
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText('Create Task')).toBeInTheDocument()
  })

  test('creates task when typing and clicking button', async () => {
    const handleCreateTask = jest.fn()
    const user = userEvent.setup()
    
    render(
      <TaskNewItem 
        name="new-task" 
        value="" 
        onCreateTask={handleCreateTask} 
      />
    )
    
    const input = screen.getByRole('textbox')
    const button = screen.getByText('Create Task')
    
    await user.type(input, 'New Task Name')
    await user.click(button)
    
    expect(handleCreateTask).toHaveBeenCalledWith('New Task Name')
    expect(handleCreateTask).toHaveBeenCalledTimes(1)
  })
})