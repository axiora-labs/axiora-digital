import React from "react";
import { motion } from "framer-motion";
import {
  Users,          // For Social Media Management
  Video,          // For Reels & Short Video
  MessageSquareText, // For Script & Content Writing
  Brush,          // For Brand Identity Design
  Rocket,         // For High-Performance Websites
  Search,         // For Search Engine Optimization (SEO)
  LineChart,      // For Performance Analytics
  ArrowUpRight,   // General arrow for hover
  CheckCircle2,   // For list items in sub-items
  LayoutGrid,     // For the main section badge
  Sparkles        // For a subtle background effect
} from "lucide-react";

// --- Helper Icon for Sub-items (Kept simple and local) ---
const CheckMarkIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-teal-300"> {/* Adjusted color for contrast */}
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

// --- SERVICE DATA (Redesigned for Clarity and Benefit-Orientation) ---
const services = [
  {
    id: "social-management",
    title: "Social Media Management",
    description: "We handle your daily posts, engaging stories, and community interaction to build a loyal audience and drive traffic to your business.",
    icon: Users,
    // Mobile: full width, Desktop: spans 2 columns & 2 rows (large card)
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-blue-900/20",
    subItems: ["Strategic Content Calendar", "Active Community Engagement", "Targeted Audience Growth"],
    visual: "growth-graph"
  },
  {
    id: "reels-video",
    title: "Reels & Short Video Creation",
    description: "Captivating short videos for TikTok, Instagram, and Facebook that grab attention and convert viewers into customers.",
    icon: Video,
    // Mobile: full width, Desktop: 1 column, 1 row (top right of the large card)
    className: "md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 bg-white border border-slate-200 text-slate-800",
    visual: "play-button"
  },
  {
    id: "content-writing",
    title: "Post & Script Writing",
    description: "Professionally crafted captions, blog posts, and video scripts designed to educate, entertain, and persuade your audience.",
    icon: MessageSquareText,
    // Mobile: full width, Desktop: 1 column, 1 row (bottom right of the large card)
    className: "md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 bg-white border border-slate-200 text-slate-800",
    visual: "text-bubbles"
  },
  {
    id: "web-performance",
    title: "High-Performance Websites",
    description: "Build blazing fast, secure, and mobile-friendly websites optimized to turn visitors into valuable leads and sales.",
    icon: Rocket,
    // Mobile: full width, Desktop: spans 2 columns (wide card)
    className: "md:col-span-2 bg-teal-50 border border-teal-100 text-teal-900",
    visual: "lightning"
  },
  {
    id: "brand-design",
    title: "Brand Identity Design",
    description: "Develop a strong, memorable brand identity that resonates with your target market and sets you apart from competitors.",
    icon: Brush,
    // Mobile: full width, Desktop: 1 column (fits next to High-Performance Websites)
    className: "md:col-span-1 bg-white border border-slate-200 text-slate-800",
    visual: "brand-logo"
  },
  {
    id: "seo-optimization",
    title: "Search Engine Optimization (SEO)",
    description: "Improve your visibility on Google and other search engines to attract more organic traffic and potential customers.",
    icon: Search,
    // Mobile: full width, Desktop: 1 column
    className: "md:col-span-1 bg-slate-50 border border-slate-200 text-slate-900",
    visual: "search-bar"
  },
  {
    id: "performance-analytics",
    title: "Clear Performance Analytics",
    description: "Transparent, easy-to-understand reports and dashboards showing the real impact of your marketing spend.",
    icon: LineChart,
    // Mobile: full width, Desktop: 1 column
    className: "md:col-span-1 bg-indigo-50 border border-indigo-100 text-indigo-900",
    visual: "data-chart"
  }
];

export const ServicesBento = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6 border border-blue-100">
             <LayoutGrid size={16} /> {/* Changed icon */}
             Our Core Digital Marketing Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything Your Business Needs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Grow.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From captivating social media to powerful websites and clear analytics – we've got your digital growth covered.
            Choose the services that will make the biggest impact for your business.
          </p>
        </div>

        {/* BENTO GRID (Mobile-first stacking, then dynamic desktop grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[240px]">
          
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }} // Trigger animation earlier
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.01, zIndex: 10 }} // Added zIndex for better hover effect
              className={`relative rounded-3xl p-8 overflow-hidden group shadow-lg flex flex-col justify-between transition-all duration-300 ${service.className}`}
            >
              
              {/* --- BACKGROUND VISUALS (ANIMATED) --- */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                
                {/* 1. Growth Graph (Looping Line) - Social Media */}
                {service.visual === 'growth-graph' && (
                  <div className="absolute -right-12 -bottom-12 w-3/4 h-3/4 opacity-30">
                     <svg viewBox="0 0 400 200" className="w-full h-full">
                        <motion.path
                          d="M0 150 C50 100 150 80 200 120 C250 160 350 100 400 50" // Smoother curve
                          fill="none"
                          stroke="white"
                          strokeWidth="6"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
                        />
                        {/* Subtle secondary line */}
                        <motion.path
                          d="M0 170 C60 130 160 110 210 150 C260 190 360 130 400 80"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeOpacity="0.4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
                        />
                     </svg>
                  </div>
                )}

                {/* 2. Play Button (Video Reels) */}
                {service.visual === 'play-button' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity">
                     <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-24 h-24 rounded-full border-4 border-slate-200 flex items-center justify-center"
                     >
                        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-slate-300 border-b-[15px] border-b-transparent ml-2"></div>
                     </motion.div>
                  </div>
                )}

                {/* 3. Text Bubbles (Post & Script Writing) */}
                {service.visual === 'text-bubbles' && (
                  <div className="absolute -left-4 -bottom-4 opacity-10 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="relative w-28 h-20 bg-blue-100 rounded-lg p-3 text-sm text-blue-800 font-medium shadow-md rotate-[-5deg] origin-bottom-left">
                      "Stunning visuals!"
                      <div className="absolute -bottom-2 left-4 w-0 h-0 border-t-8 border-t-blue-100 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
                    </div>
                    <div className="relative w-24 h-18 bg-green-100 rounded-lg p-3 text-sm text-green-800 font-medium shadow-md rotate-[8deg] ml-8 mt-4 origin-bottom-left">
                      "Love the call!"
                      <div className="absolute -bottom-2 left-4 w-0 h-0 border-t-8 border-t-green-100 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
                    </div>
                  </div>
                )}

                {/* 4. Lightning (High-Performance Websites) */}
                {service.visual === 'lightning' && (
                  <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                     <Rocket size={120} className="text-teal-600 fill-teal-200 rotate-12" /> {/* Changed to Rocket for thematic consistency */}
                  </div>
                )}

                {/* 5. Brand (Logo Design Tool) */}
                {service.visual === 'brand-logo' && (
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                      <Brush size={80} className="text-slate-300 mb-2 ml-auto" /> {/* Changed to Brush for thematic consistency */}
                      <div className="flex gap-2">
                         <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-slate-300"></div>
                         <div className="w-10 h-10 bg-slate-300 rounded-lg"></div>
                         <div className="w-10 h-10 border-2 border-slate-300 rotate-45"></div>
                      </div>
                  </div>
                )}

                {/* 6. SEO (Search Bar) */}
                {service.visual === 'search-bar' && (
                  <div className="absolute right-8 bottom-8 opacity-20 group-hover:opacity-60 transition-all origin-bottom-right scale-90 group-hover:scale-100">
                     <div className="w-64 bg-white rounded-lg shadow-sm border border-slate-200 p-3 flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                        <div className="h-3 w-40 bg-slate-200 rounded-full"></div>
                     </div>
                     <div className="mt-3 ml-4 space-y-2">
                        <div className="h-3 w-52 bg-slate-200 rounded-full"></div>
                        <div className="h-3 w-40 bg-slate-200 rounded-full"></div>
                     </div>
                  </div>
                )}

                {/* 7. Analytics (Data Chart) */}
                {service.visual === 'data-chart' && (
                   <div className="absolute -bottom-4 right-0 p-6 opacity-20 group-hover:opacity-60 transition-opacity">
                      <div className="flex items-end gap-2 h-20">
                         <motion.div initial={{ height: 0 }} whileInView={{ height: '40%' }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="w-5 bg-indigo-400 rounded-t-md"></motion.div>
                         <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="w-5 bg-indigo-400 rounded-t-md"></motion.div>
                         <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="w-5 bg-indigo-400 rounded-t-md"></motion.div>
                         <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }} className="w-5 bg-indigo-600 rounded-t-md"></motion.div>
                      </div>
                   </div>
                )}

              </div>

              {/* --- FOREGROUND CONTENT --- */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl ${service.className.includes('text-white') ? 'bg-white/10 backdrop-blur-sm border border-white/20' : 'bg-slate-100 border border-slate-200'}`}>
                        <service.icon size={28} className={service.className.includes('text-white') ? 'text-white' : 'text-slate-700'} />
                    </div>
                    
                    {/* Hover Interaction Arrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -5, y: 5 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                        className={`p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 ${service.className.includes('text-white') ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-400'}`}
                    >
                        <ArrowUpRight size={16} />
                    </motion.div>
                </div>
                
                <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{service.title}</h3>
                    <p className={`text-base leading-relaxed ${service.className.includes('text-white') ? 'text-blue-100' : 'text-slate-500'}`}>
                        {service.description}
                    </p>
                </div>

                {/* Sub Items (Tags) - Only for the large card */}
                {service.subItems && (
                    <div className="mt-8 flex gap-2 flex-wrap">
                        {service.subItems.map(item => (
                            <div key={item} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-sm">
                                <CheckMarkIcon /> {/* Changed to CheckMarkIcon */}
                                {item}
                            </div>
                        ))}
                    </div>
                )}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};