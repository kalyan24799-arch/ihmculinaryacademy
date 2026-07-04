import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [secondsLeft, setSecondsLeft] = useState(7);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // 7 seconds countdown
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Precise progress bar (updates every 50ms for smooth fluid animation)
    const totalDuration = 7000;
    const updateRate = 50;
    const progressInterval = setInterval(() => {
      setPercentage((prev) => {
        const next = prev + (updateRate / totalDuration) * 100;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, updateRate);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="relative w-full h-screen bg-forest-950 overflow-hidden flex flex-col justify-between items-center z-50 text-white p-6 md:p-12">
      {/* Immersive Ken-Burns Culinary Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/90 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1600"
          alt="Professional Chef Kitchen"
          className="w-full h-full object-cover opacity-25 grayscale"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.25 }}
          transition={{ duration: 7.5, ease: "linear" }}
        />
      </div>

      {/* Decorative Golden Border Frames */}
      <div className="absolute inset-4 md:inset-8 border border-[#d4af37]/15 pointer-events-none z-10 rounded-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#d4af37]/45" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#d4af37]/45" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#d4af37]/45" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#d4af37]/45" />
      </div>

      {/* Header Badge */}
      <motion.div
        className="relative z-20 mt-12 flex items-center justify-center gap-2 px-5 py-2 border border-[#d4af37]/25 rounded-none bg-forest-950/90 backdrop-blur-md shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest font-mono text-[#d4af37] font-bold">
          The Chef&apos;s Sanctuary &bull; Est. 2026
        </span>
      </motion.div>

      {/* Welcome Title Core Content */}
      <div className="relative z-20 max-w-4xl text-center flex-1 flex flex-col justify-center items-center px-4">
        {/* Animated quote icon decorative */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-6"
        >
          <BookOpen className="w-10 h-10 text-[#d4af37]/35" />
        </motion.div>

        {/* Master heading: Welcome to Encyclopedia for IHM Culinary Journey */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          {/* Golden Luxury Reflected Metal Text Effect */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-stone-200 to-stone-400 capitalize text-xs sm:text-sm md:text-md tracking-[0.25em] mb-4 font-mono text-[#d4af37] font-bold">
            ENTERING THE ENCYCLOPEDIA OF
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-[#d4af37] to-amber-300 drop-shadow-[0_2px_15px_rgba(212,175,55,0.2)] pb-2 font-serif font-bold italic">
            IHM Culinary Journey &amp; Hospitality
          </span>
        </motion.h1>

        {/* Stately supportive subtext */}
        <motion.p
          className="text-stone-300 max-w-xl text-center text-xs sm:text-sm leading-relaxed mb-10 italic font-serif font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          &ldquo;Gourmandise is the impassioned, rational, and habitual preference for items of taste.&rdquo; &mdash; Brillat-Savarin
        </motion.p>
      </div>

      {/* Footer Progress and Skip Actions */}
      <div className="relative z-20 w-full max-w-lg mb-12 flex flex-col items-center px-6">
        {/* Progress Tracker Bar */}
        <div className="w-full h-[2px] bg-forest-900 rounded-none overflow-hidden mb-5 flex">
          <motion.div
            className="h-full bg-gradient-to-r from-[#d4af37] to-yellow-300"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Floating details and instant gatekeeper */}
        <div className="flex justify-between items-center w-full text-[10px] font-mono text-stone-450 uppercase tracking-widest">
          <span>Syllabus Syncing... {Math.round(percentage)}%</span>
          <span>Entering in {secondsLeft}s</span>
        </div>

        {/* High-end Skip Portal Option */}
        <motion.button
          onClick={onComplete}
          className="mt-8 flex items-center justify-center gap-2 group text-xs tracking-widest uppercase text-[#d4af37] border border-[#d4af37]/25 px-5 py-2.5 rounded-none bg-[#d4af37]/5 hover:bg-[#d4af37] hover:text-[#0c2214] transition-all duration-300 cursor-pointer font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Skip Experience</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
}
