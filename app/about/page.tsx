import Hero from '@/components/about/Hero'
import Philosophy from '@/components/about/Philosophy'
import Team from '@/components/about/Team'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import HowItWorks from '@/components/about/HowItWorks'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero />
            <HowItWorks/>
            <Philosophy/>
            <WhyChooseUs/>
            <Team/>

        </>
    )
}

export default page