"use client";

import { testimonialsData } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 text-center max-w-4xl">
         <h2 className="text-3xl font-bold mb-12 text-white">Clients Love Metamorphosis</h2>
         
         {testimonialsData.items.map((item, i) => (
             <div key={i} className="bg-void border border-white/5 p-10 rounded-2xl relative">
                 <div className="text-gold-500 text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                 <p className="text-xl md:text-2xl text-gray-300 font-light italic mb-8 relative z-10">
                     {item.quote}
                 </p>
                 <div>
                     <p className="font-bold text-white">{item.author}</p>
                     <p className="text-sm text-gray-500">{item.role}</p>
                 </div>
             </div>
         ))}
      </div>
    </section>
  );
}
