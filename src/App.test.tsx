import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders the sidebar navigation with accessible links', () => {
  render(
    <MemoryRouter initialEntries={['/react-portfolio']}>
      <App />
    </MemoryRouter>
  )
  const nav = screen.getByRole('navigation', { name: 'Hovedmenu' })
  const hrefFor = (name: string) =>
    within(nav).getByRole('link', { name }).getAttribute('href')

  expect(hrefFor('Forside')).toBe('/react-portfolio')
  expect(hrefFor('Om mig')).toBe('/react-portfolio/about')
  expect(hrefFor('Kontakt')).toBe('/react-portfolio/contact')
  expect(hrefFor('Portfolio')).toBe('/react-portfolio/portfolio')
  expect(within(nav).getByRole('link', { name: 'Forside' })).toHaveClass('active')
  expect(within(nav).getByRole('link', { name: 'Om mig' })).not.toHaveClass('active')
})
