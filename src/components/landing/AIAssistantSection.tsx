// src/components/landing/AIAssistantSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircleQuestion,
  Clock, // For 24/7
  Handshake, // For assistant closing deals
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
                    Your 24/7 AI Assistant: <span className="text-blue-400">Works for Less Than a Salary.</span>
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Imagine having a tireless team member who handles customer inquiries, captures leads, and even helps close sales—all day, every day. Our smart AI assistant never sleeps, ensuring you never miss an opportunity, at a fraction of the cost of a human employee.
                </p>

                {/* Removed the Cost Grid entirely */}

                <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-200 rounded-full h-12 px-8 font-bold transition-colors group">
                    See AI Assistant in Action <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
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
                                <div className="text-xs sm:text-sm font-bold">Axiora Assistant</div>
                                <div className="text-[10px] text-slate-400">Instant Customer Help</div>
                            </div>
                        </div>
                        <Clock size={16} className="text-slate-500" />
                    </div>

                    {/* Chat Messages Area */}
                    <div className="flex-1 p-4 space-y-4 bg-slate-950/50 overflow-y-auto relative scrollbar-hide">

                         <div className="flex justify-center mb-2">
                            <span className="bg-slate-800/80 backdrop-blur text-[10px] text-slate-400 px-3 py-1 rounded-full">Available 24/7 (English / Sinhala)</span>
                         </div>

                         {/* Message 1 (Bot) */}
                         <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="self-start max-w-[85%] mr-auto"
                         >
                            <div className="bg-slate-800 text-slate-200 p-3 sm:p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm leading-relaxed shadow-md">
                                Hello! 👋 I'm your Axiora Assistant. How can I help boost your business today?
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
                                I need a website for my small business.
                            </div>
                         </motion.div>

                         {/* Message 3 (Bot) - English */}
                         <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.5 }}
                            className="self-start max-w-[90%] mr-auto"
                         >
                            <div className="bg-slate-800 text-slate-200 p-3 sm:p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm leading-relaxed shadow-md">
                                Great! Our modern, fast websites are designed to convert visitors into customers. I can connect you with an expert to discuss your needs.
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