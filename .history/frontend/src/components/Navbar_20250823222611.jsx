import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-600">LOGO</h1>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-purple-600 hover:text-purple-800 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-purple-600">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:border-b-2 hover:border-gray-300">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:border-b-2 hover:border-gray-300">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:border-b-2 hover:border-gray-300">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-purple-600 block px-3 py-2 rounded-md text-base font-medium border-l-4 border-purple-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
