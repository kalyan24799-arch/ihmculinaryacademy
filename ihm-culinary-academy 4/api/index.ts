import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Initialize GoogleGenAI server-side with strict telemetry headers
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
  console.log("Successfully initialized server-side Gemini AI client.");
} else {
  console.warn("WARNING: GEMINI_API_KEY is not defined in environment variables. Chef-Bot will use informative fallback answers.");
}

app.use(express.json());

// API: AI Culinary Assistant
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message parameter is required." });
      return;
    }

    // Standard fallback when the integration doesn't have an injected API key
    if (!ai) {
      // Return beautiful, premium fallback knowledge directly to keep the experience seamless
      const promptLower = message.toLowerCase();
      let reply = "Welcome, Chef-to-be! I am currently running on local fallback mode because the API key is being initialized. Here is immediate professional advice:\n\n";
      
      if (promptLower.includes("sauce") || promptLower.includes("culinary") || promptLower.includes("cook")) {
        reply += "• **Culinary Tip:** Classical French sauces (Béchamel, Velouté, Espagnole, Tomato, Hollandaise) rely on precise temperature and lipid ratios. Always cook your flour roux to the precise color specifications (White, Blond, or Brown) to secure the perfect starch swelling index.";
      } else if (promptLower.includes("sip") || promptLower.includes("wine") || promptLower.includes("beverage") || promptLower.includes("bar")) {
        reply += "• **F&B Service Tip:** When serving fine red wine, ensure the bottle stands vertical for 12 hours before uncorking. Present at 16-18°C. White wines should go into a bucket containing 50% rock water and 50% crushed ice to retain crisp carbonation balances.";
      } else if (promptLower.includes("front") || promptLower.includes("opera") || promptLower.includes("pms") || promptLower.includes("tariff")) {
        reply += "• **Front Office Tip:** Property Management Systems (Opera PMS) manage reservation indexes. Always check room cleaning indicators (Vacant Clean vs Dirty) before assigning keys to prevent guests encountering non-prepared cabins.";
      } else {
        reply += "• **Hotel Industry Standard:** The global hospitality sector values three metrics above all else: ARR (Average Room Rate), RevPAR (Revenue Per Available Room), and Net Promoter Scores. Focus deeply on cross-training across Food Production, Service, Front Office, and Housekeeping.";
      }
      
      res.json({ text: reply + "\n\nFeel free to type more questions about our academy's syllabus or recipes!" });
      return;
    }

    const systemInstruction = 
      "You are Chef-Bot, a luxury culinary master and world-class hospitality mentor at IHM Culinary Academy " +
      "(founded by prestigious hospitality authority Kalyan Singh, Mobile: +91 99585 89430, Email: kalyan24799@gmail.com). " +
      "You have an encyclopedic knowledge of: " +
      "1. NCHMCT B.Sc. H&HA Course Curriculum across Semesters 1 to 6. " +
      "2. Classical French cooking methods, the 5 Mother Sauces, and advanced Pastry and Confectionery science. " +
      "3. Food and Beverage Service, spirits, global viticulture system, cocktails, and table service. " +
      "4. Front Office Operations (RevPAR, Opera PMS commands, reservations, room rates). " +
      "5. Accommodation Operations and Housekeeping (chemistry of cleaning agents, stain removal protocols). " +
      "6. The Art of Roasting, Maillard reactions, and meat temperature control. " +
      "Respond in a highly encouraging, elegant, and professional tone with concise bullet points where logical. " +
      "Provide answers with genuine professional culinary wisdom, referencing historical techniques or precise safety indices. " +
      "If asked about enrollment or contacts, refer them to Kalyan Singh (contact details above) warmly.";

    // Convert client-supplied history layout to correct Gemini format
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((h: { sender: "user" | "bot"; text: string }) => {
        contents.push({
          role: h.sender === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        });
      });
    }

    // Add current user prompt
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to query Chef-Bot: " + error.message });
  }
});

// Export the Express app for Vercel's serverless runtime
export default app;
