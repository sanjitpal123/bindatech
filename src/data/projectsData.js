import saasDashboardImg from '../assets/projects/saas_dashboard.png';
import mobileAppImg from '../assets/projects/mobile_app.png';
import healthPortalImg from '../assets/projects/health_portal.png';
import corporateWebsiteImg from '../assets/projects/corporate_website.png';
import fintechDashboardImg from '../assets/projects/fintech_dashboard.png';
import eduAppImg from '../assets/projects/edu_app.png';

export const projectCategories = [
  "All",
  "SaaS",
  "Mobile Apps",
  "Web Applications",
  "Websites"
];

export const projectsData = [
  {
    id: "cloudmetric-saas",
    title: "MetricsHub SaaS Platform",
    category: "SaaS",
    shortDesc: "A multi-tenant cloud analytics dashboard for real-time infrastructure and billing monitoring.",
    fullDesc: "MetricsHub is a scalable SaaS application architecture built to demonstrate multi-tenant data isolation, Stripe subscription integration, and real-time socket-based performance visualization for engineering teams.",
    technologies: ["React", "Node.js", "Tailwind CSS", "PostgreSQL", "Stripe", "Docker"],
    featured: true,
    image: saasDashboardImg,
    accentColor: "from-emerald-500 to-cyan-500",
    metrics: [
      { label: "Architecture", value: "Multi-Tenant" },
      { label: "Deployment", value: "AWS EKS" },
      { label: "Latency", value: "< 80ms" }
    ]
  },
  {
    id: "logistix-mobile",
    title: "TrackMaster Delivery App",
    category: "Mobile Apps",
    shortDesc: "Cross-platform mobile application for real-time fleet tracking and driver route management.",
    fullDesc: "A cross-platform mobile solution designed for logistics operators, featuring offline location queuing, background GPS tracking, push notifications, and electronic proof-of-delivery signatures.",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Google Maps API"],
    featured: true,
    image: mobileAppImg,
    accentColor: "from-cyan-500 to-emerald-500",
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Offline Mode", value: "SQLite Sync" },
      { label: "GPS Precision", value: "High-Acc" }
    ]
  },
  {
    id: "healthhub-portal",
    title: "MedConnect Care Portal",
    category: "Web Applications",
    shortDesc: "Secure healthcare workflow portal for appointment scheduling, patient records, and doctor consultations.",
    fullDesc: "A web application platform crafted with strict data security, role-based access control, integrated video consultations, and automated SMS appointment reminders.",
    technologies: ["React", "Tailwind CSS", "Express.js", "PostgreSQL", "WebRTC"],
    featured: true,
    image: healthPortalImg,
    accentColor: "from-emerald-600 to-teal-400",
    metrics: [
      { label: "Security", value: "Encrypted API" },
      { label: "Role Management", value: "RBAC" },
      { label: "Speed Index", value: "0.9s" }
    ]
  },
  {
    id: "nexustech-corporate",
    title: "Apex Cloud Solutions Website",
    category: "Websites",
    shortDesc: "High-conversion corporate brand website with dynamic interactive product previews and fast rendering.",
    fullDesc: "A modern corporate website built to deliver lighthouse scores above 95 with custom glassmorphic UI elements, dark mode toggle, interactive pricing calculators, and smooth scroll transitions.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    featured: true,
    image: corporateWebsiteImg,
    accentColor: "from-teal-500 to-cyan-400",
    metrics: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Load Speed", value: "< 1.1s" },
      { label: "SEO Grade", value: "A+" }
    ]
  },
  {
    id: "fintech-dashboard",
    title: "PayFlow Merchant Suite",
    category: "SaaS",
    shortDesc: "Custom merchant financial dashboard for automated invoice generation and payout management.",
    fullDesc: "An enterprise financial workspace allowing merchants to analyze multi-currency transaction flows, trigger instant payouts, and generate PDF audit statements on the fly.",
    technologies: ["React", "Node.js", "Redis", "PostgreSQL", "Chart.js"],
    featured: false,
    image: fintechDashboardImg,
    accentColor: "from-emerald-500 to-teal-400",
    metrics: [
      { label: "Security", value: "JWT + 2FA" },
      { label: "Export Formats", value: "CSV/PDF" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: "eduportal-app",
    title: "EduCore Learning App",
    category: "Mobile Apps",
    shortDesc: "Interactive learning platform with video course playback, offline downloads, and quiz modules.",
    fullDesc: "Mobile app built for high engagement with smooth media streaming, gamified progress badges, interactive quizzes, and instant push notification reminders for upcoming lessons.",
    technologies: ["React Native", "Expo", "Node.js", "AWS S3", "Firebase"],
    featured: false,
    image: eduAppImg,
    accentColor: "from-teal-500 to-lime-400",
    metrics: [
      { label: "Media Engine", value: "HLS Stream" },
      { label: "Offline Cache", value: "Encrypted" },
      { label: "Design System", value: "Custom" }
    ]
  }
];
