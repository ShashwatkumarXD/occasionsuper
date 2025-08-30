import React from 'react'

const CategoryCard = ({ name, image }) => {
    return (
        <div className="group cursor-pointer">
            {/* Category Card */}
            <div className="w-[250px] relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="aspect-[4/5] relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
