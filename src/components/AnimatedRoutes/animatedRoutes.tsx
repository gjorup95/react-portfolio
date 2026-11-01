import { lazy, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../Home'

// Home is the landing page, so it stays in the main bundle.
const loadAbout = () => import('../about')
const loadContact = () => import('../Contact')

const About = lazy(loadAbout)
const Contact = lazy(loadContact)

const prefetchPages = () => {
  void loadAbout()
  void loadContact()
}

const AnimatedRoutes = () => {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(prefetchPages, { timeout: 2000 })
      return () => cancelIdleCallback(id)
    }
    const id = setTimeout(prefetchPages, 1000)
    return () => clearTimeout(id)
  }, [])

  return (
    <Routes>
      <Route path="/react-portfolio" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* The portfolio now lives on the landing page; keep old links working. */}
        <Route path="portfolio" element={<Navigate to="/react-portfolio" replace />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
export default AnimatedRoutes
