// import React from "react";
// import { Link } from "react-router-dom";
// import Quote from "../../components/Quote";
// const VendorReg = () => {
//   return (
//     <div>
//     <section className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       <div className="relative z-10 w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left Section - Marketing Content */}
//         <div className="text-white md:pr-8">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Grow your business with us!
//           </h1>
//           <ul className="space-y-3 mb-6 text-lg">
//             <li>• Showcase your services on our industry-leading site!</li>
//             <li>• Reach local engaged couples and book more weddings.</li>
//             <li>• Trusted by over 77,000 professionals.</li>
//           </ul>
//           <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all">
//             Sign Up
//           </button>
//         </div>

//         {/* Right Section - Registration Form */}
//         <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
//             Bussiness Login
//           </h2>

//           <form className="space-y-5">
//             {/* Name */}

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all"
//             >
//               Login
//             </button>
//           </form>

//           <p className="mt-4 text-center text-gray-600 text-sm">
//             <Link to="/forgot" >Forgot password?</Link>

//           </p>
//         </div>
//       </div>
      
//     </section>
//     <Quote text={`"Aapka Talent, Hamara Platform - Together, Let's Make Every Event Unforgettable!"`} />
//     </div>
//   );
// };

// export default VendorReg;



import React from "react";
import { Link } from "react-router-dom";
import Quote from "../../components/Quote";
import WhyChooseUs from "../../components/WhyChooseUs";

const VendorReg = () => {
  const features = [
    {
      icon:(
        <div className="text-pink-400 text-2xl">
          <div className="relative">
            <span className="text-3xl">1</span>
          </div>
        </div>
      ),
      title: "Guaranteed Business Opportunities",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Har mahine verified leads aur high-value clients</li>
          <li>Weddings, birthdays, anniversaries, corporate parties, exhibitions aur sab categories covers</li>
        </ul>
      ),
    },
    {
      icon:(
        <div className="text-pink-400 text-2xl">
          <div className="relative">
            <span className="text-3xl">2</span>
          </div>
        </div>
      ),
      title: "Hassle-Free Vendor Experience",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Client communication, negotiations aur requirements OccasionSuper handle karega</li>
          <li>Aapko sirf service deliver karni hai — baaki kaam hum sambhalte hain</li>
        </ul>
      ),
    },
    {
      icon:(
        <div className="text-pink-400 text-2xl">
          <div className="relative">
            <span className="text-3xl">3</span>
          </div>
        </div>
      ),
      title: "On-Time & Secure Payments",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Advance payment confirmation</li>
          <li>OccasionSuper ke through secured, transparent aur time-bound payments</li>
        </ul>
      ),
    },
    {
      icon:(
        <div className="text-pink-400 text-2xl">
          <div className="relative">
            <span className="text-3xl">4</span>
          </div>
        </div>
      ),
      title: "Increased Online Visibility",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>OccasionSuper par listing se aapki brand visibility multiple cities me badhegi</li>
          <li>Aapke business ka digital presence hum manage karte hain</li>
        </ul>
      ),
    },
    {icon:(
      <div className="text-pink-400 text-2xl">
        <div className="relative">
          <span className="text-3xl">5</span>
        </div>
      </div>
    ),
      title: "End-to-End Event Management",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Aapko sirf apna kaam deliver karna hota hai</li>
          <li>Planning, coordination, execution aur client satisfaction ka zimma OccasionSuper ka</li>
        </ul>
      ),
    },
    {
      icon:(
        <div className="text-pink-400 text-2xl">
          <div className="relative">
            <span className="text-3xl">6</span>
          </div>
        </div>
      ),
      title: "Zero Marketing Cost",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Aapko advertising ya marketing me paisa kharch nahi karna</li>
          <li>Hum aapko directly interested customers tak le aate hain</li>
        </ul>
      ),
    },
  ];

  return (
    <div>
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section - Marketing Content */}
          <div className="text-white md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Grow your business with us!
            </h1>
            <ul className="space-y-3 mb-6 text-lg">
              <li>• Showcase your services on our industry-leading site!</li>
              <li>• Reach local engaged couples and book more weddings.</li>
              <li>• Trusted by over 77,000 professionals.</li>
            </ul>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-all">
              Sign Up
            </button>
          </div>

          {/* Right Section - Registration Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
              Bussiness Login
            </h2>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Login
              </button>
            </form>

            <p className="mt-4 text-center text-gray-600 text-sm">
              <Link to="/forgot">Forgot password?</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <WhyChooseUs features={features} />

      <Quote text={`"Aapka Talent, Hamara Platform - Together, Let's Make Every Event Unforgettable!"`} />
    </div>
  );
};

export default VendorReg;
