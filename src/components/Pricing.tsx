import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { useNavigate } from 'react-router';

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
        transition: { staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

export function Pricing() {
    const navigate = useNavigate();
    return (
        <section id="pricing" className="py-16 sm:py-24 lg:py-32 relative bg-gray-50 z-20 overflow-hidden">
            {/* Static background decorations */}
            <div className="hidden md:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] pointer-events-none opacity-40" />
            <div className="hidden md:block absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gray-200 rounded-full blur-[120px] pointer-events-none opacity-40" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl text-gray-900 mb-6">
                        Simple, Transparent{' '}
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h2>
                    <p className="text-base sm:text-xl text-gray-500 max-w-3xl mx-auto">
                        Choose the perfect plan for your international transfer needs. No hidden fees, ever.
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-3 gap-8 items-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.name}
                            variants={item}
                            className={`relative rounded-3xl p-6 sm:p-8 lg:p-10 ${tier.highlight
                                ? 'bg-gray-900 border-2 border-gray-900 shadow-2xl shadow-gray-400/30 lg:-mt-8 lg:mb-8'
                                : 'bg-white border border-gray-200 shadow-sm'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-semibold mb-2 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                                    {tier.name}
                                </h3>
                                <p className={`h-12 leading-tight ${tier.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {tier.description}
                                </p>
                            </div>

                            <div className={`mb-8 flex items-baseline ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                                <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                                {tier.period && (
                                    <span className={`ml-1 text-xl font-medium ${tier.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
                                        {tier.period}
                                    </span>
                                )}
                            </div>

                            <ul className="mb-10 space-y-4">
                                {tier.features.map((feature) => (
                                    <li key={feature.name} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            {feature.included ? (
                                                <Check className={`w-5 h-5 ${tier.highlight ? 'text-orange-400' : 'text-orange-500'}`} />
                                            ) : (
                                                <X className={`w-5 h-5 ${tier.highlight ? 'text-gray-600' : 'text-gray-300'}`} />
                                            )}
                                        </div>
                                        <p className={`ml-3 text-base ${feature.included
                                            ? tier.highlight ? 'text-gray-200' : 'text-gray-700'
                                            : tier.highlight ? 'text-gray-600' : 'text-gray-400'
                                            }`}>
                                            {feature.name}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => navigate('/contact')}
                                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${tier.highlight
                                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-300/40 hover:-translate-y-1'
                                    : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900'
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
