import Image from 'next/image'
import React from 'react'

const peentaLandingPage = () => {
  return (
    <div className="relative">
      {/* Hero Section with Video */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          src="/video/ZomatoVideo.mp4"
          className="absolute inset-0 w-full h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

         {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 md:mt-8">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-[3.5rem]  text-white text-center max-w-5xl leading-tight mb-6">
            Ensuring Safe Transport for<br className="hidden sm:block" />
            <p className="py-4">Temperature-Sensitive Products</p>
          </h1>

          {/* Horizontal Line */}
          <div className="w-[60%] h-0.5 bg-white/60 mb-8" />

          <div className="flex justify-between items-center w-[60%]">
          {/* Description Text */}
          <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl">
            Explore our frequently asked questions to gain clarity
            <br className="hidden sm:block mt-10" />
            about Penta Kuhl's services and features
          </p>

          {/* Explore Button */}
          <button className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <span>Explore</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>
          </div>
        </div>
      </div>


      {/* Left Side Logo */}
      <Image
        src="/img/leftPentalogo.png"
        alt="Penta Logo"
        width={40}
        height={40}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
      />
    </div>
  )
}

export default peentaLandingPage