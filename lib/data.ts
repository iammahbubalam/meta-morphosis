import { LayoutDashboard, FileSpreadsheet, Layers, EyeOff, CheckCircle2, Zap, BarChart3, Users } from "lucide-react";

export const siteConfig = {
  name: "Metamorphosis",
  tagline: "Orchestrating Business Excellence",
  description: "Transform operational chaos into strategic clarity with Odoo ERP.",
  contact: {
    address: "Dhaka, Bangladesh",
    email: "hello@metamorphosis.com.bd",
    phone: "+880 1700-000000",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

export const heroData = {
  badge: "Official Odoo Partner Bangladesh",
  headline: {
    prefix: "Orchestrating Business",
    highlight: "Excellence", // Gradient Gold
  },
  subheadline: "Transform operational chaos into strategic clarity with Odoo ERP.",
  cta: {
    primary: "Start Transformation",
    secondary: "View Solutions",
  },
  stats: [
    { label: "Clients Served", value: "50+" },
    { label: "Modules Deployed", value: "500+" },
  ]
};

export const trustData = {
  heading: "Trusted by forward-thinking companies:",
  logos: [
    // Placeholder paths - would be replaced by real URLs/imports
    { name: "Client A", src: "/images/client-1.svg" },
    { name: "Client B", src: "/images/client-2.svg" },
    { name: "Client C", src: "/images/client-3.svg" },
    { name: "Client D", src: "/images/client-4.svg" },
    { name: "Client E", src: "/images/client-5.svg" },
  ]
};

export const problemData = {
  heading: "Is Your Growth Hitting a Ceiling?",
  cards: [
    {
      icon: FileSpreadsheet,
      title: "The Spreadsheet Web",
      description: "Data scattered across 100+ disconnected sheets, making version control impossible.",
    },
    {
      icon: Layers,
      title: "The Silo Effect",
      description: "Sales doesn't know what Inventory has in stock, leading to broken promises.",
    },
    {
      icon: EyeOff,
      title: "The Blind Pilot",
      description: "Making crucial business decisions based on data that is weeks old.",
    },
    {
      icon: Zap,
      title: "Inventory Black Hole",
      description: "Stock vanishing due to lack of real-time tracking and theft visibility.",
    },
    {
      icon: BarChart3,
      title: "Financial Fog",
      description: "No clear picture of P&L until the end of the month. Flying blind financially.",
    },
  ]
};

export const solutionData = {
  heading: "Enter the Unified Era",
  subheading: "We replace the clutter with one cohesive operating system.",
  features: [
    { icon: LayoutDashboard, text: "Centralized Dashboard" },
    { icon: Zap, text: "Real-time Automation" },
    { icon: CheckCircle2, text: "Seamless Integration" },
  ]
};

export const processData = {
  heading: "A Simple Path to Clarity",
  steps: [
    {
      number: "01",
      title: "Discovery & Blueprint",
      description: "We deep-dive into your workflow to identify bottlenecks and opportunities."
    },
    {
      number: "02",
      title: "Meta-Implementation",
      description: "We configure, customize, and migrate your data to the Odoo ecosystem."
    },
    {
      number: "03",
      title: "Evolve & Scale",
      description: "Comprehensive training and go-live support to ensure widespread adoption."
    }
  ]
};

export const testimonialsData = {
  heading: "Success Stories",
  subheading: "See how we're transforming industries across Bangladesh.",
  items: [
    {
      id: 1,
      video: "/videos/success-1.mp4", 
      poster: "/placeholder-video.jpg",
      author: "Adnan Khan",
      role: "CTO, FinTex",
      quote: "Metamorphosis cut our reporting time by 90%.",
      stat: "90% Faster"
    },
    {
      id: 2,
      video: "/videos/success-2.mp4",
      poster: "/placeholder-video.jpg",
      author: "Sarah Ahmed",
      role: "Ops Director, LogiChain",
      quote: "Inventory accuracy went from 65% to 99% in weeks.",
      stat: "99% Accuracy"
    },
    {
      id: 3,
      video: "/videos/success-3.mp4",
      poster: "/placeholder-video.jpg",
      author: "Rahim Uddin",
      role: "CEO, BuildCorp",
      quote: "Finally, I can see my entire business on one screen.",
      stat: "100% Visibility"
    }
  ]
};

export const statsData = [
  { value: "10M+", label: "Transactions Processed", suffix: "" },
  { value: "50+", label: "Enterprise Users", suffix: "" },
  { value: "99.9", label: "System Uptime", suffix: "%" },
  { value: "24/7", label: "Local Support", suffix: "" },
];

export const updatesData = [
   { date: "Oct 24", title: "Odoo 18 Migration Service Launched", category: "Service" },
   { date: "Nov 02", title: "Metamorphosis Names Top ERP Partner", category: "Award" },
   { date: "Nov 15", title: "New AI Forecasting Module Beta", category: "Product" },
   { date: "Dec 01", title: "Expansion to Chittagong Office", category: "Company" },
];

export const faqData = [
  {
    question: "How long does implementation take?",
    answer: "Typical timeline involves 2-4 weeks for Discovery, followed by 6-12 weeks for Implementation depending on complexity. We prioritize a 'Phase 1' go-live to get you value quickly."
  },
  {
    question: "Do you provide local support in Bangladesh?",
    answer: "Yes, we have a fully staffed team in Dhaka providing 24/7 on-site and remote support. No waiting for overseas time zones."
  },
  {
    question: "Can you migrate data from Tally or Excel?",
    answer: "Absolutely. We have specialized tools to clean, map, and import your historical data from legacy systems like Tally, Excel, or custom software."
  },
  {
    question: "Is Odoo customizable?",
    answer: "Odoo is open-source and highly modular. We can tailor every workflow to match your unique business processes without breaking upgradability."
  },
];

export const portfolioData = {
  heading: "Our Valued Clients",
  subheading: "Partnering with industry leaders to drive digital transformation.",
  categories: ["All", "Manufacturing", "Retail", "Textile", "Government", "Service"],
  items: [
    {
      id: 1,
      title: "Bangladesh Armed Services Board",
      category: "Government",
      image: "/icons/logo_basb.png", // Placeholder path
      description: "Providing free medicine for all retired service personnel and their dependents through 30+ physical stores countrywide.",
      tags: ["#POS", "#Inventory", "#Odoo"],
      stats: { value: "30+", label: "Stores" }
    },
    {
      id: 2,
      title: "Alauddin Textile Mills",
      category: "Textile",
      image: "/icons/logo_alauddin.png",
      description: "A legendary brand in the Textile Industry, using Odoo for over 5 years to manage purchase, stock, sales, and accounting with fixed assets.",
      tags: ["#Odoo", "#Purchase", "#Inventory", "#Sales", "#Accounting"],
      stats: { value: "5yr+", label: "Partnership" }
    },
    {
      id: 3,
      title: "Aristo Food Export Limited",
      category: "Manufacturing",
      image: "/icons/logo_aristo.png",
      description: "One of the largest Auto Rice Mill Manufacturing concerns in the south-west region of Bangladesh.",
      tags: ["#Manufacturing", "#Purchase", "#Sales", "#Inventory", "#Freight"],
      stats: { value: "Full", label: "Automation" }
    },
    {
      id: 4,
      title: "Baatighar",
      category: "Retail",
      image: "/icons/logo_baatighar.png",
      description: "Bangladesh's premium book store and publisher with exceptional hospitality and the widest collection of books and magazines.",
      tags: ["#Odoo", "#POS", "#eCommerce", "#Website"],
      stats: { value: "Omni", label: "Channel" }
    },
    {
      id: 5,
      title: "University Press Limited",
      category: "Retail",
      image: "/icons/logo_upl.png",
      description: "Leading academic publisher ensuring efficient distribution and inventory management across multiple warehouses.",
      tags: ["#Inventory", "#Accounting", "#Sales"],
      stats: { value: "Top", label: "Publisher" }
    },
    {
      id: 6,
      title: "Cross-World Group",
      category: "Service",
      image: "/icons/logo_crossworld.png",
      description: "Diverse conglomerate streamlining operations across multiple business units with a unified ERP solution.",
      tags: ["#Multi-Company", "#HR", "#Payroll"],
      stats: { value: "Unified", label: "System" }
    },
    {
      id: 7,
      title: "Easy Dhaka",
      category: "Service",
      image: "/icons/logo_easydhaka.png",
      description: "Simplifying urban logistics and lifestyle services with a robust backend management system.",
      tags: ["#Logistics", "#Fleet", "#App"],
      stats: { value: "Fast", label: "Delivery" }
    },
    {
      id: 8,
      title: "Q.A. Group",
      category: "Manufacturing",
      image: "/icons/logo_qa.png",
      description: "Enhancing production planning and quality control for high-volume manufacturing lines.",
      tags: ["#Manufacturing", "#Quality", "#PLM"],
      stats: { value: "10M+", label: "Units" }
    }
  ]
};

export const ctaData = {
    heading: "Ready to Evolve?",
    subheading: "Stop managing chaos. Start managing growth.",
    button: "Book Your Free Audit"
}
