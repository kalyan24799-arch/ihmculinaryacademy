import React, { useState, useEffect } from "react";
import { ChefHat, Sun, Moon, Sparkles, MessageSquare, Menu, X, Flame } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onOpenChat: () => void;
  visitorCount: number;
}

export default function Navbar({
  darkMode,
  toggleDarkMode,
  onOpenChat,
  visitorCount
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-forest-950/95 backdrop-blur-md shadow-lg border-b border-[#d4af37]/30 py-3"
          : "bg-forest-950/90 py-5 border-b border-[#d4af37]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 border-2 border-[#d4af37] rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg shadow-black/40 group-hover:scale-105 transition-all duration-300">
              <img
                src="/src/assets/images/ihm_logo_1781409022174.jpg"
                alt="IHM Culinary Academy Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-sm font-serif font-bold text-[#d4af37] tracking-wider uppercase leading-none">
                Culinary Academy
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("semesters-sec")}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#d4af37] font-medium font-serif border-b border-transparent hover:border-[#d4af37] py-0.5 transition-all cursor-pointer"
            >
              Semesters
            </button>
            <button
              onClick={() => scrollToSection("subjects-sec")}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#d4af37] font-medium font-serif border-b border-transparent hover:border-[#d4af37] py-0.5 transition-all cursor-pointer"
            >
              Subjects
            </button>

            <button
              onClick={() => scrollToSection("certificates-sec")}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#d4af37] font-medium font-serif border-b border-transparent hover:border-[#d4af37] py-0.5 transition-all cursor-pointer"
            >
              Certificates
            </button>

            <button
              onClick={() => scrollToSection("gallery-sec")}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#d4af37] font-serif border-b border-transparent hover:border-[#d4af37] py-0.5 transition-all cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("roasting-sec")}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#d4af37] font-medium font-serif border-b border-transparent hover:border-[#d4af37] py-0.5 transition-all cursor-pointer flex items-center gap-1"
            >
              <Flame className="w-3 h-3" />
              Roasting
            </button>
            <button
              onClick={() => scrollToSection("contact-sec")}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#d4af37] font-serif border-b border-transparent hover:border-[#d4af37] py-0.5 transition-all cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Action Tools: Dark mode, AI, visitor indicator */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Real-time Visitor Counter badge */}
            <span className="text-[10px] bg-forest-900/60 border border-[#d4af37]/20 text-stone-300 font-mono px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              Visitors: <span className="text-[#d4af37] font-bold">{visitorCount}</span>
            </span>

            {/* Dark Mode Icon Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-sm bg-forest-900 border border-white/10 hover:border-[#d4af37]/40 text-[#d4af37] hover:text-white transition-all cursor-pointer"
              title="Toggle Dark & Light Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* AI Assistant Button */}
            <button
              onClick={onOpenChat}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-forest-800/80 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] text-xs font-bold transition-all hover:text-forest-950 shadow-md cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask Chef-Bot</span>
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-md bg-neutral-900 border border-neutral-805 text-neutral-400 hover:text-amber-400 transition-all cursor-pointer"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 text-amber-400 border border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-t border-neutral-900 py-4 px-4 space-y-3 shadow-2xl absolute w-full left-0 mt-3 flex flex-col">
          <button
            onClick={() => scrollToSection("semesters-sec")}
            className="text-left py-2 border-b border-neutral-900 text-sm font-semibold font-mono text-stone-200"
          >
            Semesters
          </button>
          <button
            onClick={() => scrollToSection("subjects-sec")}
            className="text-left py-2 border-b border-neutral-900 text-sm font-semibold font-mono text-stone-200"
          >
            Subjects Covered
          </button>

          <button
            onClick={() => scrollToSection("certificates-sec")}
            className="text-left py-2 border-b border-neutral-900 text-sm font-semibold font-mono text-stone-200"
          >
            Certificates Hub
          </button>

          <button
            onClick={() => scrollToSection("gallery-sec")}
            className="text-text-left py-2 border-b border-neutral-900 text-sm font-semibold font-mono text-stone-200"
          >
            Gallery Workspace
          </button>
          <button
            onClick={() => scrollToSection("roasting-sec")}
            className="text-left py-2 border-b border-neutral-900 text-sm font-semibold font-mono text-stone-200 flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Roasting Masterclass
          </button>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-sm font-bold"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask AI Chef-Bot</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
