import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { company } from '../data/siteData'

function HomeHero() {
  return (
    <section className="home-hero-stage relative overflow-hidden text-white">
      <div className="hero-grid-lines" />
      <div className="absolute left-0 top-12 h-[80%] w-[38%] bg-[radial-gradient(circle_at_0%_50%,rgba(255,255,255,0.18),transparent_18rem)]" />

      <div className="mx-auto grid min-h-[850px] max-w-[1720px] items-center gap-10 px-5 pb-20 pt-52 lg:grid-cols-[0.74fr_1.26fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative z-10"
        >
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[var(--color-on-primary-muted)]">
            Water - Energy - Infrastructure
          </p>
          <div className="mt-5 h-1 w-16 bg-[var(--color-brand-orange)]" />
          <h1 className="mt-7 max-w-2xl text-5xl font-black leading-tight md:text-6xl xl:text-7xl">
            Engineering Solutions That Deliver Results
          </h1>
          <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-[var(--color-on-primary-soft)]">
            Water treatment, pumping systems, solar power, borehole rehabilitation, water
            reticulation and civil engineering solutions across Kenya.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-[var(--color-brand-orange)] px-7 py-4 text-sm font-black text-[var(--color-primary-deep)] shadow-xl shadow-blue-950/30"
            >
              Request a Quote
              <FaArrowRight />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-md border border-white/70 px-7 py-4 text-sm font-black text-white"
            >
              View Services
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
          className="relative z-10 hidden min-h-[700px] lg:block"
        >
          <div className="hero-collage-main">
            <img src="/images/service hero background.png" alt="Water treatment systems" />
          </div>
          <div className="hero-collage-card hero-collage-solar">
            <img src="/images/hero-solar.jpeg" alt="Solar installation" />
          </div>
          <div className="hero-collage-card hero-collage-borehole">
            <img src="/images/hero-borehole.png" alt="Borehole rehabilitation" />
          </div>
          <div className="hero-collage-card hero-collage-pump">
            <img src="/images/hero-water-pumping.png" alt="Water pumping solution" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeHero
