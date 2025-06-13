import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaskTemplate } from './index'
import { Task } from "@/interfaces/task"

const mockTasks: Task[] = [
  {
    name: 'Template Task',
    completed: false
  },
  {
    name: 'Completed Template Task',
    completed: true
  }
]

const mockEmptyTasks: Task[] = []

describe('Templates - Task Template', () => {
  test('renders Task Template with Header and TaskList', () => {
    const handleCreateTask = jest.fn()
    const handleRemoveTask = jest.fn()
    const handleCheckTask = jest.fn()
    
    render(
      <TaskTemplate 
        title="My Tasks"
        subtitle="Daily Tasks"
        description="Complete your daily tasks"
        tasks={mockEmptyTasks}
        onCreateTask={handleCreateTask}
        onRemoveTask={handleRemoveTask}
        onCheckTask={handleCheckTask}
      />
    )
    
    // Verifica se o Header está renderizado
    expect(screen.getByText('My Tasks')).toBeInTheDocument()
    expect(screen.getByText('Daily Tasks')).toBeInTheDocument()
    expect(screen.getByText('Complete your daily tasks')).toBeInTheDocument()
    
    // Verifica se o TaskList está renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText('Create Task')).toBeInTheDocument()
  })

  test('renders Task Template with tasks', () => {
    const handleCreateTask = jest.fn()
    const handleRemoveTask = jest.fn()
    const handleCheckTask = jest.fn()
    
    render(
      <TaskTemplate 
        title="Task Manager"
        subtitle="Your Tasks"
        description="Manage all your tasks here"
        tasks={mockTasks}
        onCreateTask={handleCreateTask}
        onRemoveTask={handleRemoveTask}
        onCheckTask={handleCheckTask}
      />
    )
    
    // Verifica Header
    expect(screen.getByText('Task Manager')).toBeInTheDocument()
    expect(screen.getByText('Your Tasks')).toBeInTheDocument()
    
    // Verifica TaskList com tasks
    expect(screen.getByText('Template Task')).toBeInTheDocument()
    expect(screen.getByText('Completed Template Task')).toBeInTheDocument()
    expect(screen.getByText('- Completed!')).toBeInTheDocument()
    expect(screen.getAllByText('Remove')).toHaveLength(2)
  })

  test('TaskList interactions work correctly', async () => {
    const handleCreateTask = jest.fn()
    const handleRemoveTask = jest.fn()
    const handleCheckTask = jest.fn()
    const user = userEvent.setup()
    
    render(
      <TaskTemplate 
        title="Interactive Tasks"
        subtitle="Test Tasks"
        description="Testing interactions"
        tasks={mockTasks}
        onCreateTask={handleCreateTask}
        onRemoveTask={handleRemoveTask}
        onCheckTask={handleCheckTask}
      />
    )
    
    // Testa remoção de task
    const removeButtons = screen.getAllByText('Remove')
    await user.click(removeButtons[0])
    
    expect(handleRemoveTask).toHaveBeenCalledWith(0)
    expect(handleRemoveTask).toHaveBeenCalledTimes(1)
  })
})