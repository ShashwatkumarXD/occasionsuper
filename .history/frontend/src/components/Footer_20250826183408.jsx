import React from 'react'
import { Link } from "react-router-dom";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-screen mx-auto p-4 mt-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-30 text-center md:text-left">
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold text-global-gradient mb-1">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-2 leading-relaxed">
              Don't miss our significant news and season sales. Subscribe!
            </p>
            <div className="flex items-center rounded-xl outline-1 outline-gray-500 hover:outline-2 hover:outline-orange-500 ">
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 bg-transparent text-gray-800 placeholder-gray-400 outline-none"
              />
              <button className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <PaperAirplaneIcon className="h-5 w-5 mt-1 text-black hover:cursor-pointer" />
              </button>
            </div>
          </div>
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold text-global-gradient mb-4">
              Hit Us Up:
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>+91 9034621898</p>
              <p>kamalrathee066@.com</p>
              <p>27 St. New Delhi. NY 10002, India</p>
            </div>
          </div>
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold text-global-gradient mb-4">
              Find Us:
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center justify-center md:justify-start">
                <Link to="" className="mr-2 hover:text-global-gradient">Facebook</Link>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Link to="" className="mr-2 hover:text-global-gradient">Twitter</Link>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Link to="" className="mr-2 hover:text-global-gradient">Instagram</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 border-t border-gray-200 text-lg">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 ">
              © All right reserved
            </div>
            <div className="flex items-center space-x-4 text-gray-500">
              <a href="#" className="hover:text-global-gradient transition-colors">
                Privacy policy
              </a>
              <a href="#" className="hover:text-global-gradient transition-colors">
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
