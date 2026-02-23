// src/components/landing/PackagesClientSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Handshake, Gem } from "lucide-react"; // Keep icons for consistency

// Helper to handle the "packages" data structure, making it typesafe
interface PackageData {
    data: {
        title: string;
        tagline: string;
        price: string;
        isPopular: boolean;
        features: string[];
    };
}

interface PackagesClientSectionProps {
    packages: PackageData[];
}

export const PackagesClientSection: React.FC<PackagesClientSectionProps> = ({ packages }) => {
    // Ensure we only use the first three packages for the main display,
    const displayPackages = packages.slice(0, 3);
    // The user explicitly requested to highlight the middle one (index 1 in a 0-indexed array).
    const popularPackageIndex = 1;

    // Define a common class for the "Get Started" buttons
    const primaryButtonClass = "w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group";
    const secondaryButtonClass = "w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group bg-slate-100 text-slate-700 hover:bg-slate-200";
    const highlightButtonClass = "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30";

    return (
        <>
            {/* ==================================== */}
            {/* ==     THREE CORE PACKAGES       == */}
            {/* ==================================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch justify-center max-w-6xl mx-auto mb-20">
                {displayPackages.map((pkg, index) => {
                    // Determine if this package should be highlighted based on user's request
                    const isHighlighted = index === popularPackageIndex;
                    const cardClasses = `relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 transform ${isHighlighted ? 'border-2 border-blue-600 shadow-2xl shadow-blue-900/10 z-10 lg:scale-105 bg-white' : 'border border-slate-200 hover:shadow-xl hover:border-blue-200 bg-white'}`;

                    return (
                        <motion.div
                            key={pkg.data.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                            className={cardClasses}
                        >
                            {isHighlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    Most Recommended
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {pkg.data.title || "Your Plan Title"}
                                </h3>
                                <p className="text-sm text-slate-500">
                                    {pkg.data.tagline || "Keep your online presence active and engaging."}
                                </p>
                            </div>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-black text-slate-900 tracking-tight">
                                    {pkg.data.price}
                                </span>
                                <span className="text-slate-400 font-medium">
                                    /month
                                </span>
                            </div>

                            <div className="w-full h-px bg-slate-100 mb-8" />

                            <ul className="space-y-4 mb-8 flex-grow">
                                {(pkg.data.features || ["Basic Social Media Posts", "Engaging Captions", "Audience Interaction"]).map((feature: string, featureIndex: number) => (
                                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                                        <CheckCircle2
                                            size={18}
                                            className={`shrink-0 mt-0.5 ${isHighlighted ? "text-blue-600" : "text-slate-400"}`}
                                        />
                                        <span className="leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`${primaryButtonClass} ${isHighlighted ? highlightButtonClass : secondaryButtonClass}`}
                            >
                                Select This Plan
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </a>
                        </motion.div>
                    );
                })}
            </div>

            {/* ==================================== */}
            {/* ==     CUSTOM SOLUTION CARD      == */}
            {/* ==================================== */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="relative mt-20 bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-10 md:p-16 rounded-3xl shadow-2xl shadow-blue-900/40 overflow-hidden text-center"
            >
                {/* Background sparkle effect for a premium feel */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Sparkles size={200} className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white/50 animate-pulse" />
                    <Sparkles size={150} className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-white/50 animate-slow-spin" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        Need More Than Just "Keep Alive"?
                    </h3>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        For advanced growth strategies, creative ad campaigns, and full-spectrum digital marketing solutions, our experts will build a custom package just for you.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white text-blue-700 hover:bg-blue-50 shadow-lg shadow-white/30 rounded-xl transition-all w-full sm:w-auto group"
                    >
                        <Handshake size={20} className="mr-2" />
                        Get a Custom Quote Today
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </motion.div>
        </>
    );
};