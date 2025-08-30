import React from 'react';
import Image from "../assets/img-1.png";
import SearchBar from './SearchBar';

function Hero() {
  const handleSearch = ({ category, query }) => {
    console.log("Searching by:", category, "with query:", query);
  };

  return (
    <div className="h-[90vh] w-full relative overflow-hidden mt-16">
      <div className="absolute top-10 left-3/5 -translate-x-3/4 z-20 w-full max-w-3xl mx-auto ">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="absolute inset-0 bg-white">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-30 translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-40 translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-100 rounded-full opacity-30 translate-x-10 -translate-y-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full opacity-25 rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-50 rounded-full opacity-35 -rotate-6"></div>
      </div>
      <section className="relative mt-10 z-10 h-full w-full flex md:flex-row items-center justify-end">
        <div className="w-[60%] h-fit -translate-y-20 translate-x-20 items-center">
          <h1 className="text-5xl md:text-5xl font-extrabold text-global-gradient [text-shadow:0_0_10px_rgba(249,115,22,0.8)]">
            "Plan Your Dream Event
          </h1>

          <h1 className="text-center text-5xl md:text-5xl font-extrabold text-global-gradient [text-shadow:0_0_10px_rgba(249,115,22,0.8)]">
            – Start Here"
          </h1>

        </div>

        {/* Right image */}
        <div className="w-[60%] mt-auto h-[70%] flex items-end justify-end relative">
          <img
            src={Image}
            alt="Bride"
            className="h-[130%] object-cover absolute bottom-0 right-0 translate-x-20 -translate-y-16 drop-shadow-xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
