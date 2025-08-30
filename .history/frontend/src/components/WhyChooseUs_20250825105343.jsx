// import React from 'react'
// import FeatureCard from './FeatureCard'

// const WhyChooseUs = ({features}) => {
//     return (
//         <section className="py-20 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-gray-900 mb-4">
//             Why Choose Us
//           </h2>
//         </div>

//         {/* Features Grid */}
//         <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//     )
// }

// export default WhyChooseUs



import React from 'react'

const WhyChooseUs = ({ features }) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Number in circle */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold text-lg">
                {index + 1}
              </div>

              {/* Feature Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <div className="text-gray-700 text-sm">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
