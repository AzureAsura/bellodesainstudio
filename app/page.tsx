import Footer from '@/components/Footer'
import About from '@/components/landing/About'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import OurProjects from '@/components/landing/OurProjects'
import Services from '@/components/landing/Services'
import StorySection from '@/components/landing/Story'
import Testimonial from '@/components/landing/Testimonial'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <About/>
      <Services/>
      <HowItWorks/>
      <OurProjects/>
      <StorySection/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default page