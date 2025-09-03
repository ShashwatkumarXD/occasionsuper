import React from 'react'
import CategoryCard from './CategoryCard'
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
      showHeart: false
    },
    {
      id: 2,
      name: "Birthdays",
      image: images?.birthdays || p2,
      showHeart: false
    },
    {
      id: 3,
      name: "Corporate",
      image: images?.corporate || p3,
      showHeart: true
    },
    {
      id: 4,
      name: "Celebrations",
      image: images?.celebrations || img1,
      showHeart: false
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
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              showHeart={category.showHeart}
            />
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
