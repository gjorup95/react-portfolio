import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders the sidebar navigation on the home page', () => {
  render(
    <MemoryRouter initialEntries={['/react-portfolio']}>
      <App />
    </MemoryRouter>
  )
  const hrefs = screen.getAllByRole('link').map((a) => a.getAttribute('href'))
  expect(hrefs).toEqual(
    expect.arrayContaining([
      '/react-portfolio/about',
      '/react-portfolio/contact',
      '/react-portfolio/portfolio',
    ])
  )
  expect(screen.getByAltText('Profile')).toBeInTheDocument()
})
