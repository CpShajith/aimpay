import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, User, Mail, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

interface ContactFormProps {
    onBack: () => void;
}

export function ContactForm({ onBack }: ContactFormProps) {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setSubmitted(true);
        }, 2000);
    };

    if (submitted) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0500]">
                {/* Background orbs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <motion.div
                    className="relative text-center px-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 shadow-2xl shadow-orange-600/50 mb-6"
                    >
                        <CheckCircle className="w-12 h-12 text-white" />
                    </motion.div>
                    <motion.h2
                        className="text-4xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Message Sent! 🎉
                    </motion.h2>
                    <motion.p
                        className="text-orange-200/80 text-lg mb-8 max-w-sm mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                    </motion.p>
                    <motion.button
                        onClick={onBack}
                        className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-600/40 hover:shadow-orange-600/60 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Back to Home
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] bg-[#1a0500] overflow-y-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[150px]" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-[150px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[200px]" />
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,120,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,120,0,0.5) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="relative min-h-screen flex items-center justify-center px-4 py-16">
                <div className="w-full max-w-2xl">

                    {/* Back button */}
                    <motion.button
                        onClick={onBack}
                        className="flex items-center gap-2 text-orange-300/80 hover:text-orange-200 transition-colors mb-8 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ x: -4 }}
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm">Back to Home</span>
                    </motion.button>

                    {/* Header */}
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/15 border border-orange-500/30 text-orange-300 rounded-full text-sm mb-5">
                            <Sparkles className="w-3.5 h-3.5" />
                            Get in Touch
                        </div>
                        <h1 className="text-5xl font-bold text-white leading-tight mb-3">
                            Start Your{' '}
                            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                Journey
                            </span>
                        </h1>
                        <p className="text-orange-200/60 text-lg">
                            Fill out the form below and we'll reach out to get you started with AimPay.
                        </p>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Glow border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/40 via-orange-600/20 to-red-600/40 rounded-3xl blur-md opacity-70" />

                        <div className="relative bg-[#200a00]/80 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Name + Email row */}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm text-orange-200/70 mb-2 ml-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500/50 group-focus-within:text-orange-400 transition-colors" />
                                            <input
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-orange-500/15 focus:border-orange-500/50 text-white placeholder-orange-200/25 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-500/15 text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-orange-200/70 mb-2 ml-1">Email Address</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500/50 group-focus-within:text-orange-400 transition-colors" />
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                required
                                                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-orange-500/15 focus:border-orange-500/50 text-white placeholder-orange-200/25 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-500/15 text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Phone + Subject row */}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm text-orange-200/70 mb-2 ml-1">Phone Number</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500/50 group-focus-within:text-orange-400 transition-colors" />
                                            <input
                                                name="phone"
                                                type="tel"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-orange-500/15 focus:border-orange-500/50 text-white placeholder-orange-200/25 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-500/15 text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-orange-200/70 mb-2 ml-1">I'm interested in</label>
                                        <select
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3.5 bg-white/5 border border-orange-500/15 focus:border-orange-500/50 text-white rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-500/15 text-sm appearance-none"
                                            style={{ colorScheme: 'dark' }}
                                        >
                                            <option value="" disabled className="bg-[#200a00]">Select a topic</option>
                                            <option value="personal" className="bg-[#200a00]">Personal Payments</option>
                                            <option value="business" className="bg-[#200a00]">Business Account</option>
                                            <option value="enterprise" className="bg-[#200a00]">Enterprise Solutions</option>
                                            <option value="api" className="bg-[#200a00]">API Integration</option>
                                            <option value="other" className="bg-[#200a00]">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm text-orange-200/70 mb-2 ml-1">Your Message</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-orange-500/50 group-focus-within:text-orange-400 transition-colors" />
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your needs..."
                                            rows={5}
                                            required
                                            className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-orange-500/15 focus:border-orange-500/50 text-white placeholder-orange-200/25 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-500/15 text-sm resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-xl shadow-xl shadow-orange-700/40 hover:shadow-orange-600/60 transition-all relative overflow-hidden group disabled:opacity-70 text-base"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                </svg>
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </motion.button>

                                <p className="text-center text-xs text-orange-200/40">
                                    By submitting, you agree to our{' '}
                                    <span className="text-orange-400 cursor-pointer hover:text-orange-300 transition-colors">Privacy Policy</span>
                                    {' '}and{' '}
                                    <span className="text-orange-400 cursor-pointer hover:text-orange-300 transition-colors">Terms of Service</span>
                                </p>
                            </form>
                        </div>
                    </motion.div>

                    {/* Info cards */}
                    <motion.div
                        className="grid grid-cols-3 gap-3 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {[
                            { label: 'Response Time', value: '< 24 hrs' },
                            { label: 'Countries', value: '180+' },
                            { label: 'Support', value: '24/7' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-white/5 border border-orange-500/15 rounded-2xl p-4 text-center"
                            >
                                <div className="text-xl font-bold text-orange-400 mb-1">{stat.value}</div>
                                <div className="text-xs text-orange-200/50">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
