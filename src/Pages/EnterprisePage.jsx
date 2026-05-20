import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Globe2,
  Bot,
  AudioWaveform,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Server,
  Headphones,
  Lock,
  Activity,
} from "lucide-react";
import Footer from "../common/Footer";

const enterpriseFeatures = [
  {
    title: "Enterprise Voice AI",
    icon: <Bot size={24} />,
    desc: "Deploy intelligent AI voice agents across enterprise workflows.",
  },
  {
    title: "Global Infrastructure",
    icon: <Globe2 size={24} />,
    desc: "Scale globally with reliable low-latency voice infrastructure.",
  },
  {
    title: "Advanced Security",
    icon: <ShieldCheck size={24} />,
    desc: "Enterprise-grade security and compliance for all communications.",
  },
  {
    title: "24/7 Voice Support",
    icon: <Headphones size={24} />,
    desc: "Provide uninterrupted AI-powered customer conversations anytime.",
  },
];

const stats = [
  {
    number: "99.99%",
    label: "Platform Uptime",
  },
  {
    number: "120M+",
    label: "Voice Interactions",
  },
  {
    number: "35+",
    label: "Global Regions",
  },
  {
    number: "500+",
    label: "Enterprise Clients",
  },
];

const benefits = [
  "Enterprise-grade security",
  "Scalable AI voice infrastructure",
  "Low latency global performance",
  "Real-time voice analytics",
  "Custom enterprise workflows",
  "24/7 AI-powered support",
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* HERO SECTION */}
      <section className="relative border-b border-white/10">
        {/* glow */}
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
                Enterprise Voice AI Platform
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
                Enterprise Voice Infrastructure Built To Scale.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
                Power enterprise operations with secure AI voice agents,
                intelligent automation, and real-time communication systems
                designed for global businesses.
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
                  Talk To Enterprise Team

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white">
                  Schedule Demo
                </button>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
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
                      Enterprise Control Center
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Global AI voice operations overview
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
                    <Activity size={14} />
                    System Active
                  </div>
                </div>

                {/* DASHBOARD CARDS */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">AI Calls Processed</p>
                    <h4 className="mt-3 text-3xl font-bold">48.2M</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">Global Agents</p>
                    <h4 className="mt-3 text-3xl font-bold">12.5K</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">Voice Accuracy</p>
                    <h4 className="mt-3 text-3xl font-bold">99.9%</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">Enterprise Workflows</p>
                    <h4 className="mt-3 text-3xl font-bold">850+</h4>
                  </div>
                </div>

                {/* SECURITY PANEL */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/55">
                        Security & Infrastructure
                      </p>

                      <h4 className="mt-1 text-lg font-semibold">
                        Enterprise Monitoring System
                      </h4>
                    </div>

                    <Lock className="text-[#d4af37]" size={22} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Server className="text-[#d4af37]" size={18} />
                        <span className="text-sm text-white/80">
                          Global Server Status
                        </span>
                      </div>

                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                        Operational
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <AudioWaveform className="text-[#d4af37]" size={18} />
                        <span className="text-sm text-white/80">
                          AI Voice Infrastructure
                        </span>
                      </div>

                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                        Stable
                      </span>
                    </div>
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

              <p className="mt-4 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            ENTERPRISE FEATURES
          </p>

          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Secure Voice AI Solutions For Global Enterprises.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {enterpriseFeatures.map((feature, index) => (
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
              WHY ENTERPRISE AI
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Scale Enterprise Operations With Intelligent Voice Systems.
            </h2>
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
            <Building2 size={34} />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
            Ready For Enterprise-Scale Voice AI?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Modernize customer communication with scalable AI voice agents,
            enterprise-grade security, and intelligent automation systems.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(212,175,55,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-black"
          >
            Contact Enterprise Sales
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
      < Footer />
    </div>
  );
}
