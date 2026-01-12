import { 
  LayoutDashboard, FileSpreadsheet, Layers, EyeOff, CheckCircle2, Zap, BarChart3, Users,
  Globe2, TrendingUp, Code2, GraduationCap, Headphones, Search, Monitor, Cog, Database, Globe,
  Shield, Lock, Eye, FileText, Gavel, Scale, AlertTriangle, CheckSquare, Clock, User
} from "lucide-react";

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



// ... existing code ...

export const ctaData = {
    heading: "Ready to Evolve?",
    subheading: "Stop managing chaos. Start managing growth.",
    button: "Book Your Free Audit"
}

// --- NEW PAGES DATA ---

export const aboutPageData = {
    hero: {
        badge: "Since 2018",
        title: "We Engineer Business Logic.",
        subtitle: "Metamorphosis isn't just an Odoo partner. We are the architects of digital permanence for Bangladesh's most ambitious enterprises."
    },
    values: [
        {
            number: "01",
            title: "Precision",
            description: "We believe in zero-defect delivery. Every line of code, every workflow configuration is tested against extreme edge cases."
        },
        {
            number: "02",
            title: "Transparency",
            description: "No hidden costs. No technical debt. We build systems that you own completely, with code that is clean and documented."
        },
        {
            number: "03",
            title: "Velocity",
            description: "Business moves fast. Our implementation methodology is designed to deploy MVP in weeks, not years."
        }
    ],
    stats: [
        { value: "150+", label: "Enterprise Projects" },
        { value: "50+", label: "Custom Modules" },
        { value: "10k+", label: "Daily Active Users" },
        { value: "100%", label: "Delivery Rate" }
    ],
    team: [
        { name: "Mahbub Alam", role: "Founder & CEO", image: "/images/team-1.jpg" },
        { name: "Sarah Khan", role: "Head of Engineering", image: "/images/team-2.jpg" },
        { name: "David Chen", role: "Chief Strategy Officer", image: "/images/team-3.jpg" }
    ],
    cities: ["Dhaka", "Chittagong", "Sylhet", "Singapore", "London", "Dubai"]
};

export const solutionsPageData: Record<string, any> = {
    "odoo-erp": {
        title: "Odoo ERP",
        tagline: "The Operating System for Business",
        description: "Stop stitching together disconnected apps. Run your entire business—Sales, Accounting, Inventory, HR—on one unified platform.",
        icon: Monitor,
        villain: {
            title: "The Fragmentation Trap",
            subtitle: "Is your growth stuck in a web of spreadsheet chaos?",
            problems: [
                "Data is siloed across 12+ mutually exclusive platforms.",
                "Your sales team has zero visibility into actual inventory levels.",
                "Management decisions are made on data that is 30 days old.",
                "Scaling requires hiring more admin staff just to move data around."
            ]
        },
        guide: {
            title: "Engineers of Clarity",
            description: "Metamorphosis isn't just an implementation partner. We are business architects. Having successfully migrated 50+ enterprises from chaos to clarity, we know exactly where the bottlenecks hide."
        },
        plan: [
            { title: "The Blueprint", desc: "We map every single data point in your current workflow." },
            { title: "The Migration", desc: "We move your history to Odoo with zero data loss." },
            { title: "The Launch", desc: "We train your team until the new system feels like second nature." }
        ],
        success: {
            title: "Your New Normal",
            outcomes: ["Real-time P&L visibility", "Automated inter-department workflows", "Single source of truth for all data"]
        },
        features: ["Unified Data Architecture", "Real-time Reporting", "Modular Scalability", "Mobile First Design"]
    },
    "crm-sales": {
        title: "CRM & Sales",
        tagline: "Turn Leads into Loyalists",
        description: "Automate your pipeline, stop leaks, and assist your sales team with AI-driven insights. Sell faster, smarter, and with less admin work.",
        icon: Globe,
        villain: {
            title: "The Leaky Pipeline",
            subtitle: "Great leads are falling through the cracks.",
            problems: [
                "Sales reps spend 40% of their time on data entry, not selling.",
                "Follow-ups are missed because they live on sticky notes.",
                "Forecasting is a guessing game based on gut feelings.",
                "Customer history is lost when a salesperson leaves."
            ]
        },
        guide: {
            title: "Sales Velocity Experts",
            description: "We build CRM systems that sales teams actually want to use. By automating the boring stuff and surfacing the 'money' tasks, we turn your CRM from a database into a revenue engine."
        },
        plan: [
            { title: "Audit Pipeline", desc: "Identify where leads are stalling." },
            { title: "Automate Comms", desc: "Set up invisible safety nets for follow-ups." },
            { title: "Scale Revenue", desc: "Equip your team with high-velocity tools." }
        ],
        success: {
            title: "Revenue Precision",
            outcomes: ["360° Customer View", "Automated Quotation to Invoice", "Accurate Revenue Forecasting"]
        },
        features: ["Pipeline Management", "Automated Follow-ups", "VoIP Integration", "Quotation Builder"]
    },
    "manufacturing-mrp": {
        title: "Manufacturing (MRP)",
        tagline: "Synchronize Your Shop Floor",
        description: "Plan, track, and schedule your manufacturing operations in real-time. Integrate quality control, maintenance, and PLM into a single flow.",
        icon: Cog,
        villain: {
            title: "The Production Black Hole",
            subtitle: "Where does the efficiency go?",
            problems: [
                "Production planning is done on a whiteboard that's always wrong.",
                "Raw material shortages halt lines unexpectedly.",
                "Cost per unit is a mystery until the year-end audit.",
                "Quality control data is trapped on clipboards."
            ]
        },
        guide: {
            title: "Industrial Architects",
            description: "Our engineers understand BOMs, Work Centers, and OEE. We configure Odoo not just to track production, but to optimize it."
        },
        plan: [
            { title: "Digital Twin", desc: "We model your entire shop floor in Odoo." },
            { title: "IoT Connect", desc: "Real-time data from your machines." },
            { title: "Flow Optimization", desc: "Eliminate bottlenecks systematically." }
        ],
        success: {
            title: "Lean Excellence",
            outcomes: ["99% On-time Delivery", "Real-time Costing", "Predictive Maintenance"]
        },
        features: ["Master Production Schedule", "Shop Floor Control", "Quality Checks", "Maintenance Automation"]
    },
    "inventory-wms": {
        title: "Inventory & WMS",
        tagline: "Precision Stock Management",
        description: "Maximize warehouse efficiency with modern WMS. Automated replenishment, double-entry inventory, and total traceability.",
        icon: Database,
        villain: {
            title: "The Stockout Nightmare",
            subtitle: "Capital trapped in dust.",
            problems: [
                "Unknown stock levels lead to emergency procurement costs.",
                "Warehouse staff waste hours looking for items.",
                "Dead stock sits unnoticed, eating up cash flow.",
                "Shipping errors damage customer trust."
            ]
        },
        guide: {
            title: "Logistics Strategists",
            description: "We implement the 'Double-Entry' inventory system—providing full traceability from supplier to customer. No item moves without a digital footprint."
        },
        plan: [
            { title: "Zone Mapping", desc: "Digitalize your warehouse topology." },
            { title: "Barcode Rollout", desc: "Eliminate manual data entry errors." },
            { title: "Route Optimization", desc: "Streamline picking and put-away paths." }
        ],
        success: {
            title: "Total Control",
            outcomes: ["99.9% Inventory Accuracy", "Reduced Picking Time", "Automated Replenishment"]
        },
        features: ["Barcode Scanning", "Multi-Warehouse", "Drop Shipping", "Cross-Docking"]
    },
    "accounting-finance": {
        title: "Accounting & Finance",
        tagline: "Financial Clarity",
        description: "Standardize your accounting with a fully integrated financial system. Automated reconciliation, tax localization, and real-time P&L.",
        icon: BarChart3,
        villain: {
            title: "The Waiting Game",
            subtitle: "Flying blind until the 15th of next month.",
            problems: ["Manual data entry from other depts leads to errors.", "Reconciliation is a week-long nightmare.", "No real-time visibility into cash flow.", "Tax compliance is a manual headache."]
        },
        guide: { title: "Financial Architects", description: "We integrate accounting into every operation. A sale automatically creates an invoice. A shipment automatically updates assets." },
        plan: [ { title: "Map Chart of Accounts", desc: "Align Odoo with local standards." }, { title: "Automate Recs", desc: "Connect bank feeds for instant matching." }, { title: "Real-time Dashboards", desc: "Go live with instant financial insights." } ],
        success: { title: "Financial Health", outcomes: ["Real-time P&L", "Faster Close", "Audit-proof Data"] },
        features: ["Multi-Currency", "Automated Reconciliation", "Tax Localization (VAT/TAX)", "Dynamic Reports"]
    },
    "hr-payroll": {
        title: "HR & Payroll",
        tagline: "People First",
        description: "Manage your most valuable asset—your people. From recruitment to payroll, handle the entire employee lifecycle in one place.",
        icon: Users,
        villain: {
            title: "The Admin Burden",
            subtitle: "Talent buried in paperwork.",
            problems: ["Attendance data doesn't sync with payroll.", "Leave requests are lost in email threads.", "Performance reviews are skipped due to complexity.", "Employee files are scattered in filing cabinets."]
        },
        guide: { title: "Culture Builders", description: "We deploy systems that empower employees. Self-service portals, automated payslips, and transparent appraisals." },
        plan: [ { title: "Digitize Records", desc: "Move all employee data to the cloud." }, { title: "Automate Polices", desc: "Configure leave and attendance rules." }, { title: "Launch Portal", desc: "Give employees control." } ],
        success: { title: "Engaged Workforce", outcomes: ["Error-free Payroll", "Streamlined Recruitment", "High Retention"] },
        features: ["Employee Profiles", "Leave Management", "Payroll Automation", "Performance Appraisals"]
    },
    "ecommerce": {
        title: "eCommerce",
        tagline: "Digital Storefront",
        description: "Launch a modern online store that is fully integrated with your inventory and accounting. No connectors, no syncing issues.",
        icon: Globe2,
        villain: {
            title: "The Disconnected Shop",
            subtitle: "Two businesses, double the work.",
            problems: ["Online stock doesn't match warehouse reality.", "Orders must be manually re-entered into accounting.", "Customer data is siloed from the CRM.", "price changes are a manual chore."]
        },
        guide: { title: "Omnichannel Experts", description: "We treat your website as just another aisle in your store. Everything syncs instantly because it's the same database." },
        plan: [ { title: "Design Store", desc: "Build a pixel-perfect frontend." }, { title: "Sync Inventory", desc: "Connect products to warehouse data." }, { title: "Go Live", desc: "Start selling with automated fulfillment." } ],
        success: { title: "Unified Commerce", outcomes: ["No Overselling", "Automated Fulfillment", "360° Customer Experience"] },
        features: ["Drag & Drop Builder", "Integrated Inventory", "Payment Gateways", "SEO Optimized"]
    },
    "default": {
        title: "Enterprise Solution",
        tagline: "Engineered for Excellence",
        description: "A tailored digital solution designed to optimize your critical business processes and drive sustainable growth.",
        icon: Monitor,
        villain: { title: "Operational Drag", subtitle: "Efficiency leakages everywhere.", problems: ["Manual Work", "Data Errors", "Slow Decisions"] },
        guide: { title: "Your Partner", description: "We help you scale." },
        plan: [{title: "Audit", desc: "Review"}, {title: "Build", desc: "Configure"}, {title: "Run", desc: "Launch"}],
        success: { title: "Growth", outcomes: ["Speed", "Accuracy", "Scale"] },
        features: ["Custom Architecture", "Enterprise Security", "24/7 Support", "Scalable Infrastructure"]
    }
};

export const servicesPageData: Record<string, any> = {
    "full-implementation": {
        title: "Full Implementation",
        tagline: "From Blueprint to Live",
        description: "A structured, end-to-end implementation service ensuring your ERP is configured, tested, and deployed with zero data loss.",
        icon: Layers,
        challenge: {
            title: "The Implementation Trap",
            subtitle: "Why 60% of ERP projects fail.",
            points: ["Scope Creep due to undefined requirements.", "User Resistance to new workflows.", "Data corruption during migration.", "Vendor Lock-in with proprietary code."]
        },
        approach: {
            title: "The 'Clean Core' Philosophy",
            description: "We keep the Odoo core untouched whenever possible. This ensures upgradeability, stability, and lower long-term maintenance costs."
        },
        process: {
            title: "The Roadmap",
            steps: [
                { number: "01", title: "Discovery", desc: "We map your AS-IS processes and define the TO-BE architecture." },
                { number: "02", title: "Conference Room Pilot", desc: "We demonstrate Odoo capabilities using YOUR data to validate fit." },
                { number: "03", title: "Configuration & Dev", desc: "We configure the system and build necessary custom modules." },
                { number: "04", title: "UAT & Training", desc: "Your users test the system until they can run it blindfolded." },
                { number: "05", title: "Go-Live", desc: "We flip the switch and provide intensive on-site support." }
            ]
        },
        deliverables: ["Solution Architecture Document", "Configured Production Environment", "User Manuals & SOPs", "Data Migration Report"]
    },
    "legacy-migration": {
        title: "Legacy Migration",
        tagline: "Move Beyond Excel",
        description: "Safely migrate your historical data from Tally, SAP, or spreadsheets into a modern Odoo environment.",
        icon: Database,
        challenge: {
            title: "Data Gravity",
            subtitle: "Your data is trapped in the past.",
            points: ["Historical data format is incompatible with modern schemas.", "Fear of losing financial history.", "Duplicate and dirty data records.", "Downtime during switch-over."]
        },
        approach: {
            title: "Zero Data Loss",
            description: "We treat data migration as a forensic science. Every record is accounted for, validated, and reconciled before the old system is turned off."
        },
        process: {
            title: "Migration Tunnel",
            steps: [
                { number: "01", title: "Extraction", desc: "Export raw data from legacy SQL/Excel sources." },
                { number: "02", title: "Cleansing", desc: "Deduplicate and normalize master data." },
                { number: "03", title: "Mapping", desc: "Map legacy fields to Odoo data models." },
                { number: "04", title: "Test Load", desc: "Run migration scripts in a staging environment." },
                { number: "05", title: "Validation", desc: "Financial reconciliation (Trial Balance matching)." }
            ]
        },
        deliverables: ["Data Mapping Sheet", "Migration Scripts", "Reconciliation Report", "Legacy Archive DB"]
    },
    "custom-development": {
        title: "Custom Development",
        tagline: "Tailored to Your DNA",
        description: "Though we prefer standard, we code when logic demands it. Python/JS extensions built by Odoo Certified engineers.",
        icon: Code2,
        challenge: {
            title: "The 'Spaghetti Code' Risk",
            subtitle: "Customization is a double-edged sword.",
            points: ["Poorly written code breaks future Odoo upgrades.", "Performance bottlenecks in heavy transactions.", "Security vulnerabilities introduced by amateurs.", "Dependency hell."]
        },
        approach: {
            title: "Modular Engineering",
            description: "We write code that acts like a native Odoo app. It's modular, documented, and follows strict PEP8 and Odoo guidelines."
        },
        process: {
            title: "Agile Development",
            steps: [
                { number: "01", title: "Technical Spec", desc: "Define data models, views, and security rules." },
                { number: "02", title: "Sprint Coding", desc: "Iterative development in 2-week cycles." },
                { number: "03", title: "Code Review", desc: "Senior Architects review every Merge Request." },
                { number: "04", title: "CI/CD Pipeline", desc: "Automated testing and deployment." }
            ]
        },
        deliverables: ["Source Code (Git Access)", "Technical Documentation", "Unit Test Reports", "Module Installer"]
    },
    "corporate-training": {
        title: "Corporate Training",
        tagline: "Empower Your Workforce",
        description: "Hands-on training sessions for your staff to ensure 100% user adoption and system utilization.",
        icon: GraduationCap,
        challenge: {
            title: "The Adoption Gap",
            subtitle: "Software is useless if no one uses it.",
            points: ["Users revert to old habits (Excel).", "Fear of the new interface.", "Lack of confidence in entering data."]
        },
        approach: {
            title: "Role-Based Learning",
            description: "We don't teach 'Odoo'. We teach 'How to do YOUR job in Odoo'. The Accountant gets a different training than the Warehouse Manager."
        },
        process: {
            title: "Learning Path",
            steps: [
                { number: "01", title: "Skill Gap Analysis", desc: "Identify who needs to know what." },
                { number: "02", title: "Curriculum Design", desc: "Create role-specific training manuals." },
                { number: "03", title: "Workshops", desc: "Hands-on 'Do It Yourself' sessions." },
                { number: "04", title: "Certification", desc: "Internal exams to verify competence." }
            ]
        },
        deliverables: ["Training Videos", "User Manuals (PDF/Web)", "Cheat Sheets", "Certificates"]
    },
    "system-audit": {
        title: "System Audit",
        tagline: "Health Check",
        description: "Performance tuning and code review for existing Odoo databases that are slow or buggy.",
        icon: Search,
        challenge: {
            title: "The Slowdown",
            subtitle: "Why is your ERP crawling?",
            points: ["Unoptimized database queries.", "Server resource mismatch.", "Bloated log files.", "Custom code memory leaks."]
        },
        approach: {
            title: "Forensic Analysis",
            description: "We look under the hood using profiling tools to identify exactly which line of code or SQL query is causing the bottleneck."
        },
        process: {
            title: "Audit Workflow",
            steps: [
                { number: "01", title: "Monitoring", desc: "Install specialized profiling probes." },
                { number: "02", title: "Stress Test", desc: "Simulate peak user load." },
                { number: "03", title: "Analysis", desc: "Review PostgreSQL slow logs and Python stacks." },
                { number: "04", title: "Remediation", desc: "Fix indexes, rewrite queries, cache results." }
            ]
        },
        deliverables: ["Performance Report", "Security Vulnerability Scan", "Optimization Patch", "Infrastructure Recs"]
    },
    "24-7-support": {
        title: "24/7 Support",
        tagline: "Always On",
        description: "SLA-backed support for critical production environments. We are your technical safety net.",
        icon: Headphones,
        challenge: {
            title: "Downtime Cost",
            subtitle: "Every minute offline loses money.",
            points: ["Server crash during peak sales.", "Critical bug blocks invoicing.", "Data center outage."]
        },
        approach: {
            title: "Proactive Defense",
            description: "We don't just fix operational issues. We monitor your system 24/7 to prevent them from happening in the first place."
        },
        process: {
            title: "Support Lifecycle",
            steps: [
                { number: "01", title: "monitoring", desc: "Automated health checks every 60 seconds." },
                { number: "02", title: "Triage", desc: "L1 Support filters and prioritizes tickets." },
                { number: "03", title: "Resolution", desc: "L3 Engineers fix root causes." }
            ]
        },
        deliverables: ["Monthly SLA Report", "Root Cause Analysis (RCA)", "Patch Management", "Dedicated Hotline"]
    },
    "default": {
        title: "Professional Service",
        tagline: "Expert Consulting",
        description: "World-class consultancy to solve your most complex business challenges.",
        icon: Layers,
        challenge: { title: "Challenge", subtitle: "Problem.", points: ["Point 1"] },
        approach: { title: "Approach", description: "Method." },
        process: { title: "Process", steps: [{number: "01", title: "Step", desc: "Desc"}] },
        deliverables: ["Report"]
    }
};

export const blogPageData = {
    heading: "The Journal.",
    subheading: "Industry insights, engineering deep dives, and strategic wisdom for the modern enterprise.",
    featuredPost: {
        title: "The Future of Manufacturing: AI-Driven Odoo 18",
        excerpt: "How the latest artificial intelligence integration in Odoo 18 is revolutionizing shop floor control, predictive maintenance, and supply chain logistics for Bangladeshi industries.",
        category: "Strategic Insight",
        author: "Mahbub Alam",
        readTime: "8 min read",
        date: "Jan 12, 2026",
    },
    posts: [
        { 
            id: 1,
            title: "Scaling Retail: 1 to 50 Stores with One Click", 
            category: "Success Story", 
            date: "Dec 28, 2025",
            readTime: "5 min",
            author: "Tech Team",
            excerpt: "Inside the architecture that allowed Baatighar to synchronize inventory across the entire country instantly."
        },
        { 
            id: 2,
            title: "Stop Using Excel for Payroll", 
            category: "Opinion", 
            date: "Dec 15, 2025",
            readTime: "4 min",
            author: "Finance Lead",
            excerpt: "Why manual spreadsheets are the silent killer of growth—and the 3-step migration plan to automation."
        },
        { 
            id: 3,
            title: "Odoo vs SAP: A 2026 Cost Analysis", 
            category: "Comparison", 
            date: "Nov 30, 2025",
            readTime: "12 min",
            author: "Consulting Div",
            excerpt: "An honest, data-backed breakdown of TCO, implementation timelines, and ROI for mid-sized enterprises."
        },
        { 
            id: 4,
            title: "Customizing Modules without Breaking Upgrades", 
            category: "Engineering", 
            date: "Nov 12, 2025",
            readTime: "6 min",
            author: "Lead Dev",
            excerpt: "Best practices for writing modular, future-proof code in the Odoo ecosystem."
        },
        { 
            id: 5,
            title: "The Rise of 'Phygital' Commerce", 
            category: "Trends", 
            date: "Oct 24, 2025",
            readTime: "7 min",
            author: "Strategy",
            excerpt: "Merging physical showrooms with digital backends to create seamless customer journeys."
        },
        { 
            id: 6,
            title: "Cybersecurity in ERP: The 2026 Checklist", 
            category: "Security", 
            date: "Oct 10, 2025",
            readTime: "9 min",
            author: "SecOps",
            excerpt: "Protecting your most valuable asset—your data—from the new wave of ransomware attacks."
        },
    ]
};

export const careersPageData = {
    hero: {
        title: "Build the Future",
        subtitle: "We are looking for visionaries who want to solve complex problems at scale. Join the team transforming Bangladesh's industrial landscape."
    },
    benefits: [
        { title: "Competitive Pay", desc: "Above market salary & equity options." },
        { title: "Remote First", desc: "Work from anywhere options available." },
        { title: "Premium Gear", desc: "MacBooks and top-tier peripherals." },
        { title: "Continuous Learning", desc: "Paid courses and Odoo certifications." }
    ],
    jobs: [
        { title: "Senior Python Developer", type: "Full-Time", location: "Dhaka (Hybrid)", dept: "Engineering" },
        { title: "Odoo Implementation Manager", type: "Full-Time", location: "Dhaka", dept: "Consultancy" },
        { title: "Business Analyst Intern", type: "Internship", location: "Remote", dept: "Product" },
    ]
};

export const legalPageData = {
    privacy: {
        title: "Privacy Policy",
        desc: "Transparency is at the core of our business logic. Here is how we treat your data, with zero ambiguity.",
        sections: [
             {
                title: "1.0 Data Collection",
                icon: Eye,
                content: "We collect only the navigational information necessary to optimize your experience. This includes IP addresses, browser types, and referral sources. When you use our contact forms, we store the explicitly provided data (Name, Email, Company) in our secure CRM."
             },
             {
                title: "2.0 Usage Protocols", 
                icon: FileText,
                content: "Your data is used exclusively for: (a) Providing the services you requested, (b) Sending administrative notifications, (c) Improving our algorithms. We do not sell, rent, or trade your personal information to disparate third parties for marketing purposes."
             },
             {
                title: "3.0 Security Architecture", 
                icon: Lock,
                content: "We employ enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted in ISO 27001 certified data centers with 24/7 biometric monitoring."
             }
        ]
    },
    terms: {
        title: "Terms of Service",
        desc: "The rules of engagement for using Metamorphosis services and platforms.",
        sections: [
            {
                title: "1.0 Acceptance of Terms", 
                icon: CheckSquare,
                content: "By accessing or using the Metamorphosis website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service."
            },
            {
                title: "2.0 Intellectual Property", 
                icon: Scale,
                content: "The Service and its original content, features, and functionality are and will remain the exclusive property of Metamorphosis and its licensors."
            },
            {
                title: "3.0 Limitation of Liability", 
                icon: AlertTriangle,
                content: "In no event shall Metamorphosis, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages."
            }
        ]
    }
}
