import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  PhoneCall,
  Mic,
  Bot,
  AudioWaveform,
  BarChart3,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock3,
  CheckCircle2,
  Headphones,
  Target,
  Activity,
} from "lucide-react";
import Footer from "../common/Footer";

const features = [
  {
    title: "AI Sales Calling",
    desc: "Automate outbound and inbound conversations with intelligent AI voice agents.",
    icon: <PhoneCall size={24} />,
  },
  {
    title: "Real-Time Analytics",
    desc: "Track performance, conversions, and call insights in real time.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Voice Automation",
    desc: "Reduce repetitive manual work using AI-powered automation systems.",
    icon: <Bot size={24} />,
  },
  {
    title: "24/7 Engagement",
    desc: "Keep conversations active with round-the-clock AI support.",
    icon: <Headphones size={24} />,
  },
];

const stats = [
  {
    number: "3.2x",
    label: "Higher Lead Conversion",
  },
  {
    number: "85%",
    label: "Reduced Response Time",
  },
  {
    number: "120K+",
    label: "AI Calls Processed",
  },
  {
    number: "99.9%",
    label: "Voice Accuracy",
  },
];

const benefits = [
  "Automated lead qualification",
  "Real-time voice conversations",
  "Advanced sales analytics",
  "CRM integration support",
  "AI-powered follow-ups",
  "Global voice infrastructure",
];

export default function SalesTeamsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[160px]" />

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
                AI Solutions For Sales Teams
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
                Voice AI Built For High-Performing Sales Teams.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
                Empower your sales team with intelligent AI voice agents,
                automated workflows, real-time conversations, and advanced call
                analytics.
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
                  Start Selling Smarter

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white">
                  Book Demo
                </button>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-2xl">
                {/* HEADER */}
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Sales AI Dashboard
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Live AI sales activity monitoring
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
                    <Activity size={14} />
                    Live Calls Active
                  </div>
                </div>

                {/* STATS */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">Calls Today</p>
                    <h4 className="mt-3 text-3xl font-bold">12.8K</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">Qualified Leads</p>
                    <h4 className="mt-3 text-3xl font-bold">3.4K</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">Conversion Rate</p>
                    <h4 className="mt-3 text-3xl font-bold">42%</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">AI Response Time</p>
                    <h4 className="mt-3 text-3xl font-bold">0.8s</h4>
                  </div>
                </div>

                {/* VOICE WAVE */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/55">
                        Real-Time Voice Activity
                      </p>

                      <h4 className="mt-1 text-lg font-semibold">
                        AI Conversation Stream
                      </h4>
                    </div>

                    <AudioWaveform className="text-[#d4af37]" size={22} />
                  </div>

                  <div className="flex items-end justify-center gap-2 pt-6 h-[140px]">
                    {[40, 70, 55, 90, 60, 100, 75, 50].map((height, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          scaleY: [1, 1.4, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1,
                        }}
                        className="origin-bottom w-3 rounded-full bg-gradient-to-t from-[#d4af37] to-[#f5d97b]"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-5xl font-bold text-[#d4af37]">
                {stat.number}
              </h3>

              <p className="mt-4 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            SALES FEATURES
          </p>

          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            AI Voice Infrastructure Designed For Sales Growth.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/20 hover:bg-white/[0.05]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition duration-300 group-hover:scale-105 group-hover:bg-[#d4af37]/20">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              WHY SALES TEAMS LOVE IT
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Scale Conversations And Close More Deals Faster.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Modern sales teams use AI voice systems to automate outreach,
              engage leads instantly, and increase conversion performance.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-5"
              >
                <CheckCircle2 className="text-[#d4af37]" size={20} />

                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-br from-[#d4af37]/10 to-white/[0.03] p-12 text-center backdrop-blur-2xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
            <Users size={34} />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
            Supercharge Your Sales Team With Voice AI.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Empower your team with intelligent AI voice conversations,
            automated lead engagement, and real-time sales analytics.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(212,175,55,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-black"
          >
            Get Started Today
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
      < Footer />
    </div>
  );
}
