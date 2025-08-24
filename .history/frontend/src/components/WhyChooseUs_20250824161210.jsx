import React from 'react'
import FeatureCard from './FeatureCard'

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <div className="text-pink-400 text-2xl">
          <div className="relative">
            <span className="text-3xl">👗</span>
            <div className="absolute -top-1 -left-2 flex space-x-1">
              <span className="text-xs">✨</span>
              <span className="text-xs">✨</span>
              <span className="text-xs">✨</span>
            </div>
          </div>
        </div>
      ),
      title: "Wide Selection",
      description: "A huge number of products for your celebration day."
    },
    {
      id: 2,
      icon: (
        <div className="text-pink-400 text-2xl">
          <span className="text-3xl">📦</span>
        </div>
      ),
      title: "Fast Delivery",
      description: "We deliver the next day after the order, as you wish."
    },
    {
      id: 3,
      icon: (
        <div className="text-pink-400 text-2xl">
          <span className="text-3xl">👤</span>
        </div>
      ),
      title: "Individual Approach",
      description: "We discuss all the little things you need and want."
    },
    {
      id: 4,
      icon: (
        <div className="text-pink-400 text-2xl">
          <span className="text-3xl">💡</span>
        </div>
      ),
      title: "Creative Ideas",
      description: "Our designers are full of new creative ideas for you."
    }
  ]

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
