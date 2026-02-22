import React, { useEffect, useRef, useState } from "react";
import { 
  motion, 
  useInView, 
  useMotionValue, 
  useTransform, 
  animate 
} from "framer-motion";
import { 
  Bot, 
  Zap, 
  Timer, 
  Globe, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Cpu
} from "lucide-react";

// --- HELPER: ANIMATED NUMBER COUNTER ---
const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const CoolStuff = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10 space-y-24 md:space-y-32">
        
        {/* =========================================================
            MODULE 1: THE SPEED ENGINE (Responsive Lighthouse)
           ========================================================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* --- VISUAL SIDE (Gauge) --- */}
            <div className="relative flex flex-col items-center lg:items-end order-1 lg:order-1">
                
                {/* Main Gauge Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full shadow-2xl shadow-green-500/20 flex items-center justify-center border-4 border-slate-100 z-10">
                    
                    {/* Rotating Glow Ring */}
                    <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-green-500 animate-spin-slow opacity-50"></div>
                    
                    {/* Center Text */}
                    <div className="text-center relative z-20">
                        <div className="text-6xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-tighter flex items-center justify-center">
                            <Counter from={0} to={100} />
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 sm:mt-2">Performance Score</div>
                    </div>

                    {/* Circular SVG Progress */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none transform scale-90">
                        <circle cx="50%" cy="50%" r="45%" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                        <motion.circle 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                            cx="50%" cy="50%" r="45%" 
                            stroke="#22c55e" 
                            strokeWidth="8" 
                            fill="none" 
                            strokeLinecap="round"
                            className="drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                        />
                    </svg>
                </div>

                {/* Floating Stats - STACKED on Mobile, FLOATING on Desktop */}
                <div className="mt-8 flex flex-row gap-4 lg:absolute lg:top-10 lg:left-[-20px] lg:mt-0 w-full lg:w-auto justify-center lg:justify-start lg:block lg:space-y-36">
                    
                    {/* Card 1: LCP */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-slate-900 text-white p-3 sm:p-4 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 w-1/2 lg:w-auto min-w-[140px]"
                    >
                        <Timer className="text-green-400 shrink-0" size={20} />
                        <div>
                            <div className="text-[10px] text-slate-400 uppercase">LCP Load</div>
                            <div className="font-bold font-mono text-sm sm:text-base">0.8s</div>
                        </div>
                    </motion.div>

                    {/* Card 2: SEO */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white text-slate-900 p-3 sm:p-4 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3 w-1/2 lg:w-auto min-w-[140px] lg:ml-[-40px]"
                    >
                        <TrendingUp className="text-blue-500 shrink-0" size={20} />
                        <div>
                            <div className="text-[10px] text-slate-400 uppercase">SEO Rank</div>
                            <div className="font-bold font-mono text-sm sm:text-base">#1 Spot</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- TEXT CONTENT SIDE --- */}
            <div className="text-center lg:text-left order-2 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] sm:text-xs font-bold mb-6">
                    <Zap size={14} /> Core Web Vitals Optimized
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Speed is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Revenue.</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Google penalizes slow sites. We don't use bloated templates. We code custom 
                    <span className="font-bold text-slate-900 border-b-2 border-green-400"> Astro & Next.js</span> architectures that load in milliseconds.
                </p>
                
                {/* Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                    {[
                        "99+ Mobile Performance",
                        "Zero Layout Shift (CLS)",
                        "Instant Page Transitions",
                        "Server-Side Rendering"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700 font-medium text-sm sm:text-base bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* =========================================================
            MODULE 2: AI CHATBOT DEMO (Responsive Panel)
           ========================================================= */}
        <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 relative overflow-hidden text-white border border-slate-800 shadow-2xl">
            
            {/* Background Gloss FX */}
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-600/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                
                {/* --- CONTENT SIDE --- */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl items-center justify-center mb-6 sm:mb-8 shadow-lg shadow-blue-500/20">
                        <Bot size={24} className="text-white sm:w-[28px] sm:h-[28px]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                        Deploy a <span className="text-blue-400">Sales Agent</span> that never sleeps.
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Why pay for a call center? Our Gemini-powered bots handle inquiries and close sales in <span className="text-white font-bold">Sinhala & English</span> instantly.
                    </p>

                    {/* Cost Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                         <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700">
                            <div className="text-[10px] text-slate-400 mb-1 sm:mb-2 uppercase tracking-wider">Human Agent</div>
                            <div className="text-lg sm:text-2xl font-bold text-red-400">LKR 45k+</div>
                         </div>
                         <div className="bg-blue-900/20 p-4 sm:p-6 rounded-xl border border-blue-500/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-2 py-0.5 bg-blue-500 text-[8px] font-bold">WINNER</div>
                            <div className="text-[10px] text-blue-300 mb-1 sm:mb-2 uppercase tracking-wider">Axiora Bot</div>
                            <div className="text-lg sm:text-2xl font-bold text-green-400">LKR 25k</div>
                         </div>
                    </div>

                    <button className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-200 rounded-full h-12 px-8 font-bold transition-colors">
                        Request Bot Demo <ArrowRight size={16} className="ml-2"/>
                    </button>
                </div>

                {/* --- CHAT UI SIDE --- */}
                <div className="order-1 lg:order-2 w-full flex justify-center">
                    <div className="relative w-full max-w-sm bg-slate-950 rounded-[2rem] border-4 border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[450px] sm:h-[500px]">
                        
                        {/* Fake Phone Header */}
                        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-[10px] font-bold">AI</div>
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm font-bold">Axiora Sales Bot</div>
                                    <div className="text-[10px] text-slate-400">Powered by Gemini</div>
                                </div>
                            </div>
                            <Globe size={16} className="text-slate-500" />
                        </div>

                        {/* Chat Messages Area */}
                        <div className="flex-1 p-4 space-y-4 bg-slate-950/50 overflow-y-auto relative scrollbar-hide">
                             
                             <div className="flex justify-center mb-2">
                                <span className="bg-slate-800/80 backdrop-blur text-[10px] text-slate-400 px-3 py-1 rounded-full">Language: Auto-Detect (EN/SI)</span>
                             </div>

                             {/* Message 1 (Bot) */}
                             <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="self-start max-w-[85%] mr-auto"
                             >
                                <div className="bg-slate-800 text-slate-200 p-3 sm:p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm leading-relaxed shadow-md">
                                    Ayubowan! 👋 Welcome to Axiora. How can I help you scale your business?
                                </div>
                             </motion.div>

                             {/* Message 2 (User) */}
                             <motion.div 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                                className="self-end max-w-[85%] ml-auto flex justify-end"
                             >
                                <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-2xl rounded-tr-none text-xs sm:text-sm leading-relaxed shadow-md shadow-blue-900/20">
                                    Mata website ekak hadanna oni. Prices kohomada?
                                </div>
                             </motion.div>

                             {/* Message 3 (Bot) */}
                             <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.5 }}
                                className="self-start max-w-[90%] mr-auto"
                             >
                                <div className="bg-slate-800 text-slate-200 p-3 sm:p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm leading-relaxed shadow-md">
                                    Aniwaren! Api <span className="text-teal-400 font-bold">Next.js</span> websites hadanne. <br/><br/>
                                    Package eka <b>LKR 45,000</b> idan patan gannava. Shall I send details? 🚀
                                </div>
                                {/* Typing Indicator */}
                                <div className="flex gap-1 mt-2 ml-1">
                                    <span className="w-1 h-1 bg-slate-600 rounded-full animate-bounce"></span>
                                    <span className="w-1 h-1 bg-slate-600 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-1 h-1 bg-slate-600 rounded-full animate-bounce delay-200"></span>
                                </div>
                             </motion.div>

                        </div>

                        {/* Chat Input Area */}
                        <div className="p-3 bg-slate-900 border-t border-slate-800 shrink-0">
                            <div className="flex gap-2">
                                <div className="h-10 bg-slate-800 rounded-full w-full flex items-center px-4 text-xs text-slate-500">Type a message...</div>
                                <div className="h-10 w-10 shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};