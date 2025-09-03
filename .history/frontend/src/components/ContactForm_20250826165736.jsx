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
                className="w-full p-3 outline-1 outline-gray-400 rounded-lg focus:outline-2 focus:outline-orange-500"
              />
            </div>
            <div>
              <input
                type="text"
                required
                placeholder="Last Name"
                className="w-full p-3 outline-1 outline-gray-400 rounded-lg focus:outline-2 focus:outline-orange-500"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full p-3 outline-1 outline-gray-400 rounded-lg focus:outline-2 focus:outline-orange-500"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <input
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full p-3 outline-1 outline-gray-400 rounded-lg focus:outline-2 focus:outline-orange-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
            required
              placeholder="Message"
              rows="3"
              className="w-full p-3 outline-1 outline-gray-400 rounded-lg focus:outline-2 focus:outline-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-global-gradient text-white font-semibold p-4 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:cursor-pointer"
          >
            <span className="text-xl">Submit</span>
            <PaperAirplaneIcon className="h-5 w-5 mt-0.5 text-white" />

            {/* </svg> */}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
