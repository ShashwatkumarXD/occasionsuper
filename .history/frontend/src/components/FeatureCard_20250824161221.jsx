import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      {/* Icon and Decorative Swirl */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 border-2 border-pink-400 rounded-full flex items-center justify-center mr-3">
          {icon}
        </div>
        {/* Decorative Swirl */}
        <div className="w-6 h-6"> 
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path 
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18ZM4 12C4 10.9 4.9 10 6 10C7.1 10 8 10.9 8 12C8 13.1 7.1 14 6 14C4.9 14 4 13.1 4 12ZM18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12Z" 
              fill="currentColor"
              className="text-gray-800"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
