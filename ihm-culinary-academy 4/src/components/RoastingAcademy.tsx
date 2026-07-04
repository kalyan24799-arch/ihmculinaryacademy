import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Flame,
  Thermometer,
  Beef,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Beaker,
  Trophy,
  ChevronRight,
  Timer,
  Layers,
  Droplets,
  Zap,
  RotateCw,
  Container,
  CookingPot,
  Sun,
  Clock,
  Gauge,
  Expand,
  Award,
  Star,
  XCircle,
  ArrowRight,
  Syringe,
} from "lucide-react";

import {
  roastingTypes,
  roastingScience,
  moistureTechniques,
  temperatureGuides,
  roastingTips,
  roastingVsBaking,
  roastingQuizData,
  type QuizQuestion,
} from "../data/roastingData";

// ─── Icon mapping helper ─── //
const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-5 h-5" />,
  Timer: <Timer className="w-5 h-5" />,
  Container: <Container className="w-5 h-5" />,
  CookingPot: <CookingPot className="w-5 h-5" />,
  RotateCw: <RotateCw className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Syringe: <Syringe className="w-5 h-5" />,
  Expand: <Expand className="w-5 h-5" />,
  Thermometer: <Thermometer className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
};

type TabKey = "theory" | "science" | "guidelines" | "quiz";

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: "theory", label: "Fundamentals & Types", icon: <BookOpen className="w-4 h-4" /> },
  { key: "science", label: "Science & Techniques", icon: <Beaker className="w-4 h-4" /> },
  { key: "guidelines", label: "Temperatures & Tips", icon: <Thermometer className="w-4 h-4" /> },
  { key: "quiz", label: "Flash Quiz (15 Q)", icon: <Trophy className="w-4 h-4" /> },
];

// ─── Chef Ranking System ─── //
function getChefRank(score: number, total: number) {
  const pct = (score / total) * 100;
  if (pct === 100) return { title: "🏆 Grand Master Rôtisseur", color: "text-amber-400" };
  if (pct >= 80) return { title: "👨‍🍳 Executive Roast Chef", color: "text-emerald-400" };
  if (pct >= 60) return { title: "🔥 Senior Grill Specialist", color: "text-blue-400" };
  if (pct >= 40) return { title: "🍖 Apprentice Roaster", color: "text-orange-400" };
  return { title: "📚 Culinary Student — Keep Studying!", color: "text-red-400" };
}

export default function RoastingAcademy() {
  const [activeTab, setActiveTab] = useState<TabKey>("theory");

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const handleAnswerSelect = (answerIdx: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIdx);
    setShowExplanation(true);

    if (answerIdx === roastingQuizData[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestion));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < roastingQuizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setAnsweredQuestions(new Set());
  };

  return (
    <div>
      {/* ─── Hero Section ─── */}
      <div className="relative h-[340px] md:h-[420px] overflow-hidden rounded-none border border-[#d4af37]/20 shadow-2xl mb-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600"
            alt="Perfectly roasted prime rib"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#d4af37] text-[10px] tracking-[0.2em] font-mono mb-4 uppercase w-fit">
            <Flame className="w-3.5 h-3.5" />
            <span>Advanced Culinary Module — PDF Knowledge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight max-w-2xl">
            The Art of Roasting{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-500 to-gold-400 text-2xl sm:text-3xl md:text-4xl font-serif italic mt-1">
              Masterclass
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed font-light">
            Master the science of dry-heat cooking: Maillard reactions, caramelization, temperature control,
            and the five classical roasting methods used in professional kitchens worldwide.
          </p>
        </div>
      </div>

      {/* ─── Sub-Navigation Tabs ─── */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-[#d4af37]/15 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-widest rounded-none border transition-all duration-300 cursor-pointer ${
              activeTab === tab.key
                ? "bg-[#d4af37] text-forest-950 border-[#d4af37] font-bold shadow-lg shadow-[#d4af37]/20"
                : "bg-forest-900 text-stone-300 border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:text-[#d4af37]"
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ─── Tab Content ─── */}
      <AnimatePresence mode="wait">
        {/* ═══ THEORY TAB ═══ */}
        {activeTab === "theory" && (
          <motion.div
            key="theory"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Why Roasting is Special */}
            <div className="mb-10 p-6 bg-forest-900 border border-[#d4af37]/20 rounded-none shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-forest-950 border border-[#d4af37]/25 text-[#d4af37] rounded-none">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white uppercase tracking-wider">
                  Why Roasting is Special
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Roasting is one of the oldest and most fundamental dry-heat cooking methods. Unlike boiling or
                steaming, roasting relies on <strong className="text-amber-400">radiant heat and hot air</strong> to
                cook food, creating the unique combination of a flavorful, caramelized exterior and a tender, juicy
                interior. The high temperatures involved trigger the <strong className="text-amber-400">Maillard reaction</strong> and{" "}
                <strong className="text-amber-400">caramelization</strong>, producing hundreds of complex flavor
                compounds that cannot be achieved through any other cooking method.
              </p>
            </div>

            {/* 5 Types Grid */}
            <div className="mb-4">
              <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block mb-1">
                Classical Methods
              </span>
              <h3 className="text-xl font-serif font-bold text-white tracking-tight mb-6">
                The 5 Key Types of Roasting
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {roastingTypes.map((type, idx) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-5 bg-forest-900 border border-[#d4af37]/20 rounded-none shadow-xl hover:border-[#d4af37]/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-forest-950 border border-[#d4af37]/25 text-[#d4af37] rounded-none group-hover:bg-[#d4af37]/10 transition-colors">
                        {iconMap[type.icon] || <Flame className="w-5 h-5" />}
                      </div>
                      <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors leading-tight">
                        {type.name}
                      </h4>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-red-950/40 border border-red-500/20 text-red-400 text-[10px] font-mono tracking-wider rounded-sm mb-3">
                    <Thermometer className="w-3 h-3" />
                    {type.temperature}
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed font-light mb-3">
                    {type.description}
                  </p>

                  <div className="mb-3">
                    <span className="text-[9px] font-mono text-[#d4af37] uppercase tracking-widest block mb-1.5">
                      Best For:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {type.bestFor.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 bg-forest-950 border border-white/10 text-[10px] text-stone-400 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                      Key Technique:
                    </span>
                    <p className="text-[11px] text-stone-400 leading-relaxed italic">
                      {type.keyTechnique}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Roasting vs Baking Comparison */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-forest-950 border border-[#d4af37]/25 text-[#d4af37] rounded-none">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white uppercase tracking-wider">
                  Roasting vs. Baking
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#d4af37]/30">
                      <th className="text-left py-3 px-4 text-[#d4af37] font-mono uppercase tracking-widest text-[10px]">
                        Aspect
                      </th>
                      <th className="text-left py-3 px-4 text-amber-400 font-mono uppercase tracking-widest text-[10px]">
                        🔥 Roasting
                      </th>
                      <th className="text-left py-3 px-4 text-blue-400 font-mono uppercase tracking-widest text-[10px]">
                        🍞 Baking
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {roastingVsBaking.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-white/5 ${idx % 2 === 0 ? "bg-forest-900/50" : "bg-forest-950/50"}`}
                      >
                        <td className="py-3 px-4 text-stone-200 font-semibold">{row.aspect}</td>
                        <td className="py-3 px-4 text-stone-300 font-light">{row.roasting}</td>
                        <td className="py-3 px-4 text-stone-300 font-light">{row.baking}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ═══ SCIENCE TAB ═══ */}
        {activeTab === "science" && (
          <motion.div
            key="science"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Science Cards */}
            <div className="mb-4">
              <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block mb-1">
                Chemical Reactions
              </span>
              <h3 className="text-xl font-serif font-bold text-white tracking-tight mb-6">
                The Science Behind Roasting
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {roastingScience.map((science, idx) => (
                <motion.div
                  key={science.id}
                  initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-forest-900 border border-[#d4af37]/20 rounded-none shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-forest-950 border border-[#d4af37]/25 text-[#d4af37] rounded-none">
                      {iconMap[science.icon] || <Zap className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-bold text-white">{science.title}</h4>
                      <span className="text-[10px] font-mono text-red-400 tracking-wider">
                        Threshold: {science.temperatureThreshold}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed font-light mb-4">
                    {science.description}
                  </p>

                  <ul className="space-y-2">
                    {science.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Moisture Techniques */}
            <div className="mb-4">
              <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block mb-1">
                Moisture Management
              </span>
              <h3 className="text-xl font-serif font-bold text-white tracking-tight mb-6">
                Basting, Barding & Larding
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {moistureTechniques.map((tech, idx) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="p-5 bg-forest-900 border border-[#d4af37]/20 rounded-none shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-forest-950 border border-[#d4af37]/25 text-[#d4af37] rounded-none">
                      {iconMap[tech.icon] || <Droplets className="w-5 h-5" />}
                    </div>
                    <h4 className="text-sm font-serif font-bold text-white">{tech.name}</h4>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed font-light mb-3">
                    {tech.description}
                  </p>

                  <div className="p-3 bg-forest-950/80 border border-white/5 mb-3">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                      How It Works:
                    </span>
                    <p className="text-[11px] text-stone-400 leading-relaxed">{tech.howItWorks}</p>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-950/30 border border-amber-500/20 text-amber-400 text-[10px] font-mono">
                    <Beef className="w-3 h-3" />
                    {tech.bestFor}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ═══ GUIDELINES TAB ═══ */}
        {activeTab === "guidelines" && (
          <motion.div
            key="guidelines"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Temperature Charts */}
            <div className="mb-4">
              <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block mb-1">
                Professional Standards
              </span>
              <h3 className="text-xl font-serif font-bold text-white tracking-tight mb-6">
                Temperature Reference Charts
              </h3>
            </div>

            <div className="space-y-6 mb-10">
              {temperatureGuides.map((guide) => (
                <div key={guide.id} className="bg-forest-900 border border-[#d4af37]/20 rounded-none shadow-xl overflow-hidden">
                  <div className="px-5 py-3 bg-forest-950 border-b border-[#d4af37]/15 flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-[#d4af37]" />
                    <h4 className="text-xs font-mono font-bold text-[#d4af37] uppercase tracking-widest">
                      {guide.category}
                    </h4>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2.5 px-5 text-stone-400 font-mono uppercase tracking-wider text-[10px]">
                            Item
                          </th>
                          <th className="text-left py-2.5 px-5 text-red-400 font-mono uppercase tracking-wider text-[10px]">
                            Temperature
                          </th>
                          <th className="text-left py-2.5 px-5 text-stone-500 font-mono uppercase tracking-wider text-[10px]">
                            Notes
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {guide.items.map((item, idx) => (
                          <tr
                            key={idx}
                            className={`border-b border-white/5 hover:bg-forest-950/50 transition-colors ${
                              idx % 2 === 0 ? "bg-forest-900/50" : ""
                            }`}
                          >
                            <td className="py-2.5 px-5 text-stone-200 font-semibold">{item.name}</td>
                            <td className="py-2.5 px-5 text-amber-400 font-mono font-bold">{item.tempRange}</td>
                            <td className="py-2.5 px-5 text-stone-400 font-light italic">{item.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Essential Tips */}
            <div className="mb-4">
              <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block mb-1">
                Professional Secrets
              </span>
              <h3 className="text-xl font-serif font-bold text-white tracking-tight mb-6">
                Essential Roasting Tips
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {roastingTips.map((tip, idx) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="group p-5 bg-forest-900 border border-[#d4af37]/20 rounded-none shadow-xl hover:border-[#d4af37]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-forest-950 border border-[#d4af37]/25 text-[#d4af37] rounded-none group-hover:bg-[#d4af37]/10 transition-colors">
                      {iconMap[tip.icon] || <Sparkles className="w-5 h-5" />}
                    </div>
                    <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {tip.title}
                    </h4>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ═══ QUIZ TAB ═══ */}
        {activeTab === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {!quizStarted && !quizComplete ? (
              /* Quiz Start Screen */
              <div className="text-center py-12 px-6">
                <div className="inline-flex p-4 bg-forest-900 border border-[#d4af37]/25 text-[#d4af37] rounded-full mb-6">
                  <Trophy className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  The Art of Roasting — Flash Quiz
                </h3>
                <p className="text-sm text-stone-300 max-w-lg mx-auto mb-2 font-light leading-relaxed">
                  Test your knowledge of roasting science, techniques, and temperature control.
                  <strong className="text-amber-400"> 15 multiple-choice questions</strong> derived directly
                  from professional culinary standards.
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-[10px] font-mono text-stone-400 mb-8">
                  <span className="px-3 py-1.5 bg-forest-900 border border-white/10">📝 15 Questions</span>
                  <span className="px-3 py-1.5 bg-forest-900 border border-white/10">⏱️ No Time Limit</span>
                  <span className="px-3 py-1.5 bg-forest-900 border border-white/10">🎯 Instant Feedback</span>
                </div>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#c4a030] text-forest-950 font-extrabold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#d4af37]/20 inline-flex items-center gap-2"
                >
                  <Flame className="w-4 h-4" />
                  Begin Roasting Quiz
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : quizComplete ? (
              /* Quiz Results Screen */
              <div className="text-center py-10 px-6">
                <div className="inline-flex p-4 bg-forest-900 border border-[#d4af37]/25 text-[#d4af37] rounded-full mb-6">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Quiz Complete!</h3>

                <div className="my-6">
                  <span className="text-5xl font-serif font-black text-[#d4af37]">
                    {score}/{roastingQuizData.length}
                  </span>
                  <p className="text-sm text-stone-300 mt-2">
                    Accuracy:{" "}
                    <strong className="text-amber-400">
                      {Math.round((score / roastingQuizData.length) * 100)}%
                    </strong>
                  </p>
                </div>

                {/* Chef Rank */}
                <div className="p-5 bg-forest-900 border border-[#d4af37]/25 rounded-none inline-block mb-8 shadow-xl">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block mb-1">
                    Your Chef Rank
                  </span>
                  <span className={`text-lg font-serif font-bold ${getChefRank(score, roastingQuizData.length).color}`}>
                    {getChefRank(score, roastingQuizData.length).title}
                  </span>
                </div>

                {/* Score Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.ceil((score / roastingQuizData.length) * 5)
                          ? "text-amber-400 fill-amber-400"
                          : "text-stone-700"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleRestartQuiz}
                  className="px-8 py-3 bg-[#d4af37] hover:bg-[#c4a030] text-forest-950 font-extrabold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#d4af37]/20 inline-flex items-center gap-2"
                >
                  <RotateCw className="w-4 h-4" />
                  Retake Quiz
                </button>
              </div>
            ) : (
              /* Active Quiz Question */
              <div>
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                      Question {currentQuestion + 1} of {roastingQuizData.length}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      Score: {score}/{answeredQuestions.size}
                    </span>
                  </div>
                  <div className="h-1.5 bg-forest-900 border border-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#d4af37] to-amber-500"
                      initial={{ width: "0%" }}
                      animate={{
                        width: `${((currentQuestion + 1) / roastingQuizData.length) * 100}%`,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                {/* Question Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-forest-900 border border-[#d4af37]/20 rounded-none shadow-xl"
                  >
                    <h4 className="text-base sm:text-lg font-serif font-bold text-white mb-6 leading-relaxed">
                      {roastingQuizData[currentQuestion].question}
                    </h4>

                    {/* Options */}
                    <div className="space-y-3 mb-6">
                      {roastingQuizData[currentQuestion].options.map((option, optIdx) => {
                        const isSelected = selectedAnswer === optIdx;
                        const isCorrect = optIdx === roastingQuizData[currentQuestion].correctAnswer;
                        const showResult = showExplanation;

                        let optionClasses =
                          "w-full text-left p-4 border text-xs sm:text-sm transition-all duration-300 flex items-center gap-3 cursor-pointer ";

                        if (showResult) {
                          if (isCorrect) {
                            optionClasses +=
                              "bg-emerald-950/30 border-emerald-500/50 text-emerald-300";
                          } else if (isSelected && !isCorrect) {
                            optionClasses +=
                              "bg-red-950/30 border-red-500/50 text-red-300";
                          } else {
                            optionClasses +=
                              "bg-forest-950/50 border-white/5 text-stone-500";
                          }
                        } else {
                          optionClasses += isSelected
                            ? "bg-[#d4af37]/10 border-[#d4af37]/50 text-white"
                            : "bg-forest-950 border-white/10 text-stone-300 hover:border-[#d4af37]/30 hover:text-white";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerSelect(optIdx)}
                            disabled={showExplanation}
                            className={optionClasses}
                          >
                            <span className="w-7 h-7 flex items-center justify-center border border-current rounded-full text-[10px] font-mono font-bold shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1">{option}</span>
                            {showResult && isCorrect && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                            )}
                            {showResult && isSelected && !isCorrect && (
                              <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {showExplanation && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-forest-950 border border-[#d4af37]/15 mb-5"
                      >
                        <div className="flex items-center gap-1.5 mb-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest font-bold">
                            Explanation
                          </span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed font-light">
                          {roastingQuizData[currentQuestion].explanation}
                        </p>
                      </motion.div>
                    )}

                    {/* Next Button */}
                    {showExplanation && (
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-2.5 bg-[#d4af37] hover:bg-[#c4a030] text-forest-950 font-extrabold text-xs uppercase tracking-widest transition-all cursor-pointer inline-flex items-center gap-2"
                      >
                        {currentQuestion < roastingQuizData.length - 1 ? (
                          <>
                            Next Question
                            <ChevronRight className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            View Results
                            <Trophy className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
