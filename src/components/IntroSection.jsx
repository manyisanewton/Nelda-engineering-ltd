import { motion } from 'framer-motion'

function IntroSection() {
  return (
    <section className="relative z-20 bg-white px-5 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="text-4xl font-black md:text-5xl">
          Innovative Engineering Solutions That Keep Systems Working
        </h2>
        <div className="mx-auto mt-6 h-1 w-36 rounded-full bg-[var(--color-brand-orange)]" />
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
          We are an engineering company focused on practical, cost-effective and long-lasting
          solutions. From system design to installation, servicing and maintenance, we support
          clients through every stage of the project.
        </p>
      </motion.div>
    </section>
  )
}

export default IntroSection
