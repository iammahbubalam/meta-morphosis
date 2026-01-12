"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-void min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-48 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-outfit"
            >
                Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Transformation</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
               Ready to streamline your operations with Odoo? Let's discuss your business goals and how we can engineer your success.
            </motion.p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)] -z-10 pointer-events-none" />
      </section>

      {/* Contact Section */}
      <section className="py-20">
         <div className="container mx-auto px-6 max-w-6xl">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                 
                 {/* Contact Form */}
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0f1219] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
                 >
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" />
                     
                     <h2 className="text-3xl font-bold mb-8 font-outfit">Send us a Message</h2>
                     <form className="space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                 <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Name</label>
                                 <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
                             </div>
                             <div className="space-y-2">
                                 <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                                 <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
                             </div>
                         </div>
                         
                         <div className="space-y-2">
                             <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Company</label>
                             <input type="text" placeholder="Your Company Ltd." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all" />
                         </div>

                         <div className="space-y-2">
                             <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Message</label>
                             <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all resize-none" />
                         </div>

                         <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-black font-bold text-lg hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                             Send Message <Send size={20} />
                         </button>
                     </form>
                 </motion.div>

                 {/* Contact Info */}
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col justify-center space-y-12"
                 >
                     <div>
                         <h3 className="text-2xl font-bold text-white mb-6 font-outfit">Contact Information</h3>
                         <div className="space-y-6">
                             <InfoItem icon={MapPin} title="Office Address" content="Level 4, House 12, Road 17, Banani, Dhaka-1213, Bangladesh" />
                             <InfoItem icon={Mail} title="Email Us" content="hello@metamorphosis.com.bd" />
                             <InfoItem icon={Phone} title="Call Us" content="+880 1711 000 000" />
                         </div>
                     </div>

                     {/* Map Placeholder */}
                     <div className="w-full h-64 bg-[#0f1219] rounded-2xl border border-white/10 relative overflow-hidden group">
                         <div className="absolute inset-0 bg-[url('/images/map_placeholder.png')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                         <div className="absolute inset-0 flex items-center justify-center">
                             <div className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-amber-500 text-sm font-bold flex items-center gap-2">
                                 <MapPin size={16} /> View on Google Maps
                             </div>
                         </div>
                     </div>
                 </motion.div>

             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoItem({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <Icon size={24} />
            </div>
            <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{title}</h4>
                <p className="text-lg text-white font-medium leading-relaxed">{content}</p>
            </div>
        </div>
    )
}
