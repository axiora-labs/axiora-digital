// src/components/landing/ServicesBento.tsx
import React from "react";
import { motion } from "framer-motion";
import { 
  FiUsers, 
  FiVideo, 
  FiEdit3, 
  FiMonitor, 
  FiSearch, 
  FiPieChart, 
  FiPenTool, 
  FiArrowUpRight, 
  FiCheckCircle, 
  FiLayout 
} from "react-icons/fi";

// --- SERVICE DATA WITH ENRICHED VISUALS ---
const services = [
  {
    id: "social-management",
    title: "Social Media Management",
    description: "Daily posts and community interaction to build a loyal audience.",
    icon: FiUsers,
    className: "md:col-span-2 md:row-span-1 bg-white border border-slate-200 text-slate-900 shadow-sm",
    tags: ["Strategy", "Engagement"],
    type: "social"
  },
  {
    id: "web-performance",
    title: "High-Performance Websites",
    description: "Lightning-fast, secure, and highly converting websites.",
    icon: FiMonitor,
    className: "md:col-span-2 md:row-span-1 bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-900/20",
    tags: ["Speed", "Conversion"],
    type: "web"
  },
  {
    id: "reels-video",
    title: "Reels & Short Video",
    description: "Captivating content for TikTok and Instagram.",
    icon: FiVideo,
    className: "md:col-span-1 md:row-span-1 bg-rose-50 border border-rose-100 text-rose-950",
    type: "video"
  },
  {
    id: "content-writing",
    title: "Post & Script Writing",
    description: "Persuasive copy that educates and converts.",
    icon: FiEdit3,
    className: "md:col-span-1 md:row-span-1 bg-amber-50 border border-amber-100 text-amber-950",
    type: "copy"
  },
  {
    id: "seo-optimization",
    title: "Search Engine Optimization",
    description: "Dominate Google rankings and drive organic traffic.",
    icon: FiSearch,
    className: "md:col-span-2 md:row-span-1 bg-emerald-50 border border-emerald-100 text-emerald-950",
    type: "seo"
  },
  {
    id: "brand-design",
    title: "Brand Identity",
    description: "Memorable design that resonates with your market.",
    icon: FiPenTool,
    className: "md:col-span-2 md:row-span-1 bg-fuchsia-50 border border-fuchsia-100 text-fuchsia-950",
    type: "brand"
  },
  {
    id: "performance-analytics",
    title: "Clear Analytics",
    description: "Transparent ROI tracking and reporting.",
    icon: FiPieChart,
    className: "md:col-span-2 md:row-span-1 bg-white border border-slate-200 text-slate-900 shadow-sm",
    type: "analytics"
  }
];

export const ServicesBento = () => {
  // Helper to render subtle, non-intrusive visuals pinned strictly to the edges
  const renderVisual = (type: string) => {
    switch (type) {
      case "social":
        return (
          <div className="absolute -right-4 -bottom-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 border border-blue-100 p-3 rounded-2xl flex items-center gap-3 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600">
                <FiUsers size={14} />
              </div>
              <div className="space-y-1.5 pr-4">
                <div className="h-2 w-16 bg-blue-200 rounded-full"></div>
                <div className="h-2 w-10 bg-blue-100 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        );
      case "web":
        return (
          <div className="absolute right-4 bottom-4 flex gap-4 opacity-30 group-hover:opacity-70 transition-opacity duration-500">
            {[ { label: 'Perf', val: 99 }, { label: 'SEO', val: 100 }].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-12 h-12 rounded-full border-2 border-slate-700 border-t-emerald-400 flex items-center justify-center text-xs font-bold text-slate-300">
                  {stat.val}
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "video":
        return (
          <div className="absolute -right-4 -bottom-4 opacity-20 group-hover:opacity-60 transition-opacity">
             <FiVideo size={80} className="text-rose-300 rotate-12" />
          </div>
        );
      case "copy":
        return (
          <div className="absolute -right-2 -bottom-2 opacity-30 group-hover:opacity-70 transition-opacity">
             <FiEdit3 size={80} className="text-amber-300 -rotate-12" />
          </div>
        );
      case "seo":
        return (
          <div className="absolute right-6 bottom-6 w-48 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-emerald-200/50 p-2 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-all">
            <FiSearch className="text-emerald-600 ml-1" size={14} />
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="h-1.5 bg-emerald-300 rounded-full"
            />
          </div>
        );
      case "brand":
        return (
           <div className="absolute right-4 bottom-4 flex -space-x-2 opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-fuchsia-300 border-2 border-fuchsia-50 shadow-sm z-10"></div>
            <div className="w-8 h-8 rounded-full bg-violet-300 border-2 border-fuchsia-50 shadow-sm z-20"></div>
          </div>
        );
      case "analytics":
        return (
          <div className="absolute bottom-4 right-6 flex items-end gap-1.5 h-12 opacity-30 group-hover:opacity-80 transition-opacity">
            {[30, 50, 40, 70, 90].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="w-3 bg-slate-300 rounded-t-sm"
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
      {/* Subtle Dot Matrix Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Grow.</span>
          </h2>
        </div>

        {/* BENTO GRID: 
          Mobile: 1 column
          Desktop: 4 columns, fixed subtle height to keep it readable.
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              className={`relative rounded-3xl p-6 overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${service.className}`}
            >
              
              {/* Foreground Content - Constrained width so it never hits the background visuals */}
              <div className="relative z-10 flex flex-col h-full pointer-events-none max-w-[75%]">
                <div className="flex justify-between items-start mb-2">
                  <div className={`p-2.5 rounded-xl inline-flex ${service.className.includes('text-white') ? 'bg-white/10 backdrop-blur-sm' : 'bg-slate-100 shadow-sm'}`}>
                    <service.icon size={20} className={service.className.includes('text-white') ? 'text-white' : 'text-slate-700'} />
                  </div>
                </div>
                
                <div className="mt-auto pointer-events-auto">
                  <h3 className="text-lg sm:text-xl font-bold mb-1.5 tracking-tight leading-tight">{service.title}</h3>
                  <p className={`text-sm leading-relaxed ${service.className.includes('text-white') ? 'text-slate-300' : 'text-slate-500'}`}>
                    {service.description}
                  </p>
                  
                  {/* Render Tags if they exist */}
                  {service.tags && (
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {service.tags.map(tag => (
                        <div key={tag} className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${service.className.includes('text-white') ? 'bg-white/10 border-white/20 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                          <FiCheckCircle size={10} className={service.className.includes('text-white') ? 'text-emerald-400' : 'text-emerald-500'} />
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

               {/* Hover Arrow (Top Right) */}
               <div className={`absolute top-6 right-6 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 ${service.className.includes('text-white') ? 'bg-white/20 text-white' : 'bg-slate-900 text-white'}`}>
                  <FiArrowUpRight size={14} />
               </div>

               {/* Background Space-Filling Visuals (Strictly pushed to edges) */}
               <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
                  {renderVisual(service.type)}
               </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};