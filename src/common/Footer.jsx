// import React from "react";

// const Footer = () => {
//   const footerSections = [
//     {
//       title: "Product",
//       links: [
//         "Speech-to-Text API",
//         "Text-to-Speech API",
//         "Voice Agent API",
//         "Audio Intelligence API",
//       ],
//     },
//     {
//       title: "Customers",
//       links: ["Customer stories", "Partners", "Company Program", "Powered by "],
//     },
//     {
//       title: "Solutions",
//       links: [
//         "Contact Center",
//         "Speech analytics",
//         "Conversational AI",
//         "Podcast Transcription",
//         "Medical Transcription",
//         "Startup Program",
//       ],
//     },
//     {
//       title: "Resources",
//       links: [
//         "Podcasts",
//         "Revenue Hub",
//         "AI Discovery",
//         "AI Video Generator Tool",
//         "Introducing vision Agent API",
//         "Airtable Connect integration",
//       ],
//     },
//     {
//       title: "Developers",
//       links: ["Documentation", "Chatgpt", "API Programming", "Community", "Self-owned", "Support"],
//     },
//     {
//       title: "Company",
//       links: ["About", "Blog", "Careers", "Newsletter", "Customers", "Partners", "Newsroom"],
//     },
//   ];

//   return (
//     <footer className="relative bg-[#050505] text-white/60 pt-16 pb-8 overflow-hidden">
//       {/* Gold Glow Effects — matching VoiceAgentSection style */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-[110px] -translate-x-1/2 pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d4af37]/6 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[90px] pointer-events-none" />
      
//       {/* Additional glow from VoiceAgentSection style */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-40 w-[32rem] -translate-x-1/2 bg-[#d4af37]/8 blur-[110px]" />
//       </div>

//       {/* Main Footer Container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Logo / Brand area */}
//         <div className="mb-12 pb-6 border-b border-[#d4af37]/10">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-[#d4af37] to-[#b8942e] rounded-md" 
//                  style={{ boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" }} />
//             <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#d4af37] bg-clip-text text-transparent">
//               Marketing
//             </span>
//           </div>
//           <p className="text-white/55 text-sm mt-3 max-w-md">
//             Voice AI that understands every nuance — built for developers, loved by enterprises.
//           </p>
//         </div>

//         {/* Footer Grid Sections */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 gap-y-10">
//           {footerSections.map((section, idx) => (
//             <div key={idx} className="space-y-3">
//               <h3 className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider pl-2"
//                   style={{ borderLeft: "3px solid #d4af37" }}>
//                 {section.title}
//               </h3>
//               <ul className="space-y-2">
//                 {section.links.map((link, linkIdx) => (
//                   <li key={linkIdx}>
//                     <a
//                       href="#"
//                       className="text-white/65 hover:text-[#d4af37] text-sm transition duration-200 ease-in-out block hover:translate-x-0.5"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-3">
//           <div className="flex flex-wrap gap-5 justify-center md:justify-start">
//             <a href="#" className="hover:text-[#d4af37] transition">Privacy</a>
//             <a href="#" className="hover:text-[#d4af37] transition">Terms</a>
//             <a href="#" className="hover:text-[#d4af37] transition">Security</a>
//             <a href="#" className="hover:text-[#d4af37] transition">Status</a>
//           </div>
//           <div className="flex gap-4">
//             <span className="cursor-pointer hover:text-[#d4af37] transition text-white/70">𝕏</span>
//             <span className="cursor-pointer hover:text-[#d4af37] transition text-white/70">in</span>
//             <span className="cursor-pointer hover:text-[#d4af37] transition text-white/70">GitHub</span>
//           </div>
//           <p className="text-center md:text-right text-white/40">
//             &copy; {new Date().getFullYear()} , Inc. — Voice AI with a golden standard.
//           </p>
//         </div>
//       </div>

//       {/* Top gold gradient border matching VoiceAgentSection diagram border */}
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
//     </footer>
//   );
// };

// export default Footer;








import React from "react"
import {
  Globe,
  ArrowRight,
  AudioWaveform,
  ShieldCheck,
  Sparkles,
  Phone,
  ArrowUpRight,
} from "lucide-react"

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        "Voice Agent API",
        "Speech-to-Text API",
        "Text-to-Speech API",
        "Realtime Audio Streaming",
      ],
    },
    {
      title: "Solutions",
      links: [
        "AI Contact Center",
        "Conversational AI",
        "Sales Automation",
        "Healthcare Voice AI",
      ],
    },
    // {
    //   title: "Developers",
    //   links: [
    //     "Documentation",
    //     "API Reference",
    //     "SDKs",
    //     "Open Source",
    //     "Community",
    //   ],
    // },
    {
      title: "Resources",
      links: [
        "Blog",
        "Changelog",
        "Case Studies",
        "Startup Program",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Careers",
        "Partners",
        "Newsroom",
      ],
    },
    {
      title: "Legal",
      links: [
        "Privacy",
        "Terms",
        "Security",
        "Status",
      ],
    },
  ]

  const socialIcons = [
    {
      icon: Phone,
      href: "#",
    },
    {
      icon: ArrowUpRight,
      href: "#",
    },
    {
      icon: Globe,
      href: "#",
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505] pt-24 text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[130px]" />

        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-[120px]" />
      </div>

      {/* grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* top CTA */}
        <div >
          {/* glow */}
          <div className="absolute left-1/2 top-0 h-44 w-[28rem] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />
        </div>

        {/* footer content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1.4fr_2fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10">
                <AudioWaveform
                  size={24}
                  className="text-[#d4af37]"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  VoiceFlow
                </h3>

                <p className="text-sm text-white/45">
                  Programmable Voice AI
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-base leading-8 text-white/55">
              Production-ready infrastructure for conversational AI, realtime
              voice orchestration, and enterprise-grade communication systems.
            </p>

            {/* metrics */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <h4 className="text-2xl font-semibold text-[#d4af37]">
                  99.99%
                </h4>

                <p className="mt-1 text-sm text-white/45">
                  Global uptime
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <h4 className="text-2xl font-semibold text-[#d4af37]">
                  120ms
                </h4>

                <p className="mt-1 text-sm text-white/45">
                  Voice latency
                </p>
              </div>
            </div>

            {/* trust */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 px-5 py-4 text-sm text-emerald-400">
              <ShieldCheck size={18} />
              SOC2 compliant infrastructure
            </div>
          </div>

          {/* links */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  {section.title}
                </h3>

                <ul className="mt-5 space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href="#"
                        className="text-sm text-white/55 transition hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom */}
        <div className="mt-20 flex flex-col gap-6 border-t border-white/5 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/35">
            © {new Date().getFullYear()} VoiceFlow Inc. All rights reserved.
          </p>

          {/* socials */}
          <div className="flex items-center gap-3">
            {socialIcons.map((item, i) => {
              const Icon = item.icon

              return (
                <a
                  key={i}
                  href={item.href}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-[#d4af37]/20 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer