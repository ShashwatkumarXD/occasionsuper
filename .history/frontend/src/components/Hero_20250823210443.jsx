// import React from 'react'
// import Image from "../assets/img-1.png";

// function Hero() {
//   return (
//     <div className="h-[80vh] w-full relative overflow-hidden">
//       {/* Background gradient and abstract shapes */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-gray-100">
//         {/* Abstract curved shapes */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-30 transform translate-x-20 -translate-y-20"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-40 transform translate-x-16 translate-y-16"></div>
//         <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-100 rounded-full opacity-30 transform translate-x-10 -translate-y-10"></div>
//       </div>
      
//       {/* Content section */}
//       <section className="relative z-10 h-full w-full px-6 py-16 flex flex-col md:flex-row items-center">
//         {/* Left side content */}
//         <div className="md:w-1/2 space-y-6">
//           {/* Navigation dots on the left */}
//           <div className="flex flex-col space-y-3 mb-8">
//             <div className="w-3 h-3 bg-purple-700 rounded-full"></div>
//             <div className="w-3 h-3 border-2 border-purple-300 rounded-full"></div>
//             <div className="w-3 h-3 border-2 border-purple-300 rounded-full"></div>
//             <div className="w-3 h-3 border-2 border-purple-300 rounded-full"></div>
//           </div>
          
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Plan Your Dream Event – Start Here
//           </h1>
          
//           {/* Search bar */}
//           <div className="flex bg-black text-white p-3 rounded-md w-full md:w-4/5 items-center">
//             <span className="font-semibold text-sm">
//               FIND <span className="text-purple-500">OCCASION SUPER</span> IN YOUR CITY
//             </span>
//             <select className="ml-4 text-black rounded px-2 py-1 text-sm">
//               <option>Haryana</option>
//               <option>Delhi</option>
//             </select>
//             <select className="ml-2 text-black rounded px-2 py-1 text-sm">
//               <option>Gurgaon</option>
//               <option>Noida</option>
//             </select>
//             <button className="ml-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//               SEARCH
//             </button>
//           </div>
//         </div>
        
//         {/* Right side image positioned to overlap background */}
//         <div className="md:w-1/2 h-full flex items-end justify-end relative">
//           <img 
//             src={Image} 
//             alt="Bride" 
//             className="h-[140%] object-cover transform -translate-y-12 -translate-x-4 drop-shadow-2xl absolute bottom-0 right-0"
//             style={{
//               zIndex: 20
//             }}
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Hero



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
      </div>

      {/* Left side navigation dots */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col space-y-3 z-20">
        <div className="w-3 h-3 bg-purple-700 rounded-full"></div>
        <div className="w-3 h-3 border-2 border-purple-300 rounded-full"></div>
        <div className="w-3 h-3 border-2 border-purple-300 rounded-full"></div>
        <div className="w-3 h-3 border-2 border-purple-300 rounded-full"></div>
      </div>

      {/* Content section */}
      <section className="relative z-10 h-full w-full px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left content */}
        <div className="md:w-1/2 space-y-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-snug">
            “Plan Your Dream Event – Start Here”
          </h1>

          {/* Search bar */}
          <div className="flex bg-black text-white px-4 py-3 rounded-md w-full md:w-[90%] items-center shadow-lg">
            <span className="font-semibold text-sm whitespace-nowrap mr-4">
              FIND <span className="text-purple-500">OCCASION SUPER</span> IN YOUR CITY
            </span>
            <div className="flex flex-1 items-center gap-2">
              <select className="text-black rounded px-2 py-1 text-sm">
                <option>Haryana</option>
                <option>Delhi</option>
              </select>
              <select className="text-black rounded px-2 py-1 text-sm">
                <option>Gurgaon</option>
                <option>Noida</option>
              </select>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                SEARCH
              </button>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-screen border-2 h-full flex items-end justify-end relative">
          <img
            src={Image}
            alt="Bride"
            className="h-[140%] object-cover absolute bottom-0 right-0 -translate-y-8 drop-shadow-2xl"
          />
        </div>
      </section>
    </div>
  )
}

export default Hero
