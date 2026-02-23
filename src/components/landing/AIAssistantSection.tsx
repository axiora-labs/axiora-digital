// src/components/landing/AIAssistantSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircleQuestion,
  Moon, // Changed Clock to Moon for "while you sleep"
  ShieldCheck, // For problem-solving/support
  Globe, // For multilingual
} from "lucide-react";

export const AIAssistantSection = () => {
  return (
    <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 relative overflow-hidden text-white border border-slate-800 shadow-2xl animate-fade-in-up delay-300">

        {/* Background Gloss FX */}
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-600/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

            {/* --- CONTENT SIDE --- */}
            <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl items-center justify-center mb-6 sm:mb-8 shadow-lg shadow-blue-500/20">
                    <MessageCircleQuestion size={24} className="text-white sm:w-[28px] sm:h-[28px]" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                    Your AI Agent, <span className="text-blue-400">Working While You Sleep.</span>
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Imagine a dedicated team member who handles all customer inquiries, even complex issues, and proactively solves problems—24/7. Our smart AI agent works tirelessly in Sinhala, Tamil, and English, ensuring your business never misses a beat, for far less than an employee's salary.
                </p>

                <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-200 rounded-full h-12 px-8 font-bold transition-colors group">
                    Talk to Our Team for Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                </a>
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
                                <div className="text-xs sm:text-sm font-bold">Axiora Agent</div> {/* Simplified to "Agent" */}
                                <div className="text-[10px] text-slate-400">24/7 Problem Solver</div> {/* New tagline */}
                            </div>
                        </div>
                        <Moon size={16} className="text-slate-500" /> {/* Changed to Moon for "while you sleep" */}
                    </div>

                    {/* Chat Messages Area */}
                    <div className="flex-1 p-4 space-y-4 bg-slate-950/50 overflow-y-auto relative scrollbar-hide">

                         <div className="flex justify-center mb-2">
                            <span className="bg-slate-800/80 backdrop-blur text-[10px] text-slate-400 px-3 py-1 rounded-full flex items-center gap-1">
                                <Globe size={12} /> {/* Added Globe for multilingual emphasis */}
                                Multilingual Support (EN/SI/TA)
                            </span>
                         </div>

                         {/* Message 1 (Bot) */}
                         <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="self-start max-w-[85%] mr-auto"
                         >
                            <div className="bg-slate-800 text-slate-200 p-3 sm:p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm leading-relaxed shadow-md">
                                Ayubowan! வணக்கம்! Hello! How can I help resolve your product concerns today?
                            </div>
                         </motion.div>

                         {/* Message 2 (User - product issue in Sinhala) */}
                         <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                            className="self-end max-w-[85%] ml-auto flex justify-end"
                         >
                            <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-2xl rounded-tr-none text-xs sm:text-sm leading-relaxed shadow-md shadow-blue-900/20">
                                mage product eka hoda na. eka fix karanna puluwanda?
                            </div>
                         </motion.div>

                         {/* Message 3 (Bot - acknowledging in Sinhala and offering solution) */}
                         <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.5 }}
                            className="self-start max-w-[90%] mr-auto"
                         >
                            <div className="bg-slate-800 text-slate-200 p-3 sm:p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm leading-relaxed shadow-md">
                                Apita e prashne pahadili karanna puluwan. Please share your order ID or contact number. I will start the troubleshooting process for you.
                            </div>
                         </motion.div>

                         {/* Message 4 (User - product issue in Tamil) */}
                         <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 3.8 }}
                            className="self-end max-w-[85%] ml-auto flex justify-end"
                         >
                            <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-2xl rounded-tr-none text-xs sm:text-sm leading-relaxed shadow-md shadow-blue-900/20">
                                enakku oru pirachinai irukku. athai theerpatharku udavungal.
                            </div>
                         </motion.div>

                         {/* Message 5 (Bot - acknowledging in Tamil and offering solution) */}
                         <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 5.0 }}
                            className="self-start max-w-[90%] mr-auto"
                         >
                            <div className="bg-slate-800 text-slate-200 p-3 sm:p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm leading-relaxed shadow-md">
                                நிச்சயமாக! உங்கள் ஆர்டர் ஐடி அல்லது தொடர்பு எண்ணை வழங்கவும். நான் உங்களுக்கு உதவுவதற்கு தேவையான நடவடிக்கைகளை மேற்கொள்வேன்.
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
                            <div className="h-10 bg-slate-800 rounded-full w-full flex items-center px-4 text-xs text-slate-500">Type your message...</div>
                            <div className="h-10 w-10 shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  );
};