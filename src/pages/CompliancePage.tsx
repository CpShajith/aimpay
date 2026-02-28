import { motion } from "motion/react";
import { Scale, FileCheck2, Globe, FileKey } from "lucide-react";

export function CompliancePage() {
    return (
        <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center max-w-3xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mx-auto w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6">
                    <Scale className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Global Compliance & Regulation
                </h1>
                <p className="text-lg text-gray-500">
                    We operate across 180+ jurisdictions. Maintaining absolute compliance with local and international financial law is the foundation of AimPay.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                    className="bg-gray-50 border border-gray-200 p-8 rounded-3xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <FileCheck2 className="w-10 h-10 text-orange-500 mb-6" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">KYC & AML Standards</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">
                        We employ rigorous Know Your Customer (KYC) and Anti-Money Laundering (AML) protocols. Every user and business
                        is verified against global watchlists, sanctions, and Politically Exposed Persons (PEP) databases in real-time.
                    </p>
                    <ul className="space-y-3">
                        {[
                            "Automated identity document verification",
                            "Liveness checks via biometric scanning",
                            "Continuous transaction monitoring algorithms",
                            "Strict adherence to the Bank Secrecy Act (BSA)"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-500">
                                <span className="text-orange-500">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className="bg-gray-50 border border-gray-200 p-8 rounded-3xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Globe className="w-10 h-10 text-orange-500 mb-6" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Licenses</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">
                        AimPay is a fully licensed Money Services Business (MSB) registered with FinCEN in the United States,
                        and operates under Electronic Money Institution (EMI) licenses across Europe and the UK.
                    </p>
                    <ul className="space-y-3">
                        {[
                            "FinCEN MSB Registration: 31000189xxxxxx",
                            "FCA Authorized EMI (UK): 90xxxx",
                            "MAS Major Payment Institution (Singapore)",
                            "AUSTRAC Registered (Australia)"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-500">
                                <span className="text-orange-500">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <motion.div
                className="bg-gray-100 border border-orange-200 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileKey className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Request Compliance Documents</h3>
                    <p className="text-gray-500 leading-relaxed">
                        Institutional partners and enterprise clients may request SOC2 Type II reports, penetration testing summaries,
                        and deep-dive regulatory frameworks under NDA.
                    </p>
                </div>
                <button className="md:ml-auto px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-500 transition-colors flex-shrink-0 font-medium">
                    Contact Compliance Team
                </button>
            </motion.div>
        </div>
    );
}
