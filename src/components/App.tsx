import { useState } from "react";
import { FileText, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import Hero from "./Hero";
import TechTicker from "./TechTicker";
import About from "./About";
import WhatIDo from "./WhatIDo";
import Achievements from "./Achievements";
import Skill from "./skill";
import Certificates from "./Certificates";
import Resume from "./Resume";
import DevelopmentProcess from "./DevelopmentProcess";
import Projects from "./Projects";
import ProfileCard from "./ProfileCard";
import profilePhoto from "../images/Me/contact-portrait.png";

const contactLinks = [
  {
    label: "htunhtuna02@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=htunhtuna02%40gmail.com",
    icon: Mail,
    external: true,
  },
  {
    label: "Htunht",
    href: "https://github.com/Htunht",
    icon: FaGithub,
    external: true,
  },
  {
    label: "Htun Htun Aung",
    href: "https://www.linkedin.com/in/htunhtuna02",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "@SuperHtun",
    href: "https://t.me/SuperHtun",
    icon: FaTelegramPlane,
    external: true,
  },
  {
    label: "Htun Htun Aung",
    href: "https://www.facebook.com/share/1CDsW3eaoY/",
    icon: FaFacebookF,
    external: true,
  },
  { label: "09972579229", href: "tel:+959972579229", icon: Phone },
  { label: "Résumé", href: "/resume.pdf", icon: FileText, external: true },
];

export default function App() {
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <div
      data-theme="cmyk"
      className="relative min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-cyan-200 selection:text-slate-900"
    >
      {/* 1. Hero Section (with Integrated Navigation) */}
      <Hero />

      <div className="portfolio-flow-theme">
        {/* ⚡ Tech Ticker Conveyor Belt (Smooth In-View Fade) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
        >
          <TechTicker />
        </motion.div>

        {/* 3. About Me Section */}
        <About />

        {/* What I Do */}
        <WhatIDo />

        {/* Technical Skills */}
        <Skill />

        {/* 4. Achievements Gallery */}
        <Achievements />

        {/* 05. Selected projects */}
        <Projects />

        {/* Resume download */}
        <Resume />

        {/* 06. Project Development Process */}
        <DevelopmentProcess />

        {/* 07. Certificates and credentials */}
        <Certificates />

        {/* 08. Footer / Contact with Smooth Entrance */}
        <footer id="contact" className="relative bg-white px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-6xl"
          >
          <div className="mb-3 flex items-center gap-4">
            <span className="font-mono text-lg font-semibold text-primary">
              08.
            </span>
            <h2 className="whitespace-nowrap text-2xl font-bold text-slate-900 md:text-3xl">
              Get In Touch
            </h2>
            <span className="h-px w-full max-w-sm bg-slate-200" />
          </div>
          <p className="mb-8 max-w-md text-sm leading-6 text-slate-600">
            Let&apos;s build something impactful together. Feel free to reach
            out for collaborations or just a friendly chat.
          </p>

          <div className="mb-12 grid items-start gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="flex flex-col items-center gap-4 sm:items-start">
              <ProfileCard
                name="Htun Htun Aung"
                title="Full-Stack Software Engineer"
                handle="Htun(ထွန်း)"
                status="Open to Opportunities"
                statusColor="#166534"
                contactText="Contact"
                avatarUrl={profilePhoto}
                holo={0.65}
                glare={0.4}
                tiltStrength={10}
                parallax={6}
                radius={16}
                enableTilt
                intro
                showUserInfo
                enableMobileTilt={false}
                theme="dark"
                onContactClick={() =>
                  setShowContactOptions((isOpen) => !isOpen)
                }
              />
              {showContactOptions && (
                <div className="grid w-full max-w-[340px] gap-3 sm:grid-cols-2">
                  <a
                    href="https://t.me/SuperHtun"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 sm:px-4"
                  >
                    <FaTelegramPlane aria-hidden="true" />
                    @SuperHtun
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=htunhtuna02%40gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 sm:px-4"
                  >
                    <Mail size={17} aria-hidden="true" />
                    <span className="break-all">htunhtuna02@gmail.com</span>
                  </a>
                </div>
              )}
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Contact &amp; profiles
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactLinks.map(({ label, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group inline-flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-600 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[12px] text-slate-500">
              © 2026 Htun Htun Aung
            </p>
          </div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
