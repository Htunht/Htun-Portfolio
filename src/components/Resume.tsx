import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="resume-heading"
      className="relative isolate overflow-hidden bg-slate-950 px-6 py-16 text-center md:py-20"
    >
      <motion.img
        src="/images/resume-banner.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ y: backgroundY }}
        className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/60" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65 }}
        className="relative mx-auto max-w-4xl"
      >
        <h2
          id="resume-heading"
          className="mb-10 inline-block px-3 py-1 text-2xl font-light uppercase tracking-[0.12em] text-slate-100 drop-shadow-lg sm:text-3xl md:text-4xl"
        >
          Check Out My Résumé!
        </h2>
        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="View résumé PDF in a new tab"
            className="inline-flex items-center border border-violet-200/80 px-6 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-violet-300 hover:bg-violet-400/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
          >
            <span className="px-2 py-1 text-slate-100">Grab a Copy</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
