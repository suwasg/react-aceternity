// import React from 'react'
import { TypewriterEffect } from '../components/TypewriterEffect'
import { Testimonials } from '../components/Testimonial'
import { Hero } from '../components/Hero'
import { HeroParallaxcomp } from '../components/HeroParallaxComp'
import { TrekRegions } from '../components/TrekRegions'
import { WhyUs } from '../components/WhyUs'
import { BentoGridComp } from '../components/BentoGridComp'
import { ThreeDCardComp } from '../components/ThreeDCardComp'
import { TabsDemo } from '../components/TabComp'
import { AnimatedTooltipPreview } from '../components/Persons'
import { FollowingPointerDemo } from '../components/Team'
import { AnimatedPinDemo } from '../components/ThreeDPinComp'

const HomePage = () => {
  return (
    <>
    <HeroParallaxcomp/>
    <Hero/>
    <TypewriterEffect/>
    <WhyUs/>
    <BentoGridComp/>
    <TrekRegions/>
    <ThreeDCardComp/>
    <TabsDemo/>
    <FollowingPointerDemo/>
    <AnimatedTooltipPreview/>
    <AnimatedPinDemo/>
    <Testimonials/>

        
    </>
  )
}

export default HomePage