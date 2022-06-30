import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/about'
import Contact from './components/Contact'
import AnimatedRoutes from './components/AnimatedRoutes/animatedRoutes'

function App() {
  return <AnimatedRoutes />
}

export default App
