import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Hero from './pages/Hero'

const AppRoutes: React.FC = () => {
  return (<>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </>
  )
}

export default AppRoutes
