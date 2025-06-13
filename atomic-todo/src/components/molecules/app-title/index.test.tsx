import { render, screen } from '@testing-library/react'
import { AppTitle } from './index'

describe('Molecules - App Title', () => {
  test('renders App Title', () => {
    render(<AppTitle title={'Test Title'} subtitle={'Test Subtitle'} />)
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })
})