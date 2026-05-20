// import React from "react"
// import { motion } from "framer-motion"
// import VoiceAgentSection from "./VoiceAgentSection"
// import JourneySection from "./JourneySection"
// import TrustedStartupsSection from "./TrustedStartupsSection"
// import Navbar from "../common/Navbar"
// import Footer from "../common/Footer"

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       delay,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   }),
// }

// export default function Home() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
//       {/* background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.4 }}
//           className="absolute left-[-10%] top-[-5%] h-[28rem] w-[28rem] rounded-full bg-[#d4af37]/12 blur-[140px]"
//         />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.6, delay: 0.2 }}
//           className="absolute right-[-10%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-[#d4af37]/8 blur-[140px]"
//         />
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.8, delay: 0.4 }}
//           className="absolute bottom-[-10%] left-[25%] h-[20rem] w-[20rem] rounded-full bg-[#d4af37]/6 blur-[120px]"
//         />
//       </div>

//       {/* navbar */}
//       < Navbar />

//       {/* hero */}
//       <section className="relative z-10">
//         <div className="mx-auto max-w-7xl px-6 pb-28 pt-24 md:pt-32">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             className="max-w-5xl"
//           >
//             <motion.p
//               custom={0.1}
//               variants={fadeUp}
//               className="mb-7 text-xs uppercase tracking-[0.32em] text-gold"
//             >
//               Premium Digital Experiences
//             </motion.p>

//             <motion.h1
//               custom={0.2}
//               variants={fadeUp}
//               className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-tight md:text-8xl"
//             >
//               Build modern
//               <br />
//               products with
//               <span className="ml-4 font-italic-premium text-gold">
//                 cinematic motion
//               </span>
//             </motion.h1>

//             <motion.p
//               custom={0.35}
//               variants={fadeUp}
//               className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
//             >
//               A refined black and gold experience designed for modern SaaS,
//               AI, and premium digital brands. Sharp typography, subtle glow,
//               and elegant spacing.
//             </motion.p>

//             <motion.div
//               custom={0.5}
//               variants={fadeUp}
//               className="mt-10 flex flex-wrap gap-4"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="rounded-full bg-[#d4af37] px-7 py-3 font-medium text-black"
//               >
//                 Get started
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="rounded-full border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-xl transition hover:bg-white/10"
//               >
//                 Live demo
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* bottom feature block */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.6 }}
//             className="mt-20 rounded-[34px] border border-[#d4af37]/10 bg-white/[0.03] p-8 backdrop-blur-2xl gold-glow"
//           >
//             <div className="grid gap-6 md:grid-cols-3">
//               {[
//                 ["Performance", "Ultra fast UI", "Designed for speed, clarity, and instant interaction."],
//                 ["Motion", "Elegant depth", "Soft glow, layered glass, and cinematic movement."],
//                 ["Presence", "Premium identity", "A visual system built to feel modern and high-end."],
//               ].map(([tag, title, text], i) => (
//                 <motion.div
//                   key={title}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.75 + i * 0.12 }}
//                   whileHover={{ y: -6 }}
//                   className="rounded-3xl border border-white/5 bg-black/40 p-6"
//                 >
//                   <p className="mb-3 text-sm text-gold">{tag}</p>
//                   <h3 className="text-2xl font-semibold">{title}</h3>
//                   <p className="mt-3 text-sm leading-7 text-white/50">{text}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//        <VoiceAgentSection/>
//        <JourneySection />
//        <TrustedStartupsSection />
//        <Footer />
//     </div>
   
//   )
// }


import React from "react"
import { motion } from "framer-motion"
import {
  PhoneCall,
  Mic,
  Brain,
  AudioWaveform,
  ArrowRight,
  Sparkles,
} from "lucide-react"

import VoiceAgentSection from "./VoiceAgentSection"
import JourneySection from "./JourneySection"
import TrustedStartupsSection from "./TrustedStartupsSection"
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const features = [
  {
    icon: PhoneCall,
    title: "Twilio Voice Integration",
    text: "Connect global voice infrastructure with programmable APIs and real-time calling.",
  },
  {
    icon: Brain,
    title: "AI Conversation Engine",
    text: "Natural voice interactions powered by LLMs, speech recognition, and smart workflows.",
  },
  {
    icon: Mic,
    title: "Real-Time Voice Agents",
    text: "Create AI agents for support, sales, booking, and automation with ultra low latency.",
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute left-[-10%] top-[-5%] h-[28rem] w-[28rem] rounded-full bg-[#d4af37]/12 blur-[140px]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="absolute right-[-10%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-[#d4af37]/8 blur-[140px]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="absolute bottom-[-10%] left-[25%] h-[20rem] w-[20rem] rounded-full bg-[#d4af37]/6 blur-[120px]"
        />
      </div>

      {/* navbar */}
      <Navbar />

      {/* hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-28 pt-24 md:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div
                custom={0.1}
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#d4af37]"
              >
                <Sparkles size={14} />
                Voice AI Infrastructure
              </motion.div>

              <motion.h1
                custom={0.2}
                variants={fadeUp}
                className="text-6xl font-semibold leading-[0.92] tracking-tight md:text-8xl"
              >
                Build AI
                <br />
                voice agents
                <span className="ml-4 font-italic-premium text-[#d4af37]">
                  with APIs
                </span>
              </motion.h1>

              <motion.p
                custom={0.35}
                variants={fadeUp}
                className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
              >
                Launch intelligent voice experiences powered by Twilio,
                real-time speech AI, and scalable conversational workflows.
                Designed for modern SaaS platforms, customer support, and
                automation teams.
              </motion.p>

              <motion.div
                custom={0.5}
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2 rounded-full bg-[#d4af37] px-7 py-3 font-medium text-black"
                >
                  Start Building
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-xl transition hover:bg-white/10"
                >
                  Live Demo
                </motion.button>
              </motion.div>

              {/* stats */}
              <motion.div
                custom={0.65}
                variants={fadeUp}
                className="mt-14 flex flex-wrap gap-10"
              >
                {[
                  ["120ms", "Voice Latency"],
                  ["99.99%", "API Uptime"],
                  ["40+", "Global Regions"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <h3 className="text-3xl font-semibold text-[#d4af37]">
                      {value}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* right card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[36px] bg-[#d4af37]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-[#d4af37]/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
                {/* top */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <p className="text-sm text-white/50">
                      Active Voice Session
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      AI Support Agent
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/15 text-[#d4af37]">
                    <PhoneCall size={26} />
                  </div>
                </div>

                {/* waveform */}
                <div className="mt-8 rounded-3xl border border-white/5 bg-black/40 p-6">
                  <div className="mb-5 flex items-center gap-2 text-sm text-white/60">
                    <AudioWaveform size={18} className="text-[#d4af37]" />
                    Real-time audio processing
                  </div>

                  <div className="flex h-28 items-end justify-center gap-2">
                    {[40, 70, 50, 90, 60, 100, 45, 80, 55, 75].map(
                      (h, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            height: [h, h + 20, h],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            delay: index * 0.08,
                          }}
                          className="w-3 rounded-full bg-[#d4af37]"
                          style={{ height: `${h}px` }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* cards */}
                <div className="mt-6 grid gap-4">
                  {features.map((item, i) => {
                    const Icon = item.icon

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -4 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.12 }}
                        className="rounded-3xl border border-white/5 bg-black/30 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                            <Icon size={22} />
                          </div>

                          <div>
                            <h4 className="text-lg font-medium">
                              {item.title}
                            </h4>

                            <p className="mt-2 text-sm leading-7 text-white/50">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* bottom feature block */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-24 rounded-[34px] border border-[#d4af37]/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {[
                [
                  "Infrastructure",
                  "Global Voice APIs",
                  "Deploy scalable calling infrastructure with Twilio SIP and programmable voice.",
                ],
                [
                  "AI Agents",
                  "Conversational Intelligence",
                  "Build human-like AI voice agents using speech-to-text and LLM orchestration.",
                ],
                [
                  "Automation",
                  "Workflow Integration",
                  "Connect CRMs, ticketing systems, and backend APIs with real-time actions.",
                ],
              ].map(([tag, title, text], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1 + i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/5 bg-black/40 p-6"
                >
                  <p className="mb-3 text-sm text-[#d4af37]">{tag}</p>

                  <h3 className="text-2xl font-semibold">{title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <VoiceAgentSection />
      <JourneySection />
      <TrustedStartupsSection />
      <Footer />
    </div>
  )
}