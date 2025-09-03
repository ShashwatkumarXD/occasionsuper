import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="h-screen w-screen p-1">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home
