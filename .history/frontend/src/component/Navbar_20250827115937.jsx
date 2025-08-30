import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b border-gray-200">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl text-gray-800">
          Occasion<span className="font-extrabold">Super</span>
        </span>
      </div>

      {/* Center - Nav Links */}
      <div className="flex gap-8 text-gray-700 font-medium">
        <Link to="/services" className="hover:text-[#E69B83] transition">
          Services
        </Link>
        <Link to="/event-planner" className="hover:text-[#E69B83] transition">
          Event Planner
        </Link>
        <Link to="/blog" className="hover:text-[#E69B83] transition">
          Blog
        </Link>
        <Link to="/admin" className="hover:text-[#E69B83] transition">
          Admin
        </Link>
        <Link to="/vendor-portal" className="hover:text-[#E69B83] transition">
          Vendor Portal
        </Link>
      </div>

      {/* Right - Login */}
      <Link
        to="/login"
        className="px-4 py-1 border border-[#E69B83] text-[#E69B83] rounded-lg hover:bg-[#E69B83] hover:text-white transition"
      >
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
