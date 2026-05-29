"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-slate-200">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left gap-4 group"
    >
      <span
        className="text-sm md:text-base font-semibold text-slate-900 group-hover:text-slate-700 transition-colors leading-snug"
      >
        {faq.q}
      </span>
      <span className="shrink-0 text-gray-500">
        {isOpen ? <ChevronUp size={25} /> : <ChevronDown size={25} />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 text-base leading-relaxed pb-5">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function FAQSection({faqs,des}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-4 md:px-12 font-sans">
      <div className="max-w-[75rem] mx-auto flex flex-col md:flex-row gap-16 md:gap-20 items-start ">

        {/* ── Left: heading ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="md:w-[47%] self-start"
        >
          <h2 className="text-4xl md:text-4xl font-base leading-tight tracking-tight mb-5">
            <span className="text-slate-900">Frequently Asked </span>
            <span className="text-gray-500">Questions</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {des}
          </p>
        </motion.div>

        {/* ── Right: accordion ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 border-t border-slate-200 "
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}