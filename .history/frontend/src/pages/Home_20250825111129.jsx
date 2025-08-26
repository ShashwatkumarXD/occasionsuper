import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PopularCategories from '../components/PopularCategories'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'

function Home() {  // }

  const features = [
    {
      icon: (
        <div className="text-pink-400 text-2xl">
          <div className="relative">
            <span className="text-3xl">👗</span>
            <div className="absolute -top-1 -left-2 flex space-x-1">
              <span className="text-xs">✨</span>
              <span className="text-xs">✨</span>
              <span className="text-xs">✨</span>
            </div>
          </div>
        </div>
      ),
      title: "Wide Selection",
      description: "A huge number of products for your celebration day.",
    },
    {
      icon: <span className="text-pink-400 text-3xl">📦</span>,
      title: "Fast Delivery",
      description: "We deliver the next day after the order, as you wish.",
    },
    {
      icon: <span className="text-pink-400 text-3xl">👤</span>,
      title: "Individual Approach",
      description: "We discuss all the little things you need and want.",
    },
    {
      icon: <span className="text-pink-400 text-3xl">💡</span>,
      title: "Creative Ideas",
      description: "Our designers are full of new creative ideas for you.",
    },
  ];
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <Hero />
      <PopularCategories />
      <WhyChooseUs features={features} align='center'/>
      <ContactForm />
      <ContactInfo />
      <Footer />

    </div>
  )
}

export default Home
