import { motion } from "motion/react";
import { FileText } from "lucide-react";

export function TermsOfServicePage() {
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
                        <FileText className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">Terms of Service</h1>
                        <p className="text-sm text-orange-200/50 mt-2">Effective Date: January 1, 2026</p>
                    </div>
                </div>
            </motion.div>

            <div className="space-y-12 text-orange-200/80 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing and using AimPay's services, you signify your agreement to these Terms of Service. If you do not agree to these terms, you may not use the services.
                        AimPay reserves the right, at its sole discretion, to modify or replace these Terms at any time without prior notice.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">2. Eligibility</h2>
                    <p className="mb-4">
                        You must be at least 18 years old to use the Service. By agreeing to these Terms, you represent and warrant to us that:
                        (a) you are at least 18 years old; (b) you have not previously been suspended or removed from the Service; and
                        (c) your registration and your use of the Service is in compliance with any and all applicable laws and regulations.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">3. User Accounts & Registration</h2>
                    <p className="mb-4">
                        To use certain features of the Service, you must register for an account. You agree to provide and maintain accurate,
                        current, and complete information. You are entirely responsible for maintaining the confidentiality of your password
                        and account. You agree to notify AimPay immediately of any unauthorized use of your account or any other breach of security.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">4. Disclaimers & Limitations of Liability</h2>
                    <p className="mb-4">
                        AIMPAY SERVICES ARE PROVIDED "AS IS" WITHOUT ANY WARRANTY. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
                        IN NO EVENT SHALL AIMPAY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
                        LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
                    </p>
                </section>
            </div>
        </div>
    );
}
