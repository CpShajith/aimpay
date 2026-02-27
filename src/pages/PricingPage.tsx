import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "/month",
        desc: "Perfect for individuals and freelancers sending money occasionally.",
        features: [
            "Send up to $5,000/month",
            "Real-time exchange rates",
            "Standard transfer speeds (1-2 days)",
            "Basic email support",
            "1 Virtual Card",
        ],
        highlight: false,
    },
    {
        name: "Pro",
        price: "$15",
        period: "/month",
        desc: "Ideal for businesses with regular international transactions.",
        features: [
            "Send up to $50,000/month",
            "0% FX margin on major currencies",
            "Instant transfers to 50+ countries",
            "Priority 24/7 chat support",
            "5 Virtual Cards + 1 Physical Card",
            "Automated accounting integration",
        ],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        desc: "Built for scaling teams with complex global payment needs.",
        features: [
            "Unlimited transfer volumes",
            "Custom FX rate agreements",
            "Dedicated account manager",
            "API access & webhooks",
            "Unlimited corporate cards",
            "Custom approval workflows",
        ],
        highlight: false,
    },
];

export function PricingPage() {
    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                className="text-center max-w-3xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
                    Transparent Pricing
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                    Simple plans to fit your global needs
                </h1>
                <p className="text-lg text-orange-200/70">
                    No hidden fees, no markup on exchange rates. Just honest pricing that scales with your growth.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, idx) => (
                    <motion.div
                        key={idx}
                        className={`relative p-6 sm:p-8 rounded-3xl transition-transform ${plan.highlight
                            ? "bg-gradient-to-b from-orange-600 to-orange-900 border-2 border-orange-500 md:scale-105 shadow-2xl shadow-orange-900/40 z-10"
                            : "bg-[#2d0b00]/80 border border-orange-900/50 hover:border-orange-500/50"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-lg">
                                Most Popular
                            </div>
                        )}
                        <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-white"}`}>
                            {plan.name}
                        </h3>
                        <p className={`text-sm mb-6 ${plan.highlight ? "text-orange-200" : "text-orange-200/60"}`}>
                            {plan.desc}
                        </p>
                        <div className="mb-8">
                            <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-white"}`}>
                                {plan.price}
                            </span>
                            <span className={`text-lg ${plan.highlight ? "text-orange-200" : "text-orange-200/60"}`}>
                                {plan.period}
                            </span>
                        </div>

                        <button className={`w-full py-4 rounded-xl font-semibold mb-8 transition-colors ${plan.highlight
                            ? "bg-white text-orange-900 hover:bg-orange-100"
                            : "bg-orange-900/50 text-white border border-orange-700 hover:bg-orange-800"
                            }`}>
                            {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                        </button>

                        <ul className="space-y-4">
                            {plan.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-orange-300" : "text-orange-500"}`} />
                                    <span className={`${plan.highlight ? "text-white" : "text-orange-100/80"}`}>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
