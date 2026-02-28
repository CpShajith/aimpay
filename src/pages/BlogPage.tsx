import { motion } from "motion/react";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const posts = [
    {
        title: "The Future of Cross-Border Payments in 2026",
        excerpt: "Exploring how AI and blockchain are fundamentally reshaping the way value moves across the globe, and why traditional Swift is dead.",
        category: "Industry Insights",
        readTime: "5 min read",
        date: "Feb 27, 2026",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f438eba?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "How We Rebuilt Our Core Routing Engine in Rust",
        excerpt: "A deep dive into the engineering decisions that allowed us to drop median transfer latency from 2 seconds to 45 milliseconds.",
        category: "Engineering",
        readTime: "12 min read",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Announcing Zero-Fee Transfers to Europe",
        excerpt: "Effective immediately, AimPay is dropping all FX margins and fixed fees on transfers originating from the US to any SEPA country.",
        category: "Company News",
        readTime: "3 min read",
        date: "Jan 10, 2026",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop"
    },
];

export function BlogPage() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center max-w-3xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm block mb-4">
                    The Dispatch
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    News, thoughts, and technical deep dives
                </h1>
            </motion.div>

            {/* Featured Post */}
            <motion.div
                className="mb-12 sm:mb-20 grid lg:grid-cols-2 gap-0 items-center bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden group cursor-pointer hover:border-orange-400 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <div className="h-full w-full relative overflow-hidden">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop"
                        alt="Global Finance"
                        className="w-full h-48 sm:h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 via-transparent to-transparent lg:hidden" />
                </div>
                <div className="p-6 sm:p-8 lg:pr-12 lg:py-16">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full border border-orange-300">
                            Product Update
                        </span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-orange-400 transition-colors">
                        Introducing AimPay Enterprise: The operating system for global treasuries
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed mb-8">
                        Manage multi-currency accounts, automate payroll across 50 jurisdictions, and integrate seamlessly with NetSuite through our new unified dashboard.
                    </p>
                    <button className="text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                        Read fully story <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>

            {/* Recent Posts Grid */}
            <h3 className="text-2xl font-bold text-gray-900 mb-10 border-b border-gray-200 pb-4">Recent Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                    <motion.a
                        key={i}
                        href="#"
                        className="group flex flex-col h-full bg-gray-50/50 border border-gray-200 rounded-2xl overflow-hidden hover:bg-gray-100 hover:border-orange-400 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="h-48 overflow-hidden relative">
                            <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-orange-300 text-xs text-gray-600 flex items-center gap-1">
                                <Tag className="w-3 h-3" /> {post.category}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                                {post.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="text-orange-500 text-sm font-semibold flex items-center gap-2 mt-auto">
                                Read article <BookOpen className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
