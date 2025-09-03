import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Upper Section - Content Blocks */}
      <div className="w-screen mx-auto p-4 mt-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-30 text-center md:text-left">

          {/* Newsletter Block */}
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Don't miss our significant news and season sales. Subscribe!
            </p>
            <div className="flex items-center border-b border-gray-300 pb-2">
              <input
              required
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none"
              />
              <button className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <PaperAirplaneIcon className="h-5 w-5 mt-1.5 text-black hover:cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Hit Us Up Block */}
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Hit Us Up:
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>+91 9034621898</p>
              <p>kamalrathee066@.com</p>
              <p>27 St. New Delhi. NY 10002, india</p>
            </div>
          </div>

          {/* Find Us Block */}
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Find Us:
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">-</span> Facebook
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">-</span> Twitter
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <span className="mr-2">-</span> Instagram
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Section - Bottom Bar */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © All right reserved. kamal rathee 2025
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <a href="#" className="hover:text-gray-700 transition-colors">
                Privacy policy
              </a>
              <span>-</span>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
