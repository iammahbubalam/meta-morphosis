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
    items: [
        {
            quote: "Metamorphosis didn't just install software; they fixed our business logic. We are now scaling without the growing pains.",
            author: "Tanvir Ahmed",
            role: "CEO, TechFlow Bangladesh",
            rating: 5
        }
    ]
}

export const ctaData = {
    heading: "Ready to Evolve?",
    subheading: "Stop managing chaos. Start managing growth.",
    button: "Book Your Free Audit"
}
