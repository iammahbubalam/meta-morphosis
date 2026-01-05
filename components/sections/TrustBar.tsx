"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { trustData } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-white/5 bg-white/2 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
          {trustData.heading}
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-20 px-16 items-center">
          {/* Repeat the logo image multiple times to create the infinite scroll */}
          {[1, 2, 3, 4].map((index) => (
             <div key={index} className="relative w-[300px] h-[80px] opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img 
                   src="/images/logos/logo-set.png" 
                   alt="Trusted Partner" 
                   className="w-full h-full object-contain mix-blend-screen"
                 />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
