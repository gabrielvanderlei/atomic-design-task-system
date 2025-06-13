import { render, screen } from '@testing-library/react'
import { Header } from './index'

describe('Organisms - Header', () => {
  test('renders Header with all content', () => {
    render(
      <Header 
        title="My Application"
        subtitle="Task Manager"
        description="Manage all your daily tasks efficiently"
      />
    )
    
    expect(screen.getByText('My Application')).toBeInTheDocument()
    expect(screen.getByText('Task Manager')).toBeInTheDocument()
    expect(screen.getByText('Manage all your daily tasks efficiently')).toBeInTheDocument()
  })
})