import { render, screen } from '@testing-library/react'
import { TaskItem } from './index'
import { Task } from "@/interfaces/task";

const mockTask:Task = {
  name: 'Test Task',
  completed: false
}

const mockTaskCompleted:Task = {
  name: 'Completed Task', 
  completed: true
}

describe('Molecules - Task Item', () => {
  test('renders Task Item', () => {
    const handleCheckTask = jest.fn()
    
    render(
      <TaskItem 
        index={0} 
        name="test-task" 
        task={mockTask} 
        onCheckTask={handleCheckTask} 
      />
    )
    
    expect(screen.getByText('Test Task')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('shows completed task item', () => {
    const handleCheckTask = jest.fn()
    
    render(
      <TaskItem 
        index={0} 
        name="completed-task" 
        task={mockTaskCompleted} 
        onCheckTask={handleCheckTask} 
      />
    )
    
    expect(screen.getByText('Completed Task')).toBeInTheDocument()
    expect(screen.getByText('- Completed!')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})