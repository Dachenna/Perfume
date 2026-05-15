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
          className="absolute w-screen min-h-full object-cover z-10 bg-cover"
        >
          <source src="https://labs.google/fx/tools/flow/shared/video/bec0f82d-1507-43da-9d52-7d6380f38ae8" type="video/mp4" />
        </video>
      </section>
    </main>
  )
}

export default Hero
