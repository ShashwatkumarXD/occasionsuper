import React from 'react'
import p1 from "../assets/p-1.jpg"
import p2 from "../assets/p-2.jpg"
import p3 from "../assets/p-3.jpg"
import img1 from "../assets/img-1.png"

const PopularCategories = ({ images }) => {
  const categories = [
    {
      id: 1,
      name: "Weddings",
      image: images?.weddings || p1,
      description: "Elegant wedding celebrations"
    },
    {
      id: 2,
      name: "Birthdays",
      image: images?.birthdays || p2, 
      description: "Special birthday moments"
    },
    {
      id: 3,
      name: "Corporate",
      image: images?.corporate || p3,
      description: "Professional corporate events"
    },
    {
      id: 4,
      name: "Celebrations",
      image: images?.celebrations || img1,
      description: "Festive celebrations"
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              {/* Category Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="aspect-[4/5] relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Heart icon for Corporate category */}
                  {category.name === "Corporate" && (
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
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center mt-8">
          <div className="w-4 h-4 bg-pink-300 rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  )
}

export default PopularCategories
