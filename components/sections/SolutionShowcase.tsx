"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { solutionData } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function SolutionShowcase() {
  const [activeTab, setActiveTab] = useState<"chaos" | "clarity">("clarity");

  return (
    <section className="py-24 bg-void relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
          {solutionData.heading}
        </motion.h2>
        <p className="text-gray-400 mb-12 text-lg">{solutionData.subheading}</p>

        {/* Toggle Switch */}
        <div className="inline-flex bg-white/5 p-1 rounded-full mb-16 border border-white/10">
          <button
            onClick={() => setActiveTab("chaos")}
            className={cn(
              "px-8 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === "chaos"
                ? "bg-red-500/10 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                : "text-gray-400 hover:text-white"
            )}
          >
            Chaos
          </button>
          <button
            onClick={() => setActiveTab("clarity")}
            className={cn(
              "px-8 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === "clarity"
                ? "bg-gold-500/10 text-gold-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                : "text-gray-400 hover:text-white"
            )}
          >
            Clarity
          </button>
        </div>

        {/* The Graphic */}
        <div className="relative mx-auto max-w-5xl h-[500px] rounded-2xl border border-white/10 bg-card overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            {activeTab === "chaos" ? (
              <motion.div
                key="chaos"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-wrap content-center justify-center gap-4 bg-void/50 p-10"
              >
                {/* Chaos Visuals */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-32 h-24 bg-white/5 border border-white/5 rounded flex items-center justify-center animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <X className="text-red-500/50" />
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-red-500/20 uppercase tracking-widest rotate-[-15deg]">
                    Disconnected
                  </h3>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="clarity"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-void to-card flex flex-col"
              >
                {/* Odoo Mockup UI */}
                <div className="h-12 border-b border-white/5 flex items-center px-6 gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  <div className="ml-auto text-xs text-gray-500">Odoo 18 Enterprise</div>
                </div>
                <div className="flex-1 p-8 grid grid-cols-4 gap-6">
                  {/* Sidebar */}
                  <div className="col-span-1 space-y-4 border-r border-white/5 pr-6">
                     <div className="h-8 w-2/3 bg-gold-500/20 rounded" />
                     <div className="h-4 w-full bg-white/5 rounded" />
                     <div className="h-4 w-5/6 bg-white/5 rounded" />
                     <div className="h-4 w-4/5 bg-white/5 rounded" />
                  </div>
                  {/* Dashboard */}
                  <div className="col-span-3 grid grid-cols-2 gap-6">
                    <div className="h-32 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center">
                       <span className="text-2xl font-bold text-gold-400">+127% ROI</span>
                    </div>
                    <div className="h-32 rounded-xl bg-white/5 border border-white/10" />
                    <div className="col-span-2 h-48 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gold-500/10 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Feature List */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
            {solutionData.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 rounded-full bg-gold-500/10 text-gold-500">
                        <feature.icon size={18} />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
