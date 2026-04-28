import React from 'react'
import bannerVideo from './assets/Banner.mp4'

function Hero() {
  return (
    <main>
      {/* Banner Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-[660px] h-[550px] object-cover z-10 bg-cover"
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </section>
    </main>
  )
}

export default Hero
