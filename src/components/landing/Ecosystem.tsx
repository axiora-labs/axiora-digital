import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Code2, 
  GraduationCap, 
  Cpu, 
  Globe, 
  Share2, 
  Smartphone 
} from "lucide-react";

const platforms = [
  { name: "Meta", icon: Share2 },
  { name: "LinkedIn", icon: Globe },
  { name: "Google Ads", icon: Smartphone },
  { name: "TikTok", icon: Smartphone },
  { name: "X (Twitter)", icon: Share2 },
  // Duplicate for seamless loop
  { name: "Meta", icon: Share2 },
  { name: "LinkedIn", icon: Globe },
  { name: "Google Ads", icon: Smartphone },
  { name: "TikTok", icon: Smartphone },
  { name: "X (Twitter)", icon: Share2 },
];

export const Ecosystem = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      
      {/* Background: Digital Noise & Grid */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
         <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent"></div>
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>

      <div className="container px-6 mx-auto relative z-10">
        
        {/* 1. INFINITE SCROLL MARQUEE */}
        <div className="mb-24 relative">
          <div className="text-center mb-10">
             <span className="px-3 py-1 rounded border border-slate-800 bg-slate-900/50 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold backdrop-blur-md">
                Distribution Protocols
             </span>
          </div>
          
          <div className="flex overflow-hidden relative mask-image-gradient">
            {/* Gradient masks for fading edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <motion.div 
              className="flex gap-16 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...platforms, ...platforms].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors cursor-default group">
                  <p.icon size={24} className="group-hover:text-blue-500 transition-colors" />
                  <span className="text-2xl font-bold tracking-tight opacity-50 group-hover:opacity-100 transition-opacity">{p.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 2. MAIN ECOSYSTEM CARDS */}
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Axiora Network</span>
           </h2>
           <p className="text-slate-400 max-w-xl mx-auto text-lg">
             A unified infrastructure. We build the tech (Labs) and train the talent (Academy) to ensure your marketing never fails.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* CARD 1: LABS (Engineering) */}
          <motion.a 
            href="https://www.axioralabs.com" 
            target="_blank"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-blue-500/50"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="p-10 relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Code2 size={28} />
                 </div>
                 <ArrowUpRight className="text-slate-600 group-hover:text-blue-400 transition-colors" size={28} />
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-3">
                    <Cpu size={14} className="text-blue-500" />
                    <span className="text-xs font-mono text-blue-500 uppercase tracking-wider">Engineering Division</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Axiora Labs</h3>
                <p className="text-slate-400 leading-relaxed">
                  The Software House. We build custom dashboards, high-performance websites, and automation scripts that power the marketing engine.
                </p>
              </div>
            </div>
            
            {/* Tech Decoration */}
            <div className="absolute -bottom-4 -right-4 text-slate-800 opacity-20 group-hover:opacity-40 group-hover:text-blue-900 transition-all duration-500 rotate-[-15deg]">
                <Code2 size={200} />
            </div>
          </motion.a>

          {/* CARD 2: ACADEMY (Education) */}
          <motion.a 
            href="https://www.axiora.academy" 
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-teal-500/50"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-bl from-teal-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="p-10 relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <GraduationCap size={28} />
                 </div>
                 <ArrowUpRight className="text-slate-600 group-hover:text-teal-400 transition-colors" size={28} />
              </div>
              
              <div className="mt-auto">
                 <div className="flex items-center gap-2 mb-3">
                    <Globe size={14} className="text-teal-500" />
                    <span className="text-xs font-mono text-teal-500 uppercase tracking-wider">Education Hub</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Axiora Academy</h3>
                <p className="text-slate-400 leading-relaxed">
                  The Learning Center. Where we train the next generation of engineers and marketers to maintain our quality standards.
                </p>
              </div>
            </div>

             {/* Tech Decoration */}
             <div className="absolute -bottom-4 -right-4 text-slate-800 opacity-20 group-hover:opacity-40 group-hover:text-teal-900 transition-all duration-500 rotate-[-15deg]">
                <GraduationCap size={200} />
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
};