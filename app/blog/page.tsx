"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { blogPageData } from "@/lib/data";

export default function BlogPage() {
  const { heading, subheading, featuredPost, posts } = blogPageData;

  return (
    <main className="bg-[#05080f] min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      
      {/* Header / Journal Title */}
      <section className="pt-40 pb-16 relative">
          <div className="container mx-auto px-6 border-b border-white/10 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-end gap-6"
            >
                <div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter font-outfit text-white">
                        The <span className="text-amber-500">Journal</span>.
                    </h1>
                    <p className="text-xl text-gray-400 mt-4 max-w-xl">
                        {subheading}
                    </p>
                </div>
                <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-500 border border-amber-500/30 px-4 py-2 rounded-full bg-amber-500/10">
                        Updated Weekly
                    </span>
                </div>
            </motion.div>
          </div>
      </section>

      {/* Featured Article - Magazine Layout */}
      <section className="pb-24">
          <div className="container mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="group relative w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
              >
                  {/* Background Image (Abstract Fallback) */}
                  <div className="absolute inset-0 bg-[#0f1219]">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-[#05080f] to-[#05080f] mix-blend-overlay" />
                      {/* Placeholder Pattern since we don't have the image file yet */}
                      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover" /> 
                      <div className="absolute -right-40 -top-40 w-[800px] h-[800px] bg-amber-600/20 blur-[150px] rounded-full" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 md:p-16 flex flex-col justify-end">
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
                          <span className="bg-amber-500 text-black px-3 py-1 rounded-sm">{featuredPost.category}</span>
                          <span>{featuredPost.readTime}</span>
                      </div>
                      <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-white group-hover:text-amber-100 transition-colors mb-6 font-outfit">
                          {featuredPost.title}
                      </h2>
                      <p className="text-lg text-gray-300 max-w-2xl mb-8 line-clamp-2 md:line-clamp-none">
                          {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 border-t border-white/20 pt-6 mt-2 max-w-md">
                          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold">
                              {featuredPost.author.charAt(0)}
                          </div>
                          <div className="flex flex-col">
                              <span className="text-sm font-bold text-white">{featuredPost.author}</span>
                              <span className="text-xs text-gray-400">{featuredPost.date}</span>
                          </div>
                          <div className="ml-auto inline-flex items-center gap-2 text-amber-500 font-bold text-sm tracking-widest group-hover:translate-x-2 transition-transform">
                              READ NOW <ArrowUpRight size={16} />
                          </div>
                      </div>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* Filter Bar (Visual Only) */}
      <section className="mb-16">
          <div className="container mx-auto px-6 overflow-x-auto">
              <div className="flex gap-8 border-b border-white/10 pb-4 min-w-max">
                  {["All Stories", "Strategy", "Engineering", "Success Stories", "Odoo Updates"].map((cat, i) => (
                      <button 
                        key={cat} 
                        className={`text-sm font-bold tracking-widest uppercase pb-4 border-b-2 transition-all ${i===0 ? "text-amber-500 border-amber-500" : "text-gray-500 border-transparent hover:text-white"}`}
                      >
                          {cat}
                      </button>
                  ))}
              </div>
          </div>
      </section>

      {/* Article Grid */}
      <section className="pb-32">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {posts.map((post) => (
                      <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                          {/* Image Placeholder */}
                          <div className="h-64 mb-8 bg-[#0f1219] rounded-2xl border border-white/5 overflow-hidden relative">
                              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-amber-500 border border-white/10 rounded-full">
                                      {post.category}
                                  </span>
                              </div>
                          </div>
                          
                          <div className="flex-1 flex flex-col">
                              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                                  <span>{post.date}</span>
                                  <span className="w-1 h-1 bg-gray-500 rounded-full" />
                                  <span>{post.readTime}</span>
                              </div>
                              
                              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors font-outfit leading-tight">
                                  {post.title}
                              </h3>
                              
                              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                  {post.excerpt}
                              </p>

                              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-gray-300">
                                          {post.author.charAt(0)}
                                      </div>
                                      <span className="text-xs text-gray-400 font-bold">{post.author}</span>
                                  </div>
                                  <ChevronRight className="text-amber-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={18} />
                              </div>
                          </div>
                      </article>
                  ))}
              </div>
          </div>
      </section>

      {/* Newsletter - The "Premium" Finish */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden bg-[#0a0d14]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold font-outfit mb-4">Stay Ahead of the Curve</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">Get the latest strategic insights and Odoo updates delivered directly to your inbox. No spam, just value.</p>
              
              <div className="max-w-md mx-auto relative">
                  <input type="email" placeholder="Enter your business email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all pr-32 placeholder:text-gray-600" />
                  <button className="absolute right-2 top-2 bottom-2 bg-amber-500 text-black px-6 rounded-full font-bold text-sm hover:bg-amber-400 transition-colors">
                      Subscribe
                  </button>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
