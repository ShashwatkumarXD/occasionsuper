import React from "react";
import {Check, Star, Shield, Medal, Calendar, Users, CheckCircle } from "lucide-react";

const WhyChoose=()=> {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Section 1: Why Choose */}
      <div className="text-center mb-16">
        <span className="bg-orange-100 text-xl text-orange-500 px-4 p-2 rounded-full font-medium">
            Excellence & Trust
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Why Choose OccasionSuper?
        </h2>
        <p className="text-gray-600 mt-1 text-lg">
          India's most trusted premium event management platform
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="flex justify-center items-center w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow">
            <CheckCircle className="text-orange-400" size={32} />
          </div>
          <h3 className="text-xl font-bold">500+</h3>
          <p className="text-gray-600 text-sm">Curated Partners</p>
        </div>

        <div>
          <div className="flex justify-center items-center w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow">
            <Users className="text-teal-600" size={32} />
          </div>
          <h3 className="text-xl font-bold">25,000+</h3>
          <p className="text-gray-600 text-sm">Happy Customers</p>
        </div>

        <div>
          <div className="flex justify-center items-center w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow">
            <Star className="text-orange-400" size={32} />
          </div>
          <h3 className="text-xl font-bold">4.9/5</h3>
          <p className="text-gray-600 text-sm">Customer Rating</p>
        </div>

        <div>
          <div className="flex justify-center items-center w-20 h-20 mx-auto mb-4 outline-1 outline-[#E69B83] bg-white rounded-2xl shadow">
            <Calendar className="text-teal-600" size={32} />
          </div>
          <h3 className="text-xl font-bold">100+</h3>
          <p className="text-gray-600 text-sm">Cities Served</p>
        </div>
      </div>

      {/* Section 2: Quality & Support */}
      <div className="grid md:grid-cols-2 gap-8 mt-20">
        {/* Quality Guarantee */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="flex items-center text-2xl font-bold mb-4 text-gray-800">
            <Shield className="text-orange-400 mr-2" size={28} />Quality Guarantee
          </h3>
          <p className="text-gray-600 mb-4">
            100% satisfaction or money back
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <Check className="text-orange-400 mr-2" /> Pre-vetted service providers
            </li>
            <li className="flex items-center">
              <Check className="text-orange-400 mr-2" /> Quality control at every step
            </li>
            <li className="flex items-center">
              <Check className="text-orange-400 mr-2" /> Dedicated event manager
            </li>
          </ul>
        </div>

        {/* Premium Support */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="flex items-center text-2xl font-bold mb-4 text-gray-800">
             <Medal className="text-teal-600 mr-2" size={28} />Premium Support
          </h3>
          <p className="text-gray-600 mb-4">
            24/7 assistance throughout your journey
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <Check className="text-teal-600 mr-2" /> Real-time event tracking
            </li>
            <li className="flex items-center">
              <Check className="text-teal-600 mr-2" /> Instant communication channel
            </li>
            <li className="flex items-center">
              <Check className="text-teal-600 mr-2" /> Post-event follow-up
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default  WhyChoose;