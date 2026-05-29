import React from 'react'
import IndustriesSection from './components/IndustriesSection'
import FAQSection from '@/components/FAQSection'
import FooterSection from '../../components/FooterSection'

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We serve various industries including pharmaceuticals, chemicals, energy, packaging, textiles, and more, offering tailored logistics solutions for each.",
  },
  {
    q: "How do you handle temperature-sensitive shipments?",
    a: "We provide temperature-controlled solutions to ensure the safe transport of sensitive goods, especially for the pharmaceutical industry.",
  },
  {
    q: "What sets your logistics apart?",
    a: "Our 31+ years of experience, strong carrier relationships, and dedicated team ensure superior service quality, competitive pricing, and reliable on-time delivery across all modes of transport.",
  },
  {
    q: "How do you ensure compliance with regulations?",
    a: "We strictly follow IATA, customs, and industry-specific guidelines. Our team stays updated with the latest regulatory requirements to ensure every shipment is fully compliant.",
  },
];

const des = "Find answers to common industry questions, ensuring clarity on our services, processes, and solutions."

const page = () => {
  return (
    <div>
      <IndustriesSection />
      <FAQSection faqs={faqs} des={des} />

      <section className="relative bg-[#7a7a7a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center md:my-10">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Tailored Logistics for Every Industry
        </h2>
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto md:text-nowrap">
          Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
        </p>
        {/* CTA Button */}
        <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-lg">
          Contact Us Today
        </button>
      </div>
    </section>

    </div>
  )
}

export default page
