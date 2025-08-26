import React from 'react'

const FeatureCard = ({ icon, title, description, align }) => {
    return (
        <div className="text-center flex flex-col items-center">
            {/* Icon */}
            <div className="flex items-center justify-center mb-1">
                <div className="w-24 h-24 shadow-md shadow-orange-500 border-2 border-orange-500 rounded-full flex items-center justify-center">
                    {icon}
                </div>
            </div>

            {/* Title with fixed height */}
            <h3 className="text-2xl font-bold text-global-gradient  min-h-[60px] flex items-center justify-center">
                {title}
            </h3>

            {/* Description */}
            <p
                className={`text-orange-500 leading-relaxed max-w-xs mx-auto ${
                    align === "left" ? "text-left" : "text-center"
                }`}
            >
                {description}
            </p>
        </div>
    )
}

export default FeatureCard
