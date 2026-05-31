import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { company } from '../data/siteData'

function CTASection() {
  return (
    <section className="bg-[var(--color-primary)] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto flex max-w-[1720px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-on-primary-muted)]">
            Ready to begin?
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black">
            Need a reliable engineering solution? Contact {company.displayName} today.
          </h2>
        </div>
        <Link
          to="/contact"
          className="inline-flex w-fit items-center gap-3 rounded-full bg-[var(--color-dark)] px-7 py-4 text-sm font-black text-white shadow-xl"
        >
          Tell Us What You Need
          <FaArrowRight />
        </Link>
      </div>
    </section>
  )
}

export default CTASection
