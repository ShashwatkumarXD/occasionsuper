// vendor login

// src/components/VendorLogin.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowHideButton from "./ShowHideButton";

const VendorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
        Business Login
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
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <ShowHideButton
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all hover:cursor-pointer"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600 text-sm">
        <Link to="/forgot">Forgot password?</Link>
      </p>
    </div>
  );
};

export default VendorLogin;
