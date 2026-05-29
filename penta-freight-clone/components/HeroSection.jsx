import Image from "next/image";
import React from "react";
import CinematicGrid,{WhyChooseSection , ReviewsSection} from "./CinematicGrid";
import CertificationsSection, { WordsBranchLocationSection } from "./CertificationsSection";
import AchievementsSection, { PhilosophySection } from "./AchivmentSection";
import AwardsSection from "./AwardSession";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          src="/video/ZomatoVideo.mp4"
          className="absolute inset-0 w-full h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline // Required for iOS Safari autoplay
        />

        {/* Optional dark tint so content pops (adjust opacity as needed) */}
        <div className="absolute inset-0 bg-[#212121]/30" />

        {/* 🔽 Go Down Image: Centered horizontally at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <Image
            src="/img/goDown.png"
            alt="Scroll Down"
            width={280}
            height={30}
            className=" h-auto"
          />
        </div>
      </div>
      <Image
        src="/img/leftPentalogo.png"
        alt="Penta Logo"
        width={40}
        height={40}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-10"
      />

      <div className="fixed left-1/2 bottom-5 -translate-x-1/2 z-999 bg-orange-00 w-[90%] p-3 px-5 rounded-xl text-white flex justify-between items-center bg-orange-500">
        <p>
          We use cookies to enhance your experience. Please accept to enjoy the
          full features of our site.
        </p>
        <button className="bg-[#e0d1d1]/40 backdrop-blur-md py-1 px-3 rounded-sm border-2 border-white/60 text-white font-medium transition-all duration-200 hover:bg-[#e0d1d1]/60 z-50">
          I Accept
        </button>
      </div>
      <div className="bg-[url('/img/airplane.png')] bg-no-repeat bg-center bg-cover w-[100%] h-[800px] z-0 relative" > 
        <img src="/img/blank.png" alt="Blank" className="absolute top-0 left-0 w-full h-full object-cover z-10" />
        <div className="absolute top-0 left-0  w-full h-[150px] z-10 flex flex-col justify-center items-center gap-4">
            <div className="w-[50%] h-full flex justify-between items-center  pt-5
            ">
                <div className="w-[20%] flex flex-col justify-center items-center">
                    <h1 className="text-[15px]  font-bold  border-b-3 uppercase border-orange-500 text-center pb-2 text-orange-500">About us</h1>
                    <h1 className="text-[15px] font-bold text-center pt-2 uppercase text-orange-500">Penta Freight</h1>
                </div>
                <div className="w-[70%] h-full flex flex-col text-nowrap justify-center items-start px-5 text-xl text-gray-500">
                    <p>Penta Freight provides reliable <b>logistics solutions,</b> specializing in  </p>
                    <p> temperature-sensitive shipments. We ensure safe, <b>on-time delivery</b> </p>
                    <p>worldwide. Trust us for seamless supply chain management.</p>
                </div>
            </div>
        </div>
      </div>
      <PhilosophySection />
      <CinematicGrid />
      <WhyChooseSection />
      <AchievementsSection />
      <ReviewsSection />
      <CertificationsSection/>
      <AwardsSection />
      <WordsBranchLocationSection />
    </div>
  );
};

export default HeroSection;
