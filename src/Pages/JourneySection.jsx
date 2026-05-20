// import React, { useState } from "react"
// import { motion } from "framer-motion"
// import { Code2, Layers3, Sparkles } from "lucide-react"
// import networkVisual from "../assets/network-visual.png"

// const cards = [
//   {
//     title: "Build with APIs",
//     subtitle: "Voice AI Infrastructure for Builders.",
//     text: "For developers and product teams ready to move fast with flexible APIs.",
//     button: "Start Building",
//   },
//   {
//     title: "Integrate Platform",
//     subtitle: "Voice AI for Partners.",
//     text: "For platforms and partners embedding enterprise-grade voice AI.",
//     button: "Become A Partner",
//   },
//   {
//     title: "Custom models",
//     subtitle: "Built Around Your Workflow.",
//     text: "For enterprises with unique workflows and premium compliance needs.",
//     button: "Talk to Sales",
//   },
// ]

// export default function JourneySection() {
//   const [hovered, setHovered] = useState(null)

//   return (
//     <section className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white">
//       {/* background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-44 w-[32rem] -translate-x-1/2 bg-[#d4af37]/10 blur-[120px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         {/* heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto max-w-4xl text-center"
//         >
//           <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
//             Choose your{" "}
//             <span className="font-italic-premium text-gold">
//               Voice AI journey
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60">
//             Choose the path that fits your business needs, technical goals,
//             and long-term product direction.
//           </p>
//         </motion.div>

//         {/* cards */}
//         <div className="mt-16 grid gap-8 md:grid-cols-3">
//           {cards.map((card, i) => {
//             const isHovered = hovered === i

//             return (
//               <motion.div
//                 key={card.title}
//                 onMouseEnter={() => setHovered(i)}
//                 onMouseLeave={() => setHovered(null)}
//                 initial={{ opacity: 0, y: 45 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.65,
//                   delay: i * 0.12,
//                 }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.015,
//                 }}
//                 className={`group relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-2xl transition duration-300 ${
//                   isHovered
//                     ? "border-[#d4af37]/35 bg-white/[0.03]"
//                     : "border-white/8 bg-white/[0.02]"
//                 }`}
//                 style={{
//                   boxShadow: isHovered
//                     ? "0 0 35px rgba(212,175,55,0.14), 0 0 90px rgba(212,175,55,0.06)"
//                     : "none",
//                 }}
//               >
//                 {/* top glow */}
//                 <motion.div
//                   animate={{ opacity: isHovered ? 1 : 0.25 }}
//                   className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.03] to-transparent"
//                 />

//                 {/* floating circles */}
//                 {/* <div className="relative mb-8 flex items-center justify-center gap-5">
//                   {[0, 1, 2].map((n) => (
//                     <motion.div
//                       key={n}
//                       animate={{
//                         y: [0, -6, 0],
//                         scale: isHovered ? 1.05 : 1,
//                       }}
//                       transition={{
//                         duration: 3 + n,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className={`h-20 w-20 rounded-full border ${
//                         isHovered
//                           ? "border-[#d4af37]/20 bg-[#d4af37]/5"
//                           : "border-white/10 bg-white/[0.03]"
//                       }`}
//                     />
//                   ))}
//                 </div> */}
//                 <div className="relative mb-8 flex items-center justify-center gap-5">
//   {[Code2, Layers3, Sparkles].map((Icon, n) => (
//     <motion.div
//       key={n}
//       animate={{
//         y: [0, -6, 0],
//         scale: isHovered ? 1.05 : 1,
//       }}
//       transition={{
//         duration: 3 + n,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className={`flex h-20 w-20 items-center justify-center rounded-full border ${
//         isHovered
//           ? "border-[#d4af37]/20 bg-[#d4af37]/5"
//           : "border-white/10 bg-white/[0.03]"
//       }`}
//     >
//       <Icon
//         size={26}
//         className={isHovered ? "text-gold" : "text-white/70"}
//       />
//     </motion.div>
//   ))}
// </div>

//                 {/* text */}
//                 <h3 className="text-2xl font-semibold">{card.title}</h3>

//                 <p className="mt-3 text-lg text-gold">{card.subtitle}</p>

//                 <p className="mt-5 max-w-sm text-base leading-8 text-white/55">
//                   {card.text}
//                 </p>

//                 {/* button */}
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`mt-10 rounded-md px-6 py-3 text-sm font-medium transition ${
//                     isHovered
//                       ? "bg-[#d4af37] text-black"
//                       : "border border-[#d4af37]/15 bg-[#d4af37]/5 text-gold"
//                   }`}
//                 >
//                   {card.button}
//                 </motion.button>

//                 {/* hover glow */}
//                 <motion.div
//                   animate={{ opacity: isHovered ? 1 : 0 }}
//                   className="pointer-events-none absolute inset-0 rounded-[28px] bg-[#d4af37]/[0.02]"
//                 />
//               </motion.div>
//             )
//           })}
//         </div>


// <motion.div
//   initial={{ opacity: 0, y: 50, scale: 0.97 }}
//   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//   viewport={{ once: true, amount: 0.25 }}
//   transition={{
//     duration: 0.9,
//     type: "spring",
//     stiffness: 70,
//   }}
//   whileHover={{ y: -6 }}
//   className="relative mt-24 overflow-hidden rounded-[32px] border border-[#d4af37]/10 bg-white/[0.02] p-6 backdrop-blur-2xl"
// >
//   {/* glow */}
//   <motion.div
//     animate={{
//       opacity: [0.18, 0.35, 0.18],
//       scale: [1, 1.05, 1],
//     }}
//     transition={{
//       repeat: Infinity,
//       duration: 4,
//       ease: "easeInOut",
//     }}
//     className="pointer-events-none absolute left-1/2 top-8 h-40 w-72 -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl"
//   />

//   {/* subtle grid */}
//   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px]" />

//   {/* image */}
//   <motion.img
//     src={networkVisual}
//     alt="Voice infrastructure"
//     initial={{ opacity: 0, scale: 1.03 }}
//     whileInView={{ opacity: 0.96, scale: 1 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1, delay: 0.15 }}
//     animate={{ y: [0, -6, 0] }}
//     className="relative z-10 mx-auto w-full max-w-4xl rounded-3xl"
//   />
// </motion.div>

        
//       </div>
//     </section>
//   )
// }




import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Code2,
  Layers3,
  Sparkles,
  ArrowRight,
  PhoneCall,
  BrainCircuit,
  Workflow,
} from "lucide-react"

import networkVisual from "../assets/network-visual.png"

const cards = [
  {
    icon: Code2,
    title: "Build with APIs",
    subtitle: "Programmable Voice Infrastructure",
    text: "Ship production-ready AI voice agents with realtime APIs, speech streaming, and orchestration.",
    button: "Start Building",
  },
  {
    icon: Layers3,
    title: "Integrate Platform",
    subtitle: "Enterprise Voice AI Stack",
    text: "Embed voice intelligence into CRMs, support systems, and existing enterprise workflows.",
    button: "Become A Partner",
  },
  {
    icon: Sparkles,
    title: "Custom AI Models",
    subtitle: "Tailored For Your Workflow",
    text: "Deploy custom conversational logic, memory systems, and enterprise-grade compliance pipelines.",
    button: "Talk to Sales",
  },
]

const stats = [
  {
    value: "120ms",
    label: "Voice latency",
  },
  {
    value: "99.99%",
    label: "API uptime",
  },
  {
    value: "40+",
    label: "Global regions",
  },
  {
    value: "24/7",
    label: "Realtime runtime",
  },
]

export default function JourneySection() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#d4af37]">
            <PhoneCall size={14} />
            Voice AI Platform
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Build your next{" "}
             <span className="ml-4 font-italic-premium text-[#d4af37]">
                  Voice Agent Platform
                </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Modern voice infrastructure inspired by Twilio, Retell, and Vapi.
            Deploy realtime conversational AI experiences with APIs,
            orchestration, and scalable voice intelligence.
          </p>
        </motion.div>

        {/* cards */}
        <div className="mt-20 grid gap-7 lg:grid-cols-3">
          {cards.map((card, i) => {
            const isHovered = hovered === i
            const Icon = card.icon

            return (
              <motion.div
                key={card.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-300 ${
                  isHovered
                    ? "border-[#d4af37]/30 bg-[#d4af37]/[0.05]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {/* hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* icon */}
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isHovered
                      ? "border-[#d4af37]/30 bg-[#d4af37]/15"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <Icon
                    size={30}
                    className={
                      isHovered
                        ? "text-[#d4af37]"
                        : "text-white/70"
                    }
                  />
                </div>

                {/* content */}
                <div className="relative mt-8">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#d4af37]">
                    {card.subtitle}
                  </p>

                  <p className="mt-5 text-base leading-8 text-white/55">
                    {card.text}
                  </p>
                </div>

                {/* button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-10 flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all ${
                    isHovered
                      ? "bg-[#d4af37] text-black"
                      : "border border-white/10 bg-white/[0.03] text-white"
                  }`}
                >
                  {card.button}

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.button>

                {/* border light */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>

        {/* visual section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-24 overflow-hidden rounded-[36px] border border-[#d4af37]/10 bg-white/[0.03] p-6 md:p-10 backdrop-blur-2xl"
        >
          {/* glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-10 h-56 w-[34rem] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl"
          />

          {/* grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px]" />

          {/* top section */}
          <div className="relative z-10 flex flex-col gap-6 border-b border-white/5 pb-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#d4af37]">
                Realtime AI Infrastructure
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Production-ready Voice Agent Runtime
              </h3>
            </div>
          </div>

          {/* image */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative z-10 mt-10"
          >
            <img
              src={networkVisual}
              alt="Voice AI infrastructure"
              className="mx-auto w-full max-w-5xl rounded-[28px] border border-white/10"
            />
          </motion.div>

          {/* bottom stats */}
          <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/5 bg-black/30 p-5"
              >
                <h4 className="text-3xl font-semibold text-[#d4af37]">
                  {item.value}
                </h4>

                <p className="mt-2 text-sm text-white/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* floating pills */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute right-8 top-8 hidden rounded-2xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl lg:flex lg:items-center lg:gap-3"
          >
            <BrainCircuit size={18} className="text-[#d4af37]" />

            <span className="text-sm text-white/70">
              AI Orchestration Layer
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}