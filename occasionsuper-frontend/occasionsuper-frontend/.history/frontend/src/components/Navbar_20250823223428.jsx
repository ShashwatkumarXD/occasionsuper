import React from 'react'

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center h-16 justify-between px-8">
                    {/* Logo on left */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl ml-12 font-bold text-black">logo</h1>
                    </div>

                    {/* Navigation Items on right */}
                    <div className="w-3/5 border-2 flex items-center justify-around space-x-8">
                        <a href="#" className="text-purple-600 font-medium text-xl">Home</a>
                        <a href="#" className="text-gray-800 font-medium text-sm">About Us</a>
                        <a href="#" className="text-gray-800 font-medium text-sm">Services</a>
                        <a href="#" className="text-gray-800 font-medium text-sm">Contact Us</a>
                        <a href="#" className="text-gray-800 font-medium text-sm">About Us</a>
                        <a href="#" className="text-gray-800 font-medium text-sm">Vendor Registration</a>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar