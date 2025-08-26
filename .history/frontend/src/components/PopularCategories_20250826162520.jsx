import React from 'react'
import CategoryCard from './CategoryCard'
import p1 from "../assets/p-1.jpg"
import p2 from "../assets/p-2.jpg"
import p3 from "../assets/p-3.jpg"
import img1 from "../assets/img-1.png"

const PopularCategories = () => {
  return (
    <section className="p-8 bg-white">
      <div className="mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-global-gradient">
            Popular Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CategoryCard name="Weddings" image={p1} />
          <CategoryCard name="Birthdays" image={p2} />
          <CategoryCard name="Corporate" image={p3} />
          <CategoryCard name="Celebrations" image={img1} />
        </div>
      </div>
    </section>
  )
}

export default PopularCategories
