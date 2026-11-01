import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Laptop } from "lucide-react";
import auraDesktop from "../images/Project/Aura-AI Desktop View.png";
import auraPhone from "../images/Project/Aura-AI Ph View.png";
import iotDashboard from "../images/Project/Iot Dashboard.png";
import polarisDesktop from "../images/Project/Polaris Desktop View.png";
import polarisPhone from "../images/Project/Polaris Ph-View.png";
import studentProDetail from "../images/Project/Student-Pro Detail Screen.jpg";
import studentProMain from "../images/Project/Student-Pro Main Dashbaord.jpg";
import studentProSplash from "../images/Project/Student-Pro Splash Screen.jpg";
import taxiDesktop from "../images/Project/Taxi-meik-swe desktop view.png";
import taxiPhone from "../images/Project/Taxi-meik-swe Ph view.png";

type Project = {
  name: string;
  description: string;
  overview: string;
  stack: string[];
  repository: string;
  laptopImage?: string;
  phoneImages?: string[];
};

const projects: Project[] = [
  {
    name: "Taxi-Meik-Swe",
    description: "Taxi-Driver Car Rental Marketplace",
    overview:
      "A Myanmar-focused marketplace connecting taxi-ready car owners with drivers looking for a vehicle to earn an income.",
    stack: ["React", "TypeScript", "Marketplace"],
    repository: "https://github.com/hsumyatm7308/taxi_meik_swe_hackthon",
    laptopImage: taxiDesktop,
    phoneImages: [taxiPhone],
  },
  {
    name: "ဓူဝံကြယ် (Polaris)",
    description: "Myanmar Major & Career Guidance Platform",
    overview:
      "A student-focused platform for exploring university majors, career paths, and educational opportunities.",
    stack: ["React", "TypeScript", "Education"],
    repository: "https://github.com/Htunht/Pathfinder---AI-Powered-Academic-Career-Navigator",
    laptopImage: polarisDesktop,
    phoneImages: [polarisPhone],
  },
  {
    name: "Student Pro",
    description: "Offline-First Digital Ledger for Class Leaders",
    overview:
      "A mobile app that helps class leaders manage student records, track fees, and create digital receipts—even when offline.",
    stack: ["React Native", "Expo", "SQLite", "Offline-first"],
    repository: "https://github.com/Htunht/student-pro-mobile-app",
    phoneImages: [studentProSplash, studentProMain, studentProDetail],
  },
  {
    name: "AURA AI",
    description: "AI Interview & Selection Platform",
    overview:
      "An AI-powered hiring workspace for candidate screening, interview coordination, and recruiter reviews.",
    stack: ["React", "AI", "Recruitment"],
    repository: "https://github.com/Htunht/AURA_AI",
    laptopImage: auraDesktop,
    phoneImages: [auraPhone],
  },
  {
    name: "Smart GuardX SSR Rover",
    description: "IoT-Based Smart Surveillance Rover",
    overview:
      "A web-controlled surveillance rover for remote monitoring, with a live camera feed and rover controls.",
    stack: ["FastAPI", "ESP32-CAM", "PostgreSQL", "IoT"],
    repository: "https://github.com/Htunht/SSR-Rover",
    laptopImage: iotDashboard,
  },
];

function LaptopPreview({ project }: { project: Project }) {
  if (!project.laptopImage) return null;

  return (
    <a
      href={project.repository}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.name} laptop preview and GitHub source`}
      className="group min-w-0 w-[86%] shrink-0"
    >
      <div className="mx-auto w-full max-w-[620px] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="rounded-t-xl border-[5px] border-neutral bg-neutral p-1 shadow-xl sm:rounded-t-2xl sm:border-[7px] sm:p-1.5">
          <div className="aspect-video overflow-hidden rounded-sm bg-base-100 sm:rounded-md">
            <img
              src={project.laptopImage}
              alt={`${project.name} desktop view`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mx-auto h-2 w-[108%] -translate-x-[3.7%] rounded-b-[50%] bg-gradient-to-b from-neutral-300 to-neutral-500 shadow-md sm:h-3" />
      </div>
    </a>
  );
}

function PhonePreview({
  project,
  image,
  mobileOnly = false,
  pairedWithLaptop = false,
  screenIndex,
}: {
  project: Project;
  image: string;
  mobileOnly?: boolean;
  pairedWithLaptop?: boolean;
  screenIndex: number;
}) {
  return (
    <a
      href={project.repository}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.name} phone screen ${screenIndex + 1} and GitHub source`}
      className={`group shrink-0 self-end ${
        pairedWithLaptop
          ? "absolute bottom-0 right-[9%] z-10 w-[clamp(6.25rem,22%,9.375rem)]"
          : mobileOnly
            ? "w-[31%] max-w-[170px]"
            : ""
      }`}
    >
      <div className="mx-auto max-w-[170px] transition-transform duration-300 group-hover:-translate-y-1.5">
        <div className="relative rounded-[1.15rem] border border-slate-700 bg-slate-900 p-[3px] shadow-lg sm:rounded-[1.4rem] sm:p-1">
          <span className="absolute -right-[3px] top-16 h-8 w-[3px] rounded-r-sm bg-slate-700 sm:-right-1 sm:top-20 sm:h-10 sm:w-1" aria-hidden="true" />
          <span className="absolute -right-[3px] top-28 h-12 w-[3px] rounded-r-sm bg-slate-700 sm:-right-1 sm:top-32 sm:h-14 sm:w-1" aria-hidden="true" />
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[0.95rem] bg-base-100 sm:rounded-[1.2rem]">
            <img
              src={image}
              alt={`${project.name} screen ${screenIndex + 1}`}
              className="h-full w-full object-contain object-top"
              loading="lazy"
            />
            <span className="absolute left-1/2 top-0 h-[9px] w-[18px] -translate-x-1/2 rounded-b-[10px] bg-slate-900 sm:h-[11px] sm:w-5" aria-hidden="true" />
          </div>
        </div>
      </div>
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="grid w-full gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10 lg:gap-14"
    >
      <div className="min-w-0 px-2 pt-4 sm:px-4 md:px-0 md:pt-0">
        {project.phoneImages?.length === 3 ? (
          <div className="mx-auto flex min-h-64 w-full max-w-[680px] items-end justify-center gap-2 sm:min-h-80 sm:gap-4">
            {project.phoneImages.map((image, screenIndex) => (
              <PhonePreview
                key={image}
                project={project}
                image={image}
                mobileOnly
                screenIndex={screenIndex}
              />
            ))}
          </div>
        ) : project.laptopImage ? (
          <div className="relative mx-auto flex min-h-56 w-full max-w-[760px] items-end justify-center sm:min-h-72">
            <LaptopPreview project={project} />
            {project.phoneImages?.map((image, screenIndex) => (
              <PhonePreview
                key={image}
                project={project}
                image={image}
                pairedWithLaptop
                screenIndex={screenIndex}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-48 w-full items-center justify-center rounded-xl border border-dashed border-base-300 bg-base-100 p-6 text-center sm:min-h-52">
            <div>
              <Laptop className="mx-auto mb-3 text-primary" size={28} />
              <p className="font-semibold">{project.name}</p>
              <p className="mt-1 text-xs text-base-content/60">Project preview</p>
            </div>
          </div>
        )}
      </div>

      <div className="min-w-0 px-5 pb-5 sm:px-6 md:p-0">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
          {project.description}
        </p>
        <h3 className="mt-2 text-xl font-extrabold">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-base-content/70">
          {project.overview}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.stack.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-base-200 px-2.5 py-1 text-[11px] font-medium text-base-content/70"
            >
              {technology}
            </li>
          ))}
        </ul>
        <a
          href={project.repository}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View source <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      data-theme="cmyk"
      className="bg-white px-5 py-12 text-slate-900 sm:px-6 md:px-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-4">
            <span className="font-mono text-lg font-semibold text-primary">07.</span>
            <h2 className="text-2xl font-bold md:text-3xl">
              Some Things I&apos;ve Built
            </h2>
            <span className="h-px w-full max-w-sm bg-base-300" />
          </div>
          <p className="max-w-2xl text-sm leading-6 text-base-content/70">
            A selection of my web and mobile projects. Explore each laptop and
            phone view, or open the source code.
          </p>
        </motion.header>

        <div className="divide-y divide-base-300/80">
          {visibleProjects.map((project, index) => (
            <div
              key={project.name}
              className={`${
                index === 0 ? "pb-12" : "py-12 md:py-16"
              } last:pb-0`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-10 flex justify-center md:mt-14">
            <button
              type="button"
              onClick={() => setShowAll((isShowingAll) => !isShowingAll)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-5 py-2.5 text-sm font-semibold text-base-content transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {showAll ? "Show Less" : "View More"}
              <ArrowDown
                size={16}
                aria-hidden="true"
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
