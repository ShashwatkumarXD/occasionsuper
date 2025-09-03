import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="bg-white border-b border-gray-300 bg-gradient-to-r from-purple-100 via-pink-50 to-gray-100">

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center h-16 justify-between px-8">
                    {/* Logo on left */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl ml-2 font-bold text-black">logo</h1>
                    </div>

                    {/* Navigation Items on right */}
                    <div className="w-4/5 flex items-center justify-between">
                        <Link to="/" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">Home</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">About Us</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">Services</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-purple-600 active:text-purple-600">Contact Us</Link>
                        <button
                            onClick={() => navigate("/vendorReg")}
                            className="bg-purple-500 text-white font-medium text-xl p-2 rounded-xl shadow-md hover:bg-purple-600 active:bg-purple-700 transition"
                        >
                            Register as Vendor
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar