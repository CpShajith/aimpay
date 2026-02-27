import { motion } from 'motion/react';
import { useRef } from 'react';
import { Shield, Zap, Globe, Lock, TrendingDown, Users } from 'lucide-react';

const cards = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your transactions are protected with enterprise-grade encryption and multi-factor authentication.',
    gradient: 'from-orange-500 to-orange-600',
    stat: '99.9%',
    statLabel: 'Uptime'
  },
  {
    icon: Zap,
    title: 'Lightning Speed',
    description: 'Transfer money globally in seconds, not days. Real-time processing for urgent payments.',
    gradient: 'from-orange-600 to-orange-700',
    stat: '<3s',
    statLabel: 'Avg Transfer'
  },
  {
    icon: TrendingDown,
    title: 'Lowest Fees',
    description: 'Save up to 85% compared to traditional banks. Transparent pricing with no hidden costs.',
    gradient: 'from-orange-500 to-orange-600',
    stat: '0.5%',
    statLabel: 'Fee Rate'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Send money to 180+ countries with support for 50+ currencies and local payment methods.',
    gradient: 'from-orange-600 to-orange-700',
    stat: '180+',
    statLabel: 'Countries'
  },
  {
    icon: Users,
    title: 'Trusted by Millions',
    description: 'Join over 5 million users who trust AimPay for their international money transfers.',
    gradient: 'from-orange-500 to-orange-600',
    stat: '5M+',
    statLabel: 'Active Users'
  },
  {
    icon: Lock,
    title: 'Fully Regulated',
    description: 'Licensed and compliant in all operating regions. Your money is always safe and secure.',
    gradient: 'from-orange-600 to-orange-700',
    stat: '100%',
    statLabel: 'Compliant'
  }
];

function Card({ card, index }: any) {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      style={{
        position: 'sticky',
        top: `${80 + index * 20}px`,
        zIndex: index + 10,
      }}
      className="mb-8"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="bg-[#1A0700] rounded-3xl p-6 sm:p-10 border border-orange-800/40 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] overflow-hidden relative group"
        whileHover={{ scale: 1.02, borderColor: 'rgba(247, 59, 32, 0.4)' }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Glowing orb */}
        <motion.div
          className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${card.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-8">
            <motion.div
              className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <card.icon className="w-8 h-8 text-white" />
            </motion.div>

            <div className="text-right">
              <motion.div
                className="text-5xl bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {card.stat}
              </motion.div>
              <div className="text-sm text-orange-300/60">{card.statLabel}</div>
            </div>
          </div>

          <h3 className="text-3xl text-white mb-4">{card.title}</h3>
          <p className="text-base sm:text-lg text-orange-200/70 leading-relaxed">{card.description}</p>

          {/* Animated bottom line */}
          <motion.div
            className={`mt-8 h-1 bg-gradient-to-r ${card.gradient} rounded-full w-0 group-hover:w-full transition-all duration-700`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function StackedCards() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative z-10" style={{ background: 'transparent' }}>
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange-400/15 rounded-full blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white mb-6">
            Why Millions Choose{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              AimPay
            </span>
          </h2>
          <p className="text-xl text-orange-200/70 max-w-3xl mx-auto">
            Experience the future of cross-border payments with unmatched speed, security, and savings.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {cards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
