"use client";

import { motion } from "framer-motion";
import { processData } from "@/lib/data";

export default function ThreeStepPlan() {
  return (
    <section className="py-24 bg-void relative">
        {/* Golden Seam Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden md:block" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10 bg-void inline-block left-1/2 -translate-x-1/2 px-8">
          <h2 className="text-3xl md:text-5xl font-bold">{processData.heading}</h2>
        </div>

        <div className="relative grid gap-12 max-w-4xl mx-auto">
          {processData.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number/Icon Side */}
              <div className="flex-1 flex justify-center md:justify-end">
                  {index % 2 !== 0 && <div className="hidden md:block" />} {/* Spacer */}
                  <div className="w-24 h-24 rounded-full border border-gold-500/20 bg-void flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,0,0,1)]">
                    <span className="text-3xl font-bold text-gold-500">{step.number}</span>
                  </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 text-center md:text-left">
                 <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                 <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
