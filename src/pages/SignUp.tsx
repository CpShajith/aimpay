import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router';

interface SignUpProps {
    onBack: () => void;
    onSignIn: () => void;
}

export function SignUp({ onBack, onSignIn }: SignUpProps) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        const { error, data } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName
                }
            }
        });

        setIsLoading(false);
        if (error) {
            setErrorMsg(error.message);
        } else {
            setSuccessMsg('Account created successfully! You can now sign in.');
            // Automatically sign them in or prompt to go to sign in based on flow.
            // For now, redirect to signin.
            setTimeout(() => {
                navigate('/signin');
            }, 2000);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-gray-50 flex items-center justify-center">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="hidden md:block absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[150px]" />
                <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gray-100 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 w-full max-w-md p-4 m-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500" />

                    <div>
                        <div className="text-center mb-8">
                            <motion.div
                                className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 rounded-xl text-orange-600 mb-4"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                            >
                                <span className="text-2xl font-bold text-gray-900">AimPay</span>
                            </motion.div>

                            <motion.p className="text-gray-500 text-sm">
                                Create a new account to get started
                            </motion.p>
                        </div>

                        {errorMsg && (
                            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                {errorMsg}
                            </div>
                        )}
                        {successMsg && (
                            <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-600 text-sm">
                                {successMsg}
                            </div>
                        )}

                        {/* Form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="John Doe"
                                        required
                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-300 focus:border-orange-500 text-gray-900 placeholder-gray-400 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-200 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-300 focus:border-orange-500 text-gray-900 placeholder-gray-400 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-200 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        minLength={6}
                                        className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-300 focus:border-orange-500 text-gray-900 placeholder-gray-400 rounded-xl outline-none transition-all focus:ring-2 focus:ring-orange-200 text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-400 mt-1 ml-1">Must be at least 6 characters.</p>
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:bg-orange-500 transition-all relative overflow-hidden group disabled:opacity-70 mt-4"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isLoading ? 'Creating Account...' : 'Sign Up'}
                                    {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </span>
                            </motion.button>
                        </motion.form>

                        {/* Footer */}
                        <p className="text-center text-xs text-gray-500 mt-6">
                            Already have an account?{' '}
                            <button
                                type="button"
                                onClick={onSignIn}
                                className="text-orange-500 hover:text-orange-600 transition-colors font-semibold"
                            >
                                Sign in here
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

