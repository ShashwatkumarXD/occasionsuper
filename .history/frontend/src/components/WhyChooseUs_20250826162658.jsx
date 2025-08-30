import React from 'react'
import FeatureCard from './FeatureCard'

const WhyChooseUs = ({ features, align, col }) => {
    const colClasses = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
    };
    return (
        <section className="p-2 mt-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Us
                    </h2>
                </div>

                {/* Features Grid */}
                {/* <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              align={align}
            />
          ))}
        </div> */}
                <div className={`p-2 grid ${colClasses[col] || "grid-cols-1"} gap-12`}>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            align={align}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
