import { motion } from "framer-motion";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building end-to-end web applications with maintainable interfaces, APIs, and reliable server-side logic.",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating practical React Native apps, including offline-first experiences designed for everyday use.",
  },
  {
    title: "Responsive UI Design",
    description:
      "Crafting clean, accessible interfaces that adapt smoothly across phones, tablets, and desktop screens.",
  },
  {
    title: "Database & API Integration",
    description:
      "Connecting applications to structured data and REST APIs with a focus on clear, dependable workflows.",
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      data-theme="cmyk"
      className="bg-white px-6 py-12 text-slate-900 md:px-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-4">
            <span className="font-mono text-lg font-semibold text-primary">
              02.
            </span>
            <h2 className="text-2xl font-bold text-base-content md:text-3xl">
              What I Do
            </h2>
            <span className="h-px w-full max-w-sm bg-base-300" />
          </div>
          <p className="max-w-2xl text-sm leading-6 text-base-content/70">
            I turn ideas into useful digital products, from responsive websites
            to mobile apps and the services that power them.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-neutral/10 md:p-7"
            >
              <h3 className="mb-5 text-base font-bold text-base-content md:text-lg">
                {title}
              </h3>
              <p className="text-sm leading-6 text-base-content/70">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
