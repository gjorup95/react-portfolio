import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '.'

vi.mock('../../data/projects', async (importOriginal) => {
  const original = await importOriginal<typeof import('../../data/projects')>()
  const [first, ...rest] = original.projects
  return {
    ...original,
    projects: [
      { ...first, quote: { text: 'Sample quote text', name: 'Sample Person', role: 'Sample role' } },
      ...rest,
    ],
  }
})

test('shows a quote under a project only when one is provided', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  const quotes = screen.getAllByRole('figure')
  expect(quotes).toHaveLength(1)
  expect(quotes[0]).toHaveTextContent('“Sample quote text”')
  expect(quotes[0]).toHaveTextContent('Sample Person, Sample role')
})
