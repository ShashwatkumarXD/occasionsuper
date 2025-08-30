import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-300 bg-gradient-to-r from-purple-100 via-pink-50 to-gray-100">
            
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center h-16 justify-between px-8">
                    {/* Logo on left */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl ml-2 font-bold text-black">logo</h1>
                    </div>

                    {/* Navigation Items on right */}
                    <div className="w-4/5 flex items-center justify-around">
                        <Link to="/" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">Home</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">About Us</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">Services</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">Contact Us</Link>
                        <Link to="/vendorReg" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">Register as Vendor</Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar