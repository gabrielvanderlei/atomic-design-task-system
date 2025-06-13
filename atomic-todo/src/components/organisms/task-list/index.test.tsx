import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskList } from './index'
import { Task } from "@/interfaces/task"

const mockTasks: Task[] = [
  {
    name: 'First Task',
    completed: false
  },
  {
    name: 'Second Task',
    completed: true
  }
]

const mockEmptyTasks: Task[] = []

describe('Organisms - Task List', () => {
  test('renders Task List with TaskNewItem', () => {
    const handleCreateTask = jest.fn()
    const handleRemoveTask = jest.fn()
    const handleCheckTask = jest.fn()
    
    render(
      <TaskList 
        tasks={mockEmptyTasks}
        onCreateTask={handleCreateTask}
        onRemoveTask={handleRemoveTask}
        onCheckTask={handleCheckTask}
      />
    )
    
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText('Create Task')).toBeInTheDocument()
  })

  test('renders Task List with multiple tasks', () => {
    const handleCreateTask = jest.fn()
    const handleRemoveTask = jest.fn()
    const handleCheckTask = jest.fn()
    
    render(
      <TaskList 
        tasks={mockTasks}
        onCreateTask={handleCreateTask}
        onRemoveTask={handleRemoveTask}
        onCheckTask={handleCheckTask}
      />
    )
    
    expect(screen.getByText('First Task')).toBeInTheDocument()
    expect(screen.getByText('Second Task')).toBeInTheDocument()
    expect(screen.getByText('- Completed!')).toBeInTheDocument()
    expect(screen.getAllByText('Remove')).toHaveLength(2)
  })

  test('calls onRemoveTask when Remove button is clicked', async () => {
    const handleCreateTask = jest.fn()
    const handleRemoveTask = jest.fn()
    const handleCheckTask = jest.fn()
    const user = userEvent.setup()
    
    render(
      <TaskList 
        tasks={mockTasks}
        onCreateTask={handleCreateTask}
        onRemoveTask={handleRemoveTask}
        onCheckTask={handleCheckTask}
      />
    )
    
    const removeButtons = screen.getAllByText('Remove')
    await user.click(removeButtons[0])
    
    expect(handleRemoveTask).toHaveBeenCalledWith(0)
    expect(handleRemoveTask).toHaveBeenCalledTimes(1)
  })
})