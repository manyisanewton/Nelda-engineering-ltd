import { motion } from 'framer-motion'
import { services } from '../data/siteData'
import ServiceCard from './ServiceCard'

const hiddenOnHome = new Set([
  'Plumbing Works & Civil Engineering Works',
  'Water Reticulation Systems',
  'Borehole Rehabilitation & Services',
])

function ServicesPreview() {
  const homepageServices = services.filter((service) => !hiddenOnHome.has(service.title))

  return (
    <section className="bg-[var(--color-surface-soft)] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1720px]">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Our <span className="text-[var(--color-primary)]">Services</span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-[var(--color-brand-orange)]" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
