// src/components/landing/WebsitePerformance.tsx
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  Rocket,
  Bolt,
  TrendingUp,
  Cloud,
  Timer,
  Smartphone,
  Target,
  Moon, // Added Moon icon for "while you sleep"
  Speech, // For talking to customers
  DollarSign // For selling products
} from "lucide-react";

// --- HELPER: ANIMATED NUMBER COUNTER ---
const AnimatedNumber = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: [0.22, 1, 0.36, 1] }); // Custom smooth ease-out
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// --- ANIMATION VARIANTS (kept for consistency with the rest of your site) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const WebsitePerformance = () => {
  const progressBarRef = useRef(null);
  const progressBarInView = useInView(progressBarRef, { once: true, amount: 0.5 });
  const performanceScore = 98; // The value for the main score/progress

  const features = [
    { text: "Blazing Fast Page Loads", icon: <Timer size={18} className="text-emerald-500" /> },
    { text: "Flawless Mobile Experience", icon: <Smartphone size={18} className="text-emerald-500" /> },
    { text: "Boost Your Google Rankings", icon: <TrendingUp size={18} className="text-emerald-500" /> },
    { text: "Custom-Built for Conversions", icon: <Target size={18} className="text-emerald-500" /> },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* --- TEXT CONTENT SIDE (MAIN MESSAGE) --- */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm">
              <Moon size={16} /> {/* New icon to hint at 24/7 */}
              Your Business, Always On
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Your Website, <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Selling While You Sleep.
              </span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Imagine your website as a tireless salesperson and customer service agent, working 24/7. It talks to visitors, sells your products, and resolves issues—even when you’re away. Don't let a slow, outdated site leave your business behind in the digital dust.
            </motion.p>

            {/* Feature List */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {features.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-center gap-3 text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-emerald-50 p-1.5 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm sm:text-base">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* --- VISUAL SIDE (Creative Performance Report Card) --- */}
          <div className="relative flex flex-col items-center lg:items-end order-1 lg:order-2">
            
            {/* Background Glow for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-400/20 to-blue-500/20 blur-3xl rounded-full pointer-events-none -z-10"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-md"
            >
              {/* Floating Wrapper - This is the "website in action" visual */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-white p-6 sm:p-8"
              >
                {/* Mock Browser Window Header */}
                <div className="flex items-center justify-between mb-6 border-b pb-4 border-slate-100/80">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm"></div>
                  </div>
                  <div className="px-3 py-1 bg-slate-50 rounded-md text-xs font-mono text-slate-500 flex items-center gap-2">
                    yourbrand.com
                  </div> {/* Changed to a generic brand name */}
                  <Cloud size={18} className="text-blue-400" />
                </div>

                {/* Main Action Area: Selling & Talking */}
                <div className="flex flex-col items-center justify-center py-6">
                    <div className="flex gap-4 items-center mb-6">
                        <div className="relative bg-gradient-to-tr from-blue-500 to-teal-400 p-4 rounded-full shadow-lg shadow-blue-500/30">
                            <Speech size={40} className="text-white" /> {/* Speech icon for talking */}
                            <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1.5 border-2 border-white">
                                <DollarSign size={18} className="text-white" /> {/* Dollar sign for selling */}
                            </div>
                        </div>
                    </div>
                  
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 text-center">
                        24/7 Live Engagement
                    </div>
                    <p className="text-sm text-slate-500 text-center max-w-xs">
                        Your website automatically chats with customers and guides them to purchase, around the clock.
                    </p>
                </div>

                {/* Key Metrics - Now more relevant to "alive" business */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="bg-slate-50/50 p-4 rounded-2xl flex flex-col items-center text-center border border-slate-100"
                  >
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Response Time</div>
                    <div className="font-bold font-mono text-xl text-slate-900">Instant</div> {/* Changed from load time */}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="bg-blue-50/50 p-4 rounded-2xl flex flex-col items-center text-center border border-blue-50"
                  >
                    <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-1">Sales Leads</div>
                    <div className="font-bold text-xl text-blue-900">Always On</div> {/* Changed from SEO impact */}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};