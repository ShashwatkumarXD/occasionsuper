import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import CustomerStories from '../components/CustomerStories'
import WhyChoose from '../components/WhyChoose'

function Home() {
  return (
    <div>
      <Navbar/>
      <Services/>
      <WhyChoose/>
      <CustomerStories/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default Home
