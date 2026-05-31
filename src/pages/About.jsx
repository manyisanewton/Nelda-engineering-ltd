import {
  FaAward,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaHelmetSafety,
  FaMapLocationDot,
  FaScrewdriverWrench,
  FaShield,
  FaThumbsUp,
  FaUserGear,
  FaUsers,
} from 'react-icons/fa6'
import PageHero from '../components/PageHero'
import { company } from '../data/siteData'

const values = [
  {
    title: 'Quality',
    text: 'We are committed to excellence in every solution we deliver.',
    icon: FaAward,
  },
  {
    title: 'Reliability',
    text: 'Our clients trust us for consistent, dependable and timely service.',
    icon: FaShield,
  },
  {
    title: 'Professionalism',
    text: 'We uphold the highest standards in our work and relationships.',
    icon: FaUsers,
  },
  {
    title: 'Safety',
    text: 'We prioritize safety in all our operations and project sites.',
    icon: FaHelmetSafety,
  },
  {
    title: 'Customer Satisfaction',
    text: 'We listen, we care, and we deliver solutions that exceed expectations.',
    icon: FaThumbsUp,
  },
]

const stats = [
  { value: '100+', label: 'Projects Completed', icon: FaDiagramProjectFallback },
  { value: '50+', label: 'Happy Clients', icon: FaShield },
  { value: '10+', label: 'Years of Experience', icon: FaScrewdriverWrench },
  { value: 'Across East Africa', label: 'Proudly Serving', icon: FaMapLocationDot },
]

function FaDiagramProjectFallback(props) {
  return <FaUserGear {...props} />
}

function About() {
  return (
    <main>
      <PageHero
        title={`About ${company.displayName}`}
        text="A Kenyan engineering company dedicated to delivering reliable, innovative, and sustainable infrastructure solutions across water, energy, and civil engineering sectors."
        image="/images/about background.png"
        imageAlt="Nelda Engineering infrastructure background"
      />

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1720px] gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <h2 className="text-4xl font-black text-[var(--color-text)]">Who We Are</h2>
            <div className="mt-4 h-1 w-14 bg-[var(--color-brand-orange)]" />

            <div className="mt-8 grid gap-6 text-base font-semibold leading-8 text-[var(--color-text-muted)]">
              <p>
                {company.displayName} is a Kenyan engineering company dedicated to delivering
                reliable, innovative, and sustainable infrastructure solutions across water, energy,
                and civil engineering sectors.
              </p>
              <p>
                We specialize in the design, supply, installation, commissioning, operation, and
                maintenance of water treatment systems, water pumping solutions, solar energy
                systems, borehole rehabilitation, water reticulation networks, plumbing works, and
                civil engineering projects.
              </p>
              <p>
                At Nelda Engineering Solutions, we believe that access to clean water, efficient
                energy systems, and quality infrastructure are essential for economic growth and
                improved quality of life. Our team combines technical expertise, industry best
                practices, and customer-focused service to deliver solutions that meet the unique
                needs of residential, commercial, industrial, institutional, and public-sector
                clients.
              </p>
              <p>
                Through innovation, integrity, quality workmanship, and continuous improvement, we
                aim to become a trusted engineering partner and one of the leading solution
                providers in East Africa.
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            <article className="rounded-xl border border-[var(--color-border)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex gap-6">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-3xl text-white shadow-lg shadow-blue-950/25">
                  <FaBullseye />
                </span>
                <div>
                  <h3 className="text-2xl font-black text-[var(--color-primary)]">Our Mission</h3>
                  <div className="mt-3 h-1 w-10 bg-[var(--color-brand-orange)]" />
                  <p className="mt-5 font-semibold leading-8 text-[var(--color-text-muted)]">
                    To deliver innovative engineering solutions that exceed customer expectations
                    through technical excellence, quality workmanship, integrity, and sustainable
                    practices while creating long-term value for our clients and communities.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-[var(--color-border)] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex gap-6">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-3xl text-white shadow-lg shadow-blue-950/25">
                  <FaEye />
                </span>
                <div>
                  <h3 className="text-2xl font-black text-[var(--color-primary)]">Our Vision</h3>
                  <div className="mt-3 h-1 w-10 bg-[var(--color-brand-orange)]" />
                  <p className="mt-5 font-semibold leading-8 text-[var(--color-text-muted)]">
                    To be the leading provider of innovative engineering solutions in East Africa,
                    transforming communities and industries through sustainable water, energy, and
                    infrastructure development.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-[1720px] text-center">
          <h2 className="text-4xl font-black text-[var(--color-text)]">Our Values</h2>
          <div className="mx-auto mt-4 h-1 w-14 bg-[var(--color-brand-orange)]" />

          <div className="mt-10 grid gap-7 md:grid-cols-5">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <article
                  key={value.title}
                  className="rounded-lg bg-white p-7 shadow-[0_14px_38px_rgba(15,23,42,0.08)]"
                >
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue-50 text-3xl text-[var(--color-primary)]">
                    <Icon />
                  </span>
                  <h3 className="mt-5 text-base font-black text-[var(--color-primary)]">{value.title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-7 text-[var(--color-text-muted)]">
                    {value.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-primary)] px-5 py-12 text-white lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,47,104,0.96),rgba(0,74,152,0.9))]" />
        <div className="relative z-10 mx-auto grid max-w-[1720px] gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-5 ${index !== stats.length - 1 ? 'md:border-r md:border-white/35' : ''}`}
              >
                <Icon className="text-4xl text-white" />
                <div>
                  <p className="text-3xl font-black leading-tight">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-on-primary-soft)]">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default About
