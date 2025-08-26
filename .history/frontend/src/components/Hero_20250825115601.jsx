// import React from 'react'
// import Image from "../assets/img-1.png";
// import SearchBar from './SearchBar';

// function Hero() {
//   const handleSearch = ({ category, query }) => {
//     console.log("Searching by:", category, "with query:", query);
//     // You can call API or filter data here
//   };
//   return (
//     <div className="h-[90vh] w-full relative overflow-hidden">
//       <SearchBar onSearch={handleSearch} />
//       {/* Background gradient and abstract shapes */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-gray-100">
//         {/* Abstract curved shapes */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-30 translate-x-20 -translate-y-20"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-40 translate-x-16 translate-y-16"></div>
//         <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-100 rounded-full opacity-30 translate-x-10 -translate-y-10"></div>
//         {/* Additional decorative shapes for the right side */}
//         <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full opacity-25 transform rotate-12"></div>
//         <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-50 rounded-full opacity-35 transform -rotate-6"></div>
//       </div>

//       {/* Content section - positioned to avoid image area */}
//       <section className="relative z-10  h-full w-full  flex  md:flex-row items-center justify-end">
//         {/* Left content - constrained to left half */}

//         <div className="w-[60%] h-fit -translate-y-20 translate-x-20  items-center">
//           <h1 className="text-5xl px-1  font-extrabold text-gray-900 leading-snug">
//             "Plan Your Dream Event
//           </h1>
//           <h1 className="text-5xl text-center px-1 font-extrabold text-gray-900 leading-snug">
//             – Start Here"
//           </h1>

          
//         </div>

//         {/* Right image - positioned to not overlap text */}
//         <div className="w-[60%]  mt-auto h-[70%] flex items-end justify-end relative">
//           <img
//             src={Image}
//             alt="Bride"
//             className="h-[130%] object-cover absolute bottom-0 right-0 translate-x-20 -translate-y-16 drop-shadow-2xl"
//           />
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Hero



import React from 'react';
import Image from "../assets/img-1.png";
import SearchBar from './SearchBar';

function Hero() {
  const handleSearch = ({ category, query }) => {
    console.log("Searching by:", category, "with query:", query);
  };

  return (
    <div className="h-[90vh] w-full relative overflow-hidden">
      {/* ✅ Search bar centered at top */}
      <div className="absolute top-10 left-1/2 -translate-x-28 z-20 w-full max-w-2xl ">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Background gradient and abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-gray-100">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-30 translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-40 translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-100 rounded-full opacity-30 translate-x-10 -translate-y-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-100 rounded-full opacity-25 rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-50 rounded-full opacity-35 -rotate-6"></div>
      </div>

      {/* Main content section */}
      <section className="relative z-10 h-full w-full flex md:flex-row items-center justify-end">
        {/* Left content */}
        <div className="w-[60%] h-fit -translate-y-20 translate-x-20 items-center">
          <h1 className="text-5xl px-1 font-extrabold text-gray-900 leading-snug">
            "Plan Your Dream Event
          </h1>
          <h1 className="text-5xl text-center px-1 font-extrabold text-gray-900 leading-snug">
            – Start Here"
          </h1>
        </div>

        {/* Right image */}
        <div className="w-[60%] mt-auto h-[70%] flex items-end justify-end relative">
          <img
            src={Image}
            alt="Bride"
            className="h-[130%] object-cover absolute bottom-0 right-0 translate-x-20 -translate-y-16 drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
