// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   LayoutDashboard,
//   Bot,
//   BarChart3,
//   Users,
//   Rocket,
//   Building2,
//   FileText,
//   BookOpen,
//   LifeBuoy,
// } from "lucide-react";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const navItems = [
//     {
//       title: "Platform",
//       dropdown: [
//         {
//           name: "CRM",
//           icon: <LayoutDashboard size={18} className="text-[#d4af37]" />,
//           desc: "Manage leads and customer workflows.",
//         },
//         {
//           name: "Automation",
//           icon: <Bot size={18} className="text-[#d4af37]" />,
//           desc: "Automate repetitive sales tasks.",
//         },
//         {
//           name: "Analytics",
//           icon: <BarChart3 size={18} className="text-[#d4af37]" />,
//           desc: "Track performance with smart insights.",
//         },
//       ],
//     },
//     {
//       title: "Solutions",
//       dropdown: [
//         {
//           name: "Sales Teams",
//           icon: <Users size={18} className="text-[#d4af37]" />,
//           desc: "Built for high-performing sales teams.",
//         },
//         {
//           name: "Startups",
//           icon: <Rocket size={18} className="text-[#d4af37]" />,
//           desc: "Scale your startup faster.",
//         },
//         {
//           name: "Enterprise",
//           icon: <Building2 size={18} className="text-[#d4af37]" />,
//           desc: "Enterprise-grade communication tools.",
//         },
//       ],
//     },
//     {
//       title: "Pricing",
//     },
//     {
//       title: "Resources",
//       dropdown: [
//         {
//           name: "Blogs",
//           icon: <FileText size={18} className="text-[#d4af37]" />,
//           desc: "Actionable insights for business growth.",
//         },
//         {
//           name: "Documentation",
//           icon: <BookOpen size={18} className="text-[#d4af37]" />,
//           desc: "Developer docs and API guides.",
//         },
//         {
//           name: "Help Center",
//           icon: <LifeBuoy size={18} className="text-[#d4af37]" />,
//           desc: "Get support whenever you need it.",
//         },
//       ],
//     },
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/70 backdrop-blur-xl">
//       {/* top glow */}
//       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

//       <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-8">
//         {/* LOGO */}
//         <motion.div
//           whileHover={{ scale: 1.02 }}
//           className="cursor-pointer"
//         >
//           <h1 className="text-2xl font-semibold tracking-tight text-white">
//             Market<span className="text-[#d4af37]">ing</span>
//           </h1>
//         </motion.div>

//         {/* DESKTOP NAV */}
//         <nav className="hidden items-center gap-8 lg:flex">
//           {navItems.map((item) => (
//             <div key={item.title} className="group relative">
//               <button className="flex items-center gap-1 text-sm font-medium text-white/70 transition duration-300 hover:text-white">
//                 {item.title}

//                 {item.dropdown && (
//                   <ChevronDown
//                     size={16}
//                     className="transition duration-300 group-hover:rotate-180"
//                   />
//                 )}
//               </button>

//               {/* DROPDOWN */}
//               {item.dropdown && (
//                 <div className="pointer-events-none absolute left-0 top-full pt-3 w-[340px] translate-y-3 rounded-2xl border border-white/10 bg-[#111111]/95 p-2 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
//                   <div className="space-y-1">
//                     {item.dropdown.map((sub) => (
//                       <a
//                         key={sub.name}
//                         href="#"
//                         className="group/item flex items-start gap-3 rounded-xl px-3 py-3 transition duration-300 hover:bg-white/5"
//                       >
//                         <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/10 transition duration-300 group-hover/item:scale-105 group-hover/item:bg-[#d4af37]/20">
//                           {sub.icon}
//                         </div>

//                         <div>
//                           <h4 className="text-sm font-semibold text-white transition group-hover/item:text-[#d4af37]">
//                             {sub.name}
//                           </h4>

//                           <p className="mt-1 text-xs leading-relaxed text-white/55">
//                             {sub.desc}
//                           </p>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* RIGHT SIDE */}
//         <div className="hidden items-center gap-4 lg:flex">
//           {/* <button className="text-sm font-medium text-white/70 transition hover:text-white">
//             Login
//           </button> */}

//           <motion.button
//             whileHover={{
//               scale: 1.04,
//               boxShadow: "0 0 30px rgba(212,175,55,0.18)",
//             }}
//             whileTap={{ scale: 0.97 }}
//             className="group relative overflow-hidden rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black"
//           >
//             {/* shimmer */}
//             <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />

//             <span className="relative z-10">Book Demo</span>
//           </motion.button>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="flex items-center justify-center text-white lg:hidden"
//         >
//           {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25 }}
//             className="border-t border-white/10 bg-[#0b0b0b]/95 px-6 py-6 backdrop-blur-2xl lg:hidden"
//           >
//             <div className="space-y-5">
//               {navItems.map((item) => (
//                 <div key={item.title}>
//                   <button className="flex w-full items-center justify-between text-left text-base font-medium text-white/80">
//                     {item.title}
//                     {item.dropdown && <ChevronDown size={18} />}
//                   </button>
//                 </div>
//               ))}

//               <div className="flex flex-col gap-3 pt-4">
//                 <button className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5">
//                   Login
//                 </button>

//                 <button className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black">
//                   Book Demo
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Bot,
  BarChart3,
  Users,
  Rocket,
  Building2,
  FileText,
  BookOpen,
  LifeBuoy,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      title: "Platform",
      dropdown: [
        {
          name: "CRM",
          link: "/crm",
          icon: <LayoutDashboard size={18} className="text-[#d4af37]" />,
          desc: "Manage leads and customer workflows.",
        },
        {
          name: "Automation",
          link: "/automation",
          icon: <Bot size={18} className="text-[#d4af37]" />,
          desc: "Automate repetitive sales tasks.",
        },
        {
          name: "Analytics",
          link: "/analytics",
          icon: <BarChart3 size={18} className="text-[#d4af37]" />,
          desc: "Track performance with smart insights.",
        },
      ],
    },

    {
      title: "Solutions",
      dropdown: [
        {
          name: "Sales Teams",
          link: "/sales-teams",
          icon: <Users size={18} className="text-[#d4af37]" />,
          desc: "Built for high-performing sales teams.",
        },
        {
          name: "Startups",
          link: "/startups",
          icon: <Rocket size={18} className="text-[#d4af37]" />,
          desc: "Scale your startup faster.",
        },
        {
          name: "Enterprise",
          link: "/enterprise",
          icon: <Building2 size={18} className="text-[#d4af37]" />,
          desc: "Enterprise-grade communication tools.",
        },
      ],
    },

    {
      title: "Pricing",
      link: "/pricing",
    },

    {
      title: "Resources",
      dropdown: [
        {
          name: "Blogs",
          link: "/blogs",
          icon: <FileText size={18} className="text-[#d4af37]" />,
          desc: "Actionable insights for business growth.",
        },
        {
          name: "Documentation",
          link: "/docs",
          icon: <BookOpen size={18} className="text-[#d4af37]" />,
          desc: "Developer docs and API guides.",
        },
        {
          name: "Help Center",
          link: "/help-center",
          icon: <LifeBuoy size={18} className="text-[#d4af37]" />,
          desc: "Get support whenever you need it.",
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070707]/70 backdrop-blur-xl">
      {/* TOP GLOW */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Link
            to="/"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            Market<span className="text-[#d4af37]">ing</span>
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div key={item.title} className="group relative">
              {/* MAIN NAV LINK */}
              <Link
                to={item.link || "#"}
                className="flex items-center gap-1 text-sm font-medium text-white/70 transition duration-300 hover:text-white"
              >
                {item.title}

                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className="transition duration-300 group-hover:rotate-180"
                  />
                )}
              </Link>

              {/* DROPDOWN */}
              {item.dropdown && (
                <div className="pointer-events-none absolute left-0 top-full pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="w-[340px] translate-y-3 rounded-2xl border border-white/10 bg-[#111111]/95 p-2 shadow-2xl backdrop-blur-2xl transition-all duration-300 group-hover:translate-y-0">
                    <div className="space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.link}
                          className="group/item flex items-start gap-3 rounded-xl px-3 py-3 transition duration-300 hover:bg-white/5"
                        >
                          {/* ICON */}
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/10 transition duration-300 group-hover/item:scale-105 group-hover/item:bg-[#d4af37]/20">
                            {sub.icon}
                          </div>

                          {/* TEXT */}
                          <div>
                            <h4 className="text-sm font-semibold text-white transition group-hover/item:text-[#d4af37]">
                              {sub.name}
                            </h4>

                            <p className="mt-1 text-xs leading-relaxed text-white/55">
                              {sub.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 lg:flex">
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(212,175,55,0.18)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black"
          >
            {/* SHIMMER */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />

            <span className="relative z-10">Book Demo</span>
          </motion.button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center text-white lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#0b0b0b]/95 px-6 py-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-5">
              {navItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.link || "#"}
                    className="flex w-full items-center justify-between text-left text-base font-medium text-white/80"
                  >
                    {item.title}

                    {item.dropdown && <ChevronDown size={18} />}
                  </Link>

                  {/* MOBILE DROPDOWN */}
                  {item.dropdown && (
                    <div className="mt-3 ml-3 space-y-2 border-l border-white/10 pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.link}
                          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                          <div className="text-[#d4af37]">{sub.icon}</div>

                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* MOBILE CTA */}
              <div className="flex flex-col gap-3 pt-4">
                <button className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black">
                  Book Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}