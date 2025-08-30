import React from 'react'
import Image from "../assets/img-1.png";

function Hero() {
  return (
    <div className="h-[90vh] w-full relative overflow-hidden">
      {/* Background gradient and abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-gray-100">
        {/* Abstract curved shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-30 translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-40 translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-100 rounded-full opacity-30 translate-x-10 -translate-y-10"></div>
        {/* Additional decorative shapes for the right side */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full opacity-25 transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-50 rounded-full opacity-35 transform -rotate-6"></div>
      </div>

      {/* Content section */}
      <section className="relative z-10 h-full w-full px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">

        {/* Left content */}
        <div className="md:w-1/2 space-y-10">

          {/* Search bar */}
          <div className="flex bg-black text-white px-4 py-3 rounded-md w-full md:w-[90%] items-center shadow-lg">

          </div>
        </div>
        </section>
    </div>

        {/* Right image */ }
  <div className="w-screen h-full flex items-end justify-end relative">
    {/* Background decorative shapes under the image */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-30 transform translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-40 transform translate-x-16 translate-y-16"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-100 rounded-full opacity-30 transform translate-x-10 -translate-y-10"></div>
    </div>

    <img
      src={Image}
      alt="Bride"
      className="h-[120%] object-cover absolute border-10 bottom-0 right-0 -translate-x-200 -translate-y-40 drop-shadow-2xl"
    />
  </div>
      </section >
    </div >
  )
}

export default Hero
