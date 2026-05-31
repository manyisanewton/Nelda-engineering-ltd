import PageHero from '../components/PageHero'
import IndustriesProjectsSection from '../components/IndustriesProjectsSection'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/siteData'

function Services() {
  return (
    <main>
      <PageHero
        title="Our Services"
        text="Clear, dependable engineering services for water treatment, pumping, solar, boreholes, plumbing, reticulation and civil works."
        image="/images/service hero background.png"
        imageAlt="Nelda Engineering service systems"
      />
      <section className="bg-[var(--color-surface-soft)] px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1720px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>
      <IndustriesProjectsSection />
    </main>
  )
}

export default Services
