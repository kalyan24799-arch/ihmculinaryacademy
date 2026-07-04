// ─── Roasting Data Layer ─── //
// Structured knowledge extracted from "The Art of Roasting" PDF

// ─── Interfaces ─── //

export interface RoastingType {
  id: string;
  name: string;
  icon: string;
  temperature: string;
  description: string;
  bestFor: string[];
  keyTechnique: string;
}

export interface RoastingScience {
  id: string;
  title: string;
  icon: string;
  temperatureThreshold: string;
  description: string;
  details: string[];
}

export interface MoistureTechnique {
  id: string;
  name: string;
  icon: string;
  description: string;
  howItWorks: string;
  bestFor: string;
}

export interface TemperatureGuide {
  id: string;
  category: string;
  items: {
    name: string;
    tempRange: string;
    notes: string;
  }[];
}

export interface RoastingTip {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface RoastingVsBaking {
  aspect: string;
  roasting: string;
  baking: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// ─── 5 Key Types of Roasting ─── //

export const roastingTypes: RoastingType[] = [
  {
    id: "closed-roasting",
    name: "Closed Roasting (Pot Roasting)",
    icon: "Container",
    temperature: "150–170°C",
    description:
      "A method where the food is enclosed in a covered vessel or wrapped in foil, trapping steam and heat. This creates a moist cooking environment ideal for tougher cuts that require slow tenderization.",
    bestFor: ["Tough cuts of beef", "Pot roasts", "Braised joints", "Game birds"],
    keyTechnique:
      "Seal the meat first by searing on high heat, then transfer to a covered casserole or dutch oven with a small amount of liquid (stock, wine). Cook at moderate heat until fork-tender.",
  },
  {
    id: "slow-roasting",
    name: "Slow Roasting",
    icon: "Timer",
    temperature: "120–150°C",
    description:
      "Cooking at low temperatures for extended periods, allowing collagen to break down gradually into gelatin, yielding exceptionally tender and succulent results with minimal moisture loss.",
    bestFor: ["Pork shoulder", "Lamb leg", "Beef brisket", "Whole turkey"],
    keyTechnique:
      "Set oven to low heat (120–150°C). Allow 30–45 minutes per 500g. Rest the meat for at least 20 minutes after cooking to redistribute juices evenly throughout the protein fibers.",
  },
  {
    id: "high-heat-roasting",
    name: "High-Heat Roasting",
    icon: "Flame",
    temperature: "200–250°C",
    description:
      "Rapid roasting at high temperatures to achieve deep caramelization and a crispy exterior while keeping the interior juicy. This method relies on the Maillard reaction for flavor development.",
    bestFor: ["Chicken", "Root vegetables", "Prime rib", "Tenderloin"],
    keyTechnique:
      "Preheat oven to maximum (220–250°C). Place seasoned food directly on a hot pan. The initial blast of heat creates a flavorful crust. May reduce temperature midway for larger cuts.",
  },
  {
    id: "pan-roasting",
    name: "Pan Roasting",
    icon: "CookingPot",
    temperature: "180–220°C",
    description:
      "A hybrid technique starting with a stovetop sear in a heavy skillet, then finishing in the oven. This dual-method approach guarantees both a golden crust and even internal cooking.",
    bestFor: ["Steaks", "Duck breast", "Fish fillets", "Pork chops"],
    keyTechnique:
      "Heat a cast-iron or heavy-bottomed pan until smoking. Sear the protein 2–3 minutes per side, then transfer the entire pan into a preheated oven (200°C) to finish cooking to desired doneness.",
  },
  {
    id: "spit-roasting",
    name: "Spit Roasting (Rotisserie)",
    icon: "RotateCw",
    temperature: "175–200°C",
    description:
      "The oldest form of roasting, where food is skewered on a rotating spit over an open heat source. Continuous rotation ensures self-basting as fats drip and recirculate, creating unmatched even browning.",
    bestFor: ["Whole lamb", "Whole pig", "Chicken rotisserie", "Large game"],
    keyTechnique:
      "Secure the meat firmly on the spit ensuring balanced weight distribution. Maintain a consistent heat source. The constant rotation allows gravity-driven self-basting — fats continuously coat the surface.",
  },
];

// ─── The Science of Roasting ─── //

export const roastingScience: RoastingScience[] = [
  {
    id: "maillard-reaction",
    title: "The Maillard Reaction",
    icon: "Zap",
    temperatureThreshold: ">140°C (285°F)",
    description:
      "A complex chemical reaction between amino acids and reducing sugars that gives browned food its distinctive flavor and aroma. Named after French chemist Louis-Camille Maillard (1912).",
    details: [
      "Rapidly accelerates above 140°C (285°F)",
      "Produces hundreds of distinct flavor compounds",
      "Responsible for the golden-brown crust on roasted meats",
      "Requires a dry surface — moisture inhibits the reaction",
      "Creates melanoidins (brown polymers) that provide color",
      "Different amino acids produce different flavor profiles",
    ],
  },
  {
    id: "caramelization",
    title: "Caramelization",
    icon: "Sparkles",
    temperatureThreshold: ">160°C (320°F)",
    description:
      "The oxidation of sugar when exposed to heat. Unlike the Maillard reaction, caramelization involves only sugars (no amino acids). It produces nutty, butterscotch, and toasted flavors in vegetables and glazes.",
    details: [
      "Begins at approximately 160°C (320°F) for sucrose",
      "Different sugars caramelize at different temperatures",
      "Fructose caramelizes at a lower temperature (~110°C) than glucose (~160°C)",
      "Produces over 100 different chemical compounds",
      "Responsible for the sweet, complex flavors in roasted root vegetables",
      "Excessive heat causes burning — control is critical",
    ],
  },
];

// ─── Moisture Retention Techniques ─── //

export const moistureTechniques: MoistureTechnique[] = [
  {
    id: "basting",
    name: "Basting",
    icon: "Droplets",
    description:
      "Periodically spooning or brushing pan juices, melted butter, or a marinade over the surface of the roasting food to prevent drying and enhance flavor.",
    howItWorks:
      "Every 20–30 minutes, open the oven and spoon the accumulated pan drippings over the meat. This creates a glistening surface layer that slows moisture evaporation and builds flavor through repeated Maillard reactions.",
    bestFor: "Turkey, whole chicken, large beef roasts",
  },
  {
    id: "barding",
    name: "Barding",
    icon: "Layers",
    description:
      "Wrapping or draping thin sheets of fat (typically pork fatback or bacon) over lean cuts of meat before roasting to provide external moisture and prevent the surface from drying out.",
    howItWorks:
      "The fat layer slowly renders during cooking, continuously bathing the meat in protective lipids. The fat is typically removed in the final 15–20 minutes to allow the surface to brown and crisp.",
    bestFor: "Game birds (pheasant, quail), lean venison, beef fillet",
  },
  {
    id: "larding",
    name: "Larding",
    icon: "Syringe",
    description:
      "Inserting thin strips of fat (lardons) directly into the interior of lean meat using a special larding needle. This provides internal moisture that bastes the meat from within.",
    howItWorks:
      "Using a larding needle (lardoire), thread long, thin strips of chilled pork back fat through the grain of the meat at regular intervals. As the roast cooks, these internal fat channels melt and distribute moisture throughout.",
    bestFor: "Lean beef joints, venison loin, wild boar, dry game meats",
  },
];

// ─── Temperature Guide ─── //

export const temperatureGuides: TemperatureGuide[] = [
  {
    id: "meat-doneness",
    category: "Meat Internal Temperatures (Doneness Levels)",
    items: [
      { name: "Rare", tempRange: "52–55°C (125–130°F)", notes: "Cool red center, very soft texture" },
      { name: "Medium-Rare", tempRange: "55–60°C (130–140°F)", notes: "Warm red center, ideal for steaks" },
      { name: "Medium", tempRange: "60–65°C (140–150°F)", notes: "Warm pink center throughout" },
      { name: "Medium-Well", tempRange: "65–70°C (150–158°F)", notes: "Slightly pink center, firmer texture" },
      { name: "Well-Done", tempRange: "71°C+ (160°F+)", notes: "No pink, fully cooked throughout" },
    ],
  },
  {
    id: "poultry-temps",
    category: "Poultry & Pork Safe Minimums",
    items: [
      { name: "Whole Chicken/Turkey", tempRange: "74°C (165°F)", notes: "Thickest part of thigh, away from bone" },
      { name: "Duck Breast", tempRange: "57–60°C (135–140°F)", notes: "Served medium-rare to medium for optimal texture" },
      { name: "Pork Loin/Chops", tempRange: "63°C (145°F)", notes: "Rest 3 minutes minimum after removal" },
      { name: "Ground Meat (any)", tempRange: "71°C (160°F)", notes: "No exceptions — food safety critical" },
    ],
  },
  {
    id: "vegetable-temps",
    category: "Vegetable Roasting Temperatures",
    items: [
      { name: "Root Vegetables", tempRange: "190–200°C (375–400°F)", notes: "Carrots, parsnips, potatoes, beets — cut evenly" },
      { name: "Delicate Vegetables", tempRange: "175–190°C (350–375°F)", notes: "Asparagus, zucchini, bell peppers, tomatoes" },
      { name: "Cruciferous Vegetables", tempRange: "200–220°C (400–425°F)", notes: "Broccoli, cauliflower, Brussels sprouts — high heat for caramelization" },
      { name: "Alliums (Onions/Garlic)", tempRange: "180–200°C (350–400°F)", notes: "Whole or halved; slow roast for sweetness" },
    ],
  },
];

// ─── Essential Roasting Tips ─── //

export const roastingTips: RoastingTip[] = [
  {
    id: "tip-spacing",
    title: "Proper Spacing & Airflow",
    icon: "Expand",
    description:
      "Never overcrowd the roasting pan. Leave at least 2cm between items to allow hot air to circulate freely. Overcrowding traps steam and causes steaming instead of roasting, preventing proper browning.",
  },
  {
    id: "tip-oiling",
    title: "Oil & Season Generously",
    icon: "Droplets",
    description:
      "Coat surfaces with a thin, even layer of high smoke-point oil (sunflower, grapeseed, or clarified butter). Oil conducts heat and promotes the Maillard reaction. Season with coarse salt to draw out surface moisture.",
  },
  {
    id: "tip-preheat",
    title: "Always Preheat the Oven",
    icon: "Thermometer",
    description:
      "Place food into a fully preheated oven only. A cold oven causes uneven cooking, extended cook times, and poor crust formation. For high-heat roasting, preheat for at least 15–20 minutes.",
  },
  {
    id: "tip-resting",
    title: "Rest Before Carving",
    icon: "Clock",
    description:
      "After roasting, rest meat loosely tented with foil for 10–20 minutes. This allows the protein fibers to relax and reabsorb juices. Cutting too soon causes juices to flood the cutting board, resulting in dry meat.",
  },
  {
    id: "tip-temper",
    title: "Bring Meat to Room Temperature",
    icon: "Sun",
    description:
      "Remove large cuts from the refrigerator 30–60 minutes before roasting. Cold meat in a hot oven cooks unevenly — the exterior overcooks before the center reaches target temperature.",
  },
  {
    id: "tip-probe",
    title: "Use a Meat Thermometer",
    icon: "Gauge",
    description:
      "Never guess doneness. Insert an instant-read probe thermometer into the thickest part of the meat, avoiding bones. Internal temperature is the only reliable indicator of doneness.",
  },
];

// ─── Roasting vs. Baking ─── //

export const roastingVsBaking: RoastingVsBaking[] = [
  {
    aspect: "Primary Goal",
    roasting: "Browning, caramelization, and textural crust development",
    baking: "Even structure development, rise, and consistent crumb",
  },
  {
    aspect: "Temperature Range",
    roasting: "Generally higher (175–250°C)",
    baking: "Moderate and precise (150–200°C)",
  },
  {
    aspect: "Food Type",
    roasting: "Proteins (meats, poultry) and vegetables",
    baking: "Doughs, batters, pastries, and breads",
  },
  {
    aspect: "Moisture Approach",
    roasting: "Fat-based; basting, barding, larding to retain juices",
    baking: "Steam or liquid-based; hydration for gluten development",
  },
  {
    aspect: "Key Reaction",
    roasting: "Maillard reaction (amino acids + sugars at >140°C)",
    baking: "Gluten network formation and starch gelatinization",
  },
  {
    aspect: "Uncovered vs. Covered",
    roasting: "Typically uncovered for dry-heat browning",
    baking: "Varies — can be covered or uncovered depending on recipe",
  },
];

// ─── Flash Quiz (15 Questions) ─── //

export const roastingQuizData: QuizQuestion[] = [
  {
    id: 1,
    question: "At what temperature does the Maillard reaction rapidly occur?",
    options: ["Above 100°C", "Above 140°C", "Above 200°C", "Above 80°C"],
    correctAnswer: 1,
    explanation:
      "The Maillard reaction rapidly accelerates above 140°C (285°F). This is the threshold where amino acids and reducing sugars interact to create the characteristic brown crust and complex flavors.",
  },
  {
    id: 2,
    question: "What is the minimum internal temperature for a Rare steak?",
    options: ["45–48°C", "52–55°C", "60–65°C", "71°C+"],
    correctAnswer: 1,
    explanation:
      "Rare steak is achieved at an internal temperature of 52–55°C (125–130°F), producing a cool red center with a very soft texture.",
  },
  {
    id: 3,
    question: "What is 'Barding' in roasting terminology?",
    options: [
      "Spooning pan juices over the meat",
      "Wrapping lean meat with sheets of fat",
      "Inserting fat strips inside the meat with a needle",
      "Marinating meat in acidic liquid overnight",
    ],
    correctAnswer: 1,
    explanation:
      "Barding involves wrapping or draping thin sheets of fat (typically pork fatback or bacon) over lean cuts to prevent surface drying during roasting.",
  },
  {
    id: 4,
    question: "Which technique uses a larding needle to insert fat strips INTO the meat?",
    options: ["Basting", "Barding", "Larding", "Braising"],
    correctAnswer: 2,
    explanation:
      "Larding uses a special larding needle (lardoire) to thread thin strips of chilled pork back fat through the interior of lean meat, providing internal moisture.",
  },
  {
    id: 5,
    question: "At what temperature does caramelization of sucrose begin?",
    options: ["Above 100°C", "Above 120°C", "Above 160°C", "Above 200°C"],
    correctAnswer: 2,
    explanation:
      "Caramelization of sucrose begins at approximately 160°C (320°F). Different sugars caramelize at different temperatures — fructose starts lower (~110°C).",
  },
  {
    id: 6,
    question: "What is the recommended oven temperature range for Slow Roasting?",
    options: ["200–250°C", "175–200°C", "120–150°C", "80–100°C"],
    correctAnswer: 2,
    explanation:
      "Slow roasting uses low temperatures of 120–150°C over extended periods, allowing collagen to break down gradually into gelatin for maximum tenderness.",
  },
  {
    id: 7,
    question: "Why should you NEVER overcrowd a roasting pan?",
    options: [
      "It makes the food cook too fast",
      "It traps steam and prevents proper browning",
      "It increases the Maillard reaction too much",
      "It causes the oven temperature to rise",
    ],
    correctAnswer: 1,
    explanation:
      "Overcrowding traps steam released by the food, creating a humid environment that causes steaming instead of roasting, preventing the dry-heat browning essential for flavor.",
  },
  {
    id: 8,
    question: "What is the safe minimum internal temperature for whole poultry (chicken/turkey)?",
    options: ["63°C (145°F)", "71°C (160°F)", "74°C (165°F)", "80°C (176°F)"],
    correctAnswer: 2,
    explanation:
      "Whole poultry must reach a minimum internal temperature of 74°C (165°F) at the thickest part of the thigh, away from the bone, for food safety.",
  },
  {
    id: 9,
    question: "Which roasting method starts on the stovetop and finishes in the oven?",
    options: ["Spit Roasting", "Closed Roasting", "Pan Roasting", "Slow Roasting"],
    correctAnswer: 2,
    explanation:
      "Pan roasting is a hybrid technique where food is first seared in a hot skillet on the stovetop, then the entire pan is transferred to the oven to finish cooking evenly.",
  },
  {
    id: 10,
    question: "What is the primary difference between Roasting and Baking?",
    options: [
      "Roasting uses water; Baking uses oil",
      "Roasting focuses on browning/texture; Baking focuses on structure/even cooking",
      "Roasting is always at lower temperatures",
      "There is no difference — they are the same",
    ],
    correctAnswer: 1,
    explanation:
      "Roasting emphasizes browning, caramelization, and textural crust development, while baking focuses on structure development, rise, and consistent internal crumb.",
  },
  {
    id: 11,
    question: "What temperature range is recommended for roasting Root Vegetables?",
    options: ["120–150°C", "150–170°C", "175–190°C", "190–200°C"],
    correctAnswer: 3,
    explanation:
      "Root vegetables (carrots, parsnips, potatoes, beets) roast best at 190–200°C (375–400°F). They should be cut evenly for consistent cooking.",
  },
  {
    id: 12,
    question: "Why should you rest meat after roasting?",
    options: [
      "To let it cool down for handling",
      "To allow protein fibers to relax and reabsorb juices",
      "To make it easier to season",
      "To increase the internal temperature further",
    ],
    correctAnswer: 1,
    explanation:
      "Resting allows protein fibers to relax and reabsorb the juices that were driven to the center during cooking. Cutting too soon causes juice loss, resulting in dry meat.",
  },
  {
    id: 13,
    question: "Spit Roasting achieves even browning primarily through:",
    options: [
      "High oven temperature",
      "Wrapping in foil",
      "Continuous rotation causing gravity-driven self-basting",
      "Frequent manual basting with butter",
    ],
    correctAnswer: 2,
    explanation:
      "The constant rotation of spit roasting causes fats to continuously drip and recirculate across the surface, creating natural self-basting and unmatched even browning.",
  },
  {
    id: 14,
    question: "Which French chemist discovered the Maillard reaction?",
    options: ["Auguste Escoffier", "Louis-Camille Maillard", "Marie-Antoine Carême", "Paul Bocuse"],
    correctAnswer: 1,
    explanation:
      "The Maillard reaction is named after French chemist Louis-Camille Maillard, who first described it in 1912 while studying kidney metabolism.",
  },
  {
    id: 15,
    question: "What temperature range is ideal for roasting Delicate Vegetables (asparagus, zucchini)?",
    options: ["120–150°C", "175–190°C", "200–220°C", "250°C+"],
    correctAnswer: 1,
    explanation:
      "Delicate vegetables like asparagus, zucchini, bell peppers, and tomatoes roast best at 175–190°C (350–375°F) to avoid burning their thinner structures.",
  },
];
