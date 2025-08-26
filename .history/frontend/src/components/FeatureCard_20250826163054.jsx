import React from 'react'

const FeatureCard = ({ icon, title, description, align }) => {
    return (
        <div className="text-center flex flex-col items-center">
            {/* Icon */}
            <div className="flex items-center justify-center mb-1">
                <div className="w-16 h-16 border-2 border-pink-400 rounded-full flex items-center justify-center mr-3">
                    {icon}
                </div>
            </div>

            {/* Title with fixed height */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[60px] flex items-center justify-center">
                {title}
            </h3>

            {/* Description */}
            <p
                className={`text-gray-600 leading-relaxed max-w-xs mx-auto ${
                    align === "left" ? "text-left" : "text-center"
                }`}
            >
                {description}
            </p>
        </div>
    )
}

export default FeatureCard
