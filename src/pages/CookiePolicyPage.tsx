import { motion } from "motion/react";
import { Cookie } from "lucide-react";

export function CookiePolicyPage() {
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
                        <Cookie className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">Cookie Policy</h1>
                        <p className="text-sm text-orange-200/50 mt-2">Effective Date: January 1, 2026</p>
                    </div>
                </div>
            </motion.div>

            <div className="space-y-12 text-orange-200/80 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">1. What are cookies?</h2>
                    <p className="mb-4">
                        Cookies are small text files that are stored on your computer or mobile device when you visit a website.
                        They allow the website to recognize your device and remember if you have been to the website before. We use
                        both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device
                        until you delete them).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">2. How we use cookies</h2>
                    <p className="mb-4">
                        AimPay uses cookies for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Strictly Necessary:</strong> These are required for the operation of our website. They include, for example, logging into secure areas of our website.</li>
                        <li><strong>Analytical/Performance:</strong> They allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
                        <li><strong>Functionality:</strong> These are used to recognize you when you return to our website, enabling us to personalize content for you (e.g., your choice of language).</li>
                        <li><strong>Targeting:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-orange-900/50 pb-2">3. Managing cookies</h2>
                    <p className="mb-4">
                        You can manage your cookie preferences through your browser settings. The 'Help' feature on most browsers will tell you
                        how to stop your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie,
                        and how to disable cookies altogether. Be aware that disabling cookies may affect the functionality of our service.
                    </p>
                </section>
            </div>
        </div>
    );
}
