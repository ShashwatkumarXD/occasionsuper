import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PopularCategories from '../components/PopularCategories'

function Home() {
  return (
    <div className="min-h-screen w-screen">
      <Navbar/>
      <Hero/>
      <PopularCategories/>
    </div>
  )
}

export default Home
