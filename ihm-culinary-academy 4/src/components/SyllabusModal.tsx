import React, { useState } from "react";
import { SemesterSyllabus, SyllabusTopic } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { X, Clock, Award, BookOpen, ChefHat, Search, Bookmark, BookmarkCheck, Printer, Check } from "lucide-react";

interface SyllabusModalProps {
  syllabus: SemesterSyllabus | null;
  onClose: () => void;
  bookmarkedSubjects: string[];
  onToggleBookmark: (code: string) => void;
}

export default function SyllabusModal({
  syllabus,
  onClose,
  bookmarkedSubjects,
  onToggleBookmark
}: SyllabusModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"syllabus" | "practicals">("syllabus");
  const [printSuccess, setPrintSuccess] = useState(false);

  if (!syllabus) return null;

  // Filter subjects based on search
  const filteredSubjects = syllabus.subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.modules.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const simulatePrint = () => {
    setPrintSuccess(true);
    setTimeout(() => {
      setPrintSuccess(false);
      window.print();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative w-full max-w-5xl bg-forest-900 border border-[#d4af37]/25 text-neutral-200 rounded-none shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
        >
          {/* Header styling with gold-green luxury accents */}
          <div className="p-6 md:p-8 bg-forest-950 border-b border-[#d4af37]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-bold">
                  {syllabus.semester} Curriculum
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="text-xs text-stone-400 font-mono">
                  Focus: {syllabus.coreFocus}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-white tracking-tight">
                {syllabus.title}
              </h2>
              <p className="text-xs md:text-sm text-stone-300 mt-1 max-w-2xl leading-relaxed font-light">
                {syllabus.description}
              </p>
            </div>

            {/* Actions for printing and closing */}
            <div className="flex items-center gap-2.5 self-end md:self-auto">
              <button
                onClick={simulatePrint}
                className="flex items-center gap-2 px-4 py-2 rounded-none bg-forest-900 hover:bg-forest-850 text-xs font-semibold text-[#d4af37] transition-colors border border-[#d4af37]/25 cursor-pointer"
              >
                {printSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Preparing Print...</span>
                  </>
                ) : (
                  <>
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Syllabus</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-none bg-forest-900 hover:bg-forest-850 text-stone-400 hover:text-white transition-colors border border-[#d4af37]/20 cursor-pointer"
                id="close-syllabus-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Subheader Search and Tabs */}
          <div className="px-6 md:px-8 py-4 bg-forest-900 border-b border-[#d4af37]/15 flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Nav tabs for modular sections */}
            <div className="flex p-1 bg-forest-950 rounded-none border border-[#d4af37]/20 w-full md:w-auto">
              <button
                onClick={() => setActiveTab("syllabus")}
                className={`flex-1 md:flex-none px-4 py-1.5 rounded-none text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "syllabus"
                    ? "bg-[#d4af37] text-forest-950 shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                Syllabus &amp; Chapters
              </button>
              <button
                onClick={() => setActiveTab("practicals")}
                className={`flex-1 md:flex-none px-4 py-1.5 rounded-none text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "practicals"
                    ? "bg-[#d4af37] text-forest-950 shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                Kitchen Recipes &amp; Practicals
              </button>
            </div>

            {/* Live filtration query search bar */}
            <div className="relative w-full md:w-72">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-stone-500">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search subjects or recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-none bg-forest-950 border border-[#d4af37]/20 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d4af37]/50 transition-colors"
              />
            </div>
          </div>

          {/* Modal Main Body Scroll View */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-forest-950">
            {filteredSubjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-stone-400 text-sm">No curriculum items matched your search.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-3 text-xs text-[#d4af37] underline font-mono cursor-pointer"
                >
                  Clear search term
                </button>
              </div>
            ) : (
              <div className="space-y-8 max-w-full">
                {filteredSubjects.map((subject, index) => {
                  const isBookmarked = bookmarkedSubjects.includes(subject.code);
                  return (
                    <motion.div
                      key={subject.code}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-5 md:p-6 bg-forest-900 border border-[#d4af37]/20 rounded-none shadow-xl relative"
                    >
                      {/* Subject Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#d4af37]/15">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded-none bg-forest-950 text-[#d4af37] text-[10px] uppercase font-mono tracking-widest font-bold border border-[#d4af37]/15">
                              {subject.code}
                            </span>
                            <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                              {subject.hours} Hours Course
                            </span>
                            <span className="text-xs text-stone-600">&bull;</span>
                            <span className="text-xs text-stone-300 font-medium">
                              Type: {subject.type}
                            </span>
                          </div>
                          <h3 className="text-lg font-serif font-bold text-white tracking-tight">
                            {subject.name}
                          </h3>
                        </div>

                        {/* Toggle bookmark */}
                        <button
                          onClick={() => onToggleBookmark(subject.code)}
                          className="self-start sm:self-auto flex items-center gap-1 text-xs px-3 py-1.5 rounded-none border border-[#d4af37]/25 hover:border-[#d4af37]/45 text-stone-400 hover:text-white transition-all bg-forest-950 group cursor-pointer"
                        >
                          {isBookmarked ? (
                            <>
                              <BookmarkCheck className="w-4 h-4 text-[#d4af37]" />
                              <span className="text-[#d4af37] font-semibold font-mono">Bookmarked</span>
                            </>
                          ) : (
                            <>
                              <Bookmark className="w-4 h-4 group-hover:text-[#d4af37] transition-colors" />
                              <span className="font-mono text-stone-300">Save Subject</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Dynamic Content View depending on the active top navigation tab */}
                      <div className="mt-4">
                        {activeTab === "syllabus" && (
                          <div>
                            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-3 font-mono flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                              Core Academic Modules &amp; Chapters
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {subject.modules.map((module, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-stone-200 flex items-start gap-2 p-2.5 rounded-none bg-forest-950 border border-[#d4af37]/10 hover:border-[#d4af37]/25 transition-colors"
                                >
                                  <span className="font-mono text-[#d4af37] bg-[#d4af37]/10 min-w-[20px] h-5 rounded-none flex items-center justify-center text-[10px] font-bold border border-[#d4af37]/20">
                                    {idx + 1}
                                  </span>
                                  <span className="leading-relaxed font-bold text-white tracking-wide">{module}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {activeTab === "practicals" && (
                          <div>
                            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-3 font-mono flex items-center gap-1.5">
                              <ChefHat className="w-3.5 h-3.5 text-[#d4af37]" />
                              Kitchen Practicals &amp; Food Preparation Tasks
                            </h4>
                            {subject.keyRecipes && subject.keyRecipes.length > 0 ? (
                              <div className="flex flex-col gap-3">
                                <p className="text-xs text-stone-400 italic font-light">
                                  Students must prepare, plate, and present the following classical menu items to the head chef:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {subject.keyRecipes.map((recipe, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-2 p-2.5 rounded-none bg-forest-950 border border-[#d4af37]/10 text-xs text-stone-200"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-none bg-[#d4af37]" />
                                      <span className="font-medium text-stone-100">{recipe}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <p className="text-xs text-stone-400 italic p-4 rounded-none bg-forest-950 border border-[#d4af37]/15 text-center font-light">
                                This is primarily a theory-focused module. No direct commercial kitchen recipes are mapped.
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-forest-950 border-t border-[#d4af37]/15 flex justify-between items-center text-[10px] text-stone-400 font-mono">
            <span>IHM Academic Standards Committee</span>
            <span>Update Ref: BSC-HHA-2026.04</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
