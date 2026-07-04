import { SliderSlide, SubjectCovered, CareerCard, GalleryItem, StudyNote, HotelNews, ChefCertificate } from "../types";

export const sliderSlides: SliderSlide[] = [
  {
    id: 1,
    image: "/src/assets/images/atlantis_royal_vacancies_1781410950588.jpg",
    title: "VACANCIES",
    subtitle: "Click this slide to open the elite Hospitality Vacancies dashboard for top 5-star properties.",
    slideType: "vacancies"
  },
  {
    id: 2,
    image: "/src/assets/images/expensive_spices_mix_1781410968795.jpg",
    title: "Get to know about ingredient",
    subtitle: "Click to explore raw facts, recipes, and detailed profiles of the 10 most valuable cooking spices.",
    slideType: "ingredients"
  },
  {
    id: 3,
    image: "/src/assets/images/michelin_chef_briefing_1781410985883.jpg",
    title: "CULINARY VIDEO",
    subtitle: "Click to view masterclass videos, pre-shift briefs, and step-by-step plate assembly recordings.",
    slideType: "videos"
  },
  {
    id: 4,
    image: "/src/assets/images/hospitality_news_magazine_1781411005009.jpg",
    title: "HOSPITALITY NEWS",
    subtitle: "Click to read the latest editorial updates, global property openings, and hotel industry logs.",
    slideType: "news"
  },
  {
    id: 5,
    image: "/src/assets/images/famous_chefs_group_1781411019793.jpg",
    title: "Famous chef in the world",
    subtitle: "Click to meet the five master culinary chefs who revolutionized modern gastronomic arts.",
    slideType: "chefs"
  },
  {
    id: 6,
    image: "/src/assets/images/miscellaneous_culinary_1781411036714.jpg",
    title: "MISCELLANEOUS",
    subtitle: "Click to open general resources including dry-goods weight ratios, french terminology logs, and safety tips.",
    slideType: "miscellaneous"
  }
];

export const subjectsCoveredList: SubjectCovered[] = [
  {
    id: "food-prod",
    title: "Food Production",
    icon: "UtensilsCrossed",
    description: "The core engine of culinary training. Covers standard preparation, cold larder, regional spices, and international culinary chemistry.",
    keySkills: ["Knife execution & speed", "Mother sauce emulsions", "Charcuterie & sausages", "Nouvelle cuisine plating"]
  },
  {
    id: "fb-service",
    title: "Food & Beverage Service",
    icon: "GlassWater",
    description: "Exquisite dining room mechanics, wine tasting logs, mixology formulas, restaurant flow management, and banqueting operations.",
    keySkills: ["Classic service styles (French/Russian)", "Wine-food flavor pairing", "Cocktail structuring", "POS & Order cycles"]
  },
  {
    id: "front-office",
    title: "Front Office",
    icon: "Briefcase",
    description: "The primary face of hospitality. Guest cycling, reservations booking platforms, night auditing calculations, and guest relations.",
    keySkills: ["PMS Property Systems", "ADR & RevPAR optimization", "Customer crisis management", "Upselling techniques"]
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    icon: "Sparkles",
    description: "Visual maintenance of luxury spaces. Linen control procedures, interior styling, botanical arrangements, and laundry mechanics.",
    keySkills: ["Room cleanliness audits", "Stain removal chemistry", "Eco-friendly recycling protocols", "Linen cycle efficiency"]
  },
  {
    id: "bakery-conf",
    title: "Bakery & Confectionery",
    icon: "CakeSlice",
    description: "Scientific dough formulations, cake structures, chocolate piping, sugar blowing art, and European high pastry preparations.",
    keySkills: ["Yeast fermentation rates", "Chocolate tempering temperatures", "Pastry structures (Puff & Choux)", "Dessert plating design"]
  },
  {
    id: "comm-skills",
    title: "Communication Skills",
    icon: "BookOpen",
    description: "Mastery of professional expression, accent modulation, body stance, French terminologies, and client-centric dialogue templates.",
    keySkills: ["Multi-cultural etiquette", "Phone manner checklists", "Crisis communication scripts", "Hospitality French phrasing"]
  },
  {
    id: "hotel-manage",
    title: "Hotel Management",
    icon: "Building",
    description: "Strategic leadership tools. Revenue forecasting, capital inventory budgets, standard operating procedures, and talent management.",
    keySkills: ["Strategic feasibility logs", "Staff scheduling", "Menu engineering matrices", "Uniform accounting metrics"]
  }
];

export const careerOpportunitiesList: CareerCard[] = [
  {
    id: "exec-chef",
    title: "Executive Chef",
    salary: "$95,000 - $160,000 / Year",
    growth: "Very High (+12% YoY)",
    skills: ["Culinary Vision", "Kitchen Budgeting", "Team Command", "Menu Engineering"],
    description: "Command entire culinary programs of luxury hotels. Responsible for conceptual menu design, supplier relations, quality consistency, and kitchen staff grooming."
  },
  {
    id: "sous-chef",
    title: "Sous Chef",
    salary: "$65,000 - $90,000 / Year",
    growth: "Steady Growth",
    skills: ["Line Mastery", "Inventory Tracking", "High Speed Plating", "HACCP Safety"],
    description: "The culinary general. Directs line chefs, coordinates portion plating, monitors fresh deliveries, and maintains exact kitchen hygiene under the Executive Chef."
  },
  {
    id: "hotel-mgr",
    title: "General Hotel Manager",
    salary: "$110,000 - $220,000 / Year",
    growth: "High (Global brands expanding)",
    skills: ["Strategic P&L", "VIP Relations", "SOP Drafting", "RevPAR Management"],
    description: "Maximize hotel commercial performance and ensure exceptional brand indices. Directs and integrates operational efforts across Front Office, Housekeeping, and F&B."
  },
  {
    id: "rest-mgr",
    title: "Restaurant General Manager",
    salary: "$55,000 - $85,000 / Year",
    growth: "High (+15% in Fine Dining)",
    skills: ["Customer Retention", "Labor Scheduling", "Wine Inventory Control", "Floor Flow"],
    description: "Designs the ultimate front-of-house atmosphere. Integrates service speeds with kitchen output and manages reservations, labor budgets, and server training."
  },
  {
    id: "cruise-chef",
    title: "Luxury Cruise Line Chef",
    salary: "$70,000 - $110,000 / Tax-Free",
    growth: "Exceptional Demand",
    skills: ["High-Volume Prep", "Multi-ethnic Cuisines", "Sea Safety Rules", "Garde-Manger"],
    description: "Travel the globe while preparing exquisite, high-volume fine dining for thousands of international voyage guests. Requires exceptional mental and physical composure."
  },
  {
    id: "bakery-chef",
    title: "Master Pastry / Bakery Chef",
    salary: "$60,000 - $100,000 / Year",
    growth: "Premium Niche Growth",
    skills: ["Chocology", "Sugar Manipulation", "Oven Thermodynamics", "Sourdough Science"],
    description: "Construct delicate patisseries, artisanal sourdoughs, custom wedding towers, and intricate dessert menus for high-end boutique bakehouses or 5-star entities."
  },
  {
    id: "food-entrepreneur",
    title: "Food & Hospitality Entrepreneur",
    salary: "Scalable Profit ($100k+ potential)",
    growth: "Driven by creativity",
    skills: ["Brand Identity", "Crowdfunding", "Digital Menu Sells", "Location Audit"],
    description: "Launch next-generation culinary businesses: food tech setups, gourmet bistros, boutique patisseries, high-end thematic cocktail lounges, or luxury homestays."
  },
  {
    id: "hosp-trainer",
    title: "Senior Hospitality Trainer",
    salary: "$50,000 - $80,000 / Year",
    growth: "Academic Expansion",
    skills: ["Curriculum Design", "Grooming Coaching", "Practical Demonstrations", "Public Stance"],
    description: "Instruct and groom the next generation of chefs, front-of-house managers, and cruise team captains at premium international hotel academies, sharing industrial secrets."
  }
];

export const galleryPhotos: GalleryItem[] = [
  {
    id: "g1",
    title: "Fricassée Omelette Live Prep",
    category: "Kitchen",
    image: "/src/assets/images/first_semester_bg_1781409588071.jpg",
    caption: "Students performing high-fire egg skillet flips in classical first-semester breakfast cookery labs."
  },
  {
    id: "g2",
    title: "Ritz-Carlton Dum Biryani",
    category: "Events",
    image: "/src/assets/images/first_semester_bg_1781409229230.jpg",
    caption: "Lifting the seal on a steaming, traditional clay-pot lamb Biryani with fried saffron-basmati garnish."
  },
  {
    id: "g3",
    title: "Italian Gastronomy Briefing",
    category: "Kitchen",
    image: "/src/assets/images/michelin_chef_briefing_1781410985883.jpg",
    caption: "Interactive screen session exploring regional olive oils, emulsification science, and visual ingredients of Italy."
  },
  {
    id: "g4",
    title: "Classical Soup Lecture",
    category: "Kitchen",
    image: "/src/assets/images/second_semester_bg_1781409795264.jpg",
    caption: "Deep dive into 5 major soup classes: clear, cream, puree, cold, and chunky presentation."
  },
  {
    id: "g5",
    title: "Elite Ingredient Spices",
    category: "Kitchen",
    image: "/src/assets/images/expensive_spices_mix_1781410968795.jpg",
    caption: "Exploration corner covering raw trade facts, historical routes, and chemical grading of pristine whole spices."
  },
  {
    id: "g6",
    title: "Global Michelin Council",
    category: "Events",
    image: "/src/assets/images/famous_chefs_group_1781411019793.jpg",
    caption: "Elite panel of multi-starred Michelin kitchen leaders leading executive hospitality seminars on campus."
  }
];

export const studyNotesList: StudyNote[] = [
  {
    id: "note-mother-sauces",
    title: "The Classical 5 French Mother Sauces Guide",
    subject: "Food Production",
    semester: "1st Semester",
    type: "PDF Notes",
    fileSize: "2.4 MB",
    downloadsCount: 1420,
    author: "Chef Kalyan Singh",
    contentPreview: `## Modern French Mother Sauces Matrix

The foundations of classical French dining, conceptualized by Chef Marie-Antoine Carême and updated by Chef Auguste Escoffier:

### 1. Béchamel (White Sauce)
* **Liquid Component:** Fresh full-cream white milk.
* **Thickener:** White roux (equal weights of flour & butter cooked without browning - 2 mins).
* **Key Aromatics:** Onion Piquet (onion studded with a bay leaf and whole cloves).
* **Classic Derivatives:** Mornay (Gruyère/Parmesan), Soubise (pureed white onions), Nantua (crayfish butter & heavy cream).

### 2. Velouté (Blond Stock Sauce)
* **Liquid Component:** Clarified light blond stock (Veal, Chicken, or Fish).
* **Thickener:** Blond roux (cooked slightly longer to dynamic golden tan - 3-4 mins).
* **Classic Derivatives:** Suprême (chicken velouté + heavy cream), Allemande (veal velouté + egg yolks liaison), Bercy (fish stock + dry white wine + chopped shallots).

### 3. Espagnole (Brown Sauce)
* **Liquid Component:** Rich, roasted brown veal stock.
* **Thickener:** Brown roux (flour and butter caramelized slowly to rich chestnut brown - 8-10 mins).
* **Key Aromatics:** Roasted Mirepoix (50% onion, 25% celery, 25% carrots) & tomato paste.
* **Classic Derivatives:** Demi-Glace (equal parts Espagnole & brown stock reduced by half), Madeira, Bordelaise (red wine & bone marrow), Chasseur.`
  },
  {
    id: "note-wine-spirits",
    title: "Viticulture, Fermentation Science & Wine Mapping",
    subject: "Food & Beverage Service",
    semester: "3rd & 4th Semester",
    type: "Practical File",
    fileSize: "4.1 MB",
    downloadsCount: 980,
    author: "Prof. Kalyan Singh",
    contentPreview: `## Advanced Wine Chemistry & Fermentation Guide

The ultimate manual for the service of grape ferments:

### 1. The Chemistry of Alcoholic Fermentation
* **Scientific Formula:** C6H12O6 (Sugar) + Saccharomyces Cerevisiae Yeast → 2 C2H5OH (Ethanol) + 2 CO2 (Carbon Dioxide gas) + Thermal Heat.
* **Inhibiting Criteria:** Alcohol levels above 15.5% naturally kills the yeast. Cool environments retain grape aromas (White: 10-14°C, Red: 16-20°C).

### 2. Classical French Appellation Rules (AOC)
* Managed by INAO (Institut National de l'Origine et de la Qualité).
* Controls specified grape strains, pruning rules, maximum yields (hectoliters/hectare), and fermentation periods.
* **Bordeaux Breakdown:** Lefthand Bank (Cabernet Sauvignon heavy), Righthand Bank (Merlot heavy).`
  },
  {
    id: "note-pms-opera",
    title: "Front Desk PMS Systems (Opera Suite Commands)",
    subject: "Front Office",
    semester: "2nd Semester",
    type: "Question Paper",
    fileSize: "1.8 MB",
    downloadsCount: 650,
    author: "IHM Editorial Team",
    contentPreview: `## Solved PMS Mock Exam & Operations

### Question 1: Describe the precise steps to execute a direct walk-in registration in Opera PMS client.
* **Resolve:** 
  1. Access **Quick Keys** (F5) or Select **Reservation → New Reservation**.
  2. Search for guest profile name to check index (avoids profiles duplication).
  3. If none exists, create **New Guest Profile** with telephone, national identification scan, and nationality card.
  4. Fill the reservation mask: enter **Arrival Date** (default current hotel date), number of nights, room style preference, tariff profile (e.g. Rack-Rate, Corporate).
  5. Select **Room Assignment** (F3) based on vacant clean queue.
  6. Secure **Method of Payment (MOP)**: Swipe credit card for authorization matching stay cost + custom incidentals cover (approx. $100/night).`
  },
  {
    id: "note-stain-removal",
    title: "Linen Stain Removal Chemistry Chart",
    subject: "Housekeeping",
    semester: "1st Semester",
    type: "Assignment",
    fileSize: "1.1 MB",
    downloadsCount: 840,
    author: "Accommodation Dept. Head",
    contentPreview: `## Applied Housekeeping: Chemical Stain Reagents

Housekeeping staff must understand acid-base reactions to dissolve stubborn stains without corrupting linen cotton cells.

### Stain Types & Treatment Methods

1. **Blood Stains (Protein-based)**
   * *Critical Error:* NEVER use hot water! High temperatures coagulate protein bonds, setting the stain permanently.
   * *Correct Agent:* Rinse immediately with cold water, then apply 3% Hydrogen Peroxide alkaline formulation. Rinse with weak white vinegar to neutralize fabric fibers.

2. **Red Wine / Berry Pigment (Tannin-based)**
   * *Correct Agent:* Sprinkle dry table salt immediately to draw liquid capillary. Rinse with warm water and treat with oxalic acid solution (5%).`
  }
];

export const industryNews: HotelNews[] = [
  {
    id: "news1",
    title: "The Michelin Guide 2026 Resets Culinary Benchmarks",
    source: "Global Hospitality Chronicle",
    date: "June 10, 2026",
    summary: "Michelin organizers enhance transparency indicators, highlighting strict requirements for regional ingredient sourcing, kitchen bio-chemistry, and zero-waste dining concepts.",
    category: "Culinary Arts"
  },
  {
    id: "news2",
    title: "Smart Glass & PMS IoT Systems Dominate 5-Star Fronts",
    source: "Hotel Tech Quarterly",
    date: "May 28, 2026",
    summary: "Leading brand lines integrate ultra-synchronized PMS setups connecting direct booking codes with smart smart-glass digital wall locks, cutting front desk waiting wait-times to absolute zero.",
    category: "Front Office"
  },
  {
    id: "news3",
    title: "Artisanal Baking Regains Global Premium Food Shares",
    source: "Bakers World Express",
    date: "June 02, 2026",
    summary: "Sourdough fermentation science and chocolate sculpting are declared the fastest-growing modules in culinary arts, capturing record-high demand rates in the United States and Swiss cruise lines.",
    category: "Patisserie"
  }
];

export const mockCertificates: ChefCertificate[] = [
  {
    id: "cert-culinary",
    title: "Grand Escoffier Culinary Excellence",
    issuedBy: "IHM Culinary Academy Governing Board",
    skillsCertified: ["Mastering Classic French Mother Sauces", "Vegetable Sculpting & Advanced Cuts", "Safety and HACCP Standards"],
    bgColor: "from-amber-750 to-yellow-600"
  },
  {
    id: "cert-beverage",
    title: "Master Sommelier & Liquid Gastronomy",
    issuedBy: "IHM Beverage Service Senate",
    skillsCertified: ["Classical European Viticulture & Varietals", "Complex Flambé Desk Execution", "Molecular Mixology & Infusions"],
    bgColor: "from-emerald-800 to-yellow-600"
  },
  {
    id: "cert-hotel-admin",
    title: "Strategic Hospitality Revenue Command",
    issuedBy: "IHM Governing Board of Hotel Administration",
    skillsCertified: ["ADR & RevPAR Maximization Formulas", "Linen and Accommodation Inventory Auditing", "Menu Engineering Matrix Management"],
    bgColor: "from-slate-800 to-yellow-500"
  }
];
