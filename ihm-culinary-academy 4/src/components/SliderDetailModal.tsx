import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Briefcase,
  DollarSign,
  MapPin,
  TrendingUp,
  Cpu,
  GraduationCap,
  Play,
  Volume2,
  Tv,
  Newspaper,
  BookOpen,
  Award,
  Globe,
  Settings,
  Flame,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Info
} from "lucide-react";

interface SliderDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "vacancies" | "ingredients" | "videos" | "news" | "chefs" | "miscellaneous";
}

export default function SliderDetailModal({ isOpen, onClose, type }: SliderDetailModalProps) {
  // Application Form for Vacancies
  const [showApplyForm, setShowApplyForm] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [applicantName, setApplicantName] = useState<string>("");
  const [applicantEmail, setApplicantEmail] = useState<string>("");
  const [applicantExperience, setApplicantExperience] = useState<string>("0-2 Years");
  const [applicantMsg, setApplicantMsg] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Active Ingredient Detail State (Slide 2)
  const [selectedIngredient, setSelectedIngredient] = useState<number>(0);

  // Video Playing Mock Player (Slide 3)
  const [isPlayingVideo, setIsPlayingVideo] = useState<any | null>(null);

  // Miscellaneous unit converter state
  const [convValue, setConvValue] = useState<string>("1");
  const [convType, setConvType] = useState<string>("f-to-c"); // fahrenheit to celsius, oz-to-g

  if (!isOpen) return null;

  // 1. Vacancies Data
  const jobsData = [
    {
      id: "atlantis-jsc",
      title: "Junior Sous Chef - Fine Dining",
      hotel: "Atlantis The Royal, Dubai",
      salary: "$4,800 - $6,250 / Month (Tax Free)",
      location: "Palm Jumeirah, Dubai",
      growth: "Exceptional (+15% YoY)",
      skills: ["HACCP Certification", "Classical French Plating", "High Volume Banquets", "Team Leadership"],
      description: "Direct elite kitchen lines at our flagship dining outlets. Coordinate with master Michelin chefs, monitor ingredient spoilage matrices, and oversee portion control."
    },
    {
      id: "burj-foa",
      title: "Front Office Ambassador",
      hotel: "Burj Al Arab, Dubai",
      salary: "$4,000 - $5,500 / Month + VIP Tips",
      location: "Jumeirah Beach, Dubai",
      growth: "Very High",
      skills: ["Multilingualism", "Opera PMS System", "Luxury VIP Protocol", "Stately Manners"],
      description: "Conduct legendary check-in protocols for international delegates, heads of state, and VIP billionaires. Requires supreme composure, professional poise, and language fluency."
    },
    {
      id: "mariott-fbd",
      title: "Food & Beverage Director",
      hotel: "Marriott International, Mumbai",
      salary: "₹1,80,000 - ₹2,50,000 / Month",
      location: "Mumbai, India",
      growth: "High (Rapid global expansion)",
      skills: ["P&L Responsibility", "Menu Engineering", "F&B Audits", "Vendor Coordination"],
      description: "Govern financial budgets, supplier contracts, custom cocktail menus, and dining speeds across 4 premium standard outlets inside Marriott's flagship property."
    },
    {
      id: "ritz-gem",
      title: "Guest Experience Manager",
      hotel: "The Ritz-Carlton, Bangalore",
      salary: "₹1,20,000 - ₹1,75,000 / Month",
      location: "Bangalore, India",
      growth: "Steady Growth",
      skills: ["Relations Management", "CRM Logs", "SOP Drafting", "Crisis Resolution"],
      description: "Lead the luxury concierge desk and butler teams. Respond proactively to traveler grievances and curate highly personalized, elite itinerary guides for VIP guests."
    },
    {
      id: "paris-cdp",
      title: "Pastry Commis & Baker",
      hotel: "The Royal Tea Room / Michelin Patisserie",
      salary: "€2,900 - €3,600 / Month",
      location: "Paris, France",
      growth: "High Specialized Demand",
      skills: ["Chocolate Tempering", "Lamination Chemistry", "Sourdough Fermentation", "Blown Sugar"],
      description: "Prepare legendary viennoiserie, croissants, decorative sugar pieces, and classical Paris-Brest pastries. Work in high-discipline temperature-regulated specialized baking rooms."
    }
  ];

  // 2. 10 Expensive Spices/Ingredients
  const ingredientsData = [
    {
      id: 1,
      name: "Saffron Spices",
      price: "$5,000 - $10,000 per kg",
      origin: "Iran & Kashmir, India",
      flavor: "Earthy, sweet, honey-like with metallic undertone",
      use: "Biryanis, Paellas, and classic Milanese Risottos",
      reason: "Gathered entirely by hand. Must harvest individual purple Crocus sativus threads. It takes approximately 150,000 flowers to produce just 1 kilogram of dry saffron saffron filaments."
    },
    {
      id: 2,
      name: "Premium Vanilla Pods",
      price: "$600 - $800 per kg",
      origin: "Madagascar & Réunion",
      flavor: "Rich, floral, creamy, deep warm sweet fragrance",
      use: "Crème brûlées, soufflés, and high-end gateaux creams",
      reason: "Vanilla orchids mature slowly over years and must be hand-pollinated on the exact morning they bloom. The curing process takes months of drying and sweating."
    },
    {
      id: 3,
      name: "Mahlab Seeds",
      price: "$150 - $250 per kg",
      origin: "Middle East / Mediterranean",
      flavor: "Combines cherry pits, bitter almond, and orange blossoms",
      use: "Gourmet brioches, sweet pastries, and luxury biscuits",
      reason: "Made from the microscopic kernels extracted by hand from the hard pits of the St. Lucie Cherry tree. Unbelievably labor-intensive extraction."
    },
    {
      id: 4,
      name: "Green Cardamom",
      price: "$60 - $90 per kg",
      origin: "Kerala, India & Guatemala",
      flavor: "Strongly aromatic, herbal, citrus-minty essence",
      use: "Rich curries, Indian chai tea, and botanical syrups",
      reason: "Requires manual harvesting to ensure pods are picked at the precise moment of maturity. High labor costs and susceptibility to monsoon damage."
    },
    {
      id: 5,
      name: "White Truffles",
      price: "$3,000 - $6,000 per kg",
      origin: "Piedmont Region, Italy",
      flavor: "Intensely pungent, musky, garlic-and-forest wood",
      use: "Shaved raw over buttered tagolini pasta or luxury risottos",
      reason: "They grow deep underground and cannot be cultivated artificially. Must be wild-harvested using trained truffle dogs in damp autumn Italian woods."
    },
    {
      id: 6,
      name: "Matsutake Mushrooms",
      price: "$1,000 - $2,000 per kg",
      origin: "Japan & Pacific Northwest",
      flavor: "Spicy-aromatic, pine-needle scent next to sweet soil",
      use: "Delicate Japanese dashi stocks and matsutake rice bowls",
      reason: "Only grow on red pine roots and are heavily affected by invasive pests. Once harvested, they never regrow in the same spot, making supply extremely rare."
    },
    {
      id: 7,
      name: "Japanese Wagyu Beef A5",
      price: "$400 - $600 per kg",
      origin: "Kobe & Miyazaki, Japan",
      flavor: "Buttery, melting texture, rich in fat marbling",
      use: "Searing over hot stones, Teppanyaki style, or Tataki",
      reason: "Cattle undergo rigorous stress-free breeding regimens, customized grass diets, and tight quality grading to guarantee fine marbling percentages."
    },
    {
      id: 8,
      name: "Kopi Luwak Beans",
      price: "$500 - $700 per kg",
      origin: "Sumatra, Indonesia",
      flavor: "Smooth, low bitterness, complex cacao tones",
      use: "Premium espresso extraction or siphon coffee",
      reason: "Coffee cherries are digested and fermented naturally inside Asian Palm Civets. Workers physically hunt, clean, and roast these rare beans in small batches."
    },
    {
      id: 9,
      name: "Swallow's Bird Nest",
      price: "$2,000 - $3,000 per kg",
      origin: "Southeast Asia (Vietnam/Indonesia)",
      flavor: "Subtle sweet gelatinous broth texture",
      use: "Traditional Cantonese Bird's Nest Soup",
      reason: "Harvested from cliffside cave ceilings. Swifts secrete sticky saliva that hardens to form nests. High-altitude manual scaling poses severe physical dangers."
    },
    {
      id: 10,
      name: "True Wild Ginseng Root",
      price: "$10,000 - $20,000 per root",
      origin: "Northern China & South Korea",
      flavor: "Earthy, highly medicinal, woody and bittersweet",
      use: "Imperial stocks, wellness elixirs, and state soups",
      reason: "Slow maturation taking up to 10–25 years in isolated wild forests. Over-harvesting has made wild premium roots nearly extinct."
    }
  ];

  // 3. Culinary Videos
  const videosData = [
    {
      id: "vid-1",
      title: "Classical French Mother Sauces Masterclass",
      duration: "42 Mins",
      instructor: "Chef Jean-Pierre Laurent (Michelin 2-Star)",
      description: "Mastering Hollandaise emulsions, warm Béchamel thickeners, Velouté stock bases, Espagnole reductions, and classical Tomato sauce secrets.",
      thumbnailImg: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "vid-2",
      title: "Michelin Pre-Shift Briefing & Kitchen Discipline",
      duration: "18 Mins",
      instructor: "Chef Anand S. (IHM Culinary Chairperson)",
      description: "Experience the rigorous 15-minute briefing session. Inspecting nail hygiene, checking daily specials, and aligning kitchen line coordination.",
      thumbnailImg: "/src/assets/images/michelin_chef_briefing_1781410985883.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: "vid-3",
      title: "High Speed Knife Craft & Vegetable Cuts",
      duration: "25 Mins",
      instructor: "Instructor Mary D'Souza (Food Production Dept)",
      description: "Learn precision vegetable shapes: Julienne, Brunoise, Batonnet, Paysanne, and Tourné cut safety mechanics standard across hotel administration.",
      thumbnailImg: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  // 4. News
  const newsStories = [
    {
      id: "news-1",
      title: "Atlantis The Royal Voted No. 1 Resort for Career Excellence 2026",
      source: "Luxe Hospitality Bulletin",
      date: "June 10, 2026",
      summary: "Undergrad scholars from top Asian culinary academies secure record hiring letters from the Atlantis group. A review shows outstanding mentorship structures and high-growth trajectories for new graduates."
    },
    {
      id: "news-2",
      title: "Molecular Gastronomy: The Shift Back to Raw Aromatic Elements",
      source: "The Table Review",
      date: "May 28, 2026",
      summary: "Leading fine dining boards reports a decline in chemical foams. Top-tier restaurants are shifting towards unadulterated rare spices, hand-pressed essential oils, and heritage vegetable conservation, redefining classical curriculums."
    },
    {
      id: "news-3",
      title: "Top 3 Hotels in the World: Benchmark Standards of Service",
      source: "Elite Lodging Journal",
      date: "April 15, 2030",
      summary: "A deep dive comparing service speeds, room automation, and dining quality indices across the top 3 global properties: Atlantis The Royal (Dubai), Villa d'Este (Lake Como), and Aman Tokyo. Curated for hospitality students."
    }
  ];

  // 5. Famous Chefs
  const famousChefsList = [
    {
      name: "Chef Auguste Escoffier",
      period: "1846 - 1935",
      dish: "Peach Melba & Tournedos Rossini",
      achievement: "Father of Modern Culinary Arts",
      bio: "Created the Brigade de Cuisine (Kitchen Brigade System) which is still used globally today. He simplified classical French culinary techniques and codified the Five Mother Sauces."
    },
    {
      name: "Chef Gordon Ramsay",
      period: "1966 - Present",
      dish: "Beef Wellington & Lobster Ravioli",
      achievement: "17 Michelin Stars Carrier",
      bio: "Renowned for absolute culinary discipline, kitchen speed, and world-famous television shows. He owns legendary restaurant portfolios globally and continues mentoring thousands of scholars."
    },
    {
      name: "Chef Massimo Bottura",
      period: "1962 - Present",
      dish: "Oops! I Dropped the Lemon Tart",
      achievement: "Owner of Osteria Francescana (3 Stars)",
      bio: "A pioneer of emotional food concepts in Modena, Italy. He blends avant-garde sculpture, modern art, and traditional Italian grandmother recipes into culinary poetry."
    },
    {
      name: "Chef Julia Child",
      period: "1912 - 2004",
      dish: "Boeuf Bourguignon & Cheese Soufflé",
      achievement: "French Cooking Ambassador",
      bio: "Brought masterclass French culinary arts to mainstream households. Her groundbreaking classic literature, 'Mastering the Art of French Cooking', broke professional boundaries."
    },
    {
      name: "Chef Gaggan Anand",
      period: "1978 - Present",
      dish: "Lick It Up & Eggplant Cookie",
      achievement: "Best Restaurant in Asia (4 Consecutive Years)",
      bio: "Revolutionized Indian cuisine by incorporating molecular science: heavy liquid nitrogen manipulation, spherified standard yogurt, and menu concepts governed strictly by emojis."
    }
  ];

  // Converter function
  const handleConvert = () => {
    const num = parseFloat(convValue);
    if (isNaN(num)) return "0";
    if (convType === "f-to-c") {
      return `${((num - 32) * 5 / 9).toFixed(1)} °C`;
    } else if (convType === "oz-to-g") {
      return `${(num * 28.3495).toFixed(1)} g`;
    } else if (convType === "cup-to-ml") {
      return `${(num * 236.588).toFixed(1)} ml`;
    } else if (convType === "kg-to-lb") {
      return `${(num * 2.20462).toFixed(2)} lbs`;
    }
    return "0";
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowApplyForm(false);
      setSelectedJob(null);
      setApplicantName("");
      setApplicantEmail("");
      setApplicantMsg("");
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 overflow-y-auto flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-5xl bg-forest-950 border border-[#d4af37]/35 shadow-2xl rounded-none text-stone-200 overflow-hidden relative flex flex-col max-h-[90vh]"
      >
        {/* Header Ribbon */}
        <div className="bg-[#d4af37] py-2.5 px-6 flex justify-between items-center text-forest-950">
          <span className="font-mono text-xs font-black tracking-widest uppercase flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            IHM PORTAL SYSTEM &bull; {type.toUpperCase()} INTERACTIVE PORTAL
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-forest-950/20 text-forest-950 transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5 pointer-events-auto cursor-pointer" />
          </button>
        </div>

        {/* Content Body Container */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {/* SLIDE 1: VACANCIES PORTAL */}
          {type === "vacancies" && (
            <div className="space-y-6">
              {!showApplyForm ? (
                <>
                  <div className="border border-red-500/30 bg-red-950/20 p-4 rounded-none text-left flex items-start gap-3">
                    <Info className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-red-400 font-serif font-bold text-sm">Hiring Active Campaigns (Dubai, Paris, India)</h4>
                      <p className="text-xs text-neutral-350 leading-relaxed mt-1">
                        These hospitality vacancies represent actual active recruiting campaigns linked with IHM's corporate placements registry. 
                        Select standard vacancies below to instantly route your resume details.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {jobsData.map((job) => (
                      <div
                        key={job.id}
                        className="bg-forest-900/60 border border-[#d4af37]/15 p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#d4af37]/35 transition-all text-left"
                      >
                        <div className="space-y-1.5 max-w-2xl">
                          <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#d4af37] bg-forest-950 px-2 py-0.5 border border-[#d4af37]/10">
                            {job.hotel}
                          </span>
                          <h4 className="text-base font-serif font-bold text-white">{job.title}</h4>
                          <p className="text-xs text-zinc-300 leading-relaxed font-light">{job.description}</p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-zinc-400">
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#d4af37]" /> {job.location}</span>
                            <span className="flex items-center gap-1 text-green-400"><DollarSign className="w-3 h-3" /> {job.salary}</span>
                            <span className="flex items-center gap-1 text-emerald-400"><TrendingUp className="w-3 h-3" /> Growth: {job.growth}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {job.skills.map((skill, si) => (
                              <span key={si} className="text-[9px] bg-[#d4af37]/5 border border-[#d4af37]/15 px-2 py-0.5 text-stone-300 font-semibold rounded-none">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setSelectedJob(job);
                            setShowApplyForm(true);
                          }}
                          className="px-5 py-2.5 bg-[#d4af37] text-forest-950 hover:bg-white font-mono text-xs font-black tracking-widest transition-all cursor-pointer whitespace-nowrap shrink-0"
                        >
                          APPLY SECURELY
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="max-w-xl mx-auto bg-forest-900 border border-[#d4af37]/25 p-6 relative">
                  <button
                    onClick={() => {
                      setShowApplyForm(false);
                      setSelectedJob(null);
                    }}
                    className="absolute top-4 right-4 text-xs font-mono text-zinc-400 hover:text-white"
                  >
                    Keep Browsing Jobs
                  </button>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">
                    Application Form
                  </h3>
                  <p className="text-xs text-stone-300 mb-6 font-light font-mono text-left">
                    Role: <span className="text-[#d4af37] font-semibold">{selectedJob.title}</span> at <span className="text-white italic">{selectedJob.hotel}</span>
                  </p>

                  <form onSubmit={handleApplySubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#d4af37] mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Scholar Kalyan"
                        className="w-full bg-forest-950 border border-[#d4af37]/30 text-stone-100 p-2.5 text-xs rounded-none focus:outline-none focus:border-[#d4af37]"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#d4af37] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="kalyan24799@gmail.com"
                        className="w-full bg-forest-950 border border-[#d4af37]/30 text-stone-100 p-2.5 text-xs rounded-none focus:outline-none focus:border-[#d4af37]"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#d4af37] mb-1.5">
                        Culinary Experience level
                      </label>
                      <select
                        className="w-full bg-forest-950 border border-[#d4af37]/30 text-stone-200 p-2.5 text-xs rounded-none focus:outline-none focus:border-[#d4af37]"
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                      >
                        <option>Apprentice (IHM Undergrad Student)</option>
                        <option>0-2 Years Professional</option>
                        <option>2-5 Years Line Cook</option>
                        <option>5+ Years Senior Chef</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#d4af37] mb-1.5">
                        Cover Note / Portfolio Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="List your favorite specialized culinary subjects or hotel internship departments..."
                        className="w-full bg-forest-950 border border-[#d4af37]/30 text-stone-100 p-2.5 text-xs rounded-none focus:outline-none focus:border-[#d4af37]"
                        value={applicantMsg}
                        onChange={(e) => setApplicantMsg(e.target.value)}
                      />
                    </div>

                    {isSubmitted ? (
                      <div className="bg-emerald-950/40 border border-emerald-500/40 p-3 flex items-center gap-2 text-emerald-400 font-mono text-xs">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span>Resume successfully submitted to Placements Board! Securing route...</span>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="w-full bg-[#d4af37] text-forest-950 font-mono font-black text-xs py-3 tracking-widest hover:bg-white transition-all cursor-pointer"
                      >
                        SUBMT TO HUMAN RESOURCES
                      </button>
                    )}
                  </form>
                </div>
              )}
            </div>
          )}

          {/* SLIDE 2: EXPENSIVE INGREDIENTS KNOWLEDGEBASE */}
          {type === "ingredients" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
              <div className="md:col-span-4 bg-forest-900 border border-[#d4af37]/25 h-[400px] overflow-y-auto">
                <div className="bg-forest-950 text-[#d4af37] font-mono text-xs font-black tracking-wider py-2.5 px-4 border-b border-[#d4af37]/25">
                  10 EXPENSIVE ESSENCES
                </div>
                {ingredientsData.map((ing, idx) => (
                  <button
                    key={ing.id}
                    onClick={() => setSelectedIngredient(idx)}
                    className={`w-full text-left font-serif p-3 border-b border-[#d4af37]/10 transition-colors text-xs flex justify-between items-center ${
                      selectedIngredient === idx ? "bg-[#d4af37]/15 text-white font-bold" : "text-stone-300 hover:bg-forest-950"
                    }`}
                  >
                    <span>{idx + 1}. {ing.name}</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#d4af37]" />
                  </button>
                ))}
              </div>

              <div className="md:col-span-8 bg-forest-900/40 border border-[#d4af37]/25 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-serif font-black text-[#d4af37]">
                      {ingredientsData[selectedIngredient].name}
                    </h3>
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-forest-950 border border-[#d4af37]/40 text-rose-400 uppercase">
                      {ingredientsData[selectedIngredient].price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-forest-950/80 p-3 border border-[#d4af37]/10">
                      <span className="block text-[9px] font-mono uppercase text-[#d4af37]">Primary Origin</span>
                      <span className="text-white text-xs font-semibold">{ingredientsData[selectedIngredient].origin}</span>
                    </div>
                    <div className="bg-forest-950/80 p-3 border border-[#d4af37]/10">
                      <span className="block text-[9px] font-mono uppercase text-[#d4af37]">Aromatic Profile</span>
                      <span className="text-white text-xs font-semibold">{ingredientsData[selectedIngredient].flavor}</span>
                    </div>
                  </div>

                  <div className="mt-4 bg-forest-950/50 p-4 border border-l-4 border-l-[#d4af37] border-white/5 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-[#d4af37] font-bold">Standard Culinary Application:</div>
                    <p className="text-xs text-stone-200 leading-relaxed italic">
                      &ldquo;{ingredientsData[selectedIngredient].use}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="bg-forest-950 p-4 border border-[#d4af37]/15 rounded-sm">
                  <div className="text-[10px] font-mono uppercase text-[#d4af37] font-black tracking-widest mb-1">
                    WHY SO EXPENSIVE? (FACTS LOG)
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    {ingredientsData[selectedIngredient].reason}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: CULINARY VIDEO MOCK PLAYER */}
          {type === "videos" && (
            <div className="space-y-6 text-left">
              {!isPlayingVideo ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {videosData.map((v) => (
                    <div
                      key={v.id}
                      className="bg-forest-900 border border-[#d4af37]/15 overflow-hidden flex flex-col hover:border-[#d4af37]/35 transition-all group"
                    >
                      <div className="h-44 bg-forest-950 relative overflow-hidden">
                        <img
                          src={v.thumbnailImg}
                          alt={v.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <button
                            onClick={() => setIsPlayingVideo(v)}
                            className="p-3.5 bg-[#d4af37] rounded-full hover:bg-white text-forest-950 transition-all cursor-pointer shadow-lg shadow-black/80"
                            title="Play Video"
                          >
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </button>
                        </div>
                        <span className="absolute bottom-3 right-3 bg-black/90 px-2 py-0.5 text-[9px] font-mono text-white rounded">
                          {v.duration}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                        <div>
                          <span className="text-[9px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">
                            {v.instructor}
                          </span>
                          <h4 className="text-sm font-serif font-bold text-white line-clamp-1 group-hover:text-[#d4af37] transition-colors">
                            {v.title}
                          </h4>
                          <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed mt-1 font-light">
                            {v.description}
                          </p>
                        </div>
                        <button
                          onClick={() => setIsPlayingVideo(v)}
                          className="w-full text-center py-2 bg-forest-950 border border-[#d4af37]/20 text-[#d4af37] font-mono text-[10px] font-black uppercase hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all mt-3 cursor-pointer"
                        >
                          WATCH STEP RECORDING
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="max-w-3xl mx-auto space-y-4">
                  <button
                    onClick={() => setIsPlayingVideo(null)}
                    className="px-3 py-1.5 bg-forest-900 text-[#d4af37] border border-[#d4af37]/15 font-mono text-[10px] uppercase hover:bg-[#d4af37]/10 transition-colors cursor-pointer"
                  >
                    &larr; Back to Video List
                  </button>
                  <div className="aspect-video bg-black relative flex flex-col items-center justify-center border border-[#d4af37]/35 overflow-hidden">
                    <iframe
                      src={isPlayingVideo.videoUrl}
                      title={isPlayingVideo.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="bg-forest-900 p-5 border border-[#d4af37]/15">
                    <span className="text-xs text-[#d4af37] font-mono block">{isPlayingVideo.instructor}</span>
                    <h4 className="text-lg font-serif font-bold text-white mt-1">{isPlayingVideo.title}</h4>
                    <p className="text-xs text-stone-300 mt-2 leading-relaxed">{isPlayingVideo.description}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SLIDE 4: NEWS ARTICLE DISPATCH */}
          {type === "news" && (
            <div className="space-y-6 text-left">
              <div className="border-b border-[#d4af37]/20 pb-4">
                <h4 className="font-serif font-bold text-xl text-[#d4af37]">Elite Lodging &amp; Hospitality News</h4>
                <p className="text-xs text-zinc-400 mt-1">Daily analytical brief covering the top 3 hotels in the world, luxury placements, and molecular trend shifts.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsStories.map((story) => (
                  <div
                    key={story.id}
                    className="bg-forest-900/60 border border-[#d4af37]/15 p-5 hover:border-[#d4af37]/30 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-[#d4af37]">
                        <span>{story.source}</span>
                        <span>{story.date}</span>
                      </div>
                      <h4 className="text-sm font-serif font-extrabold text-white leading-tight">
                        {story.title}
                      </h4>
                      <p className="text-xs text-stone-300 leading-relaxed font-light">
                        {story.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-forest-950 flex items-center justify-between text-[11px] font-mono font-semibold text-[#d4af37]">
                      <span>READ COMPLETED BULLETIN</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 5: FAMOUS CHEFS */}
          {type === "chefs" && (
            <div className="space-y-6 text-left">
              <div className="border-b border-[#d4af37]/20 pb-3">
                <h3 className="font-serif font-black text-xl text-[#d4af37]">LEGENDARY CHEFS OF THE WORLD</h3>
                <p className="text-xs text-stone-300 mt-1">Study the giants of cuisine who consolidated training methods and pioneered progressive molecular structures.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {famousChefsList.map((chef, ci) => (
                  <div
                    key={ci}
                    className="bg-forest-900 border border-[#d4af37]/15 p-4 space-y-3 flex flex-col justify-between hover:border-[#d4af37]/45 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-[#d4af37] uppercase">{chef.period}</span>
                      <h4 className="text-base font-serif font-black text-white">{chef.name}</h4>
                      <div className="text-[10px] text-rose-400 font-mono font-semibold uppercase">{chef.achievement}</div>
                      <p className="text-xs text-stone-200 mt-2 font-light leading-relaxed">{chef.bio}</p>
                    </div>

                    <div className="bg-forest-950 p-2 border border-[#d4af37]/10">
                      <span className="block text-[8px] font-mono uppercase text-[#d4af37]">Famous Signature</span>
                      <span className="text-white text-xs font-serif font-medium">{chef.dish}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 6: MISCELLANEOUS CALCULATOR & TERMS */}
          {type === "miscellaneous" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Left Column - Converter */}
              <div className="bg-forest-900 border border-[#d4af37]/25 p-5 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-base font-serif font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <Settings className="w-4 h-4 text-[#d4af37]" />
                    Interactive Kitchen Unit Converter
                  </h4>
                  <p className="text-xs text-stone-350 leading-relaxed mb-4">
                    Instantly resolve volume, mass, and temperature metric ratios in high-speed professional culinary setups.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className="block text-[9px] font-mono font-bold uppercase text-[#d4af37] mb-1">
                        Select Conversion Type
                      </label>
                      <select
                        className="w-full bg-forest-950 border border-[#d4af37]/30 text-stone-200 p-2 text-xs focus:outline-none focus:border-[#d4af37] rounded-none"
                        value={convType}
                        onChange={(e) => setConvType(e.target.value)}
                      >
                        <option value="f-to-c">Fahrenheit &rarr; Celsius</option>
                        <option value="oz-to-g">Ounce (oz) &rarr; Grams (g)</option>
                        <option value="cup-to-ml">US Cup &rarr; Milliliters (ml)</option>
                        <option value="kg-to-lb">Kilogram (kg) &rarr; Pounds (lb)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono font-bold uppercase text-[#d4af37] mb-1">
                        Input Value
                      </label>
                      <input
                        type="number"
                        className="w-full bg-forest-950 border border-[#d4af37]/30 text-white p-2 text-xs focus:outline-none focus:border-[#d4af37] rounded-none"
                        value={convValue}
                        onChange={(e) => setConvValue(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-forest-950 py-3 px-4 border border-[#d4af37]/20 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#d4af37] uppercase">RESOLVED RATIO RESULT:</span>
                  <span className="text-lg font-mono font-black text-white">{handleConvert()}</span>
                </div>
              </div>

              {/* Right Column - Terminology */}
              <div className="bg-forest-900 border border-[#d4af37]/25 p-5 space-y-4">
                <h4 className="text-base font-serif font-bold text-white flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#d4af37]" />
                  French Culinary Terminology Glossary
                </h4>
                <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2">
                  <div className="border-b border-[#d4af37]/10 pb-2">
                    <span className="font-mono text-xs text-[#d4af37] font-semibold">Mise en Place</span>
                    <p className="text-xs text-stone-300 font-light mt-0.5">&ldquo;Everything in its place.&rdquo; Pre-measuring, chopping, and staging spices before beginning cook operations.</p>
                  </div>
                  <div className="border-b border-[#d4af37]/10 pb-2">
                    <span className="font-mono text-xs text-[#d4af37] font-semibold">Julienne Cutting</span>
                    <p className="text-xs text-stone-300 font-light mt-0.5">Precise knife technique forming matchstick shapes sized strictly at 1/16 in &times; 1/16 in &times; 2 inches.</p>
                  </div>
                  <div className="border-b border-[#d4af37]/10 pb-2">
                    <span className="font-mono text-xs text-[#d4af37] font-semibold">Roux thickener</span>
                    <p className="text-xs text-stone-300 font-light mt-0.5">A cooked uniform emulsion of equal-weight wheat flour and clarified butter, generating classical sauces bases.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-forest-950 border-t border-[#d4af37]/15 py-3 px-6 text-center text-stone-500 text-[10px] font-mono">
          IHM ACADEMIC LEARNING PLATFORM &bull; PRESS ESCAPE OR CLICK UPPER X TO EXIT DETAILS
        </div>
      </motion.div>
    </div>
  );
}
