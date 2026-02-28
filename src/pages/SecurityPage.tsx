import { motion } from "motion/react";
import { ShieldCheck, Server, Key, Eye } from "lucide-react";

export function SecurityPage() {
    return (
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                className="text-center max-w-3xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mx-auto w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-10 h-10 text-orange-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Enterprise-Grade Security Architecture
                </h1>
                <p className="text-lg text-gray-500">
                    Your trust is our most valuable asset. AimPay operates on a zero-trust architecture, ensuring that your funds, identity, and data are shielded by military-grade protocols at every layer.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-12 mb-20">
                <motion.div
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-10 rounded-3xl border border-gray-200 relative overflow-hidden"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
                    <Server className="w-12 h-12 text-orange-500 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Security</h3>
                    <p className="text-gray-500 leading-relaxed space-y-4">
                        Our cloud infrastructure is distributed globally across AWS and GCP, completely isolated in Virtual Private Clouds. We undergo rigorous SOC2 Type II audits annually and maintain strict ISO 27001 compliance for information security management.
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-500 list-disc pl-5">
                        <li>DDoS mitigation and WAF active 24/7</li>
                        <li>Automated, immutable infrastructure deployments</li>
                        <li>Continuous penetration testing by third parties</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="bg-gradient-to-bl from-gray-50 to-gray-100 p-6 sm:p-10 rounded-3xl border border-gray-200 relative overflow-hidden"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
                    <Key className="w-12 h-12 text-orange-500 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Data & Identity Encryption</h3>
                    <p className="text-gray-500 leading-relaxed">
                        All data in transit is encrypted using TLS 1.3, and data at rest is secured with AES-256 block-level encryption. We leverage Hardware Security Modules (HSMs) for cryptographic key generation and rotation, meaning not even our own engineers can access your raw private data.
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-500 list-disc pl-5">
                        <li>Zero-knowledge proof architecture</li>
                        <li>Mandatory multi-factor authentication (MFA)</li>
                        <li>Biometric device-level authorization</li>
                    </ul>
                </motion.div>
            </div>

            <motion.div
                className="text-center bg-gray-100 border border-orange-200 py-12 px-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Eye className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Bug Bounty Program</h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-6">
                    Security is a collaborative effort. We reward security researchers who help us find and fix vulnerabilities.
                </p>
                <button className="px-6 py-3 bg-orange-600/20 text-orange-400 border border-orange-500/50 rounded-xl hover:bg-orange-500/30 transition-colors">
                    View Program Details
                </button>
            </motion.div>
        </div>
    );
}
