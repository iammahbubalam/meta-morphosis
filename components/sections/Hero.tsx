"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroData } from "@/lib/data";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      
      {/* 1. LAYERED SMOKE/FLUID BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Base Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-void via-[#0B0F1D] to-void" />

        {/* Large Fluid Shapes - Simulating Smoke with Mix-Blend-Mode */}
        <motion.div
           animate={{
             rotate: [0, 360],
             scale: [1, 1.2, 1],
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-900/30 to-purple-900/0 blur-[100px] mix-blend-screen opacity-40 top-[-20%] left-[-10%]"
        />

        <motion.div
           animate={{
             x: ["-10%", "10%", "-10%"],
             y: ["-10%", "10%", "-10%"],
             scale: [1, 1.3, 1],
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute w-[1000px] h-[600px] rounded-[100%] bg-gradient-to-r from-gold-600/10 via-gold-500/10 to-transparent blur-[120px] mix-blend-screen opacity-30"
           style={{ top: '20%' }}
        />

        {/* The "Smoke" Veil - Moving Gradient Textures */}
        <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3], x: [-50, 50, -50] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),transparent_70%)] blur-[40px]" 
        />
        
        {/* Animated Particles/Sparks */}
        <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    initial={{
                        x: Math.random() * 1000 - 500,
                        y: Math.random() * 800 - 400,
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: Math.random() * 0.5
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [null, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                    style={{
                        width: Math.random() * 2 + 1 + 'px',
                        height: Math.random() * 2 + 1 + 'px',
                        left: '50%',
                        top: '50%'
                    }}
                />
            ))}
        </div>
      </div>

      {/* 2. MAIN CONTENT (Interacting with the "Fog") */}
      <motion.div style={{ opacity, y }} className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 text-sm font-medium mb-12 shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
          </span>
          Global Odoo ERP Partner
        </motion.div>

        {/* UNIFIED MASSIVE TITLE */}
        <div className="relative mb-12">
             <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-white select-none"
            >
              META
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700 select-none pb-4"
            >
              MORPHOSIS
            </motion.h1>
            
            {/* Glow backing for text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/10 blur-[100px] -z-10" />
        </div>

        {/* Input-style CTA (x.ai inspired) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="max-w-xl mx-auto"
        >
           <p className="text-xl text-gray-400 mb-8 font-light">
             From chaos to clarity. The enterprise backbone for ambitious companies.
           </p>

           <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/audit"
                className="group px-8 py-4 rounded-full bg-white text-void font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Start Transformation
                <ArrowRight size={20} className="text-gold-600" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
               >
                 View Solutions
               </Link>
           </div>
        </motion.div>

      </motion.div>
      
       {/* Bottom Scroll Indicator */}
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
       >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500/50">Scroll to Evolve</span>
       </motion.div>
    </section>
  );
}
