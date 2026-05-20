import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Activity,
  AudioWaveform,
  BrainCircuit,
  CheckCircle2,
  PieChart,
  Bot,
  Clock3,
  PhoneCall,
  LineChart,
  Database,
} from "lucide-react";
import Footer from "../common/Footer";

const analyticsFeatures = [
  {
    title: "Real-Time Analytics",
    desc: "Monitor voice conversations, AI interactions, and customer engagement instantly.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Conversation Intelligence",
    desc: "Analyze customer conversations using advanced Voice AI insights.",
    icon: <BrainCircuit size={24} />,
  },
  {
    title: "Performance Tracking",
    desc: "Track conversion rates, call quality, and automation efficiency.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "AI Reporting",
    desc: "Generate smart reports and actionable insights automatically.",
    icon: <PieChart size={24} />,
  },
];

const stats = [
  {
    number: "42M+",
    label: "Voice Interactions",
  },
  {
    number: "98.7%",
    label: "Analytics Accuracy",
  },
  {
    number: "0.5s",
    label: "Data Processing",
  },
  {
    number: "24/7",
    label: "Live Monitoring",
  },
];

const insights = [
  "AI-powered conversation insights",
  "Real-time call monitoring",
  "Customer sentiment analysis",
  "Automation performance tracking",
  "Voice interaction analytics",
  "Enterprise-grade reporting",
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[170px]" />

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
                AI Analytics Platform
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
                Smart Analytics For Voice AI Infrastructure.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
                Monitor conversations, track AI performance, analyze customer
                behavior, and unlock powerful business insights using Voice AI analytics.
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
                  Explore Analytics

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
                      Analytics Dashboard
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Live AI analytics monitoring
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
                    <Activity size={14} />
                    Live Data
                  </div>
                </div>

                {/* METRICS */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">
                      Active Conversations
                    </p>

                    <h4 className="mt-3 text-3xl font-bold">18.4K</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">
                      AI Accuracy
                    </p>

                    <h4 className="mt-3 text-3xl font-bold">98.7%</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">
                      Avg Call Duration
                    </p>

                    <h4 className="mt-3 text-3xl font-bold">4m 32s</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">
                      Conversion Rate
                    </p>

                    <h4 className="mt-3 text-3xl font-bold">47%</h4>
                  </div>
                </div>

                {/* CHART AREA */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/55">
                        AI Performance Overview
                      </p>

                      <h4 className="mt-1 text-lg font-semibold">
                        Real-Time Analytics Graph
                      </h4>
                    </div>

                    <LineChart className="text-[#d4af37]" size={22} />
                  </div>

                  {/* GRAPH */}
                  <div className="flex h-[180px] items-end justify-between gap-3 pt-6">
                    {[45, 70, 55, 90, 60, 100, 75, 85].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                          }}
                          className="w-full rounded-t-2xl bg-gradient-to-t from-[#d4af37] to-[#f5d97b]"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* BOTTOM INFO */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center gap-3">
                      <PhoneCall
                        className="text-[#d4af37]"
                        size={20}
                      />

                      <span className="text-sm text-white/80">
                        Voice Tracking
                      </span>
                    </div>

                    <p className="mt-4 text-2xl font-bold">
                      1.8M Calls
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center gap-3">
                      <Database
                        className="text-[#d4af37]"
                        size={20}
                      />

                      <span className="text-sm text-white/80">
                        AI Data Processed
                      </span>
                    </div>

                    <p className="mt-4 text-2xl font-bold">
                      850TB+
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
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

              <p className="mt-4 text-sm text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            ANALYTICS FEATURES
          </p>

          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Powerful AI Analytics For Voice Infrastructure.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {analyticsFeatures.map((feature, index) => (
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

      {/* INSIGHTS */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              ANALYTICS INSIGHTS
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Turn Voice Data Into Business Intelligence.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Gain deep insights into customer behavior, conversation
              performance, and Voice AI efficiency with advanced analytics.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {insights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-5"
              >
                <CheckCircle2
                  className="text-[#d4af37]"
                  size={20}
                />

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
            <BarChart3 size={34} />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
            Unlock Real-Time Voice AI Insights.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Analyze conversations, monitor performance, and optimize
            Voice AI systems using enterprise-grade analytics infrastructure.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(212,175,55,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-black"
          >
            Start Analytics
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
      <Footer />
    </div>
  );
}