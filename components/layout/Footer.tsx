import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-white/5 pt-32 pb-24 relative overflow-hidden">
      {/* Horizon Glow Effect - Intensified */}
      <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-orange-600/40 via-orange-900/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 w-[80%] h-[350px] bg-amber-500/30 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.8)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: CTA & Brand */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 pb-12 border-b border-white/5">
             <div className="max-w-md">
                <Link href="/" className="mb-6 block flex items-center gap-3">
                   <Image 
                      src="/icons/logo_mm.png" 
                      alt="Metamorphosis Logo" 
                      width={40} 
                      height={40} 
                      className="h-10 w-auto object-contain"
                   />
                   <span className="text-3xl font-bold tracking-tight font-outfit lowercase">
                      <span className="text-orange-500">meta</span>
                      <span className="text-amber-400">morphosis</span>
                   </span>
                </Link>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Empowering Bangladeshi enterprises with world-class Odoo ERP solutions. 
                  Transforming chaos into clarity, one business at a time.
                </p>
                <div className="flex gap-4">
                  <SocialIcon Icon={Facebook} />
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Linkedin} />
                  <SocialIcon Icon={Instagram} />
                </div>
             </div>
             
             <div className="mt-12 md:mt-0">
                <h3 className="text-xl font-bold text-white mb-4">Ready to start?</h3>
                <Link 
                  href="/audit" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-amber-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300"
                >
                  Book Free Audit
                </Link>
             </div>
        </div>

        {/* Middle Section: Links - Expanded to 5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
           {/* Column 1: Solutions */}
           <div>
            <h4 className="font-bold text-white mb-8">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-500">
                <FooterLink href="#">Odoo ERP</FooterLink>
                <FooterLink href="#">CRM & Sales</FooterLink>
                <FooterLink href="#">Manufacturing (MRP)</FooterLink>
                <FooterLink href="#">Inventory & WMS</FooterLink>
                <FooterLink href="#">Accounting & Finance</FooterLink>
                <FooterLink href="#">HR & Payroll</FooterLink>
                <FooterLink href="#">eCommerce</FooterLink>
            </ul>
          </div>

           {/* Column 2: Services */}
           <div>
            <h4 className="font-bold text-white mb-8">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
                <FooterLink href="#">Full Implementation</FooterLink>
                <FooterLink href="#">Legacy Migration</FooterLink>
                <FooterLink href="#">Custom Development</FooterLink>
                <FooterLink href="#">Corporate Training</FooterLink>
                <FooterLink href="#">System Audit</FooterLink>
                <FooterLink href="#">24/7 Support</FooterLink>
            </ul>
          </div>

           {/* Column 3: Company */}
           <div>
            <h4 className="font-bold text-white mb-8">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
                <FooterLink href="/about">About Metamorphosis</FooterLink>
                <FooterLink href="/portfolio">Success Stories</FooterLink>
                <FooterLink href="/about">Our Methodology</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/partners">Partnership</FooterLink>
                <FooterLink href="/blog">Press & Media</FooterLink>
            </ul>
          </div>

           {/* Column 4: Resources */}
           <div>
            <h4 className="font-bold text-white mb-8">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
                <FooterLink href="/blog">Industry Blog</FooterLink>
                <FooterLink href="#">Whitepapers</FooterLink>
                <FooterLink href="#">Odoo Documentation</FooterLink>
                <FooterLink href="#">Developer API</FooterLink>
                <FooterLink href="#">Community Forum</FooterLink>
            </ul>
          </div>

           {/* Column 5: Legal & Contact */}
           <div>
             <h4 className="font-bold text-white mb-8">Connect</h4>
             <ul className="space-y-3 text-sm text-gray-500 mb-8">
                <FooterLink href="#">Contact Support</FooterLink>
                <FooterLink href="#">Sales Inquiry</FooterLink>
                <FooterLink href="#">Office Locations</FooterLink>
             </ul>
             
             <h4 className="font-bold text-white mb-4">Legal</h4>
             <ul className="space-y-3 text-sm text-gray-500">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
                <FooterLink href="#">Security</FooterLink>
             </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-gray-600">
               <Link href="#" className="hover:text-amber-500 hover:scale-105 transition-all duration-300">Privacy Policy</Link>
               <Link href="#" className="hover:text-amber-500 hover:scale-105 transition-all duration-300">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

// Footer Link
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-amber-500 hover:translate-x-2 transition-all duration-300 block">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-300">
      <Icon size={18} />
    </a>
  )
}
