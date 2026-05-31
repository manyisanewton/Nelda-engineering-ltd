import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaBuildingColumns,
  FaHeadset,
  FaHouse,
  FaIndustry,
  FaLeaf,
  FaPhone,
  FaShieldHalved,
  FaUsers,
} from 'react-icons/fa6'
import { company } from '../data/siteData'

const stats = [
  {
    value: '100+',
    label: 'Projects Delivered',
    text: 'Successfully completed across Kenya.',
    icon: FaBriefcase,
  },
  {
    value: '10+',
    label: 'Years Combined Experience',
    text: 'Skilled engineers with proven industry expertise.',
    icon: FaUsers,
  },
  {
    value: '24/7',
    label: 'Technical Support',
    text: 'We are always here to keep your systems running.',
    icon: FaHeadset,
  },
  {
    value: '100%',
    label: 'Client Focused',
    text: 'Quality, reliability and customer satisfaction guaranteed.',
    icon: FaShieldHalved,
  },
]

const industries = [
  { title: 'Residential', icon: FaHouse, image: '/images/hero-plumbing.png' },
  { title: 'Industrial', icon: FaIndustry, image: '/images/hero-water-treatment.jpeg' },
  { title: 'Commercial', icon: FaBuilding, image: '/images/hero-site-work.jpeg' },
  { title: 'Institutions', icon: FaBuildingColumns, image: '/images/hero-civil.png' },
  { title: 'NGOs', icon: FaUsers, image: '/images/nelda-hero.png' },
  { title: 'Agriculture', icon: FaLeaf, image: '/images/hero-water-pumping.png' },
]

function IndustriesProjectsSection() {
  return (
    <section className="bg-white">
      <div className="bg-white px-5 py-10 lg:px-8">
        <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-sm bg-[var(--color-primary)] px-8 py-10 text-white md:px-14">
          <div className="footer-soft-wave opacity-50" />
          <div className="relative z-10 grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`flex gap-5 ${index !== stats.length - 1 ? 'md:border-r md:border-white/35 md:pr-8' : ''}`}
              >
                <Icon className="mt-1 text-3xl text-[var(--color-brand-orange)]" />
                <div>
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="mt-1 text-sm font-black">{stat.label}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-on-primary-soft)]">{stat.text}</p>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </div>

      <div className="px-5 pb-14 pt-4 lg:px-8">
        <div className="mx-auto max-w-[1720px]">
          <div className="text-center">
            <h2 className="text-4xl font-black text-[var(--color-text)]">Industries We Serve</h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[var(--color-brand-orange)]" />
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-6">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <article key={industry.title} className="text-center">
                  <div className="relative overflow-hidden rounded-md shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                    <img src={industry.image} alt={industry.title} className="h-36 w-full object-cover" />
                  </div>
                  <span className="mx-auto mt-3 grid h-11 w-11 place-items-center rounded-full border-[3px] border-white bg-[var(--color-primary)] text-base text-white shadow-lg shadow-blue-950/30 ring-2 ring-[var(--color-brand-orange)]">
                    <Icon />
                  </span>
                  <h3 className="mt-3 text-sm font-black text-[var(--color-text)]">{industry.title}</h3>
                </article>
              )
            })}
          </div>

          <div className="relative mt-12 overflow-hidden rounded-sm bg-[var(--color-primary)] px-8 py-10 text-white md:px-14">
            <div className="footer-soft-wave opacity-45" />
            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="max-w-xl text-4xl font-black leading-tight">
                  Need an Engineering Partner You Can Trust?
                </h2>
                <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-[var(--color-on-primary-soft)]">
                  Speak with our team today and receive a customized solution for your project.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-lg bg-[var(--color-brand-orange)] px-8 py-4 text-sm font-black text-[var(--color-primary-deep)]"
                >
                  Request Quote
                  <FaArrowRight />
                </Link>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-3 rounded-lg border border-white/70 px-8 py-4 text-sm font-black text-white"
                >
                  <FaPhone />
                  Call Us Now {company.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.35fr]">
            <div className="rounded-md bg-white p-6 shadow-[0_14px_38px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Industries We Serve
              </p>
              <div className="mt-5 grid grid-cols-3 gap-5">
                {industries.map((industry) => {
                  const Icon = industry.icon
                  return (
                    <div key={`compact-${industry.title}`} className="text-center">
                      <Icon className="mx-auto text-3xl text-[var(--color-primary)]" />
                      <p className="mt-2 text-xs font-black text-[var(--color-text)]">{industry.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-md bg-[var(--color-primary)] p-7 text-white shadow-[0_14px_38px_rgba(0,74,152,0.2)]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-on-primary-muted)]">
                Our Impact In Numbers
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={`impact-${stat.label}`}
                    className={`${index !== stats.length - 1 ? 'md:border-r md:border-white/35' : ''}`}
                  >
                    <p className="text-4xl font-black">{stat.value}</p>
                    <p className="mt-2 max-w-28 text-sm font-bold leading-5 text-[var(--color-on-primary-soft)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default IndustriesProjectsSection
