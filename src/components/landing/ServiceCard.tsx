// src/components/landing/ServiceCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

// Props for the ServiceCard
interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType; // Lucide icon component
  className?: string; // Tailwind classes for styling (e.g., bg colors, grid spans)
  visual: string; // Identifier for subtle background visual type
  subItems?: string[]; // Optional sub-items (tags)
  backgroundImage?: string; // New prop for background image URL
  index: number; // For staggered animation
  isDarkTheme: boolean; // Prop to help manage text color contrast against backgrounds
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon: Icon, // Destructure icon as Icon to use as JSX component
  className,
  visual,
  subItems,
  backgroundImage,
  index,
  isDarkTheme // Use this to conditionally apply text colors
}) => {
  // Determine text color based on card's theme (passed from Astro)
  const textColorClass = isDarkTheme ? 'text-white' : 'text-slate-900';
  const descriptionColorClass = isDarkTheme ? 'text-blue-100/90' : 'text-slate-600';
  const tagBgClass = isDarkTheme ? 'bg-white/10 backdrop-blur-sm border border-white/10 text-white' : 'bg-slate-100 text-slate-600';
  const iconBgClass = isDarkTheme ? 'bg-white/10 backdrop-blur-sm border border-white/20' : 'bg-slate-100 border border-slate-200';
  const arrowBgClass = isDarkTheme ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-400';
  const iconColorClass = isDarkTheme ? 'text-white' : 'text-slate-700';


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% in view
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`relative rounded-3xl p-6 sm:p-8 overflow-hidden group shadow-lg flex flex-col justify-between transition-all duration-300 ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* --- OVERLAY FOR BACKGROUND IMAGES (Ensures text readability) --- */}
      {backgroundImage && (
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-0 rounded-3xl"></div>
      )}

      {/* --- SUBTLE BACKGROUND VISUALS (ANIMATED) --- */}
      {/* These visuals are simplified or static. Complex framer-motion path animations might be added here if truly needed,
          but for subtle background effects, CSS animations or simple static SVG/divs are often enough. */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {visual === 'growth-graph' && (
          <div className="absolute right-0 bottom-0 w-full h-3/4 opacity-20">
             <svg viewBox="0 0 400 200" className="w-full h-full" stroke="currentColor">
                <path d="M0 150 Q50 150 100 100 T200 80 T300 120 T400 40" fill="none" strokeWidth="8" strokeLinecap="round" className={isDarkTheme ? 'text-white/60' : 'text-blue-500/60'}/>
             </svg>
          </div>
        )}

        {visual === 'video-play' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity">
             <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white/80 border-b-[10px] border-b-transparent ml-1"></div>
             </div>
          </div>
        )}
        
        {visual === 'creative-palette' && (
            <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={isDarkTheme ? 'text-white/30' : 'text-blue-500/30'}>
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M19 17.5V12h-2A6 6 0 0 0 5 12v5.5"></path>
                    <path d="M12 12v5.5"></path>
                    <path d="M12 22a4 4 0 0 1-4-4"></path>
                    <path d="M12 22a4 4 0 0 0 4-4"></path>
                    <path d="M19 17.5a7 7 0 0 0 0-15"></path>
                    <path d="M5 17.5a7 7 0 0 1 0-15"></path>
                </svg>
            </div>
        )}

        {visual === 'documents' && (
            <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={isDarkTheme ? 'text-white/30' : 'text-slate-500/30'}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            </div>
        )}

        {visual === 'chart-lines' && (
            <div className="absolute right-0 bottom-0 w-full h-3/4 opacity-20">
             <svg viewBox="0 0 400 200" className="w-full h-full" stroke="currentColor">
                <path d="M0 180 C 80 100, 200 150, 400 50" fill="none" strokeWidth="8" strokeLinecap="round" className={isDarkTheme ? 'text-white/60' : 'text-indigo-500/60'}/>
             </svg>
          </div>
        )}
        
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl ${iconBgClass}`}>
                <Icon size={28} className={iconColorClass} />
            </div>
            
            {/* Hover Interaction Arrow */}
            <div className={`p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 ${arrowBgClass}`}>
                <ArrowUpRight size={16} />
            </div>
        </div>
        
        <div className="flex-grow"> {/* Added flex-grow to push subItems to bottom */}
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 tracking-tight ${textColorClass}`}>{title}</h3>
            <p className={`text-sm sm:text-base leading-relaxed ${descriptionColorClass}`}>
                {description}
            </p>
        </div>

        {/* Sub Items (Tags) - Only for large cards */}
        {subItems && subItems.length > 0 && (
            <div className="mt-6 flex gap-2 flex-wrap">
                {subItems.map(item => (
                    <div key={item} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${tagBgClass} `}>
                        <CheckCircleIcon />
                        {item}
                    </div>
                ))}
            </div>
        )}
      </div>
    </motion.div>
  );
};

// Tiny helper icon for the tags
const CheckCircleIcon: React.FC = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);