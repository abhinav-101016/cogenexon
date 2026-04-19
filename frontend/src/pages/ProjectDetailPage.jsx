import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const projectData = {
  lunemart: {
    eyebrow: 'E-commerce Marketplace',
    name: 'LuneMart',
    tagline: 'The Ultimate Multi-Category E-commerce Marketplace',
    accent: 'cyan',
    url: 'https://www.lunemart.com/',
    client: 'LuneMart',
    released: '2024',
    timeframe: '5 months',
    type: 'E-commerce / Marketplace',
    tech: 'React · Node.js · MongoDB · Razorpay · PhonePe · GPS API',
    team: '6 members',
    overview: 'LuneMart is a full-scale digital marketplace connecting users with a wide network of verified local and global suppliers. Built with a mobile-first approach, it delivers a seamless and secure shopping experience across multiple product categories including groceries, electronics, fashion, and home essentials.',
    problem: [
      'No unified platform for local and global supplier discovery in one experience',
      'Fragmented checkout flows with poor mobile optimization were hurting conversions',
      'Lack of real-time order tracking reduced customer trust post-purchase',
    ],
    solution: [
      'Built a multi-category marketplace with hierarchical product organization and GPS-based local supplier discovery',
      'Implemented a mobile-first checkout with flash sales, coupon engine, and promotional auto-application',
      'Integrated Razorpay/PhonePe with a complete cart-to-delivery tracking system and push notifications',
    ],
    features: [
      { label: 'Multi-Category Marketplace', desc: 'Groceries, electronics, fashion, home essentials with dynamic category expansion' },
      { label: 'Smart Pricing Engine', desc: 'Time-based flash sales, percentage/fixed coupons, and auto-applied promos at checkout' },
      { label: 'Local Discovery', desc: 'GPS-based nearby verified supplier detection with distance-sorted listings' },
      { label: 'Supplier Verification', desc: 'Admin-approval workflow with document upload and verification badge system' },
      { label: 'Real-Time Tracking', desc: 'Complete order lifecycle from cart to delivery with live status updates' },
      { label: 'Mobile-First UX', desc: 'Touch-optimized grids, push notifications, and dedicated mobile checkout flow' },
    ],
    metrics: [
      { value: '6+', label: 'Product Categories' },
      { value: 'GPS', label: 'Local Discovery' },
      { value: '2', label: 'Payment Gateways' },
    ],
    thoughts: 'LuneMart became a comprehensive marketplace that bridges local commerce and digital discovery. The GPS-based supplier feature significantly boosted engagement from tier-2 city users, while the smart pricing engine drove measurable conversion improvements across seasonal campaigns.',
  },

  mediqliq: {
    eyebrow: 'Hospital ERP / HIMS',
    name: 'Mediqliq',
    tagline: 'Advanced Hospital ERP — Digitizing End-to-End Clinical Operations',
    accent: 'indigo',
    url: 'https://hospital-admin-eight.vercel.app/',
    client: 'Mediqliq',
    released: '2024',
    timeframe: '6 months',
    type: 'Healthcare SaaS / HIMS',
    tech: 'React · Node.js · PostgreSQL · AWS · Socket.io · Razorpay',
    team: '8 members',
    overview: 'Mediqliq is a comprehensive Hospital ERP (HIMS) system that digitizes and automates hospital operations across clinical, administrative, and financial workflows. It supports role-based access for administrators, doctors, nurses, receptionists, pharmacists, and lab technicians with full audit logging for medical-legal compliance.',
    problem: [
      'Paper-based patient records made retrieval slow and created compliance risk',
      'No centralized billing system caused revenue leakage and delayed patient discharge',
      'Siloed pharmacy and lab operations created prescription-to-result gaps',
    ],
    solution: [
      'Built a centralized patient management system with unique IDs, complete medical history, and auto-discharge summaries',
      'Integrated pharmacy, lab, and billing modules with real-time inventory alerts and insurance/TPA support',
      'Deployed an analytics dashboard for patient footfall, revenue trends, doctor performance, and bed occupancy',
    ],
    features: [
      { label: 'Patient Management', desc: 'Digital records, unique patient IDs, complete medical history, and automated discharge summaries' },
      { label: 'Appointment System', desc: 'Doctor availability slots, online booking, SMS/email reminders, and waitlist management' },
      { label: 'Pharmacy Module', desc: 'Prescription-to-medicine mapping, automated stock alerts, and billing integration' },
      { label: 'Lab Integration', desc: 'Test catalog, barcode sample tracking, digital report upload, and patient portal access' },
      { label: 'Billing & Finance', desc: 'OPD/IPD invoicing, multi-gateway payments, insurance/TPA integration, GST compliance' },
      { label: 'Analytics Dashboard', desc: 'Real-time visualization for footfall, revenue, doctor performance, and bed occupancy' },
    ],
    metrics: [
      { value: '6', label: 'Core Modules' },
      { value: 'RBAC', label: 'Role-Based Access' },
      { value: 'GST', label: 'Compliant Billing' },
    ],
    thoughts: 'Mediqliq transformed hospital operations by replacing fragmented paper workflows with a cohesive digital system. The integrated pharmacy and lab modules reduced prescription errors significantly, while the analytics dashboard gave administrators real-time visibility into hospital performance for the first time.',
  },

  proplink: {
    eyebrow: 'Real Estate SaaS',
    name: 'PropLink',
    tagline: 'Cloud-Based Real Estate Management for Agencies and Brokers',
    accent: 'cyan',
    url: null,
    client: 'Aadya Builders',
    released: '2024',
    timeframe: '4 months',
    type: 'PropTech / SaaS',
    tech: 'Next.js · Node.js · PostgreSQL · Google Maps API · Twilio',
    team: '5 members',
    overview: 'PropLink is a cloud-based real estate management system designed for agencies, brokers, and property professionals to centralize property management, lead generation, and client relationship workflows. It includes a client portal where buyers can save favorites, request site visits, and receive personalized recommendations.',
    problem: [
      'Brokers managed listings across spreadsheets and WhatsApp with no centralized system',
      'Leads were lost due to manual assignment and no follow-up automation',
      'Buyers had no self-service portal to explore and shortlist properties independently',
    ],
    solution: [
      'Built centralized listing management with auto-publishing, status tracking, and portal integration',
      'Implemented a built-in CRM with round-robin lead assignment, activity timeline, and deal stage management',
      'Launched a client portal with personalized recommendations, site visit requests, and saved property lists',
    ],
    features: [
      { label: 'Listing Management', desc: 'Centralized upload with images, maps, price, area, and status tracking (Available/Under Offer/Sold)' },
      { label: 'Built-in CRM', desc: 'Lead capture, automated agent assignment, activity timeline, and deal stage pipeline' },
      { label: 'Client Portal', desc: 'Buyers can save properties, request site visits, and receive shortlisted recommendations' },
      { label: 'Market Insights', desc: 'Valuation estimates based on comparable listings with price movement analytics' },
      { label: 'Mobile Tools', desc: 'Agents can update listings, schedule showings, upload photos, and receive lead alerts on the go' },
      { label: 'Auto Publishing', desc: 'Listings sync to connected property portals automatically upon approval' },
    ],
    metrics: [
      { value: 'CRM', label: 'Built-in Pipeline' },
      { value: 'Auto', label: 'Lead Assignment' },
      { value: 'Portal', label: 'Buyer Self-Service' },
    ],
    thoughts: 'PropLink significantly reduced the time brokers spent on manual coordination. The round-robin lead assignment eliminated favoritism complaints within teams, while the client portal reduced the back-and-forth calls for property shortlisting — letting agents focus on closing instead of coordinating.',
  },

  aadyaplus: {
    eyebrow: 'Healthcare Platform',
    name: 'AadyaPlus',
    tagline: 'Unified Digital Healthcare — From Discovery to Prescription and Reports',
    accent: 'indigo',
    url: 'https://aadya-frontend.vercel.app/',
    client: 'AadyaPlus Healthcare',
    released: '2024',
    timeframe: '5 months',
    type: 'Healthcare / Telemedicine',
    tech: 'React · Node.js · WebRTC · Zoom SDK · MongoDB · Twilio',
    team: '7 members',
    overview: 'AadyaPlus is an all-in-one digital healthcare ecosystem connecting patients with verified doctors, physiotherapists, labs, and pharmacies. It manages the complete patient journey from discovery and booking through consultation, prescriptions, and final report delivery — supporting both in-person and video consultations.',
    problem: [
      'Patients navigated multiple platforms to book doctors, order tests, and collect reports',
      'No verification system meant patients could not trust provider credentials',
      'Video consultation workflows were disconnected from prescriptions and lab results',
    ],
    solution: [
      'Built a unified discovery system connecting patients to verified doctors, physio, labs, and pharmacies in one flow',
      'Integrated Zoom/WebRTC for video consultations with the same booking and prescription workflow as in-person visits',
      'Deployed a trust badge system requiring admin credential verification before provider approval',
    ],
    features: [
      { label: 'Multi-Service Discovery', desc: 'Search and filter by provider type, specialty, location, and patient rating across all service types' },
      { label: 'Telemedicine', desc: 'Video consultation via Zoom/WebRTC with same booking, prescription, and follow-up workflow' },
      { label: 'End-to-End Journey', desc: 'Complete flow: booking → consultation → digital prescription → lab report → patient portal' },
      { label: 'Verified Providers', desc: 'Admin credential verification with trust badges before any provider goes live on the platform' },
      { label: 'Digital Prescriptions', desc: 'Auto-generated prescriptions linked to patient records and accessible from the portal' },
      { label: 'Notifications', desc: 'SMS/email alerts at every stage of the patient journey — reminders, reports, and follow-ups' },
    ],
    metrics: [
      { value: '4', label: 'Service Types' },
      { value: 'E2E', label: 'Patient Journey' },
      { value: 'Verified', label: 'All Providers' },
    ],
    thoughts: 'AadyaPlus resolved the fragmentation in healthcare access that patients face daily. The unified platform meant a patient could book a doctor, attend a video consultation, get a digital prescription, order lab tests, and view reports — all without switching apps. Provider trust scores improved patient retention significantly.',
  },

  orivotech: {
    eyebrow: 'Digital Marketing SaaS',
    name: 'Orivo Tech',
    tagline: 'Performance-Driven Digital Growth for Small Businesses',
    accent: 'cyan',
    url: 'https://www.orivotech.in/',
    client: 'Orivo Tech',
    released: '2023',
    timeframe: '3 months',
    type: 'MarTech / SaaS',
    tech: 'React · Node.js · Google Maps API · Meta API · Stripe',
    team: '4 members',
    overview: 'Orivo Tech is a performance-driven digital marketing platform helping small businesses rapidly establish their online presence and generate leads. The service focuses on Google Maps optimization and professional social media setup, using a performance-based pricing model that minimizes upfront risk.',
    problem: [
      'Small business owners lacked technical expertise to set up and optimize their digital presence',
      'Traditional agencies charged high upfront fees with no guarantee of leads',
      'Local SEO and Maps visibility were being missed by the majority of SMB segments',
    ],
    solution: [
      'Built a fast onboarding flow with free registration and a simple form to capture business info for digital profile creation',
      'Automated Google Maps listing creation and optimization via Maps API for high-visibility local search presence',
      'Implemented a performance pricing model: 3 free leads, then ₹999/month with automated lead threshold tracking',
    ],
    features: [
      { label: 'Fast Onboarding', desc: 'Free registration with no payment required — simple form captures all business info for profile creation' },
      { label: 'Google Maps Optimization', desc: 'API-driven listing creation ensuring accurate location data and high-visibility local search presence' },
      { label: 'Social Media Setup', desc: 'Professional Instagram and Facebook business pages with optimized profiles and initial content' },
      { label: 'SEO Acceleration', desc: 'Technical SEO, keyword optimization, and local search strategies driving organic traffic' },
      { label: 'Performance Pricing', desc: 'First 3 leads free, then ₹999/month — billing triggered only after free lead threshold is exceeded' },
      { label: 'Lead Tracking', desc: 'Automated lead counting per business to accurately trigger and manage subscription billing' },
    ],
    metrics: [
      { value: '3', label: 'Free Leads to Start' },
      { value: '₹999', label: 'Monthly Post-Free' },
      { value: 'Auto', label: 'Lead Tracking' },
    ],
    thoughts: 'Orivo Tech democratized digital presence for SMB owners who previously felt locked out of online marketing. The risk-free entry model removed the biggest barrier to adoption, while automated Maps and social setup delivered measurable visibility within the first week of onboarding.',
  },

  ietlaa: {
    eyebrow: 'Alumni Network',
    name: 'IETLAA',
    tagline: 'Alumni Record Management and Networking Platform for IET Lucknow',
    accent: 'indigo',
    url: 'https://alumni2-phi.vercel.app/',
    client: 'IET Lucknow Alumni Association',
    released: '2023',
    timeframe: '2.5 months',
    type: 'EdTech / Community',
    tech: 'React · Node.js · MongoDB · CSV Import/Export · Cloudinary',
    team: '3 members',
    overview: 'IETLAA is a dedicated alumni platform for IET Lucknow designed to strengthen alumni connections and maintain structured records of former students. It functions as a secure database enabling the college and its graduates to maintain up-to-date profiles for communication, professional networking, and collaborative opportunities.',
    problem: [
      'Alumni records were scattered across Excel files with no searchable, centralized directory',
      'The college had no way to reach graduates for events, announcements, or collaborative programs',
      'Alumni lacked a structured way to network across batches and branches professionally',
    ],
    solution: [
      'Built a searchable alumni directory with filters for pass-out year, branch, and current employer',
      'Implemented detailed profile management with privacy controls and career history tracking',
      'Deployed bulk CSV import/export for administrators to migrate and maintain records at scale',
    ],
    features: [
      { label: 'Alumni Directory', desc: 'Searchable across batches with filters by pass-out year, branch, and current company' },
      { label: 'Profile Management', desc: 'Detailed profiles with contact info, privacy controls, career history, and photo upload' },
      { label: 'Bulk Data Import', desc: 'CSV import/export capabilities for administrators to set up and maintain alumni records at scale' },
      { label: 'Privacy Controls', desc: 'Opt-in contact visibility — alumni choose what information is shown in the directory' },
      { label: 'Branch Analytics', desc: 'Systematic tracking of branch-wise and batch-wise alumni distribution and employment data' },
      { label: 'Admin Dashboard', desc: 'College admin panel for record management, bulk operations, and alumni communication' },
    ],
    metrics: [
      { value: 'Multi', label: 'Batch Support' },
      { value: 'CSV', label: 'Bulk Import' },
      { value: 'RBAC', label: 'Privacy Controls' },
    ],
    thoughts: 'IETLAA gave IET Lucknow a professional alumni network for the first time. The bulk import feature allowed the college to migrate years of scattered records in a single operation, while alumni engagement grew organically as graduates reconnected with batchmates and discovered peers at top companies.',
  },

  gptool: {
    eyebrow: 'Industrial E-commerce',
    name: 'GPTool',
    tagline: 'B2B/B2C Hardware and Industrial Equipment Marketplace',
    accent: 'cyan',
    url: 'http://www.dcatool.in/',
    client: 'GPTool / DCA Tool',
    released: '2023',
    timeframe: '3.5 months',
    type: 'Industrial E-commerce',
    tech: 'React · Node.js · MongoDB · Shiprocket · Razorpay',
    team: '5 members',
    overview: 'GPTool is a niche B2B/B2C e-commerce platform specializing in hardware tools, power tools, and industrial machinery for professionals and businesses. It ensures product authenticity through verified manufacturer partnerships and provides detailed specifications with an optimized logistics pipeline for heavy equipment delivery.',
    problem: [
      'Industrial buyers had no reliable online source for hardware tools with verified authenticity',
      'Existing e-commerce platforms lacked the detailed specs and compatibility information industrial buyers need',
      'Logistics for heavy machinery was a major unsolved pain point — standard couriers couldn\'t handle it',
    ],
    solution: [
      'Built a specialized catalog with hierarchical product organization, detailed specs, and high-resolution imagery',
      'Implemented supplier verification workflows ensuring direct manufacturer partnerships and authentic products',
      'Integrated logistics APIs optimized for heavy equipment with location-based shipping rate calculation',
    ],
    features: [
      { label: 'Extensive Catalog', desc: 'Hand tools, power tools, and industrial machinery with detailed specs, category filters, and high-res images' },
      { label: 'Verified Suppliers', desc: 'Direct manufacturer partnerships with admin verification workflow guaranteeing product authenticity' },
      { label: 'Heavy Logistics', desc: 'Tracked shipping optimized for industrial equipment with location-based rate calculation' },
      { label: 'Knowledge Hub', desc: 'Expert guides, installation tutorials, usage specs, and customer reviews for informed purchasing' },
      { label: 'Spec Sheets', desc: 'Voltage, weight, brand, warranty, and compatibility data on every product page' },
      { label: 'B2B Pricing', desc: 'Bulk pricing tiers and wholesale workflows for business buyers ordering at volume' },
    ],
    metrics: [
      { value: 'B2B/B2C', label: 'Dual Market' },
      { value: 'Verified', label: 'All Suppliers' },
      { value: 'Heavy', label: 'Logistics Ready' },
    ],
    thoughts: 'GPTool filled a genuine gap in the industrial supply chain by bringing trust and discoverability to a category that had historically relied entirely on offline relationships. The knowledge hub became a key differentiator — professionals valued the expert guides as much as the product catalog itself.',
  },

  newsforge: {
    eyebrow: 'AI News Platform',
    name: 'News Forge',
    tagline: 'AI-Powered News Publishing with Editorial Control and Automated Pipelines',
    accent: 'indigo',
    url: 'https://news-forge-lemon.vercel.app/',
    client: 'News Forge',
    released: '2023',
    timeframe: '3 months',
    type: 'AI / Media / CMS',
    tech: 'React · Node.js · Gemini API · Custom Scraper · MongoDB · AWS S3',
    team: '4 members',
    overview: 'News Forge is a modern content publishing platform that combines automation with editorial control to deliver high-quality news and insights. A custom scraping API fetches trending news from top sources, which is intelligently rewritten using the Gemini API for uniqueness and clarity before admin review and publishing.',
    problem: [
      'Publishing quality news at scale required large editorial teams and was cost-prohibitive',
      'Raw scraped content was legally and ethically unsuitable for direct publishing',
      'Editors needed full control to review and refine AI-generated content before it went live',
    ],
    solution: [
      'Built a custom scraping API that gathers trending news from top sources automatically',
      'Integrated Gemini API to rewrite scraped content for uniqueness and clarity while preserving factual accuracy',
      'Implemented a full admin CMS with review, approve, reject, and refine workflows before any content publishes',
    ],
    features: [
      { label: 'Advanced CMS', desc: 'Full admin panel for article creation, editing, scheduling, and publishing with rich text and SEO management' },
      { label: 'Automated Pipeline', desc: 'Custom scraper → Gemini rewrite → admin review → publish, all within one unified workflow' },
      { label: 'Editorial Control', desc: 'Every AI-generated piece must pass human review before going live — no auto-publishing' },
      { label: 'Content Categories', desc: 'Technology & AI, Business & Finance, Global Affairs, Sports, Science, Health, Entertainment' },
      { label: 'SEO Management', desc: 'Meta tags, slug management, and category-specific layouts built into the publishing workflow' },
      { label: 'Image Handling', desc: 'Rich media upload integrated with S3, with automatic thumbnail generation for category feeds' },
    ],
    metrics: [
      { value: 'AI', label: 'Powered Pipeline' },
      { value: '7+', label: 'Content Categories' },
      { value: '100%', label: 'Editorial Review' },
    ],
    thoughts: 'News Forge proved that AI can dramatically reduce the cost of quality content production without sacrificing editorial standards. The hybrid pipeline — scrape, rewrite, review, publish — became an efficient daily workflow that maintained journalistic integrity while scaling content output significantly.',
  },

  cabit: {
    eyebrow: 'Travel Tech',
    name: 'CABIT',
    tagline: 'Smart Travel and Ride Planning Platform for India',
    accent: 'cyan',
    url: 'https://cabit.co.in',
    client: 'CABIT',
    released: '2022',
    timeframe: '4 months',
    type: 'Travel Tech / Mobility',
    tech: 'React Native · Node.js · Google Maps API · WebRTC · Firebase',
    team: '6 members',
    overview: 'CABIT is a travel-tech platform integrating trip planning, cab booking, and safety-focused features into a unified experience for travelers across India. It helps users discover curated destinations, build personalized itineraries, and book verified cabs with language-compatible drivers — with specific safety features designed for women travelers.',
    problem: [
      'Travelers had to juggle multiple apps for destination discovery, itinerary planning, and cab booking',
      'Language barriers between travelers and drivers caused friction and safety concerns in unfamiliar regions',
      'No platform specifically addressed safety needs and real-time sharing for women traveling solo',
    ],
    solution: [
      'Built an integrated platform combining curated destination discovery, AI itinerary generation, and verified cab booking',
      'Implemented in-app translation supporting multiple Indian languages for seamless driver-traveler communication',
      'Deployed safety features including emergency contact integration, real-time trip sharing, and driver verification',
    ],
    features: [
      { label: 'Smart Trip Planning', desc: 'Personalized itineraries based on preferences, travel dates, group size, and budget' },
      { label: 'Cab Booking', desc: 'Verified driver network with language filtering, fare estimation, and in-ride ETA tracking' },
      { label: 'In-App Translation', desc: 'Multi-language support eliminating barriers between travelers and drivers across India' },
      { label: 'Safety Features', desc: 'Emergency contacts, real-time trip sharing, driver ratings, and 24/7 support for women travelers' },
      { label: 'Curated Destinations', desc: 'Top Indian travel locations with guides, seasonal tips, user reviews, and insider recommendations' },
      { label: 'Live Tracking', desc: 'Real-time cab tracking with shareable ETA links for friends and family' },
    ],
    metrics: [
      { value: 'Multi', label: 'Language Support' },
      { value: 'Safety', label: 'First Design' },
      { value: 'Verified', label: 'Driver Network' },
    ],
    thoughts: 'CABIT addressed the real pain points of domestic travel in India — especially for travelers moving through regions where they don\'t speak the local language. The safety-first design for women travelers was a genuine product differentiator that resonated strongly with the target audience and drove word-of-mouth growth.',
  },

  esct: {
    eyebrow: 'Community Finance',
    name: 'ESCT',
    tagline: 'Structured Financial Support for Government Employees and Pensioners',
    accent: 'indigo',
    url: 'https://esct.co.in',
    client: 'ESCT',
    released: '2022',
    timeframe: '3.5 months',
    type: 'FinTech / Community',
    tech: 'React · Node.js · PostgreSQL · Razorpay · EHRMS API',
    team: '5 members',
    overview: 'ESCT is a structured community-driven financial support platform for government employees and pensioners, enabling transparent and verified assistance during critical life events. Members pay a nominal yearly fee plus monthly contributions, and can file claims for retirement, death during service, or death after service — with multi-level verification.',
    problem: [
      'Manual claim processing for government employee support was opaque, slow, and prone to fraud',
      'No digital system for tracking member contributions or verifying claim eligibility against EHRMS records',
      'Members had no visibility into how their contributions were being utilized across the community',
    ],
    solution: [
      'Built EHRMS and Pension-based identity validation ensuring only verified government employees can join',
      'Implemented a three-tier claim workflow — document validation, committee review, final admin approval',
      'Deployed a transparency dashboard showing real-time contribution pools, claims paid, and pending status',
    ],
    features: [
      { label: 'Verified Membership', desc: 'EHRMS and Pension-based identity validation for government employees and pensioners only' },
      { label: 'Contribution Model', desc: '₹51 yearly registration plus monthly contributions with automated collection reminders' },
      { label: 'Claim Categories', desc: 'Retirement, Death After Service, and Death During Service with specific docs and payout logic' },
      { label: 'Multi-Level Verification', desc: 'Document validation → committee peer review → admin approval before any payout release' },
      { label: 'Secure Payments', desc: 'Payment gateway for contribution collection and claim disbursement with full transaction logging' },
      { label: 'Transparency Dashboard', desc: 'Members see total contributions, claims paid, pending status, and real-time fund impact' },
    ],
    metrics: [
      { value: '3', label: 'Claim Types' },
      { value: 'EHRMS', label: 'Identity Verified' },
      { value: '₹51', label: 'Yearly Entry Fee' },
    ],
    thoughts: 'ESCT digitized a trust-based community system that had previously operated entirely on paperwork and manual verification. The transparency dashboard was transformative — seeing real-time fund utilization built member trust and increased on-time contribution rates significantly. Multi-level claim verification reduced fraudulent claims to near zero.',
  },
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white/50">
        Project not found.
      </div>
    );
  }

  const isIndigo = project.accent === 'indigo';
  const accentColor = isIndigo ? 'rgba(109,94,248,' : 'rgba(122,215,255,';
  const accentClass = isIndigo ? 'text-indigo-200' : 'text-cyan-200';
  const accentBorder = isIndigo ? 'border-indigo-300/20' : 'border-cyan-300/20';
  const accentBg = isIndigo
    ? 'from-indigo-500/20 to-cyan-400/14'
    : 'from-cyan-400/20 to-indigo-500/14';

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-28 pb-24">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute left-[10%] top-[10%] h-80 w-80 rounded-full blur-3xl"
          style={{ background: `${accentColor}0.07)` }}
        />
        <div
          className="absolute right-[8%] bottom-[15%] h-72 w-72 rounded-full blur-3xl"
          style={{ background: isIndigo ? 'rgba(122,215,255,0.05)' : 'rgba(109,94,248,0.05)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-2 text-[12px] text-white/38"
        >
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#projects" className="hover:text-white/70 transition-colors">Projects</Link>
          <span>/</span>
          <span className={accentClass}>{project.name}</span>
        </motion.div>

        {/* Hero */}
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/50 backdrop-blur-xl">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: `${accentColor}0.85)`, boxShadow: `0 0 10px ${accentColor}0.7)` }}
              />
              {project.eyebrow}
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              {project.name}
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/58 md:text-base">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                  className={`group inline-flex items-center gap-2 rounded-2xl border ${accentBorder} bg-gradient-to-r ${accentBg} px-5 py-3 text-sm font-semibold text-white`}
                >
                  Visit Live Site
                  <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>↗</motion.span>
                </motion.a>
              )}
              <Link to="/#contact">
                <motion.div
                  whileHover={{ y: -1, scale: 1.015 }}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-xl hover:text-white transition-colors cursor-pointer"
                >
                  Start a Similar Project
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Project meta card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl self-start"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: `radial-gradient(circle at 20% 20%, ${accentColor}0.12), transparent 45%)` }}
            />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

            <div className="relative space-y-4">
              {[
                { label: 'Client', value: project.client },
                { label: 'Released', value: project.released },
                { label: 'Timeframe', value: project.timeframe },
                { label: 'Project Type', value: project.type },
                { label: 'Team Size', value: project.team },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start justify-between gap-4 border-b border-white/6 pb-4 last:border-0 last:pb-0">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/38">{label}</span>
                  <span className="text-right text-[13px] text-white/78">{value}</span>
                </div>
              ))}
              <div className="border-t border-white/6 pt-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/38 mb-2">Technology</div>
                <div className="text-[12px] leading-5 text-white/60">{project.tech}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Screenshot Collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <ScreenshotGallery project={project} accentColor={accentColor} accentClass={accentClass} />
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]"
        >
          <ContentSection
            label="Overview"
            accentColor={accentColor}
          >
            <p className="text-[15px] leading-8 text-white/62">{project.overview}</p>
          </ContentSection>

          <div className="space-y-8">
            <ContentSection label="Problem Statement" accentColor={accentColor}>
              <ul className="space-y-3">
                {project.problem.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-6 text-white/60">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: `${accentColor}0.7)` }} />
                    {p}
                  </li>
                ))}
              </ul>
            </ContentSection>

            <ContentSection label="Our Solution" accentColor={accentColor}>
              <ul className="space-y-3">
                {project.solution.map((s, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-6 text-white/60">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/70" />
                    {s}
                  </li>
                ))}
              </ul>
            </ContentSection>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl"
              style={{ boxShadow: `0 0 30px ${accentColor}0.10)` }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(circle at 50% 0%, ${accentColor}0.12), transparent 50%)` }}
              />
              <div className="relative">
                <div className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">{metric.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">{metric.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <SectionLabel label="Key Features" accentColor={accentColor} />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[22px] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/14 hover:bg-white/[0.055]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${accentColor}0.10), transparent 40%)` }} />
                <div className="relative">
                  <div
                    className="mb-2 h-1 w-6 rounded-full"
                    style={{ background: `${accentColor}0.6)` }}
                  />
                  <div className="text-[13px] font-semibold text-white mb-1.5">{feature.label}</div>
                  <p className="text-[12px] leading-5 text-white/52">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Thoughts */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-8 md:p-10 backdrop-blur-2xl"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(circle at 80% 50%, ${accentColor}0.10), transparent 40%)` }}
          />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
          <div className="relative">
            <SectionLabel label="Final Thoughts" accentColor={accentColor} />
            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-white/62">{project.thoughts}</p>
          </div>
        </motion.div>

        {/* Next project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-sm text-white/40">Interested in a similar project?</p>
          <Link to="/#contact">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className={`inline-flex items-center gap-2 rounded-2xl border ${accentBorder} bg-gradient-to-r ${accentBg} px-6 py-3.5 text-sm font-semibold text-white cursor-pointer`}
            >
              Start a Project with Cognexon
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>→</motion.span>
            </motion.div>
          </Link>
          <Link to="/#projects" className="text-[12px] text-white/35 hover:text-white/60 transition-colors mt-1">
            ← Back to All Projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

// ---- Screenshot Gallery Component ----
function ScreenshotGallery({ project, accentColor, accentClass }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Simulated screenshot placeholders with unique UI mockups per project
  const screenshots = [
    { label: 'Dashboard View', aspect: 'wide' },
    { label: 'Mobile Interface', aspect: 'tall' },
    { label: 'Feature Detail', aspect: 'square' },
    { label: 'Admin Panel', aspect: 'wide' },
  ];

  return (
    <div className="relative">
      <SectionLabel label="Project Screenshots" accentColor={accentColor} />

      {/* Collage grid */}
      <div className="mt-6 grid grid-cols-12 grid-rows-2 gap-3 h-[480px]">
        {/* Large screenshot - left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-7 row-span-2 relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0C1118] cursor-pointer group"
          onClick={() => { setActiveIndex(0); setLightboxOpen(true); }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(circle at 30% 30%, ${accentColor}0.16), transparent 50%)` }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
          <ScreenshotMockup project={project} index={0} accentColor={accentColor} size="large" />
          <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#0B0F16]/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/55 backdrop-blur-xl">
            Main Interface
          </div>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300 rounded-[24px]" />
        </motion.div>

        {/* Top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="col-span-5 row-span-1 relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0C1118] cursor-pointer group"
          onClick={() => { setActiveIndex(1); setLightboxOpen(true); }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(circle at 70% 30%, ${accentColor}0.12), transparent 50%)` }}
          />
          <ScreenshotMockup project={project} index={1} accentColor={accentColor} size="medium" />
          <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#0B0F16]/80 px-2.5 py-1 text-[9px] uppercase tracking-widest text-white/45 backdrop-blur-xl">
            Feature View
          </div>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300 rounded-[24px]" />
        </motion.div>

        {/* Bottom right - split into 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="col-span-3 row-span-1 relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0C1118] cursor-pointer group"
          onClick={() => { setActiveIndex(2); setLightboxOpen(true); }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(circle at 50% 70%, ${accentColor}0.14), transparent 50%)` }}
          />
          <ScreenshotMockup project={project} index={2} accentColor={accentColor} size="small" />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300 rounded-[24px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-2 row-span-1 relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0C1118] cursor-pointer group"
          onClick={() => { setActiveIndex(3); setLightboxOpen(true); }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor}0.14), transparent 60%)` }}
          />
          <ScreenshotMockup project={project} index={3} accentColor={accentColor} size="tiny" />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300 rounded-[24px]" />
        </motion.div>
      </div>

      {/* Upload note */}
      <p className="mt-3 text-center text-[11px] text-white/25 tracking-wide">
        Replace placeholder mockups with actual screenshots via the asset pipeline
      </p>
    </div>
  );
}

// Generates unique in-browser UI mockups per project & slot
function ScreenshotMockup({ project, index, accentColor, size }) {
  const isIndigo = project.accent === 'indigo';
  const p = accentColor;

  const config = {
    large: { pad: 'p-5', titleSize: 'text-sm', barH: 'h-8', cardH: 'h-28', gridCols: 3 },
    medium: { pad: 'p-4', titleSize: 'text-xs', barH: 'h-6', cardH: 'h-20', gridCols: 2 },
    small: { pad: 'p-3', titleSize: 'text-[10px]', barH: 'h-5', cardH: 'h-14', gridCols: 2 },
    tiny: { pad: 'p-2.5', titleSize: 'text-[9px]', barH: 'h-4', cardH: 'h-10', gridCols: 1 },
  }[size];

  return (
    <div className={`absolute inset-0 ${config.pad} flex flex-col gap-2 overflow-hidden`}>
      {/* Top bar */}
      <div className={`${config.barH} rounded-lg border border-white/8 bg-white/[0.04] flex items-center gap-2 px-3 flex-shrink-0`}>
        <div className="flex gap-1">
          {[1,2,3].map(i => <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/15" />)}
        </div>
        <div className="h-1.5 flex-1 rounded bg-white/8" />
        {size !== 'tiny' && <div className="h-4 w-12 rounded bg-white/8" />}
      </div>

      {/* Content area */}
      {index === 0 && (
        <div className="flex flex-1 gap-2 overflow-hidden">
          {size !== 'small' && size !== 'tiny' && (
            <div className="w-32 flex-shrink-0 rounded-lg border border-white/8 bg-white/[0.03] p-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="mb-2 flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: i === 2 ? `${p}0.7)` : 'rgba(255,255,255,0.15)' }} />
                  <div className="h-1.5 flex-1 rounded bg-white/10" />
                </div>
              ))}
            </div>
          )}
          <div className="flex-1 flex flex-col gap-2 min-w-0">
            <div className="flex gap-2">
              {[1,2,3].slice(0, config.gridCols).map(i => (
                <div key={i} className="flex-1 rounded-lg border border-white/8 bg-white/[0.04] p-2">
                  <div className="text-[8px] text-white/30 mb-1">Metric {i}</div>
                  <div className="text-base font-semibold text-white/80">{['124', '38%', '₹4.2L'][i-1]}</div>
                </div>
              ))}
            </div>
            <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.03] p-2">
              <div className="h-1.5 w-24 rounded bg-white/12 mb-2" />
              <div className="flex gap-1 items-end h-12">
                {[40, 65, 30, 80, 55, 70, 45].slice(0, 5).map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `${p}0.4)` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.03] p-2 overflow-hidden">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-2 mb-2 last:mb-0">
                <div className="h-6 w-6 rounded-full bg-white/8 flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-1.5 w-full rounded bg-white/12 mb-1" />
                  <div className="h-1.5 w-2/3 rounded bg-white/8" />
                </div>
                <div className="h-4 w-10 rounded-full" style={{ background: `${p}0.2)` }} />
              </div>
            ))}
          </div>
          <div className="h-8 rounded-lg border border-white/8 bg-white/[0.03] flex items-center px-2 gap-2">
            <div className="h-1.5 flex-1 rounded bg-white/10" />
            <div className="h-5 w-12 rounded-md" style={{ background: `${p}0.25)` }} />
          </div>
        </div>
      )}

      {index === 2 && (
        <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.03] p-2 overflow-hidden">
          <div className="h-1.5 w-2/3 rounded bg-white/12 mb-2" />
          <div className="grid grid-cols-2 gap-1.5">
            {[1,2,3,4].map(i => (
              <div key={i} className="rounded-md border border-white/8 bg-white/[0.04] p-1.5">
                <div className="h-6 rounded bg-white/8 mb-1" />
                <div className="h-1 w-full rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      )}

      {index === 3 && (
        <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.04] p-2 overflow-hidden">
          <div className="flex flex-col gap-1.5">
            {[80,55,35].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full" style={{ width: `${w}%`, background: `${p}0.45)` }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ContentSection({ label, children, accentColor }) {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-white/8 bg-white/[0.03] p-6 md:p-7 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <SectionLabel label={label} accentColor={accentColor} />
      <div className="mt-4">{children}</div>
    </div>
  );
}

function SectionLabel({ label, accentColor }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full" style={{ background: `${accentColor}0.75)`, boxShadow: `0 0 8px ${accentColor}0.5)` }} />
      <span className="text-[10px] uppercase tracking-[0.24em] text-white/40">{label}</span>
    </div>
  );
}