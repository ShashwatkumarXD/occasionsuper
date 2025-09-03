import React from 'react'

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Weddings",
      image: "/wedding-table.jpg",
      description: "Elegant wedding celebrations"
    },
    {
      id: 2,
      name: "Birthdays",
      image: "/birthday-cupcake.jpg", 
      description: "Special birthday moments"
    },
    {
      id: 3,
      name: "Corporate",
      image: "/corporate-salad.jpg",
      description: "Professional corporate events"
    },
    {
      id: 4,
      name: "Celebrations",
      image: "/sparklers.jpg",
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
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  {/* Placeholder for actual images - you can replace these with real images */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                    {category.name === "Weddings" && (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">💒</span>
                        </div>
                        <p>Wedding Setup</p>
                      </div>
                    )}
                    {category.name === "Birthdays" && (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">🎂</span>
                        </div>
                        <p>Birthday Cake</p>
                      </div>
                    )}
                    {category.name === "Corporate" && (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">💼</span>
                        </div>
                        <p>Corporate Event</p>
                      </div>
                    )}
                    {category.name === "Celebrations" && (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">✨</span>
                        </div>
                        <p>Celebration</p>
                      </div>
                    )}
                  </div>
                  
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
