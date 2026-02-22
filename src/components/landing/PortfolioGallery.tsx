import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Play, 
  ZoomIn, 
  ArrowUpRight, 
  Code2, 
  Smartphone, 
  Layers, 
  Filter,
  Maximize2
} from "lucide-react";

// --- DUMMY DATA ---
const portfolioItems = [
  {
    id: 1,
    category: "Websites",
    type: "image",
    title: "FashionHub E-Com",
    client: "FashionHub",
    year: "2025",
    stack: ["Next.js", "Shopify"],
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
    span: "md:col-span-2 md:row-span-2", 
  },
  {
    id: 2,
    category: "Reels",
    type: "video",
    title: "Coffee Culture Viral",
    client: "Bean & Brew",
    year: "2025",
    stack: ["DaVinci", "CapCut"],
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=987&auto=format&fit=crop", 
  },
  {
    id: 3,
    category: "Social Media",
    type: "image",
    title: "TechCorp Identity",
    client: "TechCorp",
    year: "2024",
    stack: ["Figma", "Illustrator"],
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    category: "Websites",
    type: "image",
    title: "FinTrack Dashboard",
    client: "FinTrack SaaS",
    year: "2025",
    stack: ["React", "Tailwind"],
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    category: "Reels",
    type: "video",
    title: "Iron Gym Promo",
    client: "Iron Gym",
    year: "2024",
    stack: ["After Effects"],
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Social Media",
    type: "image",
    title: "Glow Launch",
    client: "Glow Cosmetics",
    year: "2024",
    stack: ["Social Strategy"],
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop",
  },
];

const categories = [
  { name: "All Work", icon: Layers },
  { name: "Websites", icon: Code2 },
  { name: "Reels", icon: Play },
  { name: "Social Media", icon: Smartphone },
];

export const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);

  const filteredItems = activeCategory === "All Work" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="work">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container px-6 mx-auto relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 border border-blue-500/20">
               <Layers size={14} /> Project Archive
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Results.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We don't just design pixels; we architect systems. 
              Browse our database of high-performance assets deployed for real clients.
            </p>
          </div>
          
          {/* Tech Filter Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.name 
                    ? "bg-slate-800 text-white shadow-lg shadow-black/20 ring-1 ring-slate-700" 
                    : "text-slate-500 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- MASONRY GRID --- */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[350px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 ${activeCategory === 'All Work' ? item.span || "" : ""}`}
              >
                {/* Image */}
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-slate-900">
                      <Maximize2 size={18} />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-teal-400 font-mono text-[10px] uppercase tracking-wider bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                          {item.category}
                       </span>
                       <span className="text-slate-500 font-mono text-[10px]">{item.year}</span>
                    </div>
                    
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-1 leading-tight">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{item.client}</p>

                    {/* Tech Stack Pills (Slide Up Effect) */}
                    <div className="flex flex-wrap gap-2 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 delay-75">
                      {item.stack.map((tech) => (
                        <span key={tech} className="text-[10px] font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 text-center">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-slate-700 rounded-full text-white font-bold hover:bg-slate-800 hover:border-slate-600 transition-all">
                Access Full Database 
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
            </button>
        </div>

      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl h-auto max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-red-500/20 text-white/50 hover:text-white rounded-full transition-colors backdrop-blur-sm"
                >
                  <X size={24} />
                </button>

                {/* Left: Media Viewer */}
                <div className="w-full md:w-3/4 bg-black flex items-center justify-center relative overflow-hidden group">
                    {selectedItem.type === 'video' ? (
                       <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center text-slate-500">
                          <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                             <Play size={32} className="text-white ml-2" />
                          </div>
                          <p className="font-mono text-xs uppercase tracking-widest">Preview Mode</p>
                       </div>
                    ) : (
                      <img 
                        src={selectedItem.src} 
                        alt={selectedItem.title} 
                        className="w-full h-full object-contain" 
                      />
                    )}
                </div>
                
                {/* Right: Project Details Panel */}
                <div className="w-full md:w-1/4 bg-slate-900 border-l border-slate-800 p-8 flex flex-col">
                    <div className="mb-auto">
                      <div className="flex items-center gap-2 mb-4">
                         <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                         <span className="text-xs font-mono text-slate-400">DEPLOYED {selectedItem.year}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h3>
                      <p className="text-blue-400 font-medium mb-6">{selectedItem.client}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                             {selectedItem.stack.map(s => (
                               <span key={s} className="text-xs text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded">
                                 {s}
                               </span>
                             ))}
                          </div>
                        </div>
                        <div>
                           <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Category</h4>
                           <div className="flex items-center gap-2 text-slate-300">
                              <Layers size={16} /> {selectedItem.category}
                           </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-4 mt-8 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                       View Case Study <ArrowUpRight size={18} />
                    </button>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};