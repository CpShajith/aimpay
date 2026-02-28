import { motion } from "motion/react";
import { Shield, Zap, Globe, Lock, Smartphone, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "Global Transfers, Instantaneous Delivery",
        desc: "Send money across 180+ countries within seconds. Our intelligent routing network bypasses traditional banking delays to deliver your funds exactly when they're needed.",
    },
    {
        icon: Shield,
        title: "Bank-Grade Encryption",
        desc: "Your money and data are protected by AES-256 bit encryption and real-time fraud monitoring algorithms that adapt to new threats instantaneously.",
    },
    {
        icon: BarChart3,
        title: "Smart Analytics Dashboard",
        desc: "Gain deep insights into your spending habits and transfer history with dynamic, visual reports designed for clarity and actionable intelligence.",
    },
    {
        icon: Smartphone,
        title: "Seamless Mobile Experience",
        desc: "Manage your finances on the go with our lightning-fast, intuitive mobile application. Available on iOS and Android with full biometric integration.",
    },
    {
        icon: Zap,
        title: "Zero Hidden Fees",
        desc: "What you see is exactly what you pay. We use the mid-market exchange rate with a transparent, upfront fee structure—no surprises.",
    },
    {
        icon: Lock,
        title: "Multi-Signature Vaults",
        desc: "Store your digital assets in secure, multi-signature vaults requiring multiple approvals for large transfers, ensuring absolute peace of mind.",
    },
];

export function FeaturesPage() {
    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                className="text-center max-w-3xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
                    Platform Features
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                    Everything you need to manage money <span className="text-orange-500">without borders.</span>
                </h1>
                <p className="text-lg text-gray-500">
                    Built for speed, engineered for security. AimPay combines the power of enterprise finance with the simplicity of a modern app.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-gray-100 border border-gray-200 p-8 rounded-2xl hover:bg-gray-100 transition-all group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <feature.icon className="w-7 h-7 text-orange-400 group-hover:text-gray-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-400 transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
