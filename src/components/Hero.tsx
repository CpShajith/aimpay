import { ArrowRight, Globe, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { useCurrencyRates } from '../hooks/useCurrencyRates';
import CurrencyGlobe from '../components copy/CurrencyGlobe';

export function Hero({ onGetStarted }: { onGetStarted?: () => void }) {
  const ref = useRef(null);
  const { rates, loading, error } = useCurrencyRates();

  return (
    <div
      ref={ref}
      className="relative pt-20 min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #fff7f5 40%, #fff1ee 70%, #ffffff 100%)',
      }}
    >
      {/* Static decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-50 to-transparent rounded-full blur-[80px] opacity-40" />
      </div>

      {/* -- Hero Content -- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT: Text */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-50 border border-orange-200 text-orange-500 rounded-full mb-8"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Fast &amp; Secure Cross-Border Payments</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl text-gray-900 font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Send Money
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Globally
              </span>
              <br />
              in Seconds
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-gray-500 mb-6 sm:mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              AimPay makes international transactions simple, fast, and affordable. Send money to over 180 countries with the best exchange rates and lowest fees.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={onGetStarted}
                className="px-8 py-4 bg-gray-900 hover:bg-orange-500 text-white rounded-xl flex items-center justify-center gap-2 font-medium transition-colors duration-200 shadow-md"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#how-it-works"
                className="px-8 py-4 border border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-500 rounded-xl transition-colors duration-200 text-center font-medium"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: Sparkles, text: 'Features', link: '#features' },
                { icon: Zap, text: 'How It Works', link: '#how-it-works' },
                { icon: Shield, text: 'Benefits', link: '#benefits' },
                { icon: Globe, text: 'Pricing', link: '#pricing' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex items-center gap-2 group"
                >
                  <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 group-hover:border-orange-400 group-hover:bg-orange-50 transition-colors duration-200">
                    <item.icon className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors duration-200" />
                  </div>
                  <span className="text-gray-500 text-sm group-hover:text-gray-900 transition-colors duration-200">{item.text}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Globe */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            {/* Static glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-[80px] opacity-40" />

            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {loading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-xl">
                  <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4" />
                  <p className="text-gray-500 text-sm">Loading Live Rates...</p>
                </div>
              ) : error || !rates ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-full border border-red-200 shadow-xl">
                  <p className="text-red-500 text-sm text-center px-6 font-medium">
                    {error || 'Failed to load live rates'}
                  </p>
                </div>
              ) : (
                <div className="relative w-full h-full rounded-full border border-gray-100 shadow-2xl overflow-hidden bg-white/40 backdrop-blur-sm">
                  <CurrencyGlobe rates={rates} />
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}