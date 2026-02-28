import { motion } from "motion/react";
import { Users, Globe2, TrendingUp, HeartHandshake } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const stats = [
    { label: "Active Users", value: "2M+" },
    { label: "Countries Served", value: "180+" },
    { label: "Volume Processed", value: "$45B+" },
    { label: "Team Members", value: "350+" },
];

export function AboutUsPage() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div
                className="text-center max-w-4xl mx-auto mb-12 sm:mb-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Democratizing global finance for the <span className="text-orange-500">modern era.</span>
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed mb-10">
                    Founded in 2025, AimPay was born out of frustration with legacy banking systems that charge exorbitant fees, take days to clear, and lack basic transparency. We believe money should move as freely and instantly as information on the internet.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-gray-100 border border-gray-200 rounded-2xl p-6">
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-600/70 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden border border-gray-200"
                >
                    <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10" />
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        alt="AimPay Team"
                        className="w-full h-48 sm:h-80 lg:h-[500px] object-cover"
                    />
                </motion.div>

                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-white">Our Mission</h2>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <Globe2 className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-100 mb-2">Borderless by default</h3>
                            <p className="text-gray-500 leading-relaxed">
                                We're tearing down the geographical barriers of the financial world. Whether you're sending $10 to family or paying a $100k invoice to a vendor abroad, the experience should be identical.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <HeartHandshake className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-100 mb-2">Radical transparency</h3>
                            <p className="text-gray-500 leading-relaxed">
                                We make our money on a flat, clearly stated fee. We never hide markups in exchange rates, and we never will. Trust is earned through honesty.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-100 mb-2">Constant innovation</h3>
                            <p className="text-gray-500 leading-relaxed">
                                We reinvest heavily into our core engineering. Our routing algorithms get smarter every day, finding the fastest, cheapest path for your funds.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Investors Section */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
                    Backed by the best
                </span>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for Logos */}
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">Sequoia</div>
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">Andreessen Horowitz</div>
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">Y Combinator</div>
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">Lightspeed</div>
                </div>
            </motion.div>

        </div>
    );
}
