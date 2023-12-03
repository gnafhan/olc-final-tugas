import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <span>MyApp</span>
      <div>
        <Link to="/" className="text-white px-2">Home</Link>
        <Link to="/about" className="text-white px-2">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
