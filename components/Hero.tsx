'use client'

import Image from "next/image"
import { CustomButton } from "@/components"

const Hero = () => {
    const handleScroll = () => {
        
    }
  return (
    <div className="hero">
    <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">
      Explore, choose, and bring home your dream plant effortlessly!
      </h1>

      <p className="hero__subtitle">
        Streamline your plants buying experience with our effortless buying
        process.
      </p>

      <CustomButton
        title="Explore Plants"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      />
    </div>
    <div className="hero__image-container">
      <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      <div className="hero__image-overlay" />
    </div>
  </div>
  )
}

export default Hero
