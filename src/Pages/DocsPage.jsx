import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Bot,
  Mic,
  AudioWaveform,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  Zap,
  Terminal,
  FileCode2,
  CheckCircle2,
} from "lucide-react";
import Footer from "../common/Footer";

const docsSections = [
  {
    title: "Getting Started",
    icon: <BookOpen size={24} />,
    desc: "Quickly integrate AI voice agents into your applications.",
  },
  {
    title: "Voice API",
    icon: <Mic size={24} />,
    desc: "Build real-time conversational voice experiences using APIs.",
  },
  {
    title: "AI Automation",
    icon: <Bot size={24} />,
    desc: "Automate workflows and customer interactions with AI.",
  },
  {
    title: "Global Infrastructure",
    icon: <Globe size={24} />,
    desc: "Deploy scalable AI voice infrastructure globally.",
  },
];

const features = [
  "REST API Integration",
  "Real-Time Voice Streaming",
  "Webhook Events",
  "Authentication & Security",
  "SDK Support",
  "Enterprise Scalability",
];

const codeLines = [
  "const agent = new VoiceAgent();",
  "agent.connect();",
  "agent.startConversation();",
  "agent.on('speech', callback);",
  "agent.generateResponse();",
  "agent.streamAudio();",
];

export default function DocsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#d4af37]">
                <Sparkles size={16} />
                Developer Documentation
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
                Build Powerful AI Voice Experiences.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
                Explore APIs, SDKs, and developer tools to integrate
                conversational AI, real-time voice agents, and automation into
                your products.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 35px rgba(212,175,55,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2 rounded-full bg-[#d4af37] px-7 py-4 text-sm font-semibold text-black"
                >
                  Read Documentation

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white">
                  API Reference
                </button>
              </div>
            </motion.div>

            {/* RIGHT CODE BLOCK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d] shadow-2xl backdrop-blur-2xl">
                {/* TOP BAR */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Terminal size={16} />
                    voice-agent-sdk.js
                  </div>
                </div>

                {/* CODE */}
                <div className="space-y-4 p-7 font-mono text-sm text-white/80">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <span className="w-6 text-white/30">
                        {index + 1}
                      </span>

                      <span className="text-[#d4af37]">{line}</span>
                    </motion.div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="border-t border-white/10 bg-black/30 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-emerald-400">
                      <CheckCircle2 size={16} />
                      API Connected Successfully
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <AudioWaveform size={16} />
                      Real-time Streaming Enabled
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOCS SECTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            DOCUMENTATION SECTIONS
          </p>

          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Everything Developers Need To Build Voice AI.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {docsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/20 hover:bg-white/[0.05]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition duration-300 group-hover:scale-105 group-hover:bg-[#d4af37]/20">
                {section.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {section.title}
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                {section.desc}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d4af37] transition hover:gap-3">
                Explore Docs
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              API FEATURES
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Powerful Infrastructure Built For Developers.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Create scalable AI-powered voice experiences using real-time APIs,
              enterprise-grade security, and modern developer tooling.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                  <Code2 size={18} />
                </div>

                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-br from-[#d4af37]/10 to-white/[0.03] p-12 text-center backdrop-blur-2xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
            <FileCode2 size={34} />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
            Ready To Build With Voice AI APIs?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Start building intelligent conversational experiences using scalable
            voice APIs, AI automation, and real-time communication tools.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(212,175,55,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-black"
          >
            Start Building
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
      < Footer />
    </div>
  );
}
