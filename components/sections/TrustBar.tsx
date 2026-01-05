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
        <div className="animate-marquee whitespace-nowrap flex gap-16 px-16">
          {/* Repeat logos to ensure infinite scroll illusion */}
          {[...trustData.logos, ...trustData.logos, ...trustData.logos].map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer"
            >
              {/* Using a placeholder div if image src is dummy, otherwise valid Image */}
              <div className="h-8 w-32 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">
                {logo.name} Logo
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
