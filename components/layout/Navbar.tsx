"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks, ctaData } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-void/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-white">META</span>
          <span className="text-gradient-gold">MORPHOSIS</span>
        </Link>

        {/* Desktop Nav - Hidden for now as per user request */}
        <div className="hidden md:flex items-center gap-8">
          {/* {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))} */}
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full border border-gold-500/30 text-gold-400 text-sm font-semibold hover:bg-gold-500/10 hover:border-gold-500 transition-all"
          >
            {ctaData.button}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-void border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-gold-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 w-full text-center px-6 py-3 rounded-md bg-gold-gradient text-white font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {ctaData.button}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
