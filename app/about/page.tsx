"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-void min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-outfit"
            >
                Orchestrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Excellence</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
                Metamorphosis is Bangladesh's premier Odoo Gold Partner, dedicated to transforming chaotic operations into streamlined, data-driven success stories. We don't just implement software; we engineer business logic.
            </motion.p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)] -z-10 pointer-events-none" />
      </section>

      <section className="py-20">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                 <h2 className="text-3xl font-bold mb-6 font-outfit text-white">Our Mission</h2>
                 <p className="text-gray-400 leading-relaxed mb-6">
                     To empower 1000+ Bangladeshi enterprises with world-class ERP technology by 2030, fostering a culture of transparency, efficiency, and continuous innovation.
                 </p>
                 <div className="h-1 w-20 bg-amber-500" />
             </div>
             <div className="relative h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  {/* Placeholder for About Image */}
                  <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-gray-600">
                      [Office / Team Image]
                  </div>
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
