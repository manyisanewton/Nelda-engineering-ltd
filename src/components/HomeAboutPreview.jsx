import { Link } from 'react-router-dom'
import { FaArrowRight, FaBullseye, FaEye, FaGem } from 'react-icons/fa6'
import { company } from '../data/siteData'

function HomeAboutPreview() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1720px] gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <img
          src="/images/hero-borehole.png"
          alt="Nelda Engineering borehole rehabilitation"
          className="h-[620px] w-full rounded-md object-cover shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
        />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--color-primary)]">
            Who We Are
          </p>
          <h2 className="mt-4 text-4xl font-black text-[var(--color-text)] md:text-5xl">
            About Nelda Engineering
          </h2>
          <p className="mt-6 max-w-2xl font-semibold leading-8 text-[var(--color-text-muted)]">
            {company.displayName} is a Kenyan engineering company dedicated to delivering reliable,
            innovative, and sustainable infrastructure solutions across water, energy, and civil
            engineering sectors.
          </p>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {[
              { title: 'Our Mission', icon: FaBullseye, text: 'Deliver innovative engineering solutions with quality and integrity.' },
              { title: 'Our Vision', icon: FaEye, text: 'Become a leading engineering solutions provider in East Africa.' },
              { title: 'Our Values', icon: FaGem, text: 'Quality, integrity, innovation, safety and customer focus.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="border-r border-[var(--color-border)] pr-5 last:border-r-0">
                  <Icon className="text-4xl text-[var(--color-primary)]" />
                  <h3 className="mt-4 font-black text-[var(--color-text)]">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-text-muted)]">{item.text}</p>
                </article>
              )
            })}
          </div>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 rounded-md border border-[var(--color-primary)] px-6 py-3 text-sm font-black text-[var(--color-primary)]"
          >
            Learn More About Us
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutPreview
