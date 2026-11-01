import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Galaxy from "./Galaxy";
import LaserFlow from "./LaserFlow";
import RotatingText from "./RotatingText";
import ElectricArcCursor from "./ElectricArcCursor";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const navigation = [
    { label: "About", href: "#about" },
    { label: "What I Do", href: "#what-i-do" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certificates", href: "#certificates" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black"
    >
      <nav
        className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
          heroVisible
            ? "border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
            : "border-b border-slate-200/80 bg-white/90 text-slate-900 shadow-sm backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <a
            href="#hero"
            className={`whitespace-nowrap text-sm font-bold tracking-normal transition-colors ${
              heroVisible
                ? "text-white hover:text-cyan-200"
                : "text-slate-900 hover:text-teal-700"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            HTUN(ထွန်း)
          </a>

          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:text-[15px] ${
                  heroVisible
                    ? "text-slate-200 hover:text-cyan-200 focus-visible:outline-cyan-300"
                    : "text-slate-700 hover:text-teal-700 focus-visible:outline-teal-600"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className={`grid h-10 w-10 place-items-center rounded-lg border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden ${
              heroVisible
                ? "border-white/20 text-white hover:bg-white/10 focus-visible:outline-cyan-300"
                : "border-slate-300 text-slate-800 hover:bg-slate-100 focus-visible:outline-teal-600"
            }`}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className={`border-t px-6 py-3 backdrop-blur-md md:hidden ${
              heroVisible
                ? "border-white/10 bg-slate-950/95"
                : "border-slate-200 bg-white/95"
            }`}
          >
            <div className="mx-auto flex max-w-6xl flex-col">
              {navigation.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`border-b py-3 text-[15px] font-medium transition-colors last:border-0 focus-visible:outline focus-visible:outline-2 ${
                    heroVisible
                      ? "border-white/5 text-slate-200 hover:text-cyan-200 focus-visible:outline-cyan-300"
                      : "border-slate-100 text-slate-700 hover:text-teal-700 focus-visible:outline-teal-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="absolute inset-0 z-0">
        <Galaxy
          className="h-full w-full"
          density={1}
          glowIntensity={0.3}
          flareIntensity={1}
          starSpeed={0.5}
          mouseRepulsion
          clickWarp
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <LaserFlow
          className="h-full w-full"
          beamPosition={0.76}
          surfaceLevel={1}
          color="#5865ff"
          intensity={0.7}
          beamWidth={0.85}
          flare={0.75}
          spread={0.85}
          spill={0.45}
          fog={0.12}
          dust={0.55}
          streaks={0.8}
          dots={0.4}
          pulse={0.75}
          speed={0.7}
          mouseInteraction={false}
          intro={false}
        />
      </div>

      {/* Subtle ambient lighting behind content for extra depth (Sky & Indigo) */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-sky-500/10 blur-[160px] rounded-full pointer-events-none z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none z-10"></div>
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
      >
        <span className="absolute left-[8%] top-[28%] h-1 w-1 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        <span className="absolute left-[18%] top-[68%] h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
        <span className="absolute left-[32%] top-[20%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
        <span className="absolute left-[42%] top-[78%] h-1 w-1 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        <span className="absolute left-[54%] top-[32%] h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
      </div>
      <ElectricArcCursor />

      {/* Hero Main Content */}
      <div className="relative z-20 mx-auto my-auto grid w-full max-w-6xl items-center gap-8 px-6 py-10 md:grid-cols-12 md:gap-10 md:px-12 md:py-16">
        <div className="min-w-0 space-y-4 text-left md:col-span-7">
          <h1 className="text-[clamp(1.875rem,8vw,3rem)] font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            Htun Htun Aung
          </h1>

          <h2 className="text-base font-bold text-slate-200 min-[375px]:text-lg sm:text-2xl lg:text-3xl">
            Full-Stack Software Engineer
          </h2>
          <div className="mt-5 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-2 text-[clamp(1.5rem,7vw,2.25rem)] font-bold text-white sm:mt-6 sm:gap-x-3 sm:text-4xl lg:text-5xl">
            <span>Creative</span>
            <RotatingText
              texts={["Thinking", "Coding", "Solutions"]}
              effect="slide"
              direction="up"
              highlight
              highlightColor="#6366f1"
              staggerFrom="last"
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
              rotationInterval={2000}
              splitBy="characters"
              blur={0}
              auto
              loop
              pauseOnHover={false}
              style={{ display: "inline-flex", justifyContent: "flex-start" }}
            />
          </div>
        </div>
      </div>

      {/* Empty space placeholder for bottom alignment */}
      <div className="h-6"></div>
    </header>
  );
}
