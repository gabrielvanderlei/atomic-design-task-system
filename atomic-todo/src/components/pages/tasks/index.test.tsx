import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskPage } from './index'

beforeEach(() => {
  localStorage.clear()
})

describe('Pages - Task Page', () => {
  test('renders Task Page with initial task', () => {
    render(<TaskPage />)
    
    expect(screen.getByText('Tasks')).toBeInTheDocument()
    expect(screen.getByText('Register your task')).toBeInTheDocument()
    expect(screen.getByText('Just click in "create new task"')).toBeInTheDocument()
    
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText('Create Task')).toBeInTheDocument()
  })

  test('creates new task when typing and clicking Create Task', async () => {
    const user = userEvent.setup()
    render(<TaskPage />)
    
    const input = screen.getByRole('textbox')
    const createButton = screen.getByText('Create Task')
    
    await user.type(input, 'New Task from Page')
    await user.click(createButton)
    
    expect(screen.getByText('New Task from Page')).toBeInTheDocument()
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getAllByText('Remove')).toHaveLength(2)
  })

  test('removes task when clicking Remove button', async () => {
    const user = userEvent.setup()
    render(<TaskPage />)
    
    expect(screen.getByText('test')).toBeInTheDocument()
    
    const removeButton = screen.getByText('Remove')
    await user.click(removeButton)
    
    expect(screen.queryByText('test')).not.toBeInTheDocument()
    expect(screen.queryByText('Remove')).not.toBeInTheDocument()
  })

  test('full workflow: create, check and remove tasks', async () => {
    const user = userEvent.setup()
    render(<TaskPage />)
    
    const input = screen.getByRole('textbox')
    const createButton = screen.getByText('Create Task')
    
    await user.type(input, 'Workflow Test Task')
    await user.click(createButton)
    
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText('Workflow Test Task')).toBeInTheDocument()
    
    const checkboxes = screen.getAllByRole('checkbox')
    await user.click(checkboxes[0])
    
    const removeButtons = screen.getAllByText('Remove')
    await user.click(removeButtons[1])
    
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.queryByText('Workflow Test Task')).not.toBeInTheDocument()
    expect(screen.getAllByText('Remove')).toHaveLength(1)
  })
})