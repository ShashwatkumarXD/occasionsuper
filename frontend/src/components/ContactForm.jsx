import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

const ContactForm = () => {
  return (
    <section className="w-[90%] mx-auto py-20 px-4 relative overflow-hidden">
      {/* Cosmic Background Gradients */}
      
      <div className="m-[5px] relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-black mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-black leading-relaxed">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        {/* Customer Enquiry Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Customer Enquiry
          </h2>
          <p className="text-lg text-black leading-relaxed">
            Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-lg">Submit</span>
            {/* <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            > */}
              <PaperAirplaneIcon className="h-5 w-5 mt-0.5 text-white" />

            {/* </svg> */}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
