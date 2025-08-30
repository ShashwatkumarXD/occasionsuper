import React from 'react'

const CategoryCard = ({ name, image }) => {
    return (
        <div className="group cursor-pointer">
            {/* Category Card */}
            <div className="w-[250px] relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:outline-1 hover:outline-orange-500 hover:scale-105 hover:shadow-xl">
                
                {/* Image Container */}
                <div className="aspect-[4/5] relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
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
