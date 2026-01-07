"use client";

import { motion } from "framer-motion";
import { statsData } from "@/lib/data";

export default function ImpactStats() {
  return (
    <section className="py-20 border-t border-white/5 bg-black/40 relative overflow-hidden">
        {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 font-mono tracking-tighter">
                {stat.value}<span className="text-gold-500 text-3xl align-top">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-gold-500/80 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
