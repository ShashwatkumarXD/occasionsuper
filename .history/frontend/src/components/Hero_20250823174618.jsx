import React from 'react'
import Image from "../assets/img-1.png";

function Hero() {
  return (
    <div className="h-[80vh] p-8 w-full relative">
      <section 
        className="h-full w-full relative px-6 py-16 flex flex-col md:flex-row items-center"
      >
        {/* Left side content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
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
        
        {/* Right side image positioned at bottom */}
        <div className="md:w-1/2 h-full flex items-end justify-end">
          <img 
            src={Image} 
            alt="Bride" 
            className="h-3/4 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero
