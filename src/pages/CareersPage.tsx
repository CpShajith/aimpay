import { motion } from "motion/react";
import { Briefcase, ArrowRight, HeartPulse, Coffee, Plane, Laptop } from "lucide-react";

const perks = [
    { icon: HeartPulse, title: "Full Health Coverage", desc: "100% paid premium health, dental, and vision for you and dependents." },
    { icon: Laptop, title: "Home Office Stipend", desc: "$2,000 to set up your ideal remote workspace right from day one." },
    { icon: Plane, title: "Unlimited PTO", desc: "Mandatory minimum of 3 weeks off. We want you rested and recharged." },
    { icon: Coffee, title: "Wellness & Learning", desc: "$1,500/year for gym memberships, courses, or conferences of your choice." },
];

const openRoles = [
    { dept: "Engineering", role: "Senior Rust Engineer", loc: "Remote (Global)" },
    { dept: "Engineering", role: "Frontend Developer (React/Framer)", loc: "San Francisco / Remote" },
    { dept: "Product", role: "Product Manager, Growth", loc: "London / Remote" },
    { dept: "Compliance", role: "KYC/AML Analyst", loc: "Singapore" },
];

export function CareersPage() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center max-w-4xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mx-auto w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-6">
                    <Briefcase className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Help us build the <span className="text-orange-500">future of money.</span>
                </h1>
                <p className="text-lg text-orange-200/70 leading-relaxed max-w-2xl mx-auto">
                    We're looking for ambitious, curious, and empathetic builders to join our mission of tearing down the borders of global finance.
                </p>
            </motion.div>

            {/* Perks */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits & Perks</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {perks.map((perk, i) => (
                        <motion.div
                            key={i}
                            className="bg-orange-950/20 border border-orange-900/30 p-6 rounded-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <perk.icon className="w-8 h-8 text-orange-400 mb-4" />
                            <h3 className="font-semibold text-white mb-2">{perk.title}</h3>
                            <p className="text-sm text-orange-200/60 leading-relaxed">{perk.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Open Roles */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-10">Open Positions</h2>
                <div className="space-y-4">
                    {openRoles.map((role, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            className="group block bg-[#1a0500] border border-orange-900/40 p-6 rounded-2xl hover:border-orange-500/50 hover:bg-[#2d0b00] transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-1 block">
                                        {role.dept}
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                        {role.role}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-orange-200/60">{role.loc}</span>
                                    <div className="w-10 h-10 rounded-full bg-orange-900/40 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white text-orange-500 transition-colors">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
