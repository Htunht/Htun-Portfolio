import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  FlaskConical,
  Lightbulb,
  RefreshCw,
  Rocket,
  Search,
  Wrench,
} from "lucide-react";

const processSteps = [
  { label: "Problem", icon: Lightbulb, color: "#f59e0b" },
  { label: "Research", icon: Search, color: "#0ea5e9" },
  { label: "Plan", icon: ClipboardList, color: "#8b5cf6" },
  { label: "Build", icon: Wrench, color: "#6366f1" },
  { label: "Test", icon: FlaskConical, color: "#14b8a6" },
  { label: "Improve", icon: RefreshCw, color: "#f97316" },
  { label: "Deploy", icon: Rocket, color: "#ec4899" },
];

const principles = [
  "Understand the problem.",
  "Design the workflow.",
  "Review the output.",
  "Test the system.",
  "Own the result.",
];

export default function DevelopmentProcess() {
  return (
    <section
      id="development-process"
      data-theme="cmyk"
      className="overflow-hidden bg-white px-6 py-12 text-slate-900 md:px-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-4">
            <span className="font-mono text-lg font-semibold text-primary">
              06.
            </span>
            <h2 className="text-2xl font-bold md:text-3xl">
              Project Development Process
            </h2>
            <span className="h-px w-full max-w-sm bg-base-300" />
          </div>
          <p className="max-w-2xl text-sm leading-6 text-base-content/70">
            A thoughtful, repeatable process for turning real problems into
            tested, useful products.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-2xl font-bold text-base-content sm:text-3xl">
              My Approach
            </p>
            <ul className="space-y-3 text-sm text-base-content sm:text-base">
              {principles.map((principle, index) => (
                <li key={principle} className="flex items-center gap-3">
                  <span
                    className="h-0.5 w-5 shrink-0 rounded-full"
                    style={{ backgroundColor: processSteps[index]?.color ?? "#6366f1" }}
                    aria-hidden="true"
                  />
                  {principle}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-w-0"
          >
            <div
              aria-label="Project development steps"
              role="region"
              tabIndex={0}
              className="scrollbar-hidden overflow-x-auto pb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <ol className="flex min-w-[560px] items-center justify-between gap-2 sm:min-w-[620px] lg:min-w-0">
                {processSteps.map(({ label, icon: Icon, color }, index) => (
                  <li
                    key={label}
                    className="flex min-w-0 flex-1 items-center gap-1.5"
                  >
                    <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                      <motion.span
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.07,
                        }}
                        className="mb-2 grid h-12 w-12 place-items-center rounded-lg border-2 shadow-sm sm:h-14 sm:w-14"
                        style={{
                          borderColor: `${color}55`,
                          backgroundColor: `${color}12`,
                          color,
                        }}
                      >
                        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                      </motion.span>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-base-content sm:text-xs">
                        {label}
                      </span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <ArrowRight
                        size={17}
                        className="mb-5 shrink-0"
                        style={{ color: processSteps[index + 1].color }}
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-8 border-l-2 border-primary pl-4 text-lg font-bold leading-snug text-base-content sm:text-xl">
              From real problems
              <br />
              to solutions that work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
