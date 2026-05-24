import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Mic,
  Brain,
  AudioWaveform,
  Database,
  Workflow,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: "user",
    label: "Caller",
    description:
      "Customer starts a natural voice conversation with your AI agent.",
    icon: PhoneCall,
  },
  {
    id: "audio",
    label: "Realtime Audio Stream",
    description:
      "Low-latency audio transport powered by programmable voice APIs.",
    icon: AudioWaveform,
  },
  {
    id: "stt",
    label: "Speech Recognition",
    description:
      "Convert spoken language into structured text instantly.",
    icon: Mic,
  },
  {
    id: "llm",
    label: "LLM Orchestration",
    description:
      "AI reasoning, memory, tool calling, and conversational flows.",
    icon: Brain,
  },
  {
    id: "tts",
    label: "Voice Synthesis",
    description:
      "Generate realistic AI speech responses with expressive voices.",
    icon: Sparkles,
  },
  {
    id: "logic",
    label: "Business Logic",
    description:
      "Trigger workflows, CRM actions, automations, and analytics.",
    icon: Workflow,
  },
  {
    id: "external",
    label: "External APIs",
    description:
      "Connect payment systems, databases, calendars, and support tools.",
    icon: Database,
  },
];

// Desktop boxes with absolute positions (only used on lg screens)
const desktopBoxes = [
  { id: "audio", label: "Voice Gateway", className: "left-8 top-8", x: 32, y: 32 },
  { id: "stt", label: "Speech-to-Text", className: "left-52 top-24", x: 208, y: 96 },
  { id: "tts", label: "Text-to-Speech", className: "left-24 top-52", x: 96, y: 208 },
  { id: "llm", label: "AI Agent Core", className: "left-[340px] top-44", x: 340, y: 176 },
  { id: "logic", label: "Workflow Engine", className: "left-52 top-[320px]", x: 208, y: 320 },
  { id: "external", label: "External APIs", className: "left-[360px] top-[300px]", x: 360, y: 300 },
];

// Mobile flow items (simplified, no absolute positioning)
const mobileFlowItems = [
  { id: "audio", label: "Voice Gateway", icon: AudioWaveform, color: "from-cyan-500/20 to-blue-500/20" },
  { id: "stt", label: "Speech-to-Text", icon: Mic, color: "from-purple-500/20 to-pink-500/20" },
  { id: "llm", label: "AI Agent Core", icon: Brain, color: "from-amber-500/20 to-[#d4af37]/20" },
  { id: "tts", label: "Text-to-Speech", icon: Sparkles, color: "from-emerald-500/20 to-teal-500/20" },
  { id: "logic", label: "Workflow Engine", icon: Workflow, color: "from-orange-500/20 to-red-500/20" },
  { id: "external", label: "External APIs", icon: Database, color: "from-indigo-500/20 to-violet-500/20" },
];

export default function VoiceAgentSection() {
  const [active, setActive] = useState("llm");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      className="relative overflow-x-hidden bg-[#050505] px-4 py-16 text-white sm:px-6 md:py-20 lg:overflow-visible lg:px-6 lg:py-28"
      onMouseMove={(e) => {
        if (isDesktop) {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      }}
    >
      {/* animated cursor glow - desktop only */}
      {isDesktop && (
        <motion.div
          animate={{
            x: mousePosition.x - 140,
            y: mousePosition.y - 140,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl"
        />
      )}

      {/* background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* top heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#d4af37] sm:px-5">
            <Sparkles size={14} />
            Voice Agent Infrastructure
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Build production-ready{" "}
            <span className="mt-2 block text-[#d4af37] lg:ml-4 lg:inline">
              AI Voice Agents
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl px-2 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            Inspired by modern programmable voice platforms like Twilio.
            Connect telephony, speech AI, workflows, and real-time voice
            orchestration in a single unified stack.
          </p>
        </motion.div>

        {/* LAYOUT: changes at lg breakpoint */}
        <div className="mt-12 grid gap-8 md:mt-16 lg:mt-20 lg:grid-cols-[360px_1fr] lg:gap-12">
          
          {/* LEFT SIDE - step list (fully responsive, never cuts off) */}
          <div className="relative w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {steps.map((item, index) => {
                const isActive = active === item.id;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    onMouseEnter={() => isDesktop && setActive(item.id)}
                    onClick={() => setActive(item.id)}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={`group relative cursor-pointer rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
                      isActive
                        ? "border-[#d4af37]/30 bg-[#d4af37]/10"
                        : "border-white/5 bg-white/[0.02] hover:border-white/10"
                    }`}
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.4 : 1,
                        backgroundColor: isActive ? "#d4af37" : "rgba(255,255,255,0.2)",
                      }}
                      className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full lg:top-8 lg:translate-y-0"
                    />

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition sm:h-12 sm:w-12 sm:rounded-2xl ${
                          isActive
                            ? "bg-[#d4af37] text-black"
                            : "bg-white/5 text-white/70"
                        }`}
                      >
                        <Icon size={20} className="sm:h-[22px] sm:w-[22px]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-base font-medium transition sm:text-lg ${
                            isActive ? "text-white" : "text-white/70"
                          }`}
                        >
                          {item.label}
                        </h3>

                        <motion.p
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: isActive ? 1 : 0.55 }}
                          className="mt-1 text-xs leading-6 text-white/55 sm:mt-2 sm:text-sm sm:leading-7"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full rounded-2xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black shadow-lg transition-all hover:bg-[#c8a82e] sm:mt-8 sm:py-4"
            >
              Start Building Voice Agents
            </motion.button>
          </div>

          {/* RIGHT SIDE: Architecture visualization */}
          <div className="w-full min-w-0">
            {/* DESKTOP VERSION (lg and above) - exact original layout */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[34px] border border-[#d4af37]/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:46px_46px]" />

                <div className="relative z-10 mb-10 flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-6 py-4">
                  <div>
                    <p className="text-sm text-white/50">Active AI Session</p>
                    <h3 className="mt-1 text-xl font-semibold">Voice Agent Runtime</h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Live
                  </div>
                </div>

                <div className="relative min-h-[480px]">
                  {desktopBoxes.map((box, i) => {
                    const isActive = active === box.id;
                    return (
                      <motion.div
                        key={box.id}
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          opacity: isActive ? 1 : 0.7,
                          y: isActive ? -8 : [0, -5, 0],
                        }}
                        transition={{
                          y: { repeat: Infinity, duration: 4 + i, repeatType: "reverse" },
                          type: "spring",
                          stiffness: 220,
                        }}
                        whileHover={{ scale: 1.08 }}
                        className={`absolute ${box.className} z-10 rounded-2xl border px-6 py-4 text-sm font-medium backdrop-blur-xl transition-all ${
                          isActive
                            ? "border-[#d4af37]/40 bg-[#d4af37]/15 text-white shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                            : "border-white/10 bg-black/50 text-white/75"
                        }`}
                      >
                        {box.label}
                      </motion.div>
                    );
                  })}

                  <svg className="absolute inset-0 h-full w-full">
                    <line x1="110" y1="80" x2="250" y2="130" stroke="rgba(212,175,55,0.25)" strokeWidth="2" />
                    <line x1="280" y1="145" x2="400" y2="190" stroke="rgba(212,175,55,0.25)" strokeWidth="2" />
                    <line x1="180" y1="260" x2="400" y2="220" stroke="rgba(212,175,55,0.25)" strokeWidth="2" />
                    <line x1="250" y1="370" x2="420" y2="340" stroke="rgba(212,175,55,0.25)" strokeWidth="2" />
                  </svg>

                  <motion.div
                    animate={{
                      x: active === "audio" ? 30 : active === "stt" ? 220 : active === "tts" ? 120 : active === "llm" ? 360 : active === "logic" ? 220 : active === "external" ? 390 : 0,
                      y: active === "audio" ? 40 : active === "stt" ? 120 : active === "tts" ? 240 : active === "llm" ? 180 : active === "logic" ? 340 : active === "external" ? 320 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 140, damping: 18 }}
                    className="absolute h-40 w-40 rounded-full bg-[#d4af37]/15 blur-3xl"
                  />
                </div>
              </motion.div>
            </div>

            {/* MOBILE VERSION (< lg) - vertical flow that never cuts off */}
            <div className="block lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-[#d4af37]/10 bg-white/[0.03] p-4 backdrop-blur-sm sm:p-5"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/5 bg-black/30 px-4 py-3 sm:mb-5">
                  <div>
                    <p className="text-xs text-white/50 sm:text-sm">Active AI Session</p>
                    <h3 className="text-sm font-semibold sm:text-base">Voice Agent Runtime</h3>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live
                  </div>
                </div>

                {/* Vertical flow diagram for mobile */}
                <div className="space-y-3">
                  {mobileFlowItems.map((item, idx) => {
                    const isActiveNode = active === item.id;
                    const IconComp = item.icon;
                    
                    return (
                      <div key={item.id}>
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActive(item.id)}
                          className={`flex cursor-pointer items-center gap-4 rounded-xl border p-3 transition-all ${
                            isActiveNode
                              ? "border-[#d4af37]/40 bg-gradient-to-r shadow-lg from-[#d4af37]/10 to-transparent"
                              : "border-white/10 bg-black/40 hover:border-white/20"
                          }`}
                          animate={{
                            scale: isActiveNode ? 1.01 : 1,
                          }}
                        >
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                              isActiveNode
                                ? "bg-[#d4af37] text-black"
                                : "bg-white/10 text-white/70"
                            }`}
                          >
                            <IconComp size={22} />
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${isActiveNode ? "text-[#d4af37]" : "text-white/80"}`}>
                              {item.label}
                            </p>
                            {isActiveNode && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-1 text-xs text-white/50"
                              >
                                {steps.find(s => s.id === item.id)?.description || "Active component"}
                              </motion.p>
                            )}
                          </div>
                          {idx < mobileFlowItems.length - 1 && (
                            <div className="absolute left-6 -bottom-3 text-[#d4af37]/30">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                              </svg>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>

                {/* Current active info */}
                <div className="mt-5 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5 p-3">
                  <p className="text-center text-xs leading-relaxed text-white/70">
                    <span className="font-semibold text-[#d4af37]">
                      {steps.find((s) => s.id === active)?.label || "AI Agent Core"}
                    </span>{" "}
                    — {steps.find((s) => s.id === active)?.description || "Central orchestration for voice AI."}
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[10px] text-white/40">
                    <AudioWaveform size={12} />
                    tap any card to explore
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}