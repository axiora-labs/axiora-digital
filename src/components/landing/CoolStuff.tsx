// src/components/landing/CoolStuff.tsx
import React from "react";
import { motion } from "framer-motion"; // motion is still needed for the main section's fade-in-up

// Import the new components
import { WebsitePerformance } from "./WebsitePerformance";
import { AIAssistantSection } from "./AIAssistantSection";


export const CoolStuff = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">

      {/* Background Decor (Subtle Grid) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10 space-y-24 md:space-y-32">

        {/* =========================================================
            MODULE 1: SUPER-FAST WEBSITES THAT CONVERT
           ========================================================= */}
        <WebsitePerformance />

        {/* =========================================================
            MODULE 2: 24/7 AI-POWERED CUSTOMER ASSISTANT
           ========================================================= */}
        <AIAssistantSection />

      </div>
    </section>
  );
};