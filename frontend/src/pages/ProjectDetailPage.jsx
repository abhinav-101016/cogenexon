import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

// ─── Screenshot config per project (3 images each) ───────────────────────────
const projectScreenshots = {
  lunemart: [
    { src: '/LuneMartHero.png',       label: 'Hero' },
    { src: '/LuneMart Categories.png', label: 'Categories' },
    { src: '/LuneMartCTA.png',        label: 'CTA' },
  ],
  mediqliq: [
    { src: '/CentralizedERPOperations.png', label: 'Centralized ERP Operations' },
    { src: '/AppointmentScheduling.png',    label: 'Appointment Scheduling' },
    { src: '/RevenueTrends.png',            label: 'Financial Analytics' },
  ],
  proplink: [
    { src: null, label: 'Listings' },
    { src: null, label: 'CRM Pipeline' },
    { src: null, label: 'Client Portal' },
  ],
  aadyaplus: [
    { src: '/AadyaDoctors.png', label: 'Discovery' },
    { src: '/AadyaPlusHome.png', label: 'Home' },
    { src: '/AadyaPlusFindDoctors.png', label: 'Services' },
  ],
  orivotech: [
    { src: '/OrivoHome.png', label: 'Home' },
    { src: '/OrivoServices.png', label: 'Our Services' },
    { src: '/OrivoTestimonials.png', label: 'Testimonials' },
  ],
  ietlaa: [
    { src: '/AlumniHero.png',      label: 'Hero' },
    { src: '/AlumniDashboard.png', label: 'Dashboard' },
    { src: '/AlumniCommittee.png', label: 'Committee' },
  ],
  gptool: [
    { src: null, label: 'Catalog' },
    { src: null, label: 'Product Detail' },
    { src: null, label: 'Spec Sheet' },
  ],
  newsforge: [
    { src: '/NewsForgeHome.png', label: 'Home Page' },
    { src: '/NewsForgeAdmin.png', label: 'Admin Panel' },
    { src: '/NewsForgeNews.png', label: 'AI Automated Pipelines' },
  ],
  cabit: [
    { src: '/CabitHero.png',        label: 'Hero' },
    { src: '/CabitAttractions.png', label: 'Attractions' },
    { src: '/CabitSignUp.png',      label: 'Sign Up' },
  ],
  esct: [
    { src: '/esctHome.png', label: 'Home Page' },
    { src: '/esctDonations.png', label: 'Donation Analytics' },
    { src: '/esctFeatures.png', label: 'Features' },
  ],
};

// ─── Project data ─────────────────────────────────────────────────────────────
const projectData = {
  lunemart: {
    eyebrow: 'E-commerce Marketplace',
    name: 'LuneMart',
    tagline: 'The Ultimate Multi-Category E-commerce Marketplace',
    accent: 'cyan',
    url: 'https://www.lunemart.com/',
    client: 'LuneMart', released: '2024', timeframe: '5 months',
    type: 'E-commerce / Marketplace', tech: 'React · Node.js · MongoDB · Razorpay · PhonePe · GPS API', team: '6 members',
    overview: 'LuneMart is a full-scale digital marketplace connecting users with a wide network of verified local and global suppliers. Built with a mobile-first approach, it delivers a seamless and secure shopping experience across multiple product categories including groceries, electronics, fashion, and home essentials.',
    challenge: 'The client needed a unified platform that could bring together local and global suppliers under one roof without sacrificing the checkout experience on mobile. Fragmented flows, poor order visibility post-purchase, and the absence of real-time tracking were eroding customer trust and conversion rates across seasonal campaigns.',
    solution: 'We built a multi-category marketplace with hierarchical product organization and GPS-based local supplier discovery. A mobile-first checkout was engineered with flash sales, a coupon engine, and promotional auto-application. Razorpay and PhonePe were integrated alongside a complete cart-to-delivery tracking system backed by real-time push notifications.',
    features: [
      { label: 'Multi-Category Marketplace', desc: 'Groceries, electronics, fashion, home essentials with dynamic category expansion' },
      { label: 'Smart Pricing Engine', desc: 'Time-based flash sales, percentage/fixed coupons, and auto-applied promos at checkout' },
      { label: 'Local Discovery', desc: 'GPS-based nearby verified supplier detection with distance-sorted listings' },
      { label: 'Supplier Verification', desc: 'Admin-approval workflow with document upload and verification badge system' },
      { label: 'Real-Time Tracking', desc: 'Complete order lifecycle from cart to delivery with live status updates' },
      { label: 'Mobile-First UX', desc: 'Touch-optimized grids, push notifications, and dedicated mobile checkout flow' },
    ],
    metrics: [{ value: '6+', label: 'Product Categories' }, { value: 'GPS', label: 'Local Discovery' }, { value: '2', label: 'Payment Gateways' }],
    thoughts: 'LuneMart became a comprehensive marketplace that bridges local commerce and digital discovery. The GPS-based supplier feature significantly boosted engagement from tier-2 city users, while the smart pricing engine drove measurable conversion improvements across seasonal campaigns.',
  },
  mediqliq: {
    eyebrow: 'Hospital ERP / HIMS', name: 'Mediqliq',
    tagline: 'Advanced Hospital ERP — Digitizing End-to-End Clinical Operations',
    accent: 'indigo', url: 'https://hospital-admin-eight.vercel.app/',
    client: 'Mediqliq', released: '2024', timeframe: '6 months',
    type: 'Healthcare SaaS / HIMS', tech: 'React · Node.js · PostgreSQL · AWS · Socket.io · Razorpay', team: '8 members',
    overview: 'Mediqliq is a comprehensive Hospital ERP (HIMS) system that digitizes and automates hospital operations across clinical, administrative, and financial workflows. It supports role-based access for administrators, doctors, nurses, receptionists, pharmacists, and lab technicians with full audit logging for medical-legal compliance.',
    challenge: 'The hospital relied on paper-based patient records, making retrieval slow and creating compliance risks. Revenue was leaking due to the absence of a centralized billing system, which also delayed patient discharge. Pharmacy and lab operations ran in silos, creating dangerous gaps between prescriptions and results.',
    solution: 'We built a centralized patient management system with unique patient IDs, complete medical histories, and automated discharge summaries. Pharmacy, lab, and billing modules were integrated with real-time inventory alerts and insurance/TPA support. A real-time analytics dashboard was deployed to track patient footfall, revenue trends, doctor performance, and bed occupancy across the facility.',
    features: [
      { label: 'Patient Management', desc: 'Digital records, unique patient IDs, complete medical history, and automated discharge summaries' },
      { label: 'Appointment System', desc: 'Doctor availability slots, online booking, SMS/email reminders, and waitlist management' },
      { label: 'Pharmacy Module', desc: 'Prescription-to-medicine mapping, automated stock alerts, and billing integration' },
      { label: 'Lab Integration', desc: 'Test catalog, barcode sample tracking, digital report upload, and patient portal access' },
      { label: 'Billing & Finance', desc: 'OPD/IPD invoicing, multi-gateway payments, insurance/TPA integration, GST compliance' },
      { label: 'Analytics Dashboard', desc: 'Real-time visualization for footfall, revenue, doctor performance, and bed occupancy' },
    ],
    metrics: [{ value: '6', label: 'Core Modules' }, { value: 'RBAC', label: 'Role-Based Access' }, { value: 'GST', label: 'Compliant Billing' }],
    thoughts: 'Mediqliq transformed hospital operations by replacing fragmented paper workflows with a cohesive digital system. The integrated pharmacy and lab modules reduced prescription errors significantly, while the analytics dashboard gave administrators real-time visibility into hospital performance for the first time.',
  },
  proplink: {
    eyebrow: 'Real Estate SaaS', name: 'PropLink',
    tagline: 'Cloud-Based Real Estate Management for Agencies and Brokers',
    accent: 'cyan', url: null,
    client: 'Aadya Builders', released: '2024', timeframe: '4 months',
    type: 'PropTech / SaaS', tech: 'Next.js · Node.js · PostgreSQL · Google Maps API · Twilio', team: '5 members',
    overview: 'PropLink is a cloud-based real estate management system designed for agencies, brokers, and property professionals to centralize property management, lead generation, and client relationship workflows.',
    challenge: 'Brokers were managing listings across spreadsheets and WhatsApp with no central source of truth. Leads were being lost to manual assignment with zero follow-up automation. Buyers had no self-service portal, forcing every interaction through a phone call and creating a massive operational bottleneck for the team.',
    solution: 'We built centralized listing management with auto-publishing, status tracking, and portal integration. A built-in CRM with round-robin lead assignment, activity timelines, and deal stage management eliminated the manual overhead. A client-facing portal was launched allowing buyers to shortlist properties, request site visits, and receive personalized recommendations independently.',
    features: [
      { label: 'Listing Management', desc: 'Centralized upload with images, maps, price, area, and status tracking' },
      { label: 'Built-in CRM', desc: 'Lead capture, automated agent assignment, activity timeline, and deal stage pipeline' },
      { label: 'Client Portal', desc: 'Buyers can save properties, request site visits, and receive shortlisted recommendations' },
      { label: 'Market Insights', desc: 'Valuation estimates based on comparable listings with price movement analytics' },
      { label: 'Mobile Tools', desc: 'Agents can update listings, schedule showings, and receive lead alerts on the go' },
      { label: 'Auto Publishing', desc: 'Listings sync to connected property portals automatically upon approval' },
    ],
    metrics: [{ value: 'CRM', label: 'Built-in Pipeline' }, { value: 'Auto', label: 'Lead Assignment' }, { value: 'Portal', label: 'Buyer Self-Service' }],
    thoughts: 'PropLink significantly reduced the time brokers spent on manual coordination. The round-robin lead assignment eliminated favoritism complaints, while the client portal reduced back-and-forth calls for property shortlisting.',
  },
  aadyaplus: {
    eyebrow: 'Healthcare Platform', name: 'AadyaPlus',
    tagline: 'Unified Digital Healthcare — From Discovery to Prescription and Reports',
    accent: 'indigo', url: 'https://aadya-frontend.vercel.app/',
    client: 'AadyaPlus Healthcare', released: '2024', timeframe: '5 months',
    type: 'Healthcare / Telemedicine', tech: 'React · Node.js · WebRTC · Zoom SDK · MongoDB · Twilio', team: '7 members',
    overview: 'AadyaPlus is an all-in-one digital healthcare ecosystem connecting patients with verified doctors, physiotherapists, labs, and pharmacies, managing the complete patient journey from discovery through final report delivery.',
    challenge: 'Patients were navigating multiple disconnected platforms to book doctors, order tests, and retrieve reports. There was no verification system, meaning patients had no reliable way to trust provider credentials. Video consultation workflows were completely isolated from prescriptions and lab results, creating dangerous continuity gaps.',
    solution: 'We built a unified discovery system connecting patients to verified doctors, physiotherapists, labs, and pharmacies in a single seamless flow. Zoom and WebRTC were integrated for video consultations sharing the same booking, prescription, and follow-up workflow as in-person visits. A trust badge system was deployed requiring admin credential verification before any provider could go live on the platform.',
    features: [
      { label: 'Multi-Service Discovery', desc: 'Search and filter by provider type, specialty, location, and patient rating' },
      { label: 'Telemedicine', desc: 'Video consultation via Zoom/WebRTC with same booking, prescription, and follow-up workflow' },
      { label: 'End-to-End Journey', desc: 'Complete flow: booking → consultation → digital prescription → lab report → portal' },
      { label: 'Verified Providers', desc: 'Admin credential verification with trust badges before any provider goes live' },
      { label: 'Digital Prescriptions', desc: 'Auto-generated prescriptions linked to patient records and accessible from portal' },
      { label: 'Notifications', desc: 'SMS/email alerts at every stage of the patient journey' },
    ],
    metrics: [{ value: '4', label: 'Service Types' }, { value: 'E2E', label: 'Patient Journey' }, { value: 'Verified', label: 'All Providers' }],
    thoughts: 'AadyaPlus resolved the fragmentation in healthcare access. The unified platform meant a patient could book a doctor, attend a video consultation, get a digital prescription, order lab tests, and view reports — all without switching apps.',
  },
  orivotech: {
    eyebrow: 'Digital Marketing SaaS', name: 'Orivo Tech',
    tagline: 'Performance-Driven Digital Growth for Small Businesses',
    accent: 'cyan', url: 'https://www.orivotech.in/',
    client: 'Orivo Tech', released: '2023', timeframe: '3 months',
    type: 'MarTech / SaaS', tech: 'React · Node.js · Google Maps API · Meta API · Stripe', team: '4 members',
    overview: 'Orivo Tech is a performance-driven digital marketing platform helping small businesses rapidly establish their online presence and generate leads through Google Maps optimization and social media setup.',
    challenge: 'Small business owners lacked the technical expertise and budget to set up and optimize their digital presence. Traditional agencies demanded high upfront fees with no guaranteed outcomes. The majority of the SMB segment was entirely missing from local SEO and Google Maps visibility, leaving real revenue on the table.',
    solution: 'We built a fast onboarding flow with free registration capturing all business information for instant digital profile creation. Google Maps listings were automatically created and optimized via the Maps API. A performance-based pricing model was implemented — the first 3 leads were completely free, with a ₹999/month subscription triggered only once that threshold was crossed.',
    features: [
      { label: 'Fast Onboarding', desc: 'Free registration with no payment required — simple form for profile creation' },
      { label: 'Google Maps Optimization', desc: 'API-driven listing creation ensuring high-visibility local search presence' },
      { label: 'Social Media Setup', desc: 'Professional Instagram and Facebook business pages with optimized profiles' },
      { label: 'SEO Acceleration', desc: 'Technical SEO, keyword optimization, and local search strategies' },
      { label: 'Performance Pricing', desc: 'First 3 leads free, then ₹999/month — billing triggered after free threshold' },
      { label: 'Lead Tracking', desc: 'Automated lead counting per business to trigger and manage subscription billing' },
    ],
    metrics: [{ value: '3', label: 'Free Leads to Start' }, { value: '₹999', label: 'Monthly Post-Free' }, { value: 'Auto', label: 'Lead Tracking' }],
    thoughts: 'Orivo Tech democratized digital presence for SMB owners. The risk-free entry model removed the biggest barrier to adoption, while automated Maps and social setup delivered measurable visibility within the first week of onboarding.',
  },
  ietlaa: {
    eyebrow: 'Alumni Network', name: 'IETLAA',
    tagline: 'Alumni Record Management and Networking Platform for IET Lucknow',
    accent: 'indigo', url: 'https://alumni2-phi.vercel.app/',
    client: 'IET Lucknow Alumni Association', released: '2023', timeframe: '2.5 months',
    type: 'EdTech / Community', tech: 'React · Node.js · MongoDB · CSV Import/Export · Cloudinary', team: '3 members',
    overview: 'IETLAA is a dedicated alumni platform for IET Lucknow designed to strengthen alumni connections and maintain structured records of former students across batches and branches.',
    challenge: 'Alumni records were scattered across Excel files with no searchable, centralized directory. The college had no reliable way to reach graduates for events, announcements, or collaborative programs. Alumni themselves lacked a structured channel to network professionally across batches and branches.',
    solution: 'We built a searchable alumni directory with filters for pass-out year, branch, and current employer. Detailed profile management was implemented with privacy controls and career history tracking. A bulk CSV import/export system was deployed for administrators to migrate and maintain years of scattered records at scale in a single operation.',
    features: [
      { label: 'Alumni Directory', desc: 'Searchable across batches with filters by pass-out year, branch, and current company' },
      { label: 'Profile Management', desc: 'Detailed profiles with contact info, privacy controls, career history, and photo upload' },
      { label: 'Bulk Data Import', desc: 'CSV import/export capabilities for administrators to set up alumni records at scale' },
      { label: 'Privacy Controls', desc: 'Opt-in contact visibility — alumni choose what information is shown in the directory' },
      { label: 'Branch Analytics', desc: 'Systematic tracking of branch-wise and batch-wise alumni distribution' },
      { label: 'Admin Dashboard', desc: 'College admin panel for record management, bulk operations, and communication' },
    ],
    metrics: [{ value: 'Multi', label: 'Batch Support' }, { value: 'CSV', label: 'Bulk Import' }, { value: 'RBAC', label: 'Privacy Controls' }],
    thoughts: 'IETLAA gave IET Lucknow a professional alumni network for the first time. The bulk import feature allowed the college to migrate years of scattered records in a single operation, while alumni engagement grew organically.',
  },
  gptool: {
    eyebrow: 'Industrial E-commerce', name: 'GPTool',
    tagline: 'B2B/B2C Hardware and Industrial Equipment Marketplace',
    accent: 'cyan', url: 'http://www.dcatool.in/',
    client: 'GPTool / DCA Tool', released: '2023', timeframe: '3.5 months',
    type: 'Industrial E-commerce', tech: 'React · Node.js · MongoDB · Shiprocket · Razorpay', team: '5 members',
    overview: 'GPTool is a niche B2B/B2C e-commerce platform specializing in hardware tools, power tools, and industrial machinery with verified manufacturer partnerships and optimized heavy logistics.',
    challenge: 'Industrial buyers had no reliable online source for hardware tools with verified authenticity. Existing platforms lacked the detailed specifications and compatibility information that industrial professionals require before making a purchase. Logistics for heavy machinery was an entirely unsolved pain point, with no carrier infrastructure suited to the weight and dimensions involved.',
    solution: 'We built a specialized catalog with hierarchical product organization, detailed technical specifications, and high-resolution imagery across every SKU. Supplier verification workflows were engineered to ensure direct manufacturer partnerships only. Logistics APIs were integrated and optimized specifically for heavy equipment, including location-based shipping rate calculation at checkout.',
    features: [
      { label: 'Extensive Catalog', desc: 'Hand tools, power tools, and industrial machinery with detailed specs and category filters' },
      { label: 'Verified Suppliers', desc: 'Direct manufacturer partnerships with admin verification workflow' },
      { label: 'Heavy Logistics', desc: 'Tracked shipping optimized for industrial equipment with location-based rate calculation' },
      { label: 'Knowledge Hub', desc: 'Expert guides, installation tutorials, usage specs, and customer reviews' },
      { label: 'Spec Sheets', desc: 'Voltage, weight, brand, warranty, and compatibility data on every product page' },
      { label: 'B2B Pricing', desc: 'Bulk pricing tiers and wholesale workflows for business buyers ordering at volume' },
    ],
    metrics: [{ value: 'B2B/B2C', label: 'Dual Market' }, { value: 'Verified', label: 'All Suppliers' }, { value: 'Heavy', label: 'Logistics Ready' }],
    thoughts: 'GPTool filled a genuine gap in the industrial supply chain. The knowledge hub became a key differentiator — professionals valued the expert guides as much as the product catalog itself.',
  },
  newsforge: {
    eyebrow: 'AI News Platform', name: 'News Forge',
    tagline: 'AI-Powered News Publishing with Editorial Control and Automated Pipelines',
    accent: 'indigo', url: 'https://news-forge-lemon.vercel.app/',
    client: 'News Forge', released: '2023', timeframe: '3 months',
    type: 'AI / Media / CMS', tech: 'React · Node.js · Gemini API · Custom Scraper · MongoDB · AWS S3', team: '4 members',
    overview: 'News Forge is a modern content publishing platform combining automation with editorial control. A custom scraping API fetches trending news, which is rewritten using the Gemini API before admin review and publishing.',
    challenge: 'Publishing quality news at scale required large editorial teams and was cost-prohibitive for the client. Raw scraped content was legally and ethically unsuitable for direct publishing without significant rewriting. Editors needed full, granular control to review and refine AI-generated content before any article went live — a workflow that no off-the-shelf CMS could support.',
    solution: 'We built a custom scraping API that gathers trending news from top sources automatically throughout the day. The Gemini API was integrated to rewrite scraped content for uniqueness while preserving factual accuracy. A full admin CMS was implemented with review, approve, reject, and refine workflows ensuring every AI-generated piece passed human editorial judgment before publication.',
    features: [
      { label: 'Advanced CMS', desc: 'Full admin panel for article creation, editing, scheduling, and publishing' },
      { label: 'Automated Pipeline', desc: 'Custom scraper → Gemini rewrite → admin review → publish in one workflow' },
      { label: 'Editorial Control', desc: 'Every AI-generated piece must pass human review before going live' },
      { label: 'Content Categories', desc: 'Technology & AI, Business & Finance, Global Affairs, Sports, Science, Health' },
      { label: 'SEO Management', desc: 'Meta tags, slug management, and category-specific layouts in publishing workflow' },
      { label: 'Image Handling', desc: 'Rich media upload integrated with S3, with automatic thumbnail generation' },
    ],
    metrics: [{ value: 'AI', label: 'Powered Pipeline' }, { value: '7+', label: 'Content Categories' }, { value: '100%', label: 'Editorial Review' }],
    thoughts: 'News Forge proved that AI can dramatically reduce the cost of quality content production. The hybrid pipeline became an efficient daily workflow that maintained journalistic integrity while scaling content output significantly.',
  },
  cabit: {
    eyebrow: 'Travel Tech', name: 'CABIT',
    tagline: 'Smart Travel and Ride Planning Platform for India',
    accent: 'cyan', url: 'https://cabit.co.in',
    client: 'CABIT', released: '2022', timeframe: '4 months',
    type: 'Travel Tech / Mobility', tech: 'React Native · Node.js · Google Maps API · WebRTC · Firebase', team: '6 members',
    overview: 'CABIT is a travel-tech platform integrating trip planning, cab booking, and safety-focused features into a unified experience for travelers across India, with specific design considerations for women traveling solo.',
    challenge: 'Travelers were juggling multiple disconnected apps for destination discovery, itinerary planning, and cab booking. Language barriers between travelers and drivers caused friction and created safety concerns on the road. No existing platform specifically addressed the safety needs of women traveling solo in India — a critical and underserved use case.',
    solution: 'We built an integrated platform combining destination discovery, AI itinerary generation, and verified cab booking in a single experience. In-app translation was implemented supporting multiple Indian languages, eliminating the communication barrier between travelers and drivers. Safety features were deployed including emergency contact integration, real-time trip sharing, and 24/7 support infrastructure.',
    features: [
      { label: 'Smart Trip Planning', desc: 'Personalized itineraries based on preferences, dates, group size, and budget' },
      { label: 'Cab Booking', desc: 'Verified driver network with language filtering, fare estimation, and in-ride tracking' },
      { label: 'In-App Translation', desc: 'Multi-language support eliminating barriers between travelers and drivers' },
      { label: 'Safety Features', desc: 'Emergency contacts, real-time trip sharing, driver ratings, 24/7 support' },
      { label: 'Curated Destinations', desc: 'Top Indian travel locations with guides, seasonal tips, and user reviews' },
      { label: 'Live Tracking', desc: 'Real-time cab tracking with shareable ETA links for friends and family' },
    ],
    metrics: [{ value: 'Multi', label: 'Language Support' }, { value: 'Safety', label: 'First Design' }, { value: 'Verified', label: 'Driver Network' }],
    thoughts: 'CABIT addressed real pain points of domestic travel in India. The safety-first design for women travelers was a genuine product differentiator that resonated strongly and drove word-of-mouth growth.',
  },
  esct: {
    eyebrow: 'Community Finance', name: 'ESCT',
    tagline: 'Structured Financial Support for Government Employees and Pensioners',
    accent: 'indigo', url: 'https://esct.co.in',
    client: 'ESCT', released: '2022', timeframe: '3.5 months',
    type: 'FinTech / Community', tech: 'React · Node.js · PostgreSQL · Razorpay · EHRMS API', team: '5 members',
    overview: 'ESCT is a structured community-driven financial support platform for government employees and pensioners, enabling transparent and verified assistance during critical life events.',
    challenge: 'Manual claim processing for government employee support was opaque, slow, and highly prone to fraud. There was no digital system for tracking member contributions or verifying claim eligibility in real time. Members had no visibility into how their contributions were being utilized, eroding trust in the entire system over time.',
    solution: 'We built EHRMS and Pension-based identity validation to ensure only verified government employees could join. A three-tier claim workflow was implemented — document validation, committee review, and final admin approval — before any payout was processed. A transparency dashboard was deployed giving members real-time visibility into contribution pools, claims status, and fund utilization.',
    features: [
      { label: 'Verified Membership', desc: 'EHRMS and Pension-based identity validation for government employees only' },
      { label: 'Contribution Model', desc: '₹51 yearly registration plus monthly contributions with automated reminders' },
      { label: 'Claim Categories', desc: 'Retirement, Death After Service, and Death During Service with specific payout logic' },
      { label: 'Multi-Level Verification', desc: 'Document validation → committee review → admin approval before payout' },
      { label: 'Secure Payments', desc: 'Payment gateway for contribution collection and claim disbursement' },
      { label: 'Transparency Dashboard', desc: 'Members see contributions, claims paid, pending status, and real-time fund impact' },
    ],
    metrics: [{ value: '3', label: 'Claim Types' }, { value: 'EHRMS', label: 'Identity Verified' }, { value: '₹51', label: 'Yearly Entry Fee' }],
    thoughts: 'ESCT digitized a trust-based community system. The transparency dashboard built member trust and increased on-time contribution rates significantly. Multi-level claim verification reduced fraudulent claims to near zero.',
  },
};

// ─── Shared helpers ───────────────────────────────────────────────────────────
function SectionEyebrow({ projectName, section, accentColor }) {
  return (
    <p className="mb-3 text-[10px] uppercase tracking-[0.28em] font-medium"
      style={{ color: `${accentColor}0.55)` }}>
      {projectName} / {section}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-[26px] font-semibold tracking-[-0.035em] text-white md:text-[32px] mb-5 leading-tight">
      {children}
    </h2>
  );
}

// ─── Fallback animated mockup for missing screenshots ────────────────────────
function FallbackMockup({ accentColor, variant }) {
  const p = accentColor;

  if (variant === 'sidebar') {
    return (
      <div className="absolute inset-0 p-4 flex flex-col gap-2.5 overflow-hidden">
        <div className="h-7 rounded-lg border border-white/8 bg-white/[0.04] flex items-center gap-2 px-3">
          <div className="flex gap-1">{[0,1,2].map(i=><div key={i} className="h-1.5 w-1.5 rounded-full bg-white/15"/>)}</div>
          <div className="h-1.5 flex-1 rounded bg-white/8"/>
          <div className="h-4 w-12 rounded bg-white/8"/>
        </div>
        <div className="flex flex-1 gap-2.5 overflow-hidden">
          <div className="w-20 flex-shrink-0 rounded-xl border border-white/8 bg-white/[0.03] p-2">
            {[0,1,2,3,4].map(i=>(
              <div key={i} className="mb-2 flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full" style={{background:i===1?`${p}0.7)`:'rgba(255,255,255,0.14)'}}/>
                <div className="h-1.5 flex-1 rounded bg-white/10"/>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex gap-1.5">
              {['124','38%','₹4.2L'].map((v,i)=>(
                <div key={i} className="flex-1 rounded-xl border border-white/8 bg-white/[0.04] p-1.5">
                  <div className="text-[7px] text-white/30 mb-0.5">M{i+1}</div>
                  <div className="text-xs font-semibold text-white/80">{v}</div>
                </div>
              ))}
            </div>
            <div className="flex-1 rounded-xl border border-white/8 bg-white/[0.03] p-2">
              <div className="h-1.5 w-16 rounded bg-white/12 mb-2"/>
              <div className="flex gap-0.5 items-end h-10">
                {[40,65,30,80,55,70,45].map((h,i)=>(
                  <div key={i} className="flex-1 rounded-t-sm" style={{height:`${h}%`,background:`${p}0.4)`}}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // card list variant
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2.5 overflow-hidden">
      <div className="h-7 rounded-lg border border-white/8 bg-white/[0.04] flex items-center gap-2 px-3">
        <div className="flex gap-1">{[0,1,2].map(i=><div key={i} className="h-1.5 w-1.5 rounded-full bg-white/15"/>)}</div>
        <div className="h-1.5 flex-1 rounded bg-white/8"/>
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        {[1,2,3].map(i=>(
          <div key={i} className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] p-2.5">
            <div className="h-7 w-7 rounded-lg flex-shrink-0" style={{background:`${p}0.18)`}}/>
            <div className="flex-1">
              <div className="h-1.5 w-3/4 rounded bg-white/15 mb-1.5"/>
              <div className="h-1.5 w-1/2 rounded bg-white/8"/>
            </div>
            <div className="h-4 w-12 rounded-full border border-white/10 bg-white/[0.04]"/>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Image slot ───────────────────────────────────────────────────────────────
function ImgSlot({ shot, accentColor, index, className = '' }) {
  const variants = ['sidebar', 'card', 'sidebar'];
  return (
    <div className={`relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0C1118] group ${className}`}>
      {/* glow overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at ${index % 2 === 0 ? '30% 30%' : '70% 30%'}, ${accentColor}0.12), transparent 50%)` }}/>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent"/>

      {shot?.src ? (
        <>
          <img src={shot.src} alt={shot.label}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1118]/45 via-transparent to-transparent"/>
        </>
      ) : (
        <FallbackMockup accentColor={accentColor} variant={variants[index] ?? 'sidebar'}/>
      )}

      {/* label badge */}
      <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#0B0F16]/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/50 backdrop-blur-xl">
        {shot?.label}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
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
  const ac = isIndigo ? 'rgba(109,94,248,' : 'rgba(122,215,255,';   // accentColor prefix
  const accentClass  = isIndigo ? 'text-indigo-200' : 'text-cyan-200';
  const accentBorder = isIndigo ? 'border-indigo-300/20' : 'border-cyan-300/20';
  const accentBg     = isIndigo ? 'from-indigo-500/20 to-cyan-400/14' : 'from-cyan-400/20 to-indigo-500/14';

  const shots = projectScreenshots[slug] ?? [
    { src: null, label: 'Interface' },
    { src: null, label: 'Features' },
    { src: null, label: 'Detail' },
  ];

  const metaRows = [
    { label: 'Client',       value: project.client },
    { label: 'Released',     value: project.released },
    { label: 'Timeframe',    value: project.timeframe },
    { label: 'Project Type', value: project.type },
    { label: 'Team Size',    value: project.team },
    { label: 'Technology',   value: project.tech },
  ];

  /* motion preset */
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <main className="relative min-h-screen overflow-x-hidden pt-28 pb-24">

      {/* ── fixed bg glows ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[10%] top-[10%] h-96 w-96 rounded-full blur-3xl"
          style={{ background: `${ac}0.07)` }}/>
        <div className="absolute right-[8%] bottom-[15%] h-80 w-80 rounded-full blur-3xl"
          style={{ background: isIndigo ? 'rgba(122,215,255,0.05)' : 'rgba(109,94,248,0.05)' }}/>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">

        {/* breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-14 flex items-center gap-2 text-[12px] text-white/35"
        >
          <Link to="/" className="hover:text-white/65 transition-colors">Home</Link>
          <span className="text-white/20">/</span>
          <Link to="/projects" className="hover:text-white/65 transition-colors">Projects</Link>
          <span className="text-white/20">/</span>
          <span className={accentClass}>{project.name}</span>
        </motion.div>

        {/* ════════════════════════════════════════
            1. INTRODUCTION
            eyebrow pill → giant name → tagline →
            live-site link → horizontal meta table
        ════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <SectionEyebrow projectName={project.name} section="Introduction" accentColor={ac} />

          {/* category pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/50 backdrop-blur-xl">
            <span className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: `${ac}0.85)`, boxShadow: `0 0 10px ${ac}0.65)` }}/>
            {project.eyebrow}
          </div>

          {/* name */}
          <h1 className="text-[56px] font-semibold tracking-[-0.05em] text-white md:text-[76px] leading-[1] mb-5">
            {project.name}
          </h1>

          {/* tagline */}
          <p className="text-[16px] leading-7 text-white/50 max-w-xl mb-9">{project.tagline}</p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.url && (
              <motion.a href={project.url} target="_blank" rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.985 }}
                className={`group inline-flex items-center gap-2 rounded-2xl border ${accentBorder} bg-gradient-to-r ${accentBg} px-5 py-3 text-sm font-semibold text-white`}>
                Visit Live Site
                <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>↗</motion.span>
              </motion.a>
            )}
            <Link to="/#contact">
              <motion.div whileHover={{ y: -1 }}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/72 backdrop-blur-xl hover:text-white transition-colors cursor-pointer">
                Start a Similar Project
              </motion.div>
            </Link>
          </div>

          {/* Meta table — label left, value right, horizontal dividers */}
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0"
              style={{ background: `radial-gradient(circle at 0% 60%, ${ac}0.08), transparent 44%)` }}/>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent"/>
            <div className="relative divide-y divide-white/[0.055]">
              {metaRows.map(({ label, value }) => (
                <div key={label} className="flex items-start gap-10 px-7 py-3.5 sm:px-9">
                  <span className="w-28 flex-shrink-0 text-[11px] uppercase tracking-[0.18em] text-white/32 pt-0.5">{label}</span>
                  <span className="text-[13px] text-white/68 leading-6">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════
            2. OVERVIEW
            paragraph → [img 1 | img 2] side-by-side
        ════════════════════════════════════════ */}
        <motion.section {...fadeUp()} className="mb-24">
          <SectionEyebrow projectName={project.name} section="Overview" accentColor={ac} />
          <SectionHeading>Overview</SectionHeading>
          <p className="text-[15px] leading-[1.85] text-white/56 max-w-3xl mb-10">{project.overview}</p>

          {/* 2 screenshots side by side — 16:9 each */}
          <div className="grid grid-cols-2 gap-4">
            <ImgSlot shot={shots[0]} accentColor={ac} index={0} className="aspect-video" />
            <ImgSlot shot={shots[1]} accentColor={ac} index={1} className="aspect-video" />
          </div>
        </motion.section>

        {/* ════════════════════════════════════════
            3. CHALLENGE
            plain prose paragraph — no bullets
        ════════════════════════════════════════ */}
        <motion.section {...fadeUp()} className="mb-24">
          <SectionEyebrow projectName={project.name} section="Challenge" accentColor={ac} />
          <SectionHeading>Challenge</SectionHeading>
          <p className="text-[15px] leading-[1.85] text-white/56 max-w-3xl">{project.challenge}</p>
        </motion.section>

        {/* ════════════════════════════════════════
            4. OUR SOLUTION
            prose paragraph → full-width image 3
        ════════════════════════════════════════ */}
        <motion.section {...fadeUp()} className="mb-24">
          <SectionEyebrow projectName={project.name} section="Our Solution" accentColor={ac} />
          <SectionHeading>Our Solution</SectionHeading>
          <p className="text-[15px] leading-[1.85] text-white/56 max-w-3xl mb-10">{project.solution}</p>

          {/* Screenshot 3 — full width, cinematic ratio */}
          <ImgSlot shot={shots[2]} accentColor={ac} index={2} className="w-full aspect-[21/9]" />
        </motion.section>

        {/* ════════════════════════════════════════
            5. KEY FEATURES
        ════════════════════════════════════════ */}
        <motion.section {...fadeUp()} className="mb-24">
          <SectionEyebrow projectName={project.name} section="Key Features" accentColor={ac} />
          <SectionHeading>Key Features</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feat, i) => (
              <motion.div key={feat.label}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[22px] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/14 hover:bg-white/[0.055]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${ac}0.10), transparent 40%)` }}/>
                <div className="relative">
                  {/* accent bar */}
                  <div className="mb-3.5 h-px w-8 rounded-full" style={{ background: `${ac}0.55)` }}/>
                  <div className="text-[13px] font-semibold text-white mb-1.5">{feat.label}</div>
                  <p className="text-[12px] leading-5 text-white/48">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ════════════════════════════════════════
            6. METRICS
        ════════════════════════════════════════ */}
        <motion.section {...fadeUp()} className="mb-24 grid grid-cols-3 gap-4">
          {project.metrics.map((m) => (
            <div key={m.label}
              className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-xl"
              style={{ boxShadow: `0 0 32px ${ac}0.09)` }}>
              <div className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(circle at 50% 0%, ${ac}0.12), transparent 52%)` }}/>
              <div className="relative">
                <div className="text-[28px] font-semibold tracking-[-0.04em] text-white md:text-[34px]">{m.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/38">{m.label}</div>
              </div>
            </div>
          ))}
        </motion.section>

        {/* ════════════════════════════════════════
            7. FINAL THOUGHTS
        ════════════════════════════════════════ */}
        <motion.section {...fadeUp()}
          className="mb-24 relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(circle at 85% 50%, ${ac}0.09), transparent 44%)` }}/>
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent"/>
          <div className="relative">
            <SectionEyebrow projectName={project.name} section="Final Thoughts" accentColor={ac} />
            <SectionHeading>Final Thoughts</SectionHeading>
            <p className="max-w-3xl text-[15px] leading-[1.85] text-white/56">{project.thoughts}</p>
          </div>
        </motion.section>

        {/* ════════════════════════════════════════
            CTA
        ════════════════════════════════════════ */}
        <motion.div {...fadeUp()} className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-white/36">Interested in a similar project?</p>
          <Link to="/#contact">
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.985 }}
              className={`inline-flex items-center gap-2 rounded-2xl border ${accentBorder} bg-gradient-to-r ${accentBg} px-6 py-3.5 text-sm font-semibold text-white cursor-pointer`}>
              Start a Project with Cognexon
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>→</motion.span>
            </motion.div>
          </Link>
          <Link to="/projects" className="text-[12px] text-white/30 hover:text-white/55 transition-colors mt-1">
            ← Back to All Projects
          </Link>
        </motion.div>

      </div>
    </main>
  );
}