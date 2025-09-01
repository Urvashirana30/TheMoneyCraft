import React from 'react'
import HeroSection from './components/HeroSection'
import WhoWeARE from './components/AboutUs'
import Services from './components/Services'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import Testimonials from './components/Testimonials'

const page = () => {
  return (
    <div>
    <HeroSection/>
    <WhoWeARE/>
    <Services/>
    <Features/>
    <Testimonials/>
    <CallToAction/>
</div>
  )
}

export default page
