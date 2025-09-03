import React from 'react'

const CategoryCard = ({ name, image, showHeart = false }) => {
  return (
    <div className="group cursor-pointer">
      {/* Category Card */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="aspect-[4/5] relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Heart icon for Corporate category */}
          {showHeart && (
            <div className="absolute top-3 right-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">♥</span>
              </div>
            </div>
          )}
        </div>

        {/* Category Label */}
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 text-center">
            {name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
