import React from 'react'
import FeatureCard from './FeatureCard'

const WhyChooseUs = ({ features, align, col }) => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
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
                <div className={`p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-12`}>
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
