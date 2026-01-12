"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Users, CheckCircle2, Globe2, TrendingUp } from "lucide-react";
import { aboutPageData } from "@/lib/data";

export default function AboutPage() {
  const { hero, values, stats, team, cities } = aboutPageData;

  return (
    <main className="bg-[#05080f] min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Manifesto Hero - Typography Focused */}
      <section className="pt-48 pb-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex justify-center mb-6">
                    <span className="px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest">
                        {hero.badge}
                    </span>
                </div>
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter font-outfit mb-8 leading-[0.9]">
                    {hero.title.replace("Business Logic.", "")} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-white to-white">Business Logic.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
                    {hero.subtitle}
                </p>
            </motion.div>
        </div>
        {/* Background Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] -z-10" />
      </section>

      {/* The DNA / Core Values */}
      <section className="py-24 border-t border-white/5 bg-[#0a0c12]">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {values.map((v) => (
                      <ValueCard 
                        key={v.title}
                        title={v.title} 
                        desc={v.description} 
                        number={v.number}
                      />
                  ))}
              </div>
          </div>
      </section>

      {/* The Impact Scale (Stats) */}
      <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
              {stats.map((s) => (
                  <StatItem key={s.label} value={s.value} label={s.label} />
              ))}
          </div>
      </section>

      {/* Leadership / Visionaries */}
      <section className="py-32 border-t border-white/5">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                      <h2 className="text-5xl font-bold font-outfit mb-4">The Architects</h2>
                      <p className="text-gray-400 max-w-lg">Meet the minds orchestrating the shift from legacy chaos to digital order.</p>
                  </div>
                  <button className="px-6 py-3 border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                      Join the Team
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {team.map((t) => (
                      <TeamCard key={t.name} name={t.name} role={t.role} image={t.image} />
                  ))}
              </div>
          </div>
      </section>

      {/* Global Footprint */}
      <section className="py-24 bg-[#0a0d14] relative overflow-hidden">
           <div className="container mx-auto px-6 text-center">
               <h2 className="text-4xl font-bold font-outfit mb-12">Reviewing Operations In</h2>
               <div className="flex flex-wrap justify-center gap-4 opacity-80">
                   {cities.map(city => (
                       <span key={city} className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-t from-white/10 to-white/30 hover:to-amber-500 transition-all duration-500 cursor-default">
                           {city}
                       </span>
                   ))}
               </div>
           </div>
      </section>

      <Footer />
    </main>
  );
}

function ValueCard({ title, desc, number }: { title: string, desc: string, number: string }) {
    return (
        <div className="group p-8 rounded-2xl border border-white/5 bg-[#0f1219] hover:border-amber-500/50 transition-all duration-500 relative overflow-hidden">
            <div className="text-6xl font-black text-white/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110">{number}</div>
            <h3 className="text-2xl font-bold font-outfit mb-4 text-white group-hover:text-amber-500 transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">{desc}</p>
        </div>
    )
}

function StatItem({ value, label }: { value: string, label: string }) {
    return (
        <div>
            <div className="text-5xl md:text-7xl font-bold text-white mb-2 font-outfit">{value}</div>
            <div className="text-sm font-bold uppercase tracking-widest text-amber-500">{label}</div>
        </div>
    )
}

function TeamCard({ name, role, image }: { name: string, role: string, image: string }) {
    return (
        <div className="group cursor-pointer">
            <div className="h-[400px] w-full bg-[#151922] rounded-2xl mb-6 relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-gray-600 font-bold">
                    [Image: {name}]
                </div>
                <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-amber-500 text-sm font-medium uppercase tracking-wider">{role}</p>
        </div>
    )
}
