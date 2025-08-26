import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        // <nav className="bg-white border-b border-gray-300 bg-gradient-to-r from-purple-100 via-pink-50 to-gray-100">
        <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 py-2 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center h-16 justify-between px-8">

                    {/* Logo on left */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl ml-2 font-bold text-black">logo</h1>
                    </div>

                    {/* Navigation Items on right */}
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-gray-800 font-medium text-2xl no-underline hover:text-global-gradient transform transition-transform duration-500 ease-in-out hover:scale-110 active:text-global-gradient">Home</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-global-gradient transform transition-transform duration-500 ease-in-out hover:scale-110 active:text-global-gradient">About Us</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-global-gradient transform transition-transform duration-500 ease-in-out hover:scale-110 active:text-global-gradient">Services</Link>
                        <Link to="#" className="text-gray-800 font-medium text-2xl no-underline hover:text-global-gradient transform transition-transform duration-500 ease-in-out hover:scale-110 active:text-global-gradient">Contact Us</Link>
                        <button
                            onClick={() => navigate("/vendorReg")}
                            className="bg-global-gradient text-white font-medium text-xl p-2 rounded-xl hover:shadow-md hover:shadow-orange-500 outline outline-transparent hover:bg-white hover:text-global-gradient hover:outline-orange-600  hover:scale-105 transition-all duration-300 ease-linear cursor-pointer"
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
