import { motion } from 'framer-motion'
import { FaCircleCheck } from 'react-icons/fa6'
import { trustPoints } from '../data/siteData'

function WhyChooseUs() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1720px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Practical technical support from design to after-sales care.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
            We help homes, institutions, industries and communities access efficient, reliable
            and sustainable engineering services with clear communication and dependable work.
          </p>
        </div>

        <div className="grid gap-4">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-center gap-4 rounded-lg border border-slate-100 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.07)]"
            >
              <FaCircleCheck className="shrink-0 text-2xl text-[var(--color-primary)]" />
              <span className="text-lg font-bold text-slate-800">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
