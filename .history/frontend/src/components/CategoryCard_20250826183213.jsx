import React from 'react'

const CategoryCard = ({ name, image }) => {
    return (
        <div className="group cursor-pointer">
            <div className="w-[250px] outline outline-orange-500 relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:outline-2 hover:outline-orange-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500">
                <div className="aspect-[4/5] relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-global-gradient text-center">
                        {name}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
