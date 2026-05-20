// import React from "react";
// import { motion } from "framer-motion";
// import Footer from "../common/Footer";
// import {
//   Users,
//   BarChart3,
//   Bot,
//   PhoneCall,
//   CheckCircle2,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";

// const features = [
//   {
//     title: "Lead Management",
//     icon: <Users size={24} />,
//     desc: "Organize, track, and manage customer leads in one centralized dashboard.",
//   },
//   {
//     title: "Sales Analytics",
//     icon: <BarChart3 size={24} />,
//     desc: "Gain powerful insights with real-time sales and performance analytics.",
//   },
//   {
//     title: "AI Automation",
//     icon: <Bot size={24} />,
//     desc: "Automate repetitive workflows and improve sales productivity instantly.",
//   },
//   {
//     title: "Call Tracking",
//     icon: <PhoneCall size={24} />,
//     desc: "Track customer interactions and monitor team performance efficiently.",
//   },
// ];

// const benefits = [
//   "Increase team productivity",
//   "Manage leads more efficiently",
//   "Automate follow-ups instantly",
//   "Real-time sales insights",
//   "Improve customer relationships",
//   "Scale your sales operations faster",
// ];

// export default function CRMPage() {
//   return (
//     <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
//       {/* HERO SECTION */}
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
//                 Smart CRM Platform
//               </div>

//               <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
//                 Powerful CRM For Modern Sales Teams.
//               </h1>

//               <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
//                 Streamline customer relationships, automate workflows, and grow
//                 your business with an enterprise-grade CRM platform built for
//                 high-performing teams.
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
//                   Start Free Trial
//                   <ArrowRight
//                     size={18}
//                     className="transition duration-300 group-hover:translate-x-1"
//                   />
//                 </motion.button>

//                 <button className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white">
//                   Book Demo
//                 </button>
//               </div>
//             </motion.div>

//             {/* RIGHT DASHBOARD */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7 }}
//               className="relative"
//             >
//               <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-2xl">
//                 {/* top bar */}
//                 <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
//                   <div>
//                     <h3 className="text-lg font-semibold">Sales Dashboard</h3>
//                     <p className="mt-1 text-sm text-white/50">
//                       Overview of CRM performance
//                     </p>
//                   </div>

//                   <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
//                     +24% Growth
//                   </div>
//                 </div>

//                 {/* cards */}
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
//                     <p className="text-sm text-white/55">Total Leads</p>
//                     <h4 className="mt-3 text-3xl font-bold">12.4K</h4>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
//                     <p className="text-sm text-white/55">Revenue</p>
//                     <h4 className="mt-3 text-3xl font-bold">$84K</h4>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
//                     <p className="text-sm text-white/55">Conversions</p>
//                     <h4 className="mt-3 text-3xl font-bold">68%</h4>
//                   </div>

//                   <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
//                     <p className="text-sm text-white/55">Active Teams</p>
//                     <h4 className="mt-3 text-3xl font-bold">124</h4>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
//         <div className="max-w-2xl">
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
//             CRM FEATURES
//           </p>

//           <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
//             Everything Your Sales Team Needs.
//           </h2>
//         </div>

//         <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {features.map((feature, index) => (
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
//               WHY CHOOSE US
//             </p>

//             <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
//               Built To Help Your Business Scale Faster.
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
  LayoutDashboard,
  Users,
  PhoneCall,
  Bot,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AudioWaveform,
  Activity,
  CalendarDays,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import Footer from "../common/Footer";

const crmFeatures = [
  {
    title: "AI Lead Management",
    desc: "Capture, organize, and manage leads with intelligent automation.",
    icon: <Users size={24} />,
  },
  {
    title: "Voice Call Tracking",
    desc: "Monitor AI-powered customer calls and conversations in real time.",
    icon: <PhoneCall size={24} />,
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive CRM tasks and follow-up processes instantly.",
    icon: <Bot size={24} />,
  },
  {
    title: "Sales Analytics",
    desc: "Track conversions, performance metrics, and customer engagement.",
    icon: <BarChart3 size={24} />,
  },
];

const crmStats = [
  {
    number: "250K+",
    label: "Leads Managed",
  },
  {
    number: "92%",
    label: "Faster Response Time",
  },
  {
    number: "4.1x",
    label: "Higher Conversions",
  },
  {
    number: "99.9%",
    label: "CRM Uptime",
  },
];

const crmBenefits = [
  "Centralized lead management",
  "AI-powered customer conversations",
  "Automated sales workflows",
  "Real-time analytics dashboard",
  "Smart follow-up automation",
  "Voice AI CRM integrations",
];

export default function CRMPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* HERO SECTION */}
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
                AI CRM Platform
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
                Smart CRM Powered By Voice AI.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
                Manage leads, automate conversations, track customer activity,
                and scale communication using intelligent AI voice systems.
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
                  Start Managing Leads

                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white">
                  Book CRM Demo
                </button>
              </div>
            </motion.div>

            {/* RIGHT DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-2xl">
                {/* TOP */}
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <h3 className="text-lg font-semibold">
                      CRM AI Dashboard
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Live customer and lead management
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
                    <Activity size={14} />
                    System Active
                  </div>
                </div>

                {/* STATS */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">New Leads</p>
                    <h4 className="mt-3 text-3xl font-bold">2.4K</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">AI Conversations</p>
                    <h4 className="mt-3 text-3xl font-bold">18.7K</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">Meetings Scheduled</p>
                    <h4 className="mt-3 text-3xl font-bold">680</h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm text-white/55">Lead Conversion</p>
                    <h4 className="mt-3 text-3xl font-bold">47%</h4>
                  </div>
                </div>

                {/* CRM ACTIVITY */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/55">
                        Customer Activity
                      </p>

                      <h4 className="mt-1 text-lg font-semibold">
                        Real-Time CRM Insights
                      </h4>
                    </div>

                    <LayoutDashboard className="text-[#d4af37]" size={22} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="text-[#d4af37]" size={18} />
                        <span className="text-sm text-white/80">
                          AI Follow-Up Sent
                        </span>
                      </div>

                      <span className="text-sm text-emerald-400">
                        Completed
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="text-[#d4af37]" size={18} />
                        <span className="text-sm text-white/80">
                          Demo Meeting Scheduled
                        </span>
                      </div>

                      <span className="text-sm text-[#d4af37]">
                        Upcoming
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <AudioWaveform className="text-[#d4af37]" size={18} />
                        <span className="text-sm text-white/80">
                          Voice Call Analysis
                        </span>
                      </div>

                      <span className="text-sm text-emerald-400">
                        Running
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
          {crmStats.map((stat) => (
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
            CRM FEATURES
          </p>

          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Powerful CRM Infrastructure For Modern Businesses.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {crmFeatures.map((feature, index) => (
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
              WHY BUSINESSES CHOOSE IT
            </p>

            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Intelligent CRM Automation With Voice AI.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Manage customer relationships, automate communication, and scale
              lead engagement using advanced AI systems.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {crmBenefits.map((item) => (
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
            <TrendingUp size={34} />
          </div>

          <h2 className="mt-8 text-4xl font-bold tracking-tight lg:text-5xl">
            Scale Customer Relationships With AI CRM.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Transform customer engagement with intelligent AI voice workflows,
            automated CRM operations, and real-time analytics.
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(212,175,55,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-black"
          >
            Start Using CRM
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
      < Footer />
    </div>
  );
}
