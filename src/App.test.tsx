import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders the header navigation with the landing page active', () => {
  render(
    <MemoryRouter initialEntries={['/react-portfolio']}>
      <App />
    </MemoryRouter>
  )
  const nav = screen.getByRole('navigation', { name: 'Main menu' })
  const link = (name: string) => within(nav).getByRole('link', { name })

  expect(link('Portfolio')).toHaveAttribute('href', '/react-portfolio')
  expect(link('About')).toHaveAttribute('href', '/react-portfolio/about')
  expect(link('Contact')).toHaveAttribute('href', '/react-portfolio/contact')
  expect(link('Portfolio')).toHaveClass('active')
  expect(link('About')).not.toHaveClass('active')
})

test('landing page shows the name and a card per project', () => {
  render(
    <MemoryRouter initialEntries={['/react-portfolio']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('heading', { level: 1, name: /Troels Berthel Gjørup.*Fullstack Developer.*Solution Architect/ })).toBeInTheDocument()
  expect(screen.getAllByRole('button', { name: /show more/i })).toHaveLength(3)
})
