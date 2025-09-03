import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

const ContactForm = () => {
  return (
    <section className="w-[95%]  mt-8 mx-auto p-2 relative overflow-hidden">
      {/* Cosmic Background Gradients */}

      <div className="m-[5px] relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-global-gradient mb-2">
            Get in touch
          </h1>
          <p className="text-2xl text-global-gradient leading-relaxed">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        {/* Customer Enquiry Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-global-gradient mb-2">
            Customer Enquiry
          </h2>
          <p className="text-xl text-global-gradient leading-relaxed">
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
                placeholder="First Name"
                required
                className="w-full p-3 outline-1 outline-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500  transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                required
                placeholder="Last Name"
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <input
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
            required
              placeholder="Message"
              rows="6"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:cursor-pointer"
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
