"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      
      {/* 1. THE FLUID BACKGROUND (The "Grok" Effect approximation) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Layer 1: Gold Flow */}
        <motion.div
           animate={{
             x: ["-20%", "20%", "-20%"],
             y: ["10%", "-10%", "10%"],
             scale: [1, 1.2, 1],
             rotate: [0, 10, 0]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute w-[60vw] h-[60vw] bg-gold-600/20 rounded-full blur-[100px] mix-blend-screen opacity-60"
        />
        {/* Layer 2: Deep Blue Flow */}
        <motion.div
           animate={{
             x: ["20%", "-20%", "20%"],
             y: ["-10%", "10%", "-10%"],
             scale: [1.2, 1, 1.2],
             rotate: [0, -10, 0]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute w-[70vw] h-[50vw] bg-blue-900/40 rounded-full blur-[120px] mix-blend-screen opacity-50"
        />
        {/* Layer 3: Central Radiance (The "Beam") */}
        <motion.div 
            animate={{ opacity: [0.4, 0.7, 0.4], scaleX: [1, 1.5, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[120vw] h-[200px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent blur-[80px]"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
        />
      </div>

      {/* 2. MINIMALIST CONTENT */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* The "Grok" equivalent - Massive Text */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15vw] md:text-[180px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-[0_0_80px_rgba(245,158,11,0.2)] select-none"
        >
          META
        </motion.h1>
        
         <motion.h1
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="text-[10vw] md:text-[100px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 mix-blend-overlay -mt-[2vw] md:-mt-10 select-none pb-10"
        >
          MORPHOSIS
        </motion.h1>

        {/* Input/CTA Area similar to Grok's input box */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="max-w-2xl mx-auto mt-12 mb-20"
        >
            <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-white/10 via-gold-500/50 to-white/10">
                <div className="bg-void/90 backdrop-blur-xl rounded-full px-8 py-4 flex items-center justify-between gap-4">
                    <span className="text-gray-400 text-lg">Ready to transform your business?</span>
                    <Link href="/audit" className="p-2 rounded-full bg-white/10 hover:bg-gold-500 hover:text-white transition-colors">
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </motion.div>

      </div>
      
       {/* Bottom Text */}
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 1 }}
         className="absolute bottom-10 left-0 right-0 text-center"
       >
          <p className="text-xs text-gray-500 uppercase tracking-[0.3em]">Orchestrating Business Excellence</p>
       </motion.div>
    </section>
  );
}
