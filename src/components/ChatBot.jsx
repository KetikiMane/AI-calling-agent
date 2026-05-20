import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 How can I help you with Voice AI today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    // fake ai response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Our AI platform helps automate calls, analytics, CRM workflows, and customer engagement.",
        },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 30px rgba(212,175,55,0.25)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-2xl"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-28 right-6 z-[999] flex h-[600px] w-[380px] flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0b0b]/95 shadow-2xl backdrop-blur-2xl"
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                <Bot size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Voice AI Assistant
                </h3>

                <p className="text-sm text-emerald-400">
                  Online now
                </p>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#d4af37] text-black"
                        : "bg-white/5 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* INPUT */}
            <div className="border-t border-white/10 p-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSend()
                  }
                  type="text"
                  placeholder="Ask something..."
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                />

                <button
                  onClick={handleSend}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4af37] text-black"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}