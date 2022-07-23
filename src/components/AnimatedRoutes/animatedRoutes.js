import React from 'react'
import Layout from '../Layout'
import Home from '../Home'
import About from '../about'
import Contact from '../Contact'
import ScrollPage from '../Scroll'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<ScrollPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes
