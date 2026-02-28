import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Plus, Repeat, Send, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router';

const steps = [
  {
    id: 'add',
    icon: Plus,
    title: 'Add Money',
    description: 'Securely add funds from your bank account or card',
    color: 'from-orange-500 to-orange-600',
    details: ['Link your bank account', 'Add via debit/credit card', 'Instant verification']
  },
  {
    id: 'exchange',
    icon: Repeat,
    title: 'Exchange',
    description: 'Get the best exchange rates in real-time',
    color: 'from-orange-600 to-orange-700',
    details: ['Mid-market rates', 'No hidden markup', 'Rate lock guarantee']
  },
  {
    id: 'send',
    icon: Send,
    title: 'Send',
    description: 'Transfer money globally in seconds',
    color: 'from-orange-500 to-orange-600',
    details: ['Instant transfers', '180+ countries', 'Real-time tracking']
  }
];

export function AddExchangeSend() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-50/30" />

      {/* Static orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-50 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-50 border border-orange-200 text-orange-600 rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <DollarSign className="w-4 h-4" />
            <span className="text-sm font-medium">Simple. Fast. Secure.</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-gray-900 font-bold mb-6">
            Send Money in{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Three Steps
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-3xl mx-auto">
            Our streamlined process makes international transfers as easy as sending a text message
          </p>
        </motion.div>

        {/* Animated Flow */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onViewportEnter={() => setActiveStep(index)}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 h-full overflow-hidden group cursor-pointer shadow-lg shadow-gray-200/50"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(247, 59, 32, 0.25)"
                }}
                animate={activeStep === index ? {
                  borderColor: 'rgba(247, 59, 32, 0.6)',
                  boxShadow: "0 25px 50px rgba(247, 59, 32, 0.3)"
                } : {}}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10`}
                  animate={activeStep === index ? { opacity: 0.05 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Step number animation */}
                <motion.div
                  className="absolute top-6 right-6 text-7xl font-bold bg-gradient-to-br from-orange-500/10 to-orange-600/10 bg-clip-text text-transparent"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>

                {/* Icon with animation */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-xl shadow-orange-500/30`}
                  animate={activeStep === index ? {
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 0.6 }}
                  whileHover={{ rotate: 360, scale: 1.15 }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl text-gray-900 font-semibold mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-500 mb-6 relative z-10 text-lg">
                  {step.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-3 relative z-10">
                  {step.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.5 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Pulse ring — removed for performance */}

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-orange-400" />
                  </div>
                )}

              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg sm:text-xl rounded-xl inline-flex items-center justify-center gap-3 relative overflow-hidden group shadow-xl shadow-orange-500/40 w-full sm:w-auto"
            onClick={() => navigate('/contact')}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 30px 60px rgba(247, 59, 32, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Try AimPay Now</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />

            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />


          </motion.button>

          <motion.p
            className="mt-6 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            No credit card required • Free account • Start in 2 minutes
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
