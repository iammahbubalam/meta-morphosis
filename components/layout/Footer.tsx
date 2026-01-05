import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              <span className="text-white">META</span>
              <span className="text-gradient-gold">MORPHOSIS</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
                <li><Link href="#" className="hover:text-gold-400">Odoo Implementation</Link></li>
                <li><Link href="#" className="hover:text-gold-400">Custom Development</Link></li>
                <li><Link href="#" className="hover:text-gold-400">Migration Services</Link></li>
                <li><Link href="#" className="hover:text-gold-400">Corporate Training</Link></li>
            </ul>
          </div>

           <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
                <li><Link href="#" className="hover:text-gold-400">About Us</Link></li>
                <li><Link href="#" className="hover:text-gold-400">Success Stories</Link></li>
                <li><Link href="#" className="hover:text-gold-400">Careers</Link></li>
                <li><Link href="#" className="hover:text-gold-400">Contact</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Contact</h4>
             <ul className="space-y-4 text-sm text-gray-500">
                <li>{siteConfig.contact.address}</li>
                <li>{siteConfig.contact.email}</li>
                <li>{siteConfig.contact.phone}</li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-white/5" />
                <div className="w-8 h-8 rounded-full bg-white/5" />
                <div className="w-8 h-8 rounded-full bg-white/5" />
            </div>
        </div>
      </div>
    </footer>
  );
}
