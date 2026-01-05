"use client";

import { motion } from "framer-motion";
import { problemData } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProblemGrid() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            {problemData.heading}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problemData.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500"
              )}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
