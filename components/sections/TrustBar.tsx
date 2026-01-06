"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      
      {/* Background: Subtle gradient mesh to give depth behind cards */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(251,191,36,0.1),_transparent_70%)]" />

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          Powering Bangladesh's <span className="text-gradient-gold">New Economy</span>
        </motion.h3>
        <p className="text-gray-500 text-sm uppercase tracking-widest">
          Trusted by 50+ Enterprises
        </p>
      </div>

      {/* Card Stream Container */}
      <div className="relative flex overflow-hidden py-4"> {/* py-4 to allow shadow/glow space */}
        
        {/* Gradient Masks for smooth entry/exit */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-void to-transparent z-20" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-void to-transparent z-20" />

        <motion.div
          className="flex gap-6 whitespace-nowrap px-4"
          animate={{
            x: [0, -1000], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Loop multiple times for seamlessness */}
          {[1, 2, 3, 4].map((groupIndex) => (
             <div key={groupIndex} className="flex gap-6">
                 {/* Card 1: BASB */}
                 <div className="w-[200px] h-[120px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-6 relative group hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-500 cursor-default">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-gold-500/0 transition-all duration-500 rounded-xl" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/clients-set-1.png" className="w-full h-full object-contain object-left opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 brightness-150" style={{ objectFit: 'cover', objectPosition: '0 0', width: '200%', maxWidth: 'none' }} alt="BASB" />
                 </div>

                 {/* Card 2: Alauddin */}
                 <div className="w-[200px] h-[120px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-6 relative group hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-500 cursor-default">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/clients-set-1.png" className="w-full h-full object-contain opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 brightness-150" style={{ objectFit: 'cover', objectPosition: '33% 0', width: '200%', maxWidth: 'none' }} alt="Alauddin" />
                 </div>

                 {/* Card 3: Aristo */}
                 <div className="w-[200px] h-[120px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-6 relative group hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-500 cursor-default">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/clients-set-1.png" className="w-full h-full object-contain opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 brightness-150" style={{ objectFit: 'cover', objectPosition: '66% 0', width: '200%', maxWidth: 'none' }} alt="Aristo" />
                 </div>

                 {/* Card 4: Baatighar */}
                 <div className="w-[200px] h-[120px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-6 relative group hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-500 cursor-default">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/clients-set-1.png" className="w-full h-full object-contain opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 brightness-150" style={{ objectFit: 'cover', objectPosition: '100% 0', width: '200%', maxWidth: 'none' }} alt="Baatighar" />
                 </div>

                 {/* Card 5: UPL */}
                 <div className="w-[200px] h-[120px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-6 relative group hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-500 cursor-default">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/clients-set-2.png" className="w-full h-full object-contain opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 brightness-150" style={{ objectFit: 'cover', objectPosition: '0 0', width: '200%', maxWidth: 'none' }} alt="UPL" />
                 </div>

                 {/* Card 6: Cross World */}
                 <div className="w-[200px] h-[120px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-6 relative group hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-500 cursor-default">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logos/clients-set-2.png" className="w-full h-full object-contain opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 brightness-150" style={{ objectFit: 'cover', objectPosition: '25% 0', width: '200%', maxWidth: 'none' }} alt="Cross World" />
                 </div>
                 
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
