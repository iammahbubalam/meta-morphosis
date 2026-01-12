"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, ctaData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? portfolioData.items 
    : portfolioData.items.filter(item => item.category === filter);

  return (
    <main className="bg-void min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Hero Section - Structural Elegance */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[#05080f]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            
            {/* Badge */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
            >
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Trusted Partnership
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-bold mb-8 tracking-tight font-outfit"
            >
                Our Valued <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700 drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                    Clients
                </span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            >
                We take pride in powering the operations of Bangladesh's most visionary enterprises.
            </motion.p>
        </div>
      </section>

      {/* Elegant Filter Tabs */}
      <section className="mb-24">
        <div className="container mx-auto px-6 flex justify-center flex-wrap gap-4">
            {portfolioData.categories.map((cat, idx) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-8 py-3 rounded-full border text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
                        filter === cat 
                        ? "bg-amber-500 text-black border-amber-500 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]" 
                        : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-amber-500/50 hover:bg-white/10"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </section>

      {/* Client Success Grid */}
      <section className="pb-40">
        <div className="container mx-auto px-6">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <AnimatePresence>
                    {filteredItems.map((item) => (
                        <ClientCard key={item.id} item={item} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 border-t border-white/5 bg-neutral-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">{ctaData.heading}</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">{ctaData.subheading}</p>
            <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-300"
            >
                {ctaData.button} <ArrowUpRight size={22} />
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ClientCard({ item }: { item: any }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group relative h-full bg-[#0f1219] rounded-2xl border border-white/5 p-8 flex flex-col hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500"
        >
            {/* Logo Section (Placeholder for now) */}
            <div className="h-24 mb-8 flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                    <span className="text-2xl font-bold text-gray-500 group-hover:text-amber-500 transition-colors">
                        {item.title.charAt(0)}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors font-outfit">
                    {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {item.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 transition-all duration-500" />
        </motion.div>
    )
}
