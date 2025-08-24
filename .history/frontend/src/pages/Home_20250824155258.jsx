import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PopularCategories from '../components/PopularCategories'
import p1 from '../assets/p-1.jpg'
import p2 from '../assets/p-2.jpg'
import p3 from '../assets/p-3.jpg'
import img1 from '../assets/img-1.png'

function Home() {
  const categoryImages = {
    weddings: p1,
    birthdays: p2,
    corporate: p3,
    celebrations: img1
  }

  return (
    <div className="min-h-screen w-screen">
      <Navbar/>
      <Hero/>
      <PopularCategories images={categoryImages}/>
    </div>
  )
}

export default Home
