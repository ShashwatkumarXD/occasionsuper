import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="text-center">
            {/* Icon and Decorative Swirl */}
            <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 border-2 border-pink-400 rounded-full flex items-center justify-center mr-3">
                    {icon}
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
