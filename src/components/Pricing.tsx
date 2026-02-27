import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const tiers = [
    {
        name: 'Personal',
        price: 'Free',
        description: 'Perfect for individuals sending money occasionally to family and friends.',
        features: [
            { name: 'Up to $10,000 monthly limit', included: true },
            { name: 'Standard exchange rates', included: true },
            { name: 'Email support', included: true },
            { name: 'Next-day transfers', included: true },
            { name: 'Dedicated account manager', included: false },
            { name: 'API access', included: false },
        ],
        highlight: false,
        cta: 'Get Started Free',
    },
    {
        name: 'Business',
        price: '$29',
        period: '/month',
        description: 'Ideal for small to medium businesses paying international remote teams.',
        features: [
            { name: 'Up to $100,000 monthly limit', included: true },
            { name: 'Premium exchange rates', included: true },
            { name: '24/7 priority support', included: true },
            { name: 'Instant transfers', included: true },
            { name: 'Batch payments', included: true },
            { name: 'API access', included: false },
        ],
        highlight: true,
        cta: 'Start 14-Day Trial',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations needing high volume and custom integrations.',
        features: [
            { name: 'Unlimited monthly limits', included: true },
            { name: 'Interbank exchange rates', included: true },
            { name: '24/7 dedicated support', included: true },
            { name: 'Instant transfers', included: true },
            { name: 'Batch payments', included: true },
            { name: 'Full API access', included: true },
        ],
        highlight: false,
        cta: 'Contact Sales',
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

export function Pricing() {
    return (
        <section id="pricing" className="py-16 sm:py-24 lg:py-32 relative bg-[#3D0F00] z-20 overflow-hidden">
            {/* Background decorations */}
            <motion.div
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white mb-6">
                        Simple, Transparent{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h2>
                    <p className="text-base sm:text-xl text-orange-200/70 max-w-3xl mx-auto">
                        Choose the perfect plan for your international transfer needs. No hidden fees, ever.
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-3 gap-8 items-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.name}
                            variants={item}
                            className={`relative rounded-3xl p-6 sm:p-8 lg:p-10 ${tier.highlight
                                ? 'bg-gradient-to-b from-orange-900/40 to-[#1a0500] border-2 border-orange-500 shadow-2xl shadow-orange-900/50 lg:-mt-8 lg:mb-8'
                                : 'bg-[#1a0500]/80 border border-orange-900/50 backdrop-blur-md'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg shadow-orange-500/30">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
                                <p className="text-orange-200/60 h-12 leading-tight">{tier.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline text-white">
                                <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                                {tier.period && (
                                    <span className="ml-1 text-xl font-medium text-orange-200/50">{tier.period}</span>
                                )}
                            </div>

                            <ul className="mb-10 space-y-4">
                                {tier.features.map((feature) => (
                                    <li key={feature.name} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            {feature.included ? (
                                                <Check className={`w-5 h-5 ${tier.highlight ? 'text-orange-500' : 'text-orange-400'}`} />
                                            ) : (
                                                <X className="w-5 h-5 text-orange-900/50" />
                                            )}
                                        </div>
                                        <p className={`ml-3 text-base ${feature.included ? 'text-orange-100/90' : 'text-orange-200/40'}`}>
                                            {feature.name}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${tier.highlight
                                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1'
                                    : 'bg-orange-950/30 text-orange-200 border border-orange-800/50 hover:bg-orange-900/40 hover:text-white'
                                    }`}
                            >
                                {tier.cta}
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
