"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    { 
        title: "Why Odoo 18 is a Game Changer for Manufacturing", 
        category: "Tech Update", 
        date: "Jan 12, 2026",
        excerpt: "Exploring the new BOM flexibility and shop floor automation features in the latest release."
    },
    { 
        title: "Case Study: Scaling Retail Operations to 50 Stores", 
        category: "Success Story", 
        date: "Dec 28, 2025",
        excerpt: "How Baatighar used our custom POS module to synchronize inventory across countrywide outlets."
    },
    { 
        title: "The Death of 'Spreadsheet Management'", 
        category: "Opinion", 
        date: "Dec 10, 2025",
        excerpt: "Why clinging to Excel is costing your business millions in lost efficiency and data silos."
    },
  ];

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
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Insights</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
               Deep dives into ERP trends, digital transformation strategies, and Metamorphosis engineering updates.
            </motion.p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)] -z-10 pointer-events-none" />
      </section>

      {/* Article Grid */}
      <section className="py-20">
         <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {posts.map((post, idx) => (
                     <div key={idx} className="group flex flex-col h-full bg-[#0f1219] rounded-2xl border border-white/5 overflow-hidden hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500 cursor-pointer">
                         <div className="h-60 bg-white/5 relative">
                             {/* Placeholder for Blog Image */}
                             <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-gray-600">
                                 [Article Image]
                             </div>
                             <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-bold text-amber-500 border border-white/10">
                                 {post.category}
                             </div>
                         </div>
                         <div className="p-8 flex flex-col flex-1">
                             <div className="text-xs text-gray-500 mb-3">{post.date}</div>
                             <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors leading-tight">
                                 {post.title}
                             </h3>
                             <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                 {post.excerpt}
                             </p>
                             <div className="flex items-center text-amber-500 font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform">
                                 READ MORE <ArrowUpRight size={16} className="ml-1" />
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
