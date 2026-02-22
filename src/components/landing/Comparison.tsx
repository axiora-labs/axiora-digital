import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Zap,        // For speed/modern websites
  Clock,      // For slow processes/limited time
  Users,      // For manual operations/human interaction
  DollarSign, // For ROI/sales focus
  ArrowRightCircle, // For clear path
  Lightbulb, // For strategy
  MessageCircleOff,
  ArrowUpRight
} from "lucide-react";

export const Comparison = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background: Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_40%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-6 mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6 border border-blue-100">
                <Lightbulb size={16} />
                Our Proven Difference
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Tired of Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Doesn't Deliver?</span>
            </h2>
            <p className="text-slate-600 text-lg">
                See how our modern approach solves common frustrations and brings you real, measurable growth.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            
            {/* LEFT: THE OLD WAY (Common Frustrations) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative bg-white border border-slate-200 rounded-3xl p-8 md:p-12 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
                {/* "Outdated" Label */}
                <div className="absolute top-8 right-8 rotate-12 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase opacity-80 shadow-md select-none pointer-events-none">
                    Outdated Approach
                </div>

                <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
                    <div className="p-3 bg-red-100 rounded-xl text-red-600">
                        <XCircle size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Other Agencies</h3>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Stuck in the past</p>
                    </div>
                </div>

                <div className="space-y-8 relative z-10">
                    <ComparisonItem
                        icon={<MessageCircleOff className="text-red-500" />}
                        title="Likes, Not Leads"
                        desc="They focus on empty 'engagement' metrics that look good but don't bring you customers or sales."
                        isPositive={false}
                    />
                     <ComparisonItem
                        icon={<Clock className="text-red-500" />}
                        title="Slow Websites & Bad Experience"
                        desc="Outdated websites load slowly, frustrate visitors, and make you lose potential business."
                        isPositive={false}
                    />
                     <ComparisonItem
                        icon={<Users className="text-red-500" />}
                        title="Limited Availability"
                        desc="Manual responses mean missed calls, delayed replies, and lost leads outside of business hours."
                        isPositive={false}
                    />
                </div>
            </motion.div>

            {/* RIGHT: THE AXIORA WAY (Your Solution) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/30 transform lg:scale-105 z-20"
            >
                 {/* Subtle Glowing Effect */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6 relative z-10">
                    <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Axiora Digital</h3>
                        <div className="flex items-center gap-2 mt-1">
                             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                             <p className="text-xs text-blue-300 uppercase tracking-wider">The Modern Solution</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 relative z-10">
                    <ComparisonItem
                        icon={<DollarSign className="text-teal-400" />}
                        title="Focus on Your Sales & ROI"
                        desc="Every strategy is engineered to deliver measurable leads, genuine customer engagement, and a clear return on your investment."
                        isPositive={true}
                    />
                     <ComparisonItem
                        icon={<Zap className="text-teal-400" />}
                        title="Blazing Fast & Modern Websites"
                        desc="We build ultra-fast, visually stunning, and mobile-friendly websites that keep customers engaged and improve your search rankings."
                        isPositive={true}
                    />
                     <ComparisonItem
                        icon={<ArrowRightCircle className="text-teal-400" />}
                        title="24/7 Customer Path"
                        desc="Our intelligent systems ensure potential customers always have a clear path to contact you, even outside business hours."
                        isPositive={true}
                    />
                </div>
                
                {/* Call to Action at the bottom of the "good" card */}
                <div className="mt-12 pt-6 border-t border-slate-800 text-center">
                    <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 group">
                        Get Started with the Modern Approach
                        <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

// Helper Sub-component for cleaner code
const ComparisonItem = ({ icon, title, desc, isPositive }: { icon: React.ReactNode, title: string, desc: string, isPositive: boolean }) => (
    <div className="flex gap-4 items-start">
        <div className={`mt-1 shrink-0 p-2 rounded-full ${isPositive ? 'bg-teal-400/10 text-teal-400' : 'bg-red-400/10 text-red-400'}`}>
            {icon}
        </div>
        <div>
            <h4 className={`font-bold text-lg mb-1 ${isPositive ? 'text-white' : 'text-slate-900'}`}>
                {title}
            </h4>
            <p className={`text-sm leading-relaxed ${isPositive ? 'text-slate-400' : 'text-slate-600'}`}>
                {desc}
            </p>
        </div>
    </div>
);