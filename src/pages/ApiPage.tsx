import { motion } from "motion/react";
import { Terminal, Code, Cpu, Activity } from "lucide-react";

export function ApiPage() {
    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                className="text-center max-w-3xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
                    Developers
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                    Powerful RESTful API & Webhooks
                </h1>
                <p className="text-lg text-orange-200/70 mb-8">
                    Integrate AimPay's core engine directly into your product. Move money programmatically safely and reliably.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-xl transition-colors flex items-center gap-2">
                        <Terminal className="w-5 h-5" /> Get API Keys
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-orange-700 hover:border-orange-500 text-orange-200 font-medium rounded-xl transition-colors">
                        Read Docs
                    </button>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                    className="bg-[#1a0500] border border-orange-900/50 rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-[#2d0b00] border-b border-orange-900/50 px-4 py-3 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="p-6 overflow-x-auto text-sm font-mono text-orange-200/80">
                        <pre><code>
                            <span className="text-pink-400">curl</span> -X POST https://api.aimpay.com/v1/transfers \
                            -H <span className="text-green-400">"Authorization: Bearer sk_test_12345"</span> \
                            -H <span className="text-green-400">"Content-Type: application/json"</span> \
                            -d <span className="text-blue-300">'{'{'}
                                "amount": 150000,
                                "currency": "USD",
                                "destination": "acct_987654321",
                                "description": "Invoice #4402"
                                {'}'}'</span>
                        </code></pre>
                        <div className="mt-6 border-t border-orange-900/50 pt-4">
                            <pre><code>
                                <span className="text-gray-500">// Response</span>
                                <span className="text-blue-300">'{'{'}
                                    "id": "tr_0987asda",
                                    "status": "processing",
                                    "fee": 0,
                                    "estimated_arrival": "2025-10-15T10:00:00Z"
                                    {'}'}'</span>
                            </code></pre>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Code className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Idempotent Requests</h3>
                            <p className="text-orange-200/60 leading-relaxed">
                                Retry failed network requests without worrying about accidental double-charges. Our core engine ensures every idempotency key maps to a single valid transaction.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Activity className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Real-Time Webhooks</h3>
                            <p className="text-orange-200/60 leading-relaxed">
                                Subscribe to lifecycle events for deposits, transfers, and KYC verifications. Instantly trigger your internal business logic the second funds clear.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Cpu className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">High Availability</h3>
                            <p className="text-orange-200/60 leading-relaxed">
                                AimPay's GraphQL & REST APIs hold a 99.999% SLA. Built in Rust and deployed globally to ensure sub-50ms latency regardless of where your servers reside.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
