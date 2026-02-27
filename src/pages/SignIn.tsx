import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, ArrowLeft } from 'lucide-react';

interface SignInProps {
    onBack: () => void;
    onGetStarted: () => void;
}

export function SignIn({ onBack, onGetStarted }: SignInProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#1a0500]">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-700/15 rounded-full blur-[150px]" />
            </div>

            <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8">
                {/* Back button */}
                <div className="w-full max-w-md mb-8">
                    <motion.button
                        onClick={onBack}
                        className="flex items-center gap-2 text-orange-300/80 hover:text-orange-200 transition-colors group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ x: -4 }}
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm">Back to Home</span>
                    </motion.button>
                </div>

                {/* Card */}
                <motion.div
                    className="relative w-full max-w-md z-10"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                    {/* Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-orange-600 to-red-600 rounded-3xl blur-xl opacity-60 animate-pulse" />

                    <div className="relative bg-[#1a0a00]/95 backdrop-blur-2xl border border-orange-500/30 rounded-3xl p-8 shadow-2xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 rounded-full text-sm mb-5"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                Welcome Back
                            </motion.div>

                            <motion.div
                                className="flex items-center justify-center gap-2 mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-700 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/40">
                                    <span className="text-white font-bold text-lg">A</span>
                                </div>
                                <span className="text-2xl font-bold text-white">AimPay</span>
                            </motion.div>

                            <motion.p
                                className="text-orange-200/70 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                            >
                                Sign in to your account to continue
                            </motion.p>
                        </div>

                        {/* Form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {/* Email */}
                            <div>
                                <label className="block text-sm text-orange-200/80 mb-1.5 ml-1">Email address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400/70 group-focus-within:text-orange-400 transition-colors" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-orange-500/20 focus:border-orange-500/60 text-white placeholder-orange-200/30 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-500/20 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm text-orange-200/80 mb-1.5 ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400/70 group-focus-within:text-orange-400 transition-colors" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        className="w-full pl-11 pr-12 py-3.5 bg-white/5 border border-orange-500/20 focus:border-orange-500/60 text-white placeholder-orange-200/30 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-500/20 text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-400/70 hover:text-orange-300 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="flex justify-end">
                                <button type="button" className="text-xs text-orange-400 hover:text-orange-300 transition-colors">
                                    Forgot password?
                                </button>
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-600/40 hover:shadow-orange-600/60 transition-all relative overflow-hidden group disabled:opacity-70"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Signing In…
                                        </>
                                    ) : (
                                        <>Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </span>
                            </motion.button>
                        </motion.form>

                        {/* Divider */}
                        <div className="my-6 flex items-center gap-3">
                            <div className="flex-1 h-px bg-orange-500/20" />
                            <span className="text-xs text-orange-300/50">or continue with</span>
                            <div className="flex-1 h-px bg-orange-500/20" />
                        </div>

                        {/* Social */}
                        <div className="grid grid-cols-2 gap-3">
                            {['Google', 'Apple'].map((provider) => (
                                <motion.button
                                    key={provider}
                                    type="button"
                                    className="py-3 bg-white/5 border border-orange-500/20 hover:border-orange-500/50 text-orange-200 rounded-xl text-sm transition-all hover:bg-white/10"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {provider}
                                </motion.button>
                            ))}
                        </div>

                        {/* Footer */}
                        <p className="text-center text-xs text-orange-200/50 mt-6">
                            Don't have an account?{' '}
                            <button
                                type="button"
                                onClick={onGetStarted}
                                className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                            >
                                Get Started Free
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
