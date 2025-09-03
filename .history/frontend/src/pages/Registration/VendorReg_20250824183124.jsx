import React from "react";
import { Link } from "react-router-dom";

const VendorReg = () => {
  return (
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
            {/* Name */}

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
            <Link to="/" >Forgot password?</Link>
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default VendorReg;
