// import React from "react";
// import { motion } from "framer-motion";
// import Footer from "../common/Footer";
// import {
//   Bot,
//   Workflow,
//   Clock3,
//   Zap,
//   ArrowRight,
//   CheckCircle2,
//   Sparkles,
//   Activity,
// } from "lucide-react";

// const automationFeatures = [
//   {
//     title: "Workflow Automation",
//     icon: <Workflow size={24} />,
//     desc: "Automate repetitive workflows and reduce manual operational tasks.",
//   },
//   {
//     title: "AI Task Assistant",
//     icon: <Bot size={24} />,
//     desc: "Use AI-powered automation to improve sales and customer communication.",
//   },
//   {
//     title: "Instant Actions",
//     icon: <Zap size={24} />,
//     desc: "Trigger smart actions automatically based on customer activity.",
//   },
//   {
//     title: "Time Saving",
//     icon: <Clock3 size={24} />,
//     desc: "Save hours every week by automating repetitive business processes.",
//   },
// ];

// const stats = [
//   {
//     number: "85%",
//     label: "Faster Workflows",
//   },
//   {
//     number: "3.2x",
//     label: "Higher Productivity",
//   },
//   {
//     number: "24/7",
//     label: "Automation Running",
//   },
//   {
//     number: "99%",
//     label: "Task Accuracy",
//   },
// ];

// const benefits = [
//   "Automate repetitive tasks",
//   "Improve operational efficiency",
//   "Reduce human errors",
//   "Increase team productivity",
//   "Scale workflows effortlessly",
//   "Real-time automation monitoring",
// ];

// export default function AutomationPage() {
//   return (
//     <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
//       {/* HERO */}
//       <section className="relative border-b border-white/10">
//         {/* background glow */}
//         <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[140px]" />

//         <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
//           <div className="grid items-center gap-16 lg:grid-cols-2">
//             {/* LEFT */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#d4af37]">
//                 <Sparkles size={16} />
//                 Smart Business Automation
//               </div>

//               <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
//                 Automate Your Business Operations With AI.
//               </h1>

//               <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
//                 Streamline workflows, automate repetitive tasks, and improve
//                 team productivity using powerful AI-driven automation tools.
//               </p>

//               <div className="mt-10 flex flex-wrap gap-4">
//                 <motion.button
//                   whileHover={{
//                     scale: 1.03,
//                     boxShadow: "0 0 35px rgba(212,175,55,0.25)",
//                   }}
//                   whileTap={{ scale: 0.97 }}
//                   className="group flex items-center gap-2 rounded-full bg-[#d4af37] px-7 py-4 text-sm font-semibold text-black"
//                 >
//                   Start Automation

//                   <ArrowRight
//                     size={18}
//                     className="transition duration-300 group-hover:translate-x-1"
//                   />
//                 </motion.button>

//                 <button className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white">
//                   Watch Demo
//                 </button>
//               </div>
//             </motion.div>

//             {/* RIGHT SIDE */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//             >
//               <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-2xl">
//                 {/* HEADER */}
//                 <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
//                   <div>
//                     <h3 className="text-lg font-semibold">
//                       Automation Dashboard
//                     </h3>

//                     <p className="mt-1 text-sm text-white/50">
//                       Live workflow activity
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
//                     <Activity size={14} />
//                     Active
//                   </div>
//                 </div>

//                 {/* AUTOMATION CARDS */}
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5">
//                     <div>
//                       <p className="text-sm text-white/55">
//                         Lead Follow-up
//                       </p>

//                       <h4 className="mt-2 text-lg font-semibold">
//                         Automated Email Sequence
//                       </h4>
//                     </div>

//                     <div className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-xs text-[#d4af37]">
//                       Running
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5">
//                     <div>
//                       <p className="text-sm text-white/55">
//                         AI Chat Workflow
//                       </p>

//                       <h4 className="mt-2 text-lg font-semibold">
//                         Smart Customer Replies
//                       </h4>
//                     </div>

//                     <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-400">
//                       Active
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5">
//                     <div>
//                       <p className="text-sm text-white/55">
//                         Sales Automation
//                       </p>

//                       <h4 className="mt-2 text-lg font-semibold">
//                         Pipeline Workflow Trigger
//                       </h4>
//                     </div>

//                     <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-400">
//                       Optimized
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {stats.map((stat) => (
//             <div
//               key={stat.label}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
//             >
//               <h3 className="text-5xl font-bold text-[#d4af37]">
//                 {stat.number}
//               </h3>

//               <p className="mt-4 text-sm text-white/60">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-24">
//         <div className="max-w-2xl">
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
//             AUTOMATION FEATURES
//           </p>

//           <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
//             Intelligent Automation For Modern Businesses.
//           </h2>
//         </div>

//         <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {automationFeatures.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/20 hover:bg-white/[0.05]"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition duration-300 group-hover:scale-105 group-hover:bg-[#d4af37]/20">
//                 {feature.icon}
//               </div>

//               <h3 className="mt-6 text-xl font-semibold">
//                 {feature.title}
//               </h3>

//               <p className="mt-3 leading-relaxed text-white/60">
//                 {feature.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* BENEFITS */}
//       <section className="border-t border-white/10 bg-white/[0.02]">
//         <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
//           <div>
//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
//               WHY AUTOMATION
//             </p>

//             <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
//               Save Time And Scale Faster With Smart Workflows.
//             </h2>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2">
//             {benefits.map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-5"
//               >
//                 <CheckCircle2 className="text-[#d4af37]" size={20} />

//                 <span className="text-white/80">{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       < Footer />
//     </div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Sparkles,
  ArrowRight,
  AudioWaveform,
  PhoneCall,
  Clock3,
  BarChart3,
  CheckCircle2,
  Activity,
  Zap,
  BrainCircuit,
  MessagesSquare,
  Cpu,
} from "lucide-react";
import Footer from "../common/Footer";

const automationFeatures = [
  {
    title: "AI Workflow Engine",
    desc: "Create intelligent automation workflows powered by Voice AI infrastructure.",
    icon: <Workflow size={24} />,
  },
  {
    title: "Voice Agent Automation",
    desc: "Automate inbound and outbound conversations using AI voice agents.",
    icon: <PhoneCall size={24} />,
  },
  {
    title: "Real-Time Processing",
    desc: "Execute automation instantly with ultra-low latency AI systems.",
    icon: <Zap size={24} />,
  },
  {
    title: "Conversation Intelligence",
    desc: "Analyze conversations and automate responses intelligently.",
    icon: <BrainCircuit size={24} />,
  },
];

const stats = [
  {
    number: "15M+",
    label: "Automated Interactions",
  },
  {
    number: "0.7s",
    label: "Average Response Time",
  },
  {
    number: "92%",
    label: "Automation Accuracy",
  },
  {
    number: "24/7",
    label: "Always Active",
  },
];

const automations = [
  "Lead qualification automation",
  "AI-powered call routing",
  "Automated voice follow-ups",
  "Smart CRM sync workflows",
  "Real-time conversation triggers",
  "Voice analytics automation",
];

export default function AutomationPage() {
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
                AI Automation Platform
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
                Intelligent Automation For Voice AI Workflows.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
                Automate conversations, workflows, lead management, and
                customer engagement using next-generation Voice AI systems.
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
                  Start Automating

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
                      Automation Dashboard
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Live workflow orchestration
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
                    <Activity size={14} />
                    Active Workflows
                  </div>
                </div>

                {/* STATS */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">
                      Automated Calls
                    </p>
                    <h4 className="mt-3 text-3xl font-bold">32.4K</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">
                      Workflow Triggers
                    </p>
                    <h4 className="mt-3 text-3xl font-bold">18.2K</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">
                      AI Responses
                    </p>
                    <h4 className="mt-3 text-3xl font-bold">98%</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">
                      Avg Execution
                    </p>
                    <h4 className="mt-3 text-3xl font-bold">0.7s</h4>
                  </div>
                </div>

                {/* AUTOMATION FLOW */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/55">
                        Workflow Activity
                      </p>

                      <h4 className="mt-1 text-lg font-semibold">
                        AI Automation Flow
                      </h4>
                    </div>

                    <Cpu className="text-[#d4af37]" size={22} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <MessagesSquare
                          className="text-[#d4af37]"
                          size={18}
                        />

                        <span className="text-sm text-white/80">
                          Lead Captured
                        </span>
                      </div>

                      <span className="text-sm text-emerald-400">
                        Completed
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Bot className="text-[#d4af37]" size={18} />

                        <span className="text-sm text-white/80">
                          AI Voice Call Triggered
                        </span>
                      </div>

                      <span className="text-sm text-[#d4af37]">
                        Running
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <AudioWaveform
                          className="text-[#d4af37]"
                          size={18}
                        />

                        <span className="text-sm text-white/80">
                          Voice Analysis Complete
                        </span>
                      </div>

                      <span className="text-sm text-emerald-400">
                        Success
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
            AUTOMATION FEATURES
          </p>

          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            AI Infrastructure Designed For Smart Automation.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {automationFeatures.map((feature, index) => (
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
              WHY AUTOMATION MATTERS
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Automate Voice Operations At Massive Scale.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Reduce manual operations, accelerate customer engagement,
              and scale intelligent communication workflows instantly.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {automations.map((item) => (
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
            <Bot size={34} />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
            Build Smarter AI Automation Systems.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Transform workflows using real-time Voice AI automation,
            intelligent conversation routing, and scalable AI systems.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(212,175,55,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-black"
          >
            Start Automating
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
      <Footer />
    </div>
  );
}