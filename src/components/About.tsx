import profilePhoto from "../images/Achievement/Card -image.jpg";
import { lazy, Suspense, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Lanyard = lazy(() => import("./Lanyard"));

export default function About() {
  const lanyardContainerRef = useRef<HTMLDivElement>(null);
  const shouldLoadLanyard = useInView(lanyardContainerRef, {
    once: true,
    margin: "200px",
  });
  const photoFallback = (
    <div className="flex h-full items-center justify-center">
      <img
        src={profilePhoto}
        alt="Htun Htun Aung"
        className="h-[260px] w-[200px] rounded-xl border-4 border-white object-cover shadow-xl md:h-[300px] md:w-[220px]"
      />
    </div>
  );

  return (
    <section
      id="about"
      data-theme="cmyk"
      className="relative overflow-hidden bg-white px-6 py-12 text-slate-900 md:px-12 md:py-16"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          ref={lanyardContainerRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="font-mono text-lg font-semibold text-primary">
            01.
          </span>
          <h2 className="whitespace-nowrap text-2xl font-bold text-base-content md:text-3xl">
            About Me
          </h2>
          <span className="h-px w-full max-w-sm bg-base-300" />
        </motion.div>

        <div className="grid items-start gap-12 md:grid-cols-[1.4fr_0.9fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 text-base leading-7 text-base-content/75"
          >
            <p>
              I’m{" "}
              <span className="font-semibold text-violet-300">Htun Htun Aung</span>,
              a{" "}
              <span className="font-semibold text-violet-300">
                fifth-year Information Technology undergraduate
              </span>{" "}
              at{" "}
              <span className="font-semibold text-violet-300">
                Technological University (Hmawbi)
              </span>
              , pursuing a{" "}
              <span className="font-semibold text-violet-300">
                B.E. in Information Technology, expected in 2028
              </span>
              . I build full-stack applications and mobile products that solve
              practical, user-focused problems.
            </p>

            <p>
              Since beginning my software development journey in 2022, I’ve
              worked with{" "}
              <span className="font-semibold text-violet-300">
                React Native and Expo
              </span>{" "}
              for mobile development, and{" "}
              <span className="font-semibold text-violet-300">
                Node.js, Express, and PostgreSQL
              </span>{" "}
              for full-stack applications. My projects include{" "}
              <span className="font-semibold text-violet-300">Student Pro</span>,
              an offline-first student ledger, and{" "}
              <span className="font-semibold text-violet-300">Polaris</span>,
              a major and career guidance platform.
            </p>

            <p>
              My work has been recognized with{" "}
              <span className="font-semibold text-violet-300">
                first prizes at my university’s 100th-anniversary celebration
                and the NSPU opening ceremony
              </span>
              . I also earned{" "}
              <span className="font-semibold text-violet-300">
                first runner-up
              </span>{" "}
              at Technortal’s One Project One Week Hackathon with{" "}
              <span className="font-semibold text-violet-300">Taxi-Meik-Swe</span>,
              and competed at Let’s Tech Hub’s AI Edition Hackathon with{" "}
              <span className="font-semibold text-violet-300">AURA AI</span>.
            </p>

            <p>
              Outside of development, I enjoy watching anime and movies,
              listening to music, and spending time outdoors hiking and camping.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto h-[440px] w-full max-w-[360px] md:mt-[-40px] md:h-[560px] md:max-w-[400px]"
          >
            {shouldLoadLanyard ? (
              <Suspense fallback={photoFallback}>
                <Lanyard
                  frontImage={profilePhoto}
                  className="h-full w-full"
                  size={0.58}
                  strapColor="#166534"
                  interactive
                  intro
                />
              </Suspense>
            ) : (
              photoFallback
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
