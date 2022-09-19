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
        <Route path="/react-portfolio" element={<Layout />}>
          <Route path="/react-portfolio" index element={<Home />} />
          <Route path="/react-portfolio/about" element={<About />} />
          <Route path="/react-portfolio/portfolio" element={<ScrollPage />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes
