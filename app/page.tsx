import About from '@/components/landing/About'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import OurProjects from '@/components/landing/OurProjects'
import Services from '@/components/landing/Services'
import StorySection from '@/components/landing/Story'
import Testimonial from '@/components/landing/Testimonial'

const page = () => {
  return (
    <>
      <Hero />
      <About/>
      <Services/>
      <HowItWorks/>
      <OurProjects/>
      <StorySection/>
      <Testimonial/>
    </>
  )
}

export default page