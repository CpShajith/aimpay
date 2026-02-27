import { ArrowRight, Globe, Zap, Shield, Sparkles, Loader2, Play, Pause } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { useCurrencyRates } from '../hooks/useCurrencyRates';
import CurrencyGlobe from '../components copy/CurrencyGlobe';

import v1 from "../public/v1.mp4";
import v2 from "../public/v2.mp4";
import v3 from "../public/v3.mp4";
import v4 from "../public/v4.mp4";
import v5 from "../public/v5.mp4";

const videos: string[] = [v1, v2, v3, v4, v5];
type Position = "center" | "left" | "right" | "hidden";

const variants: Record<Position, any> = {
  center: { x: 0, opacity: 1, zIndex: 0 },
  left: { x: "-100%", opacity: 0, zIndex: -10 },
  right: { x: "100%", opacity: 0, zIndex: -10 },
  hidden: { x: 0, opacity: 0, zIndex: -20 },
};

export function Hero({ onGetStarted }: { onGetStarted?: () => void }) {
  const ref = useRef(null);
  const { rates, loading, error } = useCurrencyRates();

  // --- Background Video State ---
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleEnd = () => {
    setActive((prev) => (prev + 1) % videos.length);
    setProgress(0);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const getPosition = (index: number): Position => {
    if (index === active) return "center";
    if (index === (active + 1) % videos.length) return "right";
    if (index === (active - 1 + videos.length) % videos.length) return "left";
    return "hidden";
  };

  useEffect(() => {
    setProgress(0);
    const currentVideo = videoRefs.current[active];
    if (currentVideo && isPlaying) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(console.error);
    }
  }, [active, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const currentVideo = videoRefs.current[active];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play().catch(console.error);
      }
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div ref={ref} className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-black">

      {/* --- Fullscreen Video Background Slider --- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {videos.map((src, i) => {
          const position = getPosition(i);
          const isActive = i === active;
          return (
            <motion.div
              key={i}
              variants={variants}
              animate={position}
              initial={position}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={src}
                muted
                playsInline
                preload="auto"
                onEnded={isActive ? handleEnd : undefined}
                onTimeUpdate={isActive ? handleTimeUpdate : undefined}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      </div>



      {/* --- Hero Foreground Content --- */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div style={{ y }}>
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full mb-8 backdrop-blur-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Fast & Secure Cross-Border Payments</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Send Money
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient">
                Globally
              </span>
              <br />
              in Seconds
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-gray-200 mb-6 sm:mb-10 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AimPay makes international transactions simple, fast, and affordable. Send money to over 180 countries with the best exchange rates and lowest fees.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl flex items-center justify-center gap-2 relative overflow-hidden group shadow-lg shadow-orange-600/30"
                onClick={onGetStarted}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium">Get Started Free</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.a
                href="#how-it-works"
                className="px-8 py-4 border border-white/30 text-white backdrop-blur-md bg-white/5 rounded-xl hover:bg-white/10 transition-all relative group overflow-hidden block text-center"
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium">See How It Works</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                  className="flex items-center gap-2 group cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <div className="p-2 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 group-hover:border-orange-500/50 transition-colors">
                    <item.icon className="w-4 h-4 text-orange-400 group-hover:text-amber-400" />
                  </div>
                  <span className="text-gray-300 font-light text-sm group-hover:text-white transition-colors">{item.text}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ scale }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-red-500 rounded-full blur-[120px] opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="relative aspect-square w-full max-w-lg mx-auto"
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            >
              {loading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
                  <Loader2 className="w-10 h-10 animate-spin text-orange-400 mb-4" />
                  <p className="text-gray-300 text-sm">Loading Live Rates...</p>
                </div>
              ) : error || !rates ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl rounded-full border border-red-500/30 shadow-2xl">
                  <p className="text-red-400 text-sm text-center px-6 font-medium">
                    {error || 'Failed to load live rates'}
                  </p>
                </div>
              ) : (
                <div className="relative w-full h-full rounded-full border border-white/10 shadow-2xl overflow-hidden bg-black/30 backdrop-blur-md">
                  <CurrencyGlobe rates={rates} />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}