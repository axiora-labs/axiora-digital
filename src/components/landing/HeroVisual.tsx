import React from "react";
import { motion } from "framer-motion";
import { 
    Heart, 
    MessageCircle, 
    Share2, 
    Play,
    Clapperboard,
    TrendingUp,
    DollarSign
} from "lucide-react";

// This component is client-side rendered due to framer-motion animations.
export const HeroVisual = () => {
    return (
        // MOBILE-FIRST: A flex column by default.
        // DESKTOP: Becomes a 3-col grid on large screens.
        <div className="relative flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-4 w-full max-w-md lg:max-w-xl mx-auto">
            
            {/* ======================================= */}
            {/* ==     MAIN VIDEO REEL CARD          == */}
            {/* ======================================= */}
            {/* On desktop, this card spans 2 columns and 2 rows */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="lg:col-span-2 lg:row-span-2 bg-white/60 backdrop-blur-xl p-3 sm:p-4 rounded-3xl shadow-2xl shadow-slate-900/10 border border-white flex flex-col"
            >
                {/* -- User Header -- */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex-shrink-0"></div>
                    <div>
                        <p className="font-bold text-sm text-slate-900">YourBrand</p>
                        <p className="text-xs text-slate-500">Sponsored Content</p>
                    </div>
                </div>
                
                {/* -- Mock Video Player -- */}
                <div className="w-full aspect-[9/16] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl my-2 flex items-center justify-center relative overflow-hidden">
                    {/* Pulsing Play Button */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                    >
                        <Play className="text-white ml-1" size={40} fill="white" />
                    </motion.div>
                </div>

                {/* -- Social Proof & Caption -- */}
                <div className="mt-2 px-1">
                    <div className="flex items-center justify-between text-slate-700 mb-2">
                        <div className="flex items-center gap-4">
                            <Heart size={24} className="hover:text-red-500 transition-colors cursor-pointer"/>
                            <MessageCircle size={24} className="hover:text-blue-500 transition-colors cursor-pointer"/>
                            <Share2 size={24} className="hover:text-green-500 transition-colors cursor-pointer"/>
                        </div>
                        <div className="flex items-center gap-2 text-right">
                            <span className="font-bold text-sm">2,187</span>
                            <span className="text-xs text-slate-500">Likes</span>
                        </div>
                    </div>
                     <p className="text-xs text-slate-600 leading-snug">
                       <span className="font-bold text-slate-800">YourBrand</span> Our new product just dropped! ✨ We handle everything from script to screen. #SocialMediaMarketing #VideoReels
                    </p>
                </div>
            </motion.div>

            {/* ======================================= */}
            {/* ==     SMALLER STAT CARDS            == */}
            {/* ======================================= */}
            
            {/* -- Card 1: Service Highlight -- */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 sm:p-5 rounded-3xl shadow-xl shadow-blue-500/30 flex flex-col justify-between"
            >
                <div className="p-2 bg-white/20 rounded-lg w-fit">
                   <Clapperboard size={20} />
                </div>
                <p className="font-bold text-base sm:text-lg leading-tight mt-6">Engaging Post &<br/>Reel Creation</p>
            </motion.div>

            {/* -- Card 2: Results Highlight -- */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="lg:col-span-1 lg:row-span-1 bg-slate-900 text-white p-4 sm:p-5 rounded-3xl shadow-xl shadow-slate-900/30 flex flex-col justify-between"
            >
                <div className="flex justify-between items-start">
                    <p className="font-bold text-base sm:text-lg">Real Results</p>
                    <div className="p-2 bg-teal-500/20 text-teal-400 rounded-lg w-fit">
                        <TrendingUp size={20} />
                    </div>
                </div>
                <div className="mt-4">
                     <p className="text-3xl sm:text-4xl font-bold">+74</p>
                     <p className="text-xs sm:text-sm text-slate-400">New Leads This Month</p>
                </div>
            </motion.div>
            
        </div>
    );
};