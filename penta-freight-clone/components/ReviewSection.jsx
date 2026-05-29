"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    company: "Lufthansa Cargo",
    tagline: "Networking the world.",
    logoColor: "#f5a623",
    logo: "/logos/Lufthansa.png",
    quote:
      "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India….",
    name: "Frank Naeve",
    role: "Vice President Asia Pacific",
    width:200
  },
  {
    company: "Sun Pharma",
    tagline: "",
    logoColor: "#e05a1b",
    logo: "/logos/sun.png",
    quote:
      "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India….",
    name: "Frank Naeve",
    role: "Vice President Asia Pacific",
    width:100

  },
  {
    company: "Watson Pharmaceuticals",
    tagline: "",
    logoColor: "#0073c6",
    logo: "/logos/Watson.png",
    quote:
      "Penta Freight has been one of our export LSP's for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success.",
    name: "Ryan Veigas",
    role: "Vice President - Supply Chain & Procurement",
     width:200
  },
  {
    company: "Lufthansa Cargo",
    tagline: "Networking the world.",
    logoColor: "#f5a623",
    logo: "/logos/Lufthansa.png",
    quote:
      "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India….",
    name: "Frank Naeve",
    role: "Vice President Asia Pacific",
     width:200
  },
];

/* ── Single review card ── */
const ReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    viewport={{ once: true, margin: "-40px" }}
    className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col gap-4 shadow-stone-900"
    style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
  >
    {/* Logo row */}
    <div className="flex justify-center items-center">
      <Image src={review.logo} alt={review.company} width={review.width} height={28} />
    </div>

    {/* Quote */}
    <p className="text-base text-slate-600 leading-relaxed text-center italic">
      "{review.quote}"
    </p>

    {/* Author */}
    <div className="pt-2 border-t border-slate-100 text-center">
      <p className="text-xl font-semibold text-slate-900">{review.name}</p>
      <p className="text-base text-slate-500 mt-0.5 ">{review.role}</p>
    </div>
  </motion.div>
);

/* ── Root component ── */
export default function ReviewsSection() {
  // Split reviews into two columns
  const col1 = reviews.filter((_, i) => i % 2 === 0);
  const col2 = reviews.filter((_, i) => i % 2 !== 0);

  return (
    <section className="bg-white py-20 px-4 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* ── LEFT: sticky heading ── */}
        <div className="md:w-[34%] shrink-0 md:sticky md:top-24 self-start">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-xl border border-slate-300 rounded-full px-4 py-1 text-slate-600">
              Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-4.5xl leading-tight tracking-tight mb-4">
            <span className="text-slate-900">Hear From Our Satisfied </span>
            <span className="text-[#8b8a8a]">Clients Worldwide.</span>
          </h2>
          <p className="text-[16px] text-black leading-relaxed ">
            Explore what industry leaders and long-term partners say about our
            commitment to excellence and innovation.
          </p>
        </div>

        {/* ── RIGHT: two scrolling columns ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-7 ">
          {/* Column 1 */}
          <div className="flex flex-col gap-10">
            {col1.map((review, i) => (
              <ReviewCard key={`col1-${i}`} review={review} index={i * 2} />
            ))}
          </div>
          {/* Column 2 — offset down so it looks staggered */}
          <div className="flex flex-col gap-10 md:mt-82">
            {col2.map((review, i) => (
              <ReviewCard key={`col2-${i}`} review={review} index={i * 2 + 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}