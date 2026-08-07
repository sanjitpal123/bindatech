import websiteDevImg from '../assets/services/website_dev.png';
import uiuxDesignImg from '../assets/services/uiux_design.png';
import mobileAppImg from '../assets/services/mobile_app.png';
import customCrmImg from '../assets/services/custom_crm.png';
import webAppImg from '../assets/services/web_app.png';
import saasProductImg from '../assets/services/saas_product.png';

export const servicesData = [
  {
    id: "website-development",
    title: "Website Development",
    shortDesc: "Responsive, fast, and secure websites designed to elevate your brand online.",
    icon: "Layout",
    badge: "Fast & Modern",
    image: websiteDevImg,
    features: [
      "High-Conversion Corporate Websites",
      "Custom Business & Brand Landing Pages",
      "Interactive Developer & Agency Portfolios",
      "SEO & Page Speed Optimization (90+ Lighthouse)",
      "Headless CMS Integration (Sanity, Strapi)",
      "Modern Responsive Design"
    ],
    deliverables: [
      "Fully Responsive Custom Frontend Code",
      "SEO Meta, OpenGraph & Schema Integration",
      "CMS Training & Content Management Guide",
      "SSL & CDN Hosting Setup"
    ],
    useCases: [
      "Technology & Corporate Brand Sites",
      "Product Launch Landing Pages",
      "B2B Service Showcase Websites"
    ]
  },
  {
    id: "ui-ux-design",
    title: "Graphic & UI/UX Design",
    shortDesc: "Premium visuals, UI/UX, and creative assets that capture attention and drive conversion.",
    icon: "Palette",
    badge: "Creative & Modern",
    image: uiuxDesignImg,
    features: [
      "User Research & Wireframing",
      "High-Fidelity UI Component Systems",
      "Interactive Clickable Prototypes (Figma)",
      "Design System & Token Architecture",
      "Visual Brand Assets & Vector Design",
      "Micro-Animations & Style Guides"
    ],
    deliverables: [
      "Complete Figma Design System File",
      "Interactive Clickable Prototype",
      "Design Token & Export Asset Library",
      "Developer Handoff Specification"
    ],
    useCases: [
      "New Mobile & Web Product Prototypes",
      "Existing Application UI Redesigns",
      "Brand Visual Identity Creation"
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Intuitive iOS and Android applications tailored for seamless user experiences.",
    icon: "Smartphone",
    badge: "iOS & Android",
    image: mobileAppImg,
    features: [
      "Android Native & Kotlin",
      "iOS Swift Development",
      "Cross-Platform Flutter & React Native",
      "REST & GraphQL API Integration",
      "Push Notification & Real-Time Messaging",
      "App Store & Google Play Deployment"
    ],
    deliverables: [
      "Production-ready APK & IPA builds",
      "Complete Source Code & Documentation",
      "Store Listing & Deployment setup",
      "3-month Post-launch Technical Support"
    ],
    useCases: [
      "Consumer Services & On-Demand Apps",
      "Enterprise Field Workforce Mobile Tools",
      "E-Commerce & Mobile Commerce Portals"
    ]
  },
  {
    id: "custom-software-development",
    title: "Custom CRM & Internal Tools",
    shortDesc: "Robust internal tools and CRM systems to streamline your operations and sales.",
    icon: "Cpu",
    badge: "Operational Logic",
    image: customCrmImg,
    features: [
      "Custom Lead & Customer Pipelines",
      "Workflow Automation Engines",
      "Legacy System Migration & Integration",
      "Third-Party API & Webhook Handlers",
      "Role-Based Access Control (RBAC)",
      "Real-Time Activity Logs & Telemetry"
    ],
    deliverables: [
      "Tailor-made Enterprise CRM Codebase",
      "API Documentation & Integration Manuals",
      "User Access & Audit Control System",
      "SLA Technical Maintenance Plan"
    ],
    useCases: [
      "Logistics & Inventory Syncing Tools",
      "Custom Financial Audit Systems",
      "Specialized Business Operations Engines"
    ]
  },
  {
    id: "web-application-development",
    title: "Web App Development",
    shortDesc: "Scalable, cloud-based web applications that solve complex business problems.",
    icon: "Globe",
    badge: "Cloud Systems",
    image: webAppImg,
    features: [
      "Custom Admin Dashboards & Analytics",
      "Complex Business Workflow Portals",
      "Role-Based Customer & Partner Portals",
      "Robust RESTful & GraphQL APIs",
      "OAuth 2.0 & Secure Authentication",
      "High-Performance Database Architectures"
    ],
    deliverables: [
      "Responsive React/Next.js Web Frontend",
      "Scalable Node.js / Cloud Microservices Backend",
      "Database schema & migration pipelines",
      "Automated CI/CD Deployment Scripts"
    ],
    useCases: [
      "Internal Business Management Platforms",
      "B2B SaaS Workspaces & Portals",
      "Operational Data Management Systems"
    ]
  },
  {
    id: "saas-product-development",
    title: "SaaS Product Development",
    shortDesc: "Turn your software idea into a scalable subscription-based product with modern architecture.",
    icon: "Server",
    badge: "Subscription Ready",
    image: saasProductImg,
    features: [
      "Multi-Tenant Software Architecture",
      "Stripe/Razorpay Subscription & Invoicing",
      "User Authentication & Tiered Permissions",
      "Interactive Analytics & Billing Dashboards",
      "Auto-scaling Cloud Infrastructure",
      "System Logs & Monitoring Integrations"
    ],
    deliverables: [
      "Complete SaaS MVP to Production Architecture",
      "Subscription Billing & User Auth Module",
      "Super-Admin Management Dashboard",
      "Automated Database Backup System"
    ],
    useCases: [
      "Vertical Industry B2B Software",
      "Subscription Productivity Tools",
      "Data Analytics & Reporting Tools"
    ]
  }
];
