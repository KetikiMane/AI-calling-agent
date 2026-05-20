import React from "react";
import { motion } from "framer-motion";
import {
  LifeBuoy,
  Search,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Mail,
  Bot,
  Mic,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Clock3,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import Footer from "../common/Footer";

const supportCards = [
  {
    title: "AI Voice Setup",
    desc: "Learn how to configure and deploy your AI voice agents.",
    icon: <Mic size={24} />,
  },
  {
    title: "Automation Support",
    desc: "Troubleshoot workflows, automations, and AI triggers.",
    icon: <Bot size={24} />,
  },
  {
    title: "Security & Compliance",
    desc: "Enterprise-grade security guidelines and compliance docs.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Developer Docs",
    desc: "Access API references, SDKs, and integration resources.",
    icon: <BookOpen size={24} />,
  },
];

const faqs = [
  {
    question: "How do I deploy an AI voice agent?",
    answer:
      "You can deploy voice agents using our APIs, SDKs, and real-time infrastructure tools.",
  },
  {
    question: "Does the platform support real-time conversations?",
    answer:
      "Yes, our infrastructure supports ultra low-latency real-time voice communication.",
  },
  {
    question: "Can I integrate with my CRM or workflow tools?",
    answer:
      "Absolutely. You can connect the platform with CRMs, automation systems, and APIs.",
  },
  {
    question: "Is enterprise security supported?",
    answer:
      "Yes, we provide enterprise-grade security, authentication, and compliance support.",
  },
];

export default function HelpCenterPage() {
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
              Voice AI Help Center
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
              How Can We Help You?
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
              Get support for AI voice agents, automation workflows,
              integrations, developer APIs, and enterprise infrastructure.
            </p>

            {/* SEARCH */}
            <div className="mx-auto mt-12 flex max-w-2xl items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl">
              <Search className="text-white/40" size={20} />

              <input
                type="text"
                placeholder="Search documentation, APIs, troubleshooting..."
                className="w-full bg-transparent px-4 text-white outline-none placeholder:text-white/35"
              />

              <button className="rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-black">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUPPORT CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            SUPPORT CATEGORIES
          </p>

          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Everything You Need To Build With Voice AI.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {supportCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/20 hover:bg-white/[0.05]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition duration-300 group-hover:scale-105 group-hover:bg-[#d4af37]/20">
                {card.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {card.title}
              </h3>

              <p className="mt-3 leading-relaxed text-white/60">
                {card.desc}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d4af37] transition hover:gap-3">
                Learn More
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SUPPORT */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              CONTACT SUPPORT
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Reach Our Voice AI Support Team Anytime.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Our support engineers and AI specialists are available to help you
              integrate, deploy, and scale intelligent voice systems.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Live Chat Support</h4>
                  <p className="text-sm text-white/50">
                    Connect instantly with support agents.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                  <PhoneCall size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Voice Assistance</h4>
                  <p className="text-sm text-white/50">
                    Talk directly with AI-powered support systems.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Email Support</h4>
                  <p className="text-sm text-white/50">
                    Get detailed help from technical experts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FAQ */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-2xl">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <h3 className="text-2xl font-semibold">
                  Frequently Asked Questions
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  Common Voice AI and API support topics
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
                <LifeBuoy size={22} />
              </div>
            </div>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h4>

                  <p className="mt-3 leading-relaxed text-white/60">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT STATUS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
              <Headphones size={24} />
            </div>

            <h3 className="mt-6 text-3xl font-bold">24/7</h3>
            <p className="mt-2 text-white/60">Customer Support</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
              <Clock3 size={24} />
            </div>

            <h3 className="mt-6 text-3xl font-bold">&lt; 5 Min</h3>
            <p className="mt-2 text-white/60">Average Response Time</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
              <CheckCircle2 size={24} />
            </div>

            <h3 className="mt-6 text-3xl font-bold">99.9%</h3>
            <p className="mt-2 text-white/60">System Reliability</p>
          </div>
        </div>
      </section>
      < Footer />
    </div>
  );
}
