import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  UtensilsCrossed,
  GlassWater,
  Briefcase,
  Sparkles,
  Search,
  BookOpen,
  ArrowUp,
  Download,
  Upload,
  Calendar,
  Layers,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  DollarSign,
  Phone,
  Mail,
  User,
  Heart,
  Eye,
  Info,
  ExternalLink,
  Milestone,
  MapPin,
  CheckCircle,
  FileText,
  MessageSquare
} from "lucide-react";

// Imports from our custom dataset and components
import { syllabusData } from "./data/syllabusData";
import {
  sliderSlides,
  subjectsCoveredList,
  galleryPhotos,
  studyNotesList,
  industryNews
} from "./data/generalData";

import WelcomeScreen from "./components/WelcomeScreen";
import SyllabusModal from "./components/SyllabusModal";
import Navbar from "./components/Navbar";
import AiChat from "./components/AiChat";
import CertificateShowcase from "./components/CertificateShowcase";
import SliderDetailModal from "./components/SliderDetailModal";
import RoastingAcademy from "./components/RoastingAcademy";
import { SemesterSyllabus, StudyNote } from "./types";

export default function App() {
  // Opening portal intro welcome screen
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  // Dark & Light Mode Theme
  const [darkMode, setDarkMode] = useState(true);

  // Authenticated Student profile
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState<string | null>(null);
  const [studentEmail, setStudentEmail] = useState<string | null>(null);

  // Dynamic Syllabus viewport modal trigger
  const [selectedSyllabus, setSelectedSyllabus] = useState<SemesterSyllabus | null>(null);

  // Bookmarks syllabus items state list
  const [bookmarkedSubjects, setBookmarkedSubjects] = useState<string[]>([]);

  // Search filter query parameter
  const [searchQuery, setSearchQuery] = useState("");

  // Dynamic public Notes pool state (allows uploads during session)
  const [notesList, setNotesList] = useState<StudyNote[]>(studyNotesList);
  const [previewNote, setPreviewNote] = useState<StudyNote | null>(null);
  const [downloadingNoteId, setDownloadingNoteId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // UI Drawer controllers
  const [chatOpen, setChatOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Floating back to top controller
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Auto changing slider section index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Active Slider Details Modal Type
  const [selectedSlideType, setSelectedSlideType] = useState<"vacancies" | "ingredients" | "videos" | "news" | "chefs" | "miscellaneous" | null>(null);

  // Real-time visitor counter persistent trace state
  const [visitorCount, setVisitorCount] = useState(24792);

  // Contact form submission feedback
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  // Simulated placement counter metrics indicators
  const [chefCounter, setChefCounter] = useState(0);
  const [placedCounter, setPlacedCounter] = useState(0);
  const [partnerCounter, setPartnerCounter] = useState(0);

  // Gallery image swap simulator state
  const [galleryItems, setGalleryItems] = useState(galleryPhotos);
  const [editingImageId, setEditingImageId] = useState<string | null>(null);
  const [customImageUrl, setCustomImageUrl] = useState("");

  // Initialize and check localStorage cache hooks
  useEffect(() => {
    // Check introduction bypassed
    const skipIntro = sessionStorage.getItem("ihm_academy_skip_intro");
    if (skipIntro === "true") {
      setWelcomeComplete(true);
    }

    // Set Dark Mode initial state
    const cachedTheme = localStorage.getItem("ihm_academy_dark_mode");
    if (cachedTheme !== null) {
      setDarkMode(cachedTheme === "true");
    }

    // Checking Student login caching
    const cachedName = localStorage.getItem("ihm_academy_student_name");
    const cachedEmail = localStorage.getItem("ihm_academy_student_email");
    if (cachedName && cachedEmail) {
      setIsLoggedIn(true);
      setStudentName(cachedName);
      setStudentEmail(cachedEmail);
    }

    // Loaded Bookmarked course chapters
    const cachedBookmarks = localStorage.getItem("ihm_academy_bookmarks");
    if (cachedBookmarks) {
      try {
        setBookmarkedSubjects(JSON.parse(cachedBookmarks));
      } catch (e) {}
    }

    // Visitor counter calculator
    const hasVisited = sessionStorage.getItem("ihm_academy_counted");
    const cachedVisitorIndex = localStorage.getItem("ihm_academy_visitors");
    const initialIndex = cachedVisitorIndex ? parseInt(cachedVisitorIndex) : 24792;
    if (!hasVisited) {
      const nextIndex = initialIndex + 1;
      setVisitorCount(nextIndex);
      localStorage.setItem("ihm_academy_visitors", nextIndex.toString());
      sessionStorage.setItem("ihm_academy_counted", "true");
    } else {
      setVisitorCount(initialIndex);
    }

    // Floating Back to Top Listener
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync state checklists to light up html body classes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Animated counters tick-up timer intervals
  useEffect(() => {
    if (!welcomeComplete) return;

    const chefTarget = 42;
    const placedTarget = 15420;
    const partnerTarget = 115;

    const chefTimer = setInterval(() => {
      setChefCounter((prev) => {
        if (prev >= chefTarget) {
          clearInterval(chefTimer);
          return chefTarget;
        }
        return prev + 1;
      });
    }, 45);

    const placedTimer = setInterval(() => {
      setPlacedCounter((prev) => {
        if (prev >= placedTarget) {
          clearInterval(placedTimer);
          return placedTarget;
        }
        return prev + Math.floor(placedTarget / 100) + 12;
      });
    }, 15);

    const partnerTimer = setInterval(() => {
      setPartnerCounter((prev) => {
        if (prev >= partnerTarget) {
          clearInterval(partnerTimer);
          return partnerTarget;
        }
        return prev + 3;
      });
    }, 30);

    return () => {
      clearInterval(chefTimer);
      clearInterval(placedTimer);
      clearInterval(partnerTimer);
    };
  }, [welcomeComplete]);

  // Auto changing slide animation loop - 4 seconds intervals
  useEffect(() => {
    if (!welcomeComplete) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [welcomeComplete]);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("ihm_academy_dark_mode", nextMode.toString());
  };

  const handleStudentLogin = (name: string, email: string) => {
    setIsLoggedIn(true);
    setStudentName(name);
    setStudentEmail(email);
    localStorage.setItem("ihm_academy_student_name", name);
    localStorage.setItem("ihm_academy_student_email", email);
    setLoginOpen(false);
  };

  const handleStudentLogout = () => {
    setIsLoggedIn(false);
    setStudentName(null);
    setStudentEmail(null);
    localStorage.removeItem("ihm_academy_student_name");
    localStorage.removeItem("ihm_academy_student_email");
  };

  const handleToggleBookmark = (code: string) => {
    let nextBookmarks = [...bookmarkedSubjects];
    if (nextBookmarks.includes(code)) {
      nextBookmarks = nextBookmarks.filter((c) => c !== code);
    } else {
      nextBookmarks.push(code);
    }
    setBookmarkedSubjects(nextBookmarks);
    localStorage.setItem("ihm_academy_bookmarks", JSON.stringify(nextBookmarks));
  };

  const handleUploadNewNote = (note: StudyNote) => {
    const nextList = [note, ...notesList];
    setNotesList(nextList);
  };

  const handleDownloadSimulation = (noteId: string) => {
    setDownloadingNoteId(noteId);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingNoteId(null);
            alert("Download Complete! You have saved your specified document successfully.");
          }, 400);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  const handleReplaceImageSubmit = (id: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!customImageUrl.trim()) return;

    setGalleryItems(
      galleryItems.map((img) => (img.id === id ? { ...img, image: customImageUrl } : img))
    );
    setEditingImageId(null);
    setCustomImageUrl("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    setContactName("");
    setContactEmail("");
    setContactMessage("");
    setTimeout(() => {
      setContactFormSubmitted(false);
    }, 4000);
  };

  // Searching logic mapping notes, semesters, and recipes
  const matchesSearch = (item: any, type: "semester" | "note") => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    if (type === "semester") {
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.coreFocus.toLowerCase().includes(q) ||
        item.subjects.some(
          (sub: any) =>
            sub.name.toLowerCase().includes(q) ||
            sub.code.toLowerCase().includes(q) ||
            (sub.keyRecipes && sub.keyRecipes.some((rcp: string) => rcp.toLowerCase().includes(q)))
        )
      );
    } else {
      return (
        item.title.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.semester.toLowerCase().includes(q) ||
        (item.contentPreview && item.contentPreview.toLowerCase().includes(q))
      );
    }
  };

  // Skip welcome portals for immediate edit visual matches if skip parameter set
  const onWelcomeFinish = () => {
    setWelcomeComplete(true);
    sessionStorage.setItem("ihm_academy_skip_intro", "true");
  };

  if (!welcomeComplete) {
    return <WelcomeScreen onComplete={onWelcomeFinish} />;
  }

  // Filter semester datasets matching search
  const filteredSemesters = syllabusData.filter((sem) => matchesSearch(sem, "semester"));

  // Filter study notes matching search
  const filteredNotes = notesList.filter((note) => matchesSearch(note, "note"));

  return (
    <div
      className="min-h-screen font-sans antialiased select-none transition-colors duration-300 bg-forest-950 text-neutral-100"
      id="ihm-root-element"
    >
      {/* 1. Header/Navbar */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenChat={() => setChatOpen(true)}
        visitorCount={visitorCount}
      />

      {/* 2. Hero Presentation Banner Section */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-forest-900 via-forest-950 to-transparent">
        {/* Floating background chef image and luxury shading */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1600"
            alt="Chef plating Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Spark Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#d4af37] text-[10px] tracking-[0.2em] font-mono mb-6 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The encyclopedia for IHM culinary journey</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6.5xl font-serif font-extrabold tracking-tight max-w-4xl text-white">
            Your Complete Guide to{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-500 to-gold-400 mt-2 font-serif italic text-4xl sm:text-6xl md:text-7xl">
              Hotel Management &amp; Culinary Arts
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base max-w-xl text-stone-300 leading-relaxed italic font-serif">
            &ldquo;Learn, Explore and Master Every Semester of Hotel Management.&rdquo;
          </p>

          {/* Interactive Search Bar Hub */}
          <div className="mt-10 w-full max-w-2xl bg-forest-900/90 backdrop-blur-md p-2 rounded-sm border border-[#d4af37]/20 shadow-xl flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#d4af37]/80">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search Subjects, Syllabuses, Solved Papers, or Gourmet Recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-3 rounded-none bg-forest-950 border border-white/5 text-xs text-white focus:outline-none focus:border-[#d4af37]/40"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-stone-400 hover:text-[#d4af37] font-mono underline pr-2"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => {
                const element = document.getElementById("semesters-sec");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-none bg-[#d4af37] hover:bg-[#c4a030] text-forest-950 font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Analyze Catalogues
            </button>
          </div>

          {/* CTA Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <button
              onClick={() => {
                const target = document.getElementById("semesters-sec");
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-6 py-3 rounded-none bg-[#d4af37] hover:bg-[#c4a030] text-forest-950 font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-black/40"
            >
              Explore Courses
            </button>
            <button
              onClick={() => {
                const target = document.getElementById("notes-sec");
                if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-6 py-3 rounded-none bg-forest-900 hover:bg-forest-800 border border-[#d4af37]/20 text-neutral-300 font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              View Syllabus &amp; Notes
            </button>
          </div>

          {/* Red Sliding Notice */}
          <div className="mt-8 max-w-2xl mx-auto overflow-hidden bg-red-950/20 border-y border-red-500/20 py-2.5 px-4 backdrop-blur-xs">
            <marquee direction="left" scrollamount="5" className="block text-red-500 font-mono text-xs font-semibold tracking-wider">
              NOTE:-At present our platform host culinary notes only.We are actively developing content for all major subject.
            </marquee>
          </div>
        </div>
      </section>

      {/* 3. Semester Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="semesters-sec">
        <div className="text-center mb-12">
          <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block mb-1">
            Academic Pathways
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-white tracking-tight">
            IHM Undergrad Semesters
          </h3>
          <p className="text-xs text-stone-300 mt-2 max-w-xl mx-auto font-light">
            Click on any semester card to view the complete syllabus modules, recommended literature, and targeted culinary recipes.
          </p>
        </div>

        {/* 5 attractive clickable cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredSemesters.map((sem, idx) => {
            // Elegant cooking-themed static image mapping for backgrounds
            const illustrations = [
              "/src/assets/images/first_semester_bg_1781409588071.jpg", // kitchen
              "/src/assets/images/second_semester_bg_1781409795264.jpg", // soup training / 2nd semester lecture
              "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500", // bar service
              "/src/assets/images/fifth_semester_bg_1781415365187.jpg", // Garde Manger / 5th semester cold larder
              "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=500"  // pastry baking
            ];

            return (
              <motion.div
                key={sem.semester}
                onClick={() => setSelectedSyllabus(sem)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-80 rounded-none overflow-hidden cursor-pointer bg-forest-900 border border-[#d4af37]/25 shadow-2xl flex flex-col justify-end p-5"
              >
                {/* Visual Image Background */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/50 to-transparent z-10" />
                  <img
                    src={illustrations[idx] || illustrations[0]}
                    alt={sem.semester}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative z-20">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#d4af37] font-bold bg-forest-950/90 border border-[#d4af37]/20 px-2.5 py-1 rounded-sm">
                    B.Sc. H&amp;HA Catalog
                  </span>
                  <h4 className="text-base font-serif font-bold text-white mt-3.5 leading-tight group-hover:text-[#d4af37] transition-colors">
                    {sem.semester === "3rd & 4th Semester" ? "3rd & 4th Semester" : `${sem.semester}`}
                  </h4>
                  <p className="text-[10px] text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {sem.coreFocus}
                  </p>
                  <div className="mt-3.5 flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold font-mono">
                    <span>Show Syllabus</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Auto Changing Slider Section */}
      <section className="py-16 md:py-24 bg-forest-950 border-t border-b border-[#d4af37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block mb-1">
              Gourmet Horizons
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-white tracking-tight">
              Our Hospitality Pillars
            </h3>
          </div>

          <div className="relative h-[420px] md:h-[500px] rounded-none overflow-hidden tracking-wide shadow-2xl border border-[#d4af37]/20 cursor-pointer group/slider" onClick={() => setSelectedSlideType(sliderSlides[currentSlide].slideType || null)}>
            {/* Auto change background slides */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Red flashing/pulsing ribbon on top of the first slide */}
                {sliderSlides[currentSlide].slideType === "vacancies" && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 w-fit max-w-[90%] pointer-events-none">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                      className="bg-red-600 border border-red-400 text-white font-mono text-[10px] md:text-xs font-black tracking-widest px-4 py-2 shadow-2xl flex items-center gap-2 rounded-full uppercase"
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
                      <span>CURRENT VACANCIES &bull; CLICK TO OPEN PORTAL</span>
                    </motion.div>
                  </div>
                )}

                {/* Gradiant shading layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/25 to-forest-950/65 z-10" />
                <img
                  src={sliderSlides[currentSlide].image}
                  alt={sliderSlides[currentSlide].title}
                  className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover/slider:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-12 left-6 md:left-12 max-w-xl z-20 text-left">
                  <span className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-mono text-[#d4af37] bg-forest-950/90 border border-[#d4af37]/30 rounded-none">
                     Slide {sliderSlides[currentSlide].id} of 6 &bull; Interactive Module
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif font-black text-white mt-3.5 leading-snug uppercase tracking-tight drop-shadow-xl text-yellow-50/95">
                    {sliderSlides[currentSlide].title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-300 mt-2 leading-relaxed font-light drop-shadow">
                    {sliderSlides[currentSlide].subtitle}
                  </p>
                  
                  {/* Highly attractive golden click-to-open indicator */}
                  <div className="mt-4 inline-flex items-center gap-2 bg-[#d4af37] text-forest-950 px-4 py-2 font-mono text-[9px] md:text-[10px] font-black tracking-widest uppercase transition-colors hover:bg-white">
                    <span>LAUNCH PORTAL PORTFOLIO</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Bullet Indicators */}
            <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-2">
              {sliderSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-none transition-all duration-300 ${
                    currentSlide === idx ? "w-6 bg-[#d4af37]" : "w-2 bg-[#d4af37]/20"
                  }`}
                  title={`Go to slide ${slide.id}`}
                />
              ))}
            </div>

            {/* Slider arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-none bg-forest-950/90 border border-[#d4af37]/35 text-[#d4af37] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderSlides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-none bg-forest-950/90 border border-[#d4af37]/35 text-[#d4af37] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Animated Metrics Section */}
      <section className="py-12 bg-forest-900 border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="p-4 rounded-none bg-forest-950/70 border border-[#d4af37]/20">
              <span className="text-3xl sm:text-4xl font-serif font-black text-[#d4af37]">
                {placedCounter.toLocaleString()}+
              </span>
              <p className="text-[10px] tracking-widest text-[#d4af37]/80 uppercase font-mono mt-1.5">
                Scholars Placed Internationally
              </p>
            </div>
            <div className="p-4 rounded-none bg-forest-950/70 border border-[#d4af37]/20">
              <span className="text-3xl sm:text-4xl font-serif font-black text-[#d4af37]">
                {chefCounter}+
              </span>
              <p className="text-[10px] tracking-widest text-[#d4af37]/80 uppercase font-mono mt-1.5">
                Master Culinary Guides &amp; Faculty
              </p>
            </div>
            <div className="p-4 rounded-none bg-forest-950/70 border border-[#d4af37]/20">
              <span className="text-3xl sm:text-4xl font-serif font-black text-[#d4af37]">
                {partnerCounter}+
              </span>
              <p className="text-[10px] tracking-widest text-[#d4af37]/80 uppercase font-mono mt-1.5">
                5-Star Corporate recruiters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. About IHM & Subjects Covered Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12" id="subjects-sec">
        {/* Left column About */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block">
            Academic Overview
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
            Comprehensive Training for Global Hospitality Leaders
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-350 leading-relaxed max-w-md">
            <div>
              <h4 className="font-serif font-bold text-[#d4af37] mb-1">What is Hotel Management?</h4>
              <p>
                A high-discipline executive science containing culinary chemistry, lodging operations, beverage lists design, event scheduling, and yield forecasting across fine properties.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#d4af37] mb-1">Career Placements Potential</h4>
              <p>
                From Michelin-grade kitchens to command layouts on royal sea voyages, global travel lines eagerly absorb skilled IHM graduates.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Core Importance of Culinary Arts</h4>
              <p>
                Food is primary. Cooking is an art form driven by chemical reactions, heat absorption science, molecular emulsion balances, and artistic presentation skills.
              </p>
            </div>
          </div>
        </div>

        {/* Right column Subjects Covered */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-white/10 pb-3">
            <h3 className="text-lg font-serif font-bold text-white uppercase tracking-wider">
              Core Modules Covered
            </h3>
            <p className="text-xs text-stone-400">
              Expertly structured curricula designed to pass strict NCHM-CT validation standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subjectsCoveredList.map((sub) => (
              <div
                key={sub.id}
                className="p-4 rounded-none bg-forest-900 border border-[#d4af37]/20 hover:border-[#d4af37]/45 transition-all shadow-xl"
              >
                <div className="flex items-center gap-2 mb-2 font-mono">
                  <span className="p-1 px-2 bg-forest-950 text-[#d4af37] text-[10px] font-bold tracking-widest font-mono border border-[#d4af37]/15">
                    {sub.title}
                  </span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  {sub.keySkills.join(" \u2022 ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 8. Certificate Showcase Section (Interactive) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="certificates-sec">
        <CertificateShowcase />
      </section>

      {/* 9. Historical Image Gallery Section with replacement simulation */}
      <section className="py-16 lg:py-24 bg-forest-950 border-t border-b border-[#d4af37]/15" id="gallery-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block mb-1">
              Gourmet Showcase
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-white tracking-tight">
              Campus Practical Gallery
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              A view inside our dynamic pastry bakes, kitchen lines, and cocktail bars. You can paste custom URLs to customize layout.
            </p>
          </div>

          {/* Grid Layout containing swap controllers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-none h-68 overflow-hidden border border-[#d4af37]/20 shadow-2xl flex flex-col justify-end p-4 bg-forest-900"
              >
                {/* Background Photo */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/50 to-transparent z-10" />
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Replacement form popup */}
                {editingImageId === photo.id ? (
                  <form
                    onSubmit={(e) => handleReplaceImageSubmit(photo.id, e)}
                    className="absolute inset-x-3 bottom-3 z-30 p-2.5 rounded-none bg-forest-950 border border-[#d4af37]/45 shadow-2xl flex flex-col gap-1.5"
                  >
                    <span className="text-[9px] uppercase tracking-wider text-[#d4af37] font-bold font-mono">
                      Swap Picture URL
                    </span>
                    <input
                      type="url"
                      required
                      value={customImageUrl}
                      onChange={(e) => setCustomImageUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/your-image..."
                      className="px-2 py-1 bg-forest-900 border border-white/10 text-[10px] text-white focus:outline-none"
                    />
                    <div className="flex gap-1.5 justify-end">
                      <button
                        type="button"
                        onClick={() => setEditingImageId(null)}
                        className="text-[9px] text-zinc-400 hover:text-white px-2 py-1 uppercase"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="text-[9px] bg-[#d4af37] text-forest-950 px-2 py-1 font-bold uppercase transition-colors hover:bg-gold-600"
                      >
                        Apply Change
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Standard dynamic labels and hover edit button */
                  <div className="relative z-20 text-left flex justify-between items-end">
                    <div>
                      <span className="text-[8px] uppercase font-mono tracking-[0.12em] text-[#d4af37] bg-forest-950 border border-[#d4af37]/25 px-2.5 py-1 rounded-sm">
                        {photo.category}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-white mt-2.5">
                        {photo.title}
                      </h4>
                      <p className="text-[10px] text-zinc-300 mt-1 max-w-[200px] leading-snug line-clamp-2 font-light">
                        {photo.caption}
                      </p>
                    </div>

                    <button
                      onClick={() => setEditingImageId(photo.id)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 text-[9px] bg-forest-950 hover:bg-forest-900 text-[#d4af37] border border-[#d4af37]/25 rounded-none font-mono transition-opacity cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Swap</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Roasting Academy Section ─── */}
      <section id="roasting-sec" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-forest-950/20">
        <RoastingAcademy />
      </section>

      {/* 12. Contact Instructor section (Kalyan Singh) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#d4af37]/15" id="contact-sec">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left direct contact details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#d4af37] text-xs font-mono tracking-widest uppercase block">
              Enrollment Desk &bull; kalyan24799@gmail.com
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
              Coordinate Directly with Academy Leadership
            </h3>
            <p className="text-xs leading-relaxed text-neutral-450 font-light font-sans">
              Halt uncertainty about semesters, industrial training placements, or custom syllabus booklets. Connect with Kalyan Singh directly or submit the inquiry desk dispatch box.
            </p>

            <div className="space-y-4 pt-4 font-mono text-xs text-neutral-300">
              <div className="flex items-center gap-3 p-3 rounded-none bg-forest-900 border border-[#d4af37]/20 shadow-xl">
                <div className="p-2.5 rounded-none bg-forest-950 border border-[#d4af37]/25 text-[#d4af37]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-500 font-mono">Academy Owner</span>
                  <span className="font-bold text-white uppercase">Kalyan Singh</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-none bg-forest-900 border border-[#d4af37]/20 shadow-xl">
                <div className="p-2.5 rounded-none bg-forest-950 border border-[#d4af37]/25 text-[#d4af37]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-500 font-mono">Phone &bull; WhatsApp</span>
                  <a href="tel:+919958589430" className="font-bold text-white hover:text-[#d4af37] transition-colors">
                     +91 99585 89430
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-none bg-forest-900 border border-[#d4af37]/20 shadow-xl">
                <div className="p-2.5 rounded-none bg-forest-950 border border-[#d4af37]/25 text-[#d4af37]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-500 font-mono">Email Address</span>
                  <a href="mailto:kalyan24799@gmail.com" className="font-bold text-white hover:text-[#d4af37] transition-colors">
                     kalyan24799@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right message form */}
          <div className="lg:col-span-7 p-6 rounded-none bg-forest-900 border border-[#d4af37]/25 shadow-2xl">
            <h4 className="text-xs font-bold uppercase font-mono tracking-widest text-[#d4af37] border-b border-white/5 pb-3 mb-5">
               Submit Academic Inquiry Desk
            </h4>

            {contactFormSubmitted ? (
              <div className="p-8 text-center text-xs text-emerald-400 bg-forest-950 border border-emerald-500/35 rounded-none font-bold font-mono">
                 🎉 Inquiry Form Sent! Administrator Kalyan Singh will review this profile details and dispatch syllabus packages shortly.
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-zinc-400 pb-1.5 font-bold">
                       Student Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Robin Sharma"
                      className="w-full px-4 py-2.5 rounded-none bg-forest-950 border border-white/10 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#d4af37]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono text-zinc-400 pb-1.5 font-bold">
                       Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 rounded-none bg-forest-950 border border-white/10 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#d4af37]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono text-zinc-400 pb-1.5 font-bold">
                     Academic Note / Inquiry Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Describe which semester solved paper catalog or practical records syllabus you are inquiring about..."
                    className="w-full px-4 py-2.5 rounded-none bg-forest-950 border border-white/10 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#d4af37]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-none bg-[#d4af37] hover:bg-[#c4a030] text-forest-950 font-extrabold text-xs tracking-widest uppercase transition-all shadow-md cursor-pointer"
                >
                  Submit Inquiry Code
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="bg-forest-950 text-zinc-500 border-t border-[#d4af37]/15 py-12 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-between items-center gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-[#d4af37]/35 flex items-center justify-center">
              <img
                src="/src/assets/images/ihm_logo_1781409022174.jpg"
                alt="IHM Culinary Academy Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-serif font-bold text-stone-200 tracking-wider">IHM Culinary Academy</span>
          </div>

          <p className="text-[11px] text-stone-400">
            &copy; 2026 IHM Culinary Academy. &ldquo;Your Ultimate Encyclopedia for Hotel Management Learning.&rdquo;
          </p>

          <span className="text-[10px] font-mono text-[#d4af37]/50">
             Authorized Campus Portal Est. 2026
          </span>
        </div>
      </footer>

      {/* 14. Extra Premium features Floating Action Elements */}

      {/* Floating Call / WhatsApp direct Link */}
      <a
        href="https://wa.me/919958589430?text=Hi%20Kalyan,%20I%20am%20inquiring%20about%20IHM%20Culinary%20Academy%20syllabus%20and%20practical%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-[#25d366]/20 border border-[#25d366]/40 text-[#25d366] hover:bg-[#25d366] hover:text-white hover:scale-110 transition-all shadow-2xl flex items-center justify-center cursor-pointer"
        title="Direct Chat with Kalyan Singh via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25d366]"></span>
        </span>
        <Phone className="w-5 h-5 fill-current" />
      </a>

      {/* Floating Ask Chef AI toggle bubble */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black hover:scale-110 shadow-2xl flex items-center justify-center transition-all cursor-pointer border border-emerald-400/20"
          title="Ask AI Chef-Bot"
        >
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-mono font-bold px-1.5 py-0.5 text-[8px] rounded-full animate-bounce">
            AI LIVE
          </span>
          <MessageSquare className="w-5 h-5" />
        </button>
      )}

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-7 z-40 p-2.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-amber-500 hover:text-amber-400 shadow-xl transition-all cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* MODAL WINDOWS */}

      {/* Semester Syllabus Viewer Modal */}
      {selectedSyllabus && (
        <SyllabusModal
          syllabus={selectedSyllabus}
          bookmarkedSubjects={bookmarkedSubjects}
          onToggleBookmark={handleToggleBookmark}
          onClose={() => setSelectedSyllabus(null)}
        />
      )}

      {/* Slider Interactive Detail Live Portals */}
      {selectedSlideType && (
        <SliderDetailModal
          isOpen={!!selectedSlideType}
          onClose={() => setSelectedSlideType(null)}
          type={selectedSlideType}
        />
      )}



      {/* Chef-Bot AI Chat assistant drawer */}
      <AiChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
