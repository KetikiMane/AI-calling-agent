// import React, { useState } from "react"
// import { motion } from "framer-motion"

// const steps = [
//   {
//     id: "user",
//     label: "User",
//     description: "Your customer or end user speaking naturally.",
//   },
//   { id: "audio", label: "Audio Input" },
//   { id: "stt", label: "Speech to Text (STT)" },
//   { id: "llm", label: "LLM orchestration" },
//   { id: "tts", label: "Text to Speech (TTS)" },
//   { id: "logic", label: "Business logic" },
//   { id: "external", label: "External systems" },
// ]

// const boxes = [
//   {
//     id: "audio",
//     label: "Audio Input",
//     position: "left-8 top-8",
//   },
//   {
//     id: "stt",
//     label: "STT API",
//     position: "left-44 top-20",
//   },
//   {
//     id: "tts",
//     label: "TTS API",
//     position: "left-28 top-44",
//   },
//   {
//     id: "llm",
//     label: "LLM",
//     position: "left-72 top-48",
//   },
//   {
//     id: "logic",
//     label: "Business Logic",
//     position: "left-40 top-72",
//   },
// ]

// export default function VoiceAgentSection() {
//   const [active, setActive] = useState("audio")
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   return (
//     <section
//       className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white"
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect()

//         setMousePosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         })
//       }}
//     >
//       {/* CURSOR GLOW */}
//       <motion.div
//         animate={{
//           x: mousePosition.x - 120,
//           y: mousePosition.y - 120,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 120,
//           damping: 20,
//         }}
//         className="pointer-events-none absolute h-60 w-60 rounded-full bg-[#d4af37]/10 blur-3xl"
//       />

//       <div className="relative mx-auto max-w-6xl">
//         {/* heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
//             A single, unified{" "}
//             <span className="text-[#d4af37]">
//               Voice Agent API
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
//             Hover the left modules — the matching node on the right pops out.
//           </p>
//         </motion.div>

//         <div className="mt-16 grid items-start gap-10 lg:grid-cols-[320px_1fr]">
//           {/* LEFT SIDE */}
//           <div className="relative pl-8">
//             <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10" />

//             <div className="space-y-5">
//               {steps.map((item, index) => {
//                 const isActive = active === item.id

//                 return (
//                   <motion.div
//                     key={item.id}
//                     onMouseEnter={() => setActive(item.id)}
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{
//                       delay: index * 0.08,
//                     }}
//                     whileHover={{
//                       x: 16,
//                       scale: 1.04,
//                     }}
//                     className="relative cursor-pointer"
//                   >
//                     <motion.span
//                       animate={{
//                         scale: isActive ? 1.8 : 1,
//                         backgroundColor: isActive
//                           ? "#d4af37"
//                           : "rgba(255,255,255,0.3)",
//                       }}
//                       className="absolute -left-[26px] top-2 h-2.5 w-2.5 rounded-full"
//                     />

//                     <h3
//                       className={`text-lg transition ${
//                         isActive
//                           ? "text-white"
//                           : "text-white/65"
//                       }`}
//                     >
//                       {item.label}
//                     </h3>

//                     {item.description && isActive && (
//                       <motion.p
//                         initial={{ opacity: 0, y: 8 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="mt-2 text-sm leading-6 text-white/55"
//                       >
//                         {item.description}
//                       </motion.p>
//                     )}
//                   </motion.div>
//                 )
//               })}
//             </div>

//             <motion.button
//               whileHover={{
//                 scale: 1.05,
//                 y: -2,
//               }}
//               whileTap={{
//                 scale: 0.96,
//               }}
//               className="mt-10 rounded-xl bg-[#d4af37] px-6 py-3 text-sm font-medium text-black"
//             >
//               Try It Now
//             </motion.button>
//           </div>

//           {/* RIGHT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7 }}
//             className="relative overflow-hidden rounded-3xl border border-[#d4af37]/10 bg-white/[0.02] p-8 backdrop-blur-2xl"
//           >
//             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

//             <div className="relative min-h-[420px]">
//               {boxes.map((box, i) => {
//                 const isActive = active === box.id

//                 return (
//                   <motion.div
//                     key={box.id}
//                     animate={{
//                       scale: isActive ? 1.12 : 1,
//                       y: isActive ? -12 : [0, -4, 0],
//                       opacity: isActive ? 1 : 0.7,
//                     }}
//                     transition={{
//                       y: {
//                         repeat: Infinity,
//                         duration: 3 + i,
//                       },
//                       type: "spring",
//                       stiffness: 250,
//                     }}
//                     whileHover={{
//                       scale: 1.08,
//                     }}
//                     className={`absolute ${box.position} rounded-2xl border border-[#d4af37]/20 bg-black/60 px-5 py-4 text-sm text-white/85 backdrop-blur-xl`}
//                   >
//                     {box.label}
//                   </motion.div>
//                 )
//               })}

//               {/* MOVING ACTIVE GLOW */}
//               <motion.div
//                 animate={{
//                   x:
//                     active === "audio"
//                       ? 40
//                       : active === "stt"
//                       ? 180
//                       : active === "tts"
//                       ? 110
//                       : active === "llm"
//                       ? 280
//                       : active === "logic"
//                       ? 170
//                       : 0,

//                   y:
//                     active === "audio"
//                       ? 50
//                       : active === "stt"
//                       ? 100
//                       : active === "tts"
//                       ? 200
//                       : active === "llm"
//                       ? 210
//                       : active === "logic"
//                       ? 320
//                       : 0,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 160,
//                   damping: 18,
//                 }}
//                 className="absolute h-32 w-32 rounded-full bg-[#d4af37]/15 blur-3xl"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  PhoneCall,
  Mic,
  Brain,
  AudioWaveform,
  Database,
  Workflow,
  Sparkles,
} from "lucide-react"

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
]

const boxes = [
  {
    id: "audio",
    label: "Voice Gateway",
    position: "left-8 top-8",
  },
  {
    id: "stt",
    label: "Speech-to-Text",
    position: "left-52 top-24",
  },
  {
    id: "tts",
    label: "Text-to-Speech",
    position: "left-24 top-52",
  },
  {
    id: "llm",
    label: "AI Agent Core",
    position: "left-[340px] top-44",
  },
  {
    id: "logic",
    label: "Workflow Engine",
    position: "left-52 top-[320px]",
  },
  {
    id: "external",
    label: "External APIs",
    position: "left-[360px] top-[300px]",
  },
]

export default function VoiceAgentSection() {
  const [active, setActive] = useState("llm")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  return (
    <section
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
    >
      {/* animated cursor glow */}
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#d4af37]">
            <Sparkles size={14} />
            Voice Agent Infrastructure
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Build production-ready{" "}
            <span className="ml-4 font-italic-premium text-[#d4af37]">
                  AI Voice Agents
                </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Inspired by modern programmable voice platforms like Twilio.
            Connect telephony, speech AI, workflows, and real-time voice
            orchestration in a single unified stack.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[360px_1fr]">
          {/* LEFT SIDE */}
          <div className="relative">
           

            <div className="space-y-5">
              {steps.map((item, index) => {
                const isActive = active === item.id
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.id}
                    onMouseEnter={() => setActive(item.id)}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 12,
                    }}
                    className={`group relative cursor-pointer rounded-3xl border p-5 transition-all duration-300 ${
                      isActive
                        ? "border-[#d4af37]/30 bg-[#d4af37]/10"
                        : "border-white/5 bg-white/[0.02] hover:border-white/10"
                    }`}
                  >
                    {/* glowing dot */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.4 : 1,
                        backgroundColor: isActive
                          ? "#d4af37"
                          : "rgba(255,255,255,0.2)",
                      }}
                      className="absolute -left-[7px] top-8 h-3 w-3 rounded-full"
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                          isActive
                            ? "bg-[#d4af37] text-black"
                            : "bg-white/5 text-white/70"
                        }`}
                      >
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3
                          className={`text-lg font-medium transition ${
                            isActive
                              ? "text-white"
                              : "text-white/70"
                          }`}
                        >
                          {item.label}
                        </h3>

                        <motion.p
                          initial={{ opacity: 0.5 }}
                          animate={{
                            opacity: isActive ? 1 : 0.55,
                          }}
                          className="mt-2 text-sm leading-7 text-white/55"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-8 w-full rounded-2xl bg-[#d4af37] px-6 py-4 text-sm font-semibold text-black"
            >
              Start Building Voice Agents
            </motion.button>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[34px] border border-[#d4af37]/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
          >
            {/* grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:46px_46px]" />

            {/* top status */}
            <div className="relative z-10 mb-10 flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-6 py-4">
              <div>
                <p className="text-sm text-white/50">
                  Active AI Session
                </p>

                <h3 className="mt-1 text-xl font-semibold">
                  Voice Agent Runtime
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live
              </div>
            </div>

            {/* architecture */}
            <div className="relative min-h-[480px]">
              {boxes.map((box, i) => {
                const isActive = active === box.id

                return (
                  <motion.div
                    key={box.id}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      opacity: isActive ? 1 : 0.7,
                      y: isActive ? -8 : [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 4 + i,
                      },
                      type: "spring",
                      stiffness: 220,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className={`absolute ${box.position} z-10 rounded-2xl border px-6 py-4 text-sm font-medium backdrop-blur-xl transition-all ${
                      isActive
                        ? "border-[#d4af37]/40 bg-[#d4af37]/15 text-white shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                        : "border-white/10 bg-black/50 text-white/75"
                    }`}
                  >
                    {box.label}
                  </motion.div>
                )
              })}

              {/* connection lines */}
              <svg className="absolute inset-0 h-full w-full">
                <line
                  x1="110"
                  y1="80"
                  x2="250"
                  y2="130"
                  stroke="rgba(212,175,55,0.25)"
                  strokeWidth="2"
                />

                <line
                  x1="280"
                  y1="145"
                  x2="400"
                  y2="190"
                  stroke="rgba(212,175,55,0.25)"
                  strokeWidth="2"
                />

                <line
                  x1="180"
                  y1="260"
                  x2="400"
                  y2="220"
                  stroke="rgba(212,175,55,0.25)"
                  strokeWidth="2"
                />

                <line
                  x1="250"
                  y1="370"
                  x2="420"
                  y2="340"
                  stroke="rgba(212,175,55,0.25)"
                  strokeWidth="2"
                />
              </svg>

              {/* active glow */}
              <motion.div
                animate={{
                  x:
                    active === "audio"
                      ? 30
                      : active === "stt"
                      ? 220
                      : active === "tts"
                      ? 120
                      : active === "llm"
                      ? 360
                      : active === "logic"
                      ? 220
                      : active === "external"
                      ? 390
                      : 0,

                  y:
                    active === "audio"
                      ? 40
                      : active === "stt"
                      ? 120
                      : active === "tts"
                      ? 240
                      : active === "llm"
                      ? 180
                      : active === "logic"
                      ? 340
                      : active === "external"
                      ? 320
                      : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 18,
                }}
                className="absolute h-40 w-40 rounded-full bg-[#d4af37]/15 blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}