import { motion } from "motion/react";
import { Shield } from "lucide-react";

export function PrivacyPolicyPage() {
    return (
        <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-900/40 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">Privacy Policy</h1>
                        <p className="text-sm text-orange-200/50 mt-2">Last Updated: February 25, 2026</p>
                    </div>
                </div>
            </motion.div>

            <div className="space-y-12 text-orange-200/80 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">1. Introduction</h2>
                    <p className="mb-4">
                        At AimPay, we believe that privacy is a fundamental human right. This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you visit our website or use our mobile applications and services.
                    </p>
                    <p>
                        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">2. Information We Collect</h2>
                    <h3 className="text-xl font-semibold text-orange-100 mb-3 mt-6">Personal Data</h3>
                    <p className="mb-4">
                        When you register for an account, we collect personally identifiable information such as your name, shipping address,
                        email address, and telephone number, as well as necessary financial information including bank account details and tax identification numbers required for KYC (Know Your Customer) compliance.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-100 mb-3 mt-6">Biometric Data</h3>
                    <p>
                        With your explicit permission through your mobile device's operating system, we may utilize Face ID or fingerprint
                        authentication to secure your sessions. We do not store this biometric data on our servers; the validation occurs strictly on-device.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>To process transactions and send notices about your transactions.</li>
                        <li>To resolve disputes, collect fees, and troubleshoot problems.</li>
                        <li>To prevent potentially prohibited or illegal activities, and enforce our User Agreement.</li>
                        <li>To customize, measure, and improve AimPay services and the content and layout of our website and applications.</li>
                        <li>To deliver targeted marketing, service update notices, and promotional offers based on your communication preferences.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">4. Data Sharing & Disclosure</h2>
                    <p className="mb-4">
                        We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated
                        demographic information not linked to any personal identification information regarding visitors and users with our business partners.
                    </p>
                    <p>
                        AimPay complies with all requests from law enforcement agencies accompanied by a valid subpoena or court order. We also share limited data with banking partners to process ACH, SWIFT, and SEPA transactions.
                    </p>
                </section>
            </div>
        </div>
    );
}
