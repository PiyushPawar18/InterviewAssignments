import ProductSolutionsSection from "@/components/ProductionSolutionSection";
import PentaLandingPage from "./components/PentaLandingPage";
import React from "react";
import PentaKuhlSection from "./components/PentaKuhlSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import SeriesGuideSection from "./components/SeriesguideSection";
import ScrollMarqueeSection from "./components/seriesScroll";
import ShippersSection from "./components/ShippersSection";

const faqs = [
  {
    q: "What is Penta Kuhl?",
    a: "Penta Kuhl is an innovative logistics solution that integrates technology to optimize supply chain management and enhance efficiency.",
  },
  {
    q: "How does Penta Kuhl ensure cargo safety?",
    a: "We utilize advanced tracking systems, secure storage facilities, and stringent handling protocols to ensure the safety of your cargo.",
  },
  {
    q: "What types of cargo can Penta Kuhl handle?",
    a: "Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, and general freight.",
  },
  {
    q: "Is there customer support available for Penta Kuhl users?",
    a: "Yes, our dedicated customer support team is available to assist you with any inquiries or issues regarding our services.",
  },
];

const des = "Explore our frequently asked questions to gain clarity about Penta Kuhl’s services and features."

const page = () => {
  return (
    <div>
      <PentaLandingPage />
      <PentaKuhlSection />
      <ShippersSection />
      <SeriesGuideSection />
      <ScrollMarqueeSection />
      <FAQSection faqs={faqs} des={des} />
      <ParallaxSection />
      <FooterSection />
      {/* <ProductSolutionsSection /> */}
    </div>
  );
};

export default page;


const ParallaxSection = () => {
  return (
    <div 
      className="relative w-full h-[350px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/warehouse-bg.png')", 
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-[#00000080] flex items-center justify-center">
        
        <div className="px-4 text-center text-white max-w-4xl mx-auto">
          
          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl drop-shadow-lg">
            Protecting What Matters Most
          </h2>
          
          {/* Paragraph */}
          <p className="mb-6 text-lg md:text-xl font-light drop-shadow-md">
            Get in touch to ensure safe and temperature-stable transit for your sensitive products.
          </p>
          
          {/* Button */}
          <button className="rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 transition-colors duration-300 shadow-lg">
            <span className="relative z-10">
              Contact Us Today
            </span>
          </button>

        </div>

      </div>
    </div>
  );
};