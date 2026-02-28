import { ArrowRight, Globe, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function CTA({ onGetStarted }: { onGetStarted?: () => void }) {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900" />

        {/* Static orbs */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-orange-600 rounded-full blur-[100px] opacity-20" />
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-[100px] opacity-10" />

        {/* Static grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 relative">
            <Globe className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-5xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to Send Money
          <br />
          <span
            className="inline-block text-orange-400"
            style={{ textShadow: '0 0 30px rgba(249,115,22,0.5)' }}
          >
            Globally?
          </span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Join thousands of satisfied customers who trust AimPay for their cross-border transactions. Sign up today and get your first transfer fee-free.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-gray-900 text-base sm:text-lg rounded-xl inline-flex items-center justify-center gap-3 relative overflow-hidden group shadow-2xl w-full sm:w-auto font-semibold"
            onClick={onGetStarted}
            whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started Now</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />

          </motion.button>

          <motion.button
            className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/30 text-white text-base sm:text-lg rounded-xl backdrop-blur-sm relative overflow-hidden group w-full sm:w-auto font-medium"
            onClick={onGetStarted}
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Sales</span>
            <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-10 flex items-center justify-center gap-8 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {['No credit card required', 'Free account setup', 'Cancel anytime'].map((text, i) => (
            <motion.div key={i} className="flex items-center gap-2" whileHover={{ scale: 1.1 }}>
              <div className="w-2 h-2 bg-orange-400 rounded-full" />
              <span className="text-gray-300">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
