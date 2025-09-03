import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PopularCategories from '../components/PopularCategories'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'
import p1 from '../assets/p-1.jpg'
import p2 from '../assets/p-2.jpg'
import p3 from '../assets/p-3.jpg'
import img1 from '../assets/img-1.png'
import VendorReg from './Registration/VendorReg';

function Home() {  // }

  return (
    <div className="min-h-screen w-screen">
      <Home />
      <Navbar />
      <Hero />
      <PopularCategories />
      <WhyChooseUs />
      <ContactForm />
      <ContactInfo />
      <Footer />

    </div>
  )
}

export default Home
