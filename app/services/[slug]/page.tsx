"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { servicesPageData } from "@/lib/data";

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = servicesPageData[slug] || servicesPageData["default"];

  return (
    <main className="bg-[#05080f] min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Dynamic Hero */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-4xl"
            >
               <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black">
                       <data.icon size={24} />
                   </div>
                   <span className="text-amber-500 font-bold uppercase tracking-widest text-sm border-l border-amber-500/30 pl-4">
                       {data.tagline}
                   </span>
               </div>
               <h1 className="text-5xl md:text-8xl font-bold font-outfit mb-8 leading-tight">{data.title}</h1>
               <p className="text-xl text-gray-400 max-w-2xl leading-relaxed border-l-4 border-white/10 pl-6">
                   {data.description}
               </p>
            </motion.div>
        </div>
        
        {/* Abstract Lines */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[linear-gradient(to_left,#10141d,transparent)] -z-10" />
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-[#0a0d14]">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12 font-outfit">Our Methodology</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {data.steps.map((step: string, i: number) => (
                      <div key={i} className="relative">
                          <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4">{i+1}</div>
                          <div className="relative z-10 pt-8 pl-4 border-l border-amber-500/30">
                              <h3 className="text-xl font-bold text-white mb-2">{step}</h3>
                              <p className="text-sm text-gray-500">Executed by senior consultants.</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Service CTA */}
      <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0f1219] p-12 rounded-3xl border border-white/10">
              <div>
                   <h2 className="text-3xl font-bold text-white mb-2 font-outfit">Need {data.title}?</h2>
                   <p className="text-gray-400">Let's discuss your custom requirements.</p>
              </div>
              <Link href="/contact" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-amber-500 transition-colors flex items-center gap-2">
                  Get a Quote <ArrowUpRight size={18} />
              </Link>
          </div>
      </section>

      <Footer />
    </main>
  );
}
