import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'

function Home() {
  return (
    <div>
      <Navbar/>
      <Services/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default Home
