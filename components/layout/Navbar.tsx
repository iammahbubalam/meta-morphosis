"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { siteConfig, ctaData } from "@/lib/data";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-void/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-[60]">
             <Image 
                src="/icons/logo_mm.png" 
                alt="Metamorphosis Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto object-contain"
                priority
             />
             <span className="text-3xl font-bold tracking-tight font-outfit lowercase">
                <span className="text-orange-500">meta</span>
                <span className="text-amber-400">morphosis</span>
             </span>
          </Link>

          {/* Desktop Nav with Hover Mega Menu */}
          <div className="hidden md:flex items-center gap-8 h-full">
            <Link href="/" className="text-sm font-bold text-white hover:text-amber-500 hover:scale-110 transition-all duration-300 py-4">Home</Link>
            <Link href="/portfolio" className="text-sm font-bold text-white hover:text-amber-500 hover:scale-110 transition-all duration-300 py-4">Portfolio</Link>
            
            <div 
                className="h-full flex items-center"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
                <button className={cn(
                    "text-sm font-bold transition-all duration-300 flex items-center gap-1 py-4 cursor-pointer",
                    isMegaMenuOpen ? "text-amber-500 scale-110" : "text-white hover:text-amber-500 hover:scale-110"
                )}>
                    Solutions
                    <span className={cn("w-1.5 h-1.5 rounded-full bg-amber-500 transition-opacity", isMegaMenuOpen ? "opacity-100" : "opacity-0")} />
                </button>
            </div>

            <Link href="/about" className="text-sm font-bold text-white hover:text-amber-500 hover:scale-110 transition-all duration-300 py-4">About</Link>
            <Link href="/blog" className="text-sm font-bold text-white hover:text-amber-500 hover:scale-110 transition-all duration-300 py-4">Blog</Link>
          </div>
 
           <div className="flex items-center gap-6">
             {/* CTA Button */}
             <Link
               href="/contact"
               className="hidden md:block px-6 py-2.5 rounded-full border border-gold-500/30 text-gold-400 text-sm font-semibold hover:bg-gold-500/10 hover:border-gold-500 transition-all"
             >
               {ctaData.button}
             </Link>
 
             {/* Mobile Menu Trigger (Simple) */}
             <button className="md:hidden text-white">
                <Menu size={24} />
             </button>
           </div>
        </div>

        {/* Mega Menu Rendered Absolute to Navbar */}
        <div 
          className="hidden md:block absolute top-full left-0 w-full"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <MegaMenu isOpen={isMegaMenuOpen} />
        </div>
      </nav>
    </>
  );
}
