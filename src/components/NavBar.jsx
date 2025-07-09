import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation() ;

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src='https://media.tenor.com/VQBGRLEBkE8AAAAj/raintome-fire.gif' alt='logo' className='w-10 h-8 mx-2' />
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              INTERVIEW 
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/questions" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/questions') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Questions
            </Link>
            <Link 
              to="/resources" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/resources') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar