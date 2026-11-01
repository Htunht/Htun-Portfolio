import { motion } from 'framer-motion';
import { FaGitAlt, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import {
  SiExpo,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const skillIndicators = [
  { name: 'System Architecture', color: '#8b5cf6' },
  { name: 'Database Management', color: '#0ea5e9' },
  { name: 'Performance Optimization', color: '#14b8a6' },
  { name: 'API Development', color: '#f97316' },
  { name: 'Mobile App Development', color: '#ec4899' },
];

const technologies = [
  { name: 'React', icon: FaReact, color: '#61dafb', textColor: '#0f172a' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', textColor: '#ffffff' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', textColor: '#111827' },
  { name: 'Expo', icon: SiExpo, color: '#000000', textColor: '#ffffff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', textColor: '#083344' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', textColor: '#ffffff' },
  { name: 'Express', icon: SiExpress, color: '#000000', textColor: '#ffffff' },
  { name: 'Python', icon: FaPython, color: '#3776ab', textColor: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248', textColor: '#0f172a' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1', textColor: '#ffffff' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032', textColor: '#ffffff' },
  { name: 'GitHub', icon: SiGithub, color: '#181717', textColor: '#ffffff' },
];

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      data-theme="cmyk"
      className="relative overflow-hidden bg-white px-6 py-12 text-slate-900 md:px-12 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-4">
            <span className="font-mono text-lg font-semibold text-primary">03.</span>
            <h2 className="text-2xl font-bold text-base-content md:text-3xl">
              Technical Skills
            </h2>
            <span className="h-px w-full max-w-sm bg-base-300" />
          </div>
          <p className="max-w-2xl text-sm leading-6 text-base-content/70">
            A snapshot of the skills and technologies I use to design, build,
            and improve digital products.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="py-2"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Core strengths
                </p>
                <h3 className="mt-1 text-xl font-bold text-base-content">
                  Core Skills
                </h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {skillIndicators.map(({ name, color }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex min-h-16 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-slate-800">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-base-content/85 md:text-base">
              Some technologies I&apos;ve worked with
            </h3>
            <div className="grid grid-cols-2 gap-3 min-[400px]:grid-cols-3 sm:grid-cols-4 md:gap-5">
              {technologies.map(({ name, icon: Icon, color, textColor }, index) => (
                <motion.button
                  key={name}
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  aria-label={name}
                  title={name}
                  className="group relative aspect-square cursor-pointer rounded-xl border border-base-300 bg-base-100 text-base-content/70 shadow-sm transition-colors hover:border-primary hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [perspective:700px]"
                >
                  <span className="absolute inset-0 grid place-items-center transition-transform duration-500 [backface-visibility:hidden] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
                    <Icon className="h-8 w-8 min-[400px]:h-9 min-[400px]:w-9 sm:h-10 sm:w-10" color={color} aria-hidden="true" />
                  </span>
                  <span
                    className="absolute inset-0 grid place-items-center rounded-xl px-1 text-center text-xs font-semibold transition-transform duration-500 [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:[transform:rotateY(360deg)] group-focus-visible:[transform:rotateY(360deg)] min-[400px]:px-2 min-[400px]:text-sm"
                    style={{ backgroundColor: color, color: textColor }}
                  >
                    {name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
