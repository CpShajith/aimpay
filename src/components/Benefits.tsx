import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { useRef } from 'react';

const benefits = [
  'No hidden fees or surprise charges',
  'Real-time exchange rates, always transparent',
  'Send money 24/7, even on weekends',
  'Multi-currency wallet support',
  'Instant notifications for all transactions',
  'Dedicated customer support'
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export function Benefits() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="benefits" ref={ref} className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="hidden md:block absolute top-1/2 left-0 w-96 h-96 bg-orange-100 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Static decorative orbs */}
            <div className="hidden md:block absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-60" />
            <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-gray-100 rounded-full blur-2xl opacity-60" />

            <motion.div
              className="relative group"
              style={{ scale: imageScale }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Border glow */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-orange-400 to-gray-300 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-gray-200 group-hover:border-orange-300 transition-all shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-gray-50/30 z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758519292135-2af0ad50f552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudCUyMGZpbmFuY2V8ZW58MXx8fHwxNzY1MzYzMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital payment finance"
                  className="relative w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-6xl text-gray-900 mb-6 sm:mb-8 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              The Smarter Way to{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Send Money Abroad
              </span>
            </motion.h2>

            <p className="text-base sm:text-xl text-gray-500 mb-8 sm:mb-10 leading-relaxed">
              Traditional banks charge excessive fees and offer poor exchange rates. AimPay gives you complete transparency and control over your international transfers.
            </p>

            <motion.div
              className="space-y-5 mb-10"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  variants={item}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="mt-1 flex-shrink-0 p-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-md shadow-orange-200"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-gray-600 text-lg group-hover:text-gray-900 transition-colors">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="px-6 sm:px-10 py-4 sm:py-5 bg-gray-900 text-white text-base sm:text-lg rounded-xl relative overflow-hidden group shadow-md w-full sm:w-auto"
              whileHover={{ scale: 1.05, backgroundColor: '#F73B20' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Open Your Free Account</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}