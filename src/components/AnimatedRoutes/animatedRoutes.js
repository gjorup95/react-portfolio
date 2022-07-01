import React, { useState } from 'react'
import Layout from '../Layout'
import Home from '../Home'
import About from '../about'
import Contact from '../Contact'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const AnimatedRoutes = () => {
  const [loader, setLoader] = useState({home: false, about: false, contact: false})
  const location = useLocation()

  return (
   

    
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home  />} />
          <Route path="about" element={<About loadStatus={loader.about}/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes
