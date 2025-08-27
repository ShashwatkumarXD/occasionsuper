import React from 'react'
import Image from "../assets/img-1.png";

function Hero() {
  return (
    <div className="h-[80vh] w-full border-2 relative overflow-hidden">
      {/* Background gradient and abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-gray-100">
        {/* Abstract curved shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-30 transform translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-40 transform translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-100 rounded-full opacity-30 transform translate-x-10 -translate-y-10"></div>
      </div>
      
      {/* Content section */}
      <section className="relative z-10 h-full w-full px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left side content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Plan Your Dream Event – Start Here
          </h1>
          <div className="flex bg-black text-white p-2 rounded-md w-full md:w-4/5">
            <span className="font-semibold">
              FIND <span className="text-purple-500">OCCASION SUPER</span> IN YOUR CITY
            </span>
            <select className="ml-4 text-black rounded px-2">
              <option>Haryana</option>
              <option>Delhi</option>
            </select>
            <select className="ml-2 text-black rounded px-2">
              <option>Gurgaon</option>
              <option>Noida</option>
            </select>
            <button className="ml-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>
        </div>
        
        {/* Right side image positioned to overlap background */}
        <div className="md:w-1/2 h-full flex items-end justify-end relative">
          <img 
            src={Image} 
            alt="Bride" 
            className="h-[140%] object-cover transform -translate-y-12 -translate-x-4 drop-shadow-2xl absolute bottom-0 right-0"
            style={{
              zIndex: 20
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero
