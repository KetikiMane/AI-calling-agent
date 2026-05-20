import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock3,
  Sparkles,
  Mic,
  Bot,
  AudioWaveform,
  BrainCircuit,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import Footer from "../common/Footer";

const featuredPosts = [
  {
    title: "How AI Voice Agents Are Transforming Customer Support",
    desc: "Discover how modern startups are replacing traditional support systems with intelligent AI voice agents.",
    category: "Voice AI",
    time: "5 min read",
    icon: <Mic size={22} />,
  },
  {
    title: "Building Real-Time Conversational AI Infrastructure",
    desc: "Learn the architecture behind scalable real-time voice communication systems.",
    category: "Infrastructure",
    time: "8 min read",
    icon: <AudioWaveform size={22} />,
  },
  {
    title: "The Future Of AI Automation In Sales & Support",
    desc: "Explore how AI-powered automation is improving conversions and customer engagement.",
    category: "Automation",
    time: "6 min read",
    icon: <Bot size={22} />,
  },
];

const latestArticles = [
  {
    title: "Why Startups Need AI Voice Agents In 2026",
    category: "Startup Growth",
    date: "May 2026",
  },
  {
    title: "Top Benefits Of Real-Time Voice AI",
    category: "Voice Technology",
    date: "May 2026",
  },
  {
    title: "Scaling Global AI Communication Systems",
    category: "Enterprise AI",
    date: "April 2026",
  },
  {
    title: "Reducing Support Costs With AI Automation",
    category: "Business Automation",
    date: "April 2026",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#d4af37]">
              <Sparkles size={16} />
              Voice AI Insights & Resources
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
              Explore The Future Of Voice AI.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
              Discover insights, guides, and trends about AI voice agents,
              automation, conversational AI, and scalable communication
              infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              FEATURED ARTICLES
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Latest Voice AI Insights.
            </h2>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/70 lg:flex">
            <TrendingUp size={18} className="text-[#d4af37]" />
            Trending Topics
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/20 hover:bg-white/[0.05]"
            >
              {/* TOP IMAGE AREA */}
              <div className="relative h-[240px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#d4af37]/10 to-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] backdrop-blur-xl">
                    {post.icon}
                  </div>
                </div>

                <div className="absolute left-5 top-5 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-xs font-medium text-[#d4af37]">
                  {post.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <div className="mb-5 flex items-center gap-4 text-sm text-white/50">
                  <div className="flex items-center gap-2">
                    <Calendar size={15} />
                    May 2026
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={15} />
                    {post.time}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold leading-snug transition duration-300 group-hover:text-[#d4af37]">
                  {post.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/60">
                  {post.desc}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#d4af37] transition hover:gap-3">
                  Read Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSIGHTS SECTION */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              INDUSTRY INSIGHTS
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Learn About Modern AI Communication Systems.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Stay updated with the latest advancements in conversational AI,
              enterprise automation, and voice infrastructure technologies.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                  <BrainCircuit size={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  Conversational AI
                </h3>

                <p className="mt-3 text-white/60">
                  Deep insights into natural AI conversations and intelligent
                  voice experiences.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                  <BookOpen size={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  Technical Guides
                </h3>

                <p className="mt-3 text-white/60">
                  Step-by-step resources for building scalable AI voice systems.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <h3 className="text-2xl font-semibold">
                  Latest Articles
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  Recent AI voice and automation topics
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                <Mic size={22} />
              </div>
            </div>

            <div className="space-y-5">
              {latestArticles.map((article) => (
                <div
                  key={article.title}
                  className="group rounded-2xl border border-white/10 bg-black/30 p-5 transition duration-300 hover:border-[#d4af37]/20 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-3 inline-flex rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1 text-xs text-[#d4af37]">
                        {article.category}
                      </div>

                      <h4 className="text-lg font-semibold transition duration-300 group-hover:text-[#d4af37]">
                        {article.title}
                      </h4>
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-white/40 transition duration-300 group-hover:translate-x-1 group-hover:text-[#d4af37]"
                    />
                  </div>

                  <p className="mt-3 text-sm text-white/45">
                    {article.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-br from-[#d4af37]/10 to-white/[0.03] p-12 text-center backdrop-blur-2xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">
            <AudioWaveform size={34} />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
            Stay Updated With Voice AI Trends.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Explore the latest advancements in AI voice agents, automation,
            conversational intelligence, and enterprise communication systems.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(212,175,55,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-black"
          >
            Explore More Articles
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
      < Footer />
    </div>
  );
}
