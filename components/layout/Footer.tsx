import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Top Section: CTA & Brand */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 pb-12 border-b border-white/5">
             <div className="max-w-md">
                <Link href="/" className="text-3xl font-bold tracking-tighter mb-6 block">
                  <span className="text-white">META</span>
                  <span className="text-gradient-gold">MORPHOSIS</span>
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
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gold-500 transition-colors"
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
                <FooterLink href="#">About Metamorphosis</FooterLink>
                <FooterLink href="#">Success Stories</FooterLink>
                <FooterLink href="#">Our Methodology</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Partnership</FooterLink>
                <FooterLink href="#">Press & Media</FooterLink>
            </ul>
          </div>

           {/* Column 4: Resources */}
           <div>
            <h4 className="font-bold text-white mb-8">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
                <FooterLink href="#">Industry Blog</FooterLink>
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
               <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-gold-500 transition-colors block">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all">
      <Icon size={18} />
    </a>
  )
}
