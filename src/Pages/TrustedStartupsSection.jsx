// import React from "react"
// import { motion } from "framer-motion"

// const testimonials = Array.from({ length: 12 }).map((_, i) => ({
//   id: i + 1,
//   text:
//     "Our team scaled faster using voice AI infrastructure that felt reliable, production-ready, and surprisingly easy to integrate.",
//   author: "Alex Carter",
//   company: "Company",
// }))

// export default function TrustedStartupsSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#050505] px-6 py-20 text-white">
//       {/* background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 bottom-0 h-72 w-[42rem] -translate-x-1/2 bg-[#d4af37]/10 blur-[150px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         {/* heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center"
//         >
//           <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
//             Trusted by{" "}
//             <span className="font-italic-premium text-gold">
//               startups and enterprises
//             </span>
//           </h2>

//           <p className="mt-3 text-sm text-white/55">
//             Discover the power of our product through real stories.
//           </p>
//         </motion.div>

//         {/* cards */}
//         <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
//           {testimonials.map((item, i) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.03 }}
//               whileHover={{
//                 y: -6,
//                 scale: 1.015,
//               }}
//               className="group rounded-xl border border-white/8 bg-white/[0.02] p-4 backdrop-blur-xl transition duration-300"
//               style={{
//                 boxShadow:
//                   "0 0 0 rgba(0,0,0,0)",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.boxShadow =
//                   "0 0 28px rgba(212,175,55,0.14), 0 0 70px rgba(212,175,55,0.05)"
//                 e.currentTarget.style.borderColor = "rgba(212,175,55,0.22)"
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"
//                 e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
//               }}
//             >
//               <p className="text-xs leading-6 text-white/65">{item.text}</p>

//               <div className="mt-5 flex items-center justify-between text-xs">
//                 <div>
//                   <div className="font-medium text-white">{item.author}</div>
//                   <div className="text-white/40">{item.company}</div>
//                 </div>

//                 <div className="text-[#d4af37]/70">LOGO</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mx-auto mt-16 max-w-2xl rounded-2xl border border-[#d4af37]/10 bg-[#06080d] px-8 py-10 text-center shadow-2xl"
//           style={{
//             boxShadow:
//               "0 0 40px rgba(212,175,55,0.06)",
//           }}
//         >
//           <h3 className="text-2xl font-semibold">
//             Unlock voice AI at scale with an API call
//           </h3>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/55">
//             Build with real-time APIs for speech-to-text, text-to-speech, and
//             voice agents on the world’s best voice AI platform.
//           </p>

//           <div className="mt-6 flex justify-center gap-3">
//             <button className="rounded-md bg-[#d4af37] px-5 py-2 text-sm font-medium text-black transition hover:scale-[1.02]">
//               Sign Up Free
//             </button>

//             <button className="rounded-md border border-[#d4af37]/20 bg-[#d4af37]/5 px-5 py-2 text-sm font-medium text-[#d4af37] transition hover:scale-[1.02]">
//               Get A Demo
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import React from "react"
import { motion } from "framer-motion"
import {
  Building2,
  Globe,
  AudioWaveform,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react"

const testimonials = [
  {
    id: 1,
    company: "Nova AI",
    author: "Sarah Chen",
    role: "Head of Product",
    text: "We launched production-ready AI calling in days instead of months using the realtime voice infrastructure.",
  },
  {
    id: 2,
    company: "RetainFlow",
    author: "Michael Reed",
    role: "Engineering Lead",
    text: "Low latency audio streaming and orchestration made scaling voice agents incredibly simple.",
  },
  {
    id: 3,
    company: "VoiceStack",
    author: "Daniel Carter",
    role: "Founder",
    text: "The APIs feel developer-first while still delivering enterprise-grade reliability.",
  },
  {
    id: 4,
    company: "Pulse CX",
    author: "Emma Wilson",
    role: "Operations Director",
    text: "We automated support workflows with realtime AI voice agents across global regions.",
  },
]

const stats = [
  {
    value: "50M+",
    label: "API requests",
  },
  {
    value: "99.99%",
    label: "Platform uptime",
  },
  {
    value: "120ms",
    label: "Realtime latency",
  },
  {
    value: "40+",
    label: "Global regions",
  },
]

export default function TrustedStartupsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[48rem] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#d4af37]">
            <Sparkles size={14} />
            Trusted Infrastructure
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Trusted by modern{" "}
              <span className="ml-4 font-italic-premium text-[#d4af37]">
                  AI voice teams
                </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            High-performance voice APIs powering conversational AI,
            realtime calling, speech intelligence, and enterprise workflows.
          </p>
        </motion.div>

        {/* logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            "Nova AI",
            "RetainFlow",
            "VoiceStack",
            "Pulse CX",
          ].map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5 text-sm text-white/50 backdrop-blur-xl"
            >
              <Building2
                size={16}
                className="mr-2 text-[#d4af37]"
              />

              {logo}
            </div>
          ))}
        </motion.div>

        {/* testimonial cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl transition-all duration-300 hover:border-[#d4af37]/25"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10">
                <AudioWaveform
                  size={24}
                  className="text-[#d4af37]"
                />
              </div>

              {/* text */}
              <p className="mt-6 text-lg leading-8 text-white/70">
                “{item.text}”
              </p>

              {/* footer */}
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                <div>
                  <h4 className="font-medium text-white">
                    {item.author}
                  </h4>

                  <p className="mt-1 text-sm text-white/45">
                    {item.role}
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-[#d4af37]">
                  {item.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* platform metrics */}
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/5 bg-black/30 p-6 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-semibold text-[#d4af37]">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-white/50">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[36px] border border-[#d4af37]/10 bg-white/[0.03] p-10 text-center backdrop-blur-2xl"
        >
          {/* glow */}
          <div className="absolute left-1/2 top-0 h-52 w-[32rem] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

          {/* grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10">
              <ShieldCheck
                size={28}
                className="text-[#d4af37]"
              />
            </div>

            <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Build scalable voice agents with a single API platform
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
              Realtime speech-to-text, text-to-speech, telephony,
              orchestration, and AI workflows — all unified in one developer
              platform.
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-7 py-4 text-sm font-semibold text-black"
              >
                Start Building

                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white"
              >
                <Globe size={18} />

                Book Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}