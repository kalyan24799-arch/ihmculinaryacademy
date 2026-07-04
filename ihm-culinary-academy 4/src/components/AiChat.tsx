import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, ChefHat, Info, HelpCircle } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface AiChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiChat({ isOpen, onClose }: AiChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested preset questions for quick interactive demo
  const quickPrompts = [
    { label: "🥘 Espagnole Sauce", text: "What is an Espagnole sauce, its main thickener, and 3 famous derivatives?" },
    { label: "🏨 Explain RevPAR", text: "How is RevPAR calculated and why is it crucial for hotel revenue management?" },
    { label: "🔑 Opera PMS Guide", text: "Give me the step-by-step procedures to register a direct walk-in guest in Opera PMS." },
    { label: "🧹 Blood Stain chemical", text: "What are the chemical rules to wash blood stains from hotel linens safely?" },
    { label: "🔥 Roasting Science", text: "Explain the Maillard reaction and the difference between Barding and Larding." }
  ];

  // Load chat history from local storage on mount
  useEffect(() => {
    const cachedHistory = localStorage.getItem("ihm_academy_chat_history");
    if (cachedHistory) {
      try {
        setMessages(JSON.parse(cachedHistory));
      } catch (e) {
        // clear corrupted cache
        localStorage.removeItem("ihm_academy_chat_history");
      }
    } else {
      // Seed initial welcoming message
      setMessages([
        {
          sender: "bot",
          text: "Greetings, Culinary Scholar! 🧑‍🍳 I am **Chef-Bot**, your luxury hospitality advisor. I am fully integrated with the entire NCHMCT B.Sc. H&HA curriculum across Semesters 1-6. Ask me anything about mother sauces, wine fermentations, housekeeping chemistry, and corporate RevPAR formulas!"
        }
      ]);
    }
  }, []);

  // Save chat history to local storage
  const saveHistory = (newMessages: Message[]) => {
    setMessages(newMessages);
    localStorage.setItem("ihm_academy_chat_history", JSON.stringify(newMessages));
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { sender: "user", text };
    const updatedMessages = [...messages, userMsg];
    saveHistory(updatedMessages);
    setInputValue("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-10) // Send last 10 messages for lightweight context
        })
      });

      if (!response.ok) {
        throw new Error("Failed to reach Chef-Bot server.");
      }

      const data = await response.json();
      const botMsg: Message = { sender: "bot", text: data.text || "I apologize, my culinary dials scrambled momentarily. Please try again." };
      saveHistory([...updatedMessages, botMsg]);
    } catch (err: any) {
      const errorMsg: Message = {
        sender: "bot",
        text: "My apologies, I am having trouble connecting to the cooking logs. Here is a helpful tip:\n\n*Be sure you are using a stabilized internet connection or check your API secret tokens in AI Studio Secrets.*"
      };
      saveHistory([...updatedMessages, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    const initial = [
      {
        sender: "bot",
        text: "Greetings, Culinary Scholar! 🧑‍🍳 I am **Chef-Bot**, your luxury hospitality advisor. Ask me anything about B.Sc. H&HA subjects, menu planning, and housekeeping rules!"
      }
    ] as Message[];
    saveHistory(initial);
  };

  // Convert raw markdown-ish double asterisks (bold) into basic browser display bold
  const renderMessageText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="text-amber-300 font-bold">{part.slice(2, -2)}</strong>;
      }
      // handle bullet points replacement inside responses for cleanliness
      if (part.startsWith("• ")) {
        return <span key={i} className="block pl-3 text-neutral-200 mt-1">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 250, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 250, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-[400px] h-[550px] bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Drawer Heading */}
          <div className="p-4 bg-gradient-to-r from-stone-900 via-neutral-900 to-stone-900 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg animate-pulse">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-widest font-mono uppercase flex items-center gap-1">
                  Chef-Bot AI
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                </h3>
                <span className="text-[10px] text-neutral-400 font-mono tracking-wider block -mt-0.5">
                  IHM Syllabus Advisor
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="text-[9px] uppercase px-2 py-1 font-mono tracking-wider text-neutral-400 hover:text-white hover:bg-neutral-805 rounded"
                title="Reset conversation log"
              >
                Clear log
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white"
                id="close-chat-drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Bubble Message Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-neutral-950">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <span className="text-[9px] text-neutral-500 uppercase font-mono tracking-widest mb-0.5">
                  {msg.sender === "user" ? "Scholar" : "Chef-Bot Mentor"}
                </span>
                <div
                  className={`p-3 rounded-lg text-xs leading-relaxed whitespace-pre-wrap tracking-wide ${
                    msg.sender === "user"
                      ? "bg-amber-505 bg-amber-500 text-black font-semibold rounded-br-none"
                      : "bg-neutral-900 border border-neutral-800 text-stone-200 rounded-bl-none"
                  }`}
                >
                  {renderMessageText(msg.text)}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 p-3 bg-neutral-900 border border-neutral-850 rounded-lg max-w-[85%]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-stone-400 italic">Chef-Bot is recalling cooking logs...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick interactive search prompts */}
          <div className="p-3 bg-neutral-900/60 border-t border-neutral-800/80">
            <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono block mb-2 font-bold flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-amber-500" /> Need a practical exam answer?
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-16 overflow-y-auto pb-1">
              {quickPrompts.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(btn.text)}
                  className="px-2 py-1 rounded bg-neutral-950 border border-neutral-800 hover:border-amber-500/20 text-[9px] text-stone-300 font-mono transition-all hover:text-amber-400 cursor-pointer text-left"
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Typing Action Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 bg-neutral-900 border-t border-neutral-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type cooking question or code..."
              className="flex-grow px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50"
            />
            <button
              type="submit"
              disabled={loading || !inputValue.trim()}
              className="p-2 rounded-lg bg-amber-500 disabled:opacity-40 text-black hover:bg-amber-400 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
