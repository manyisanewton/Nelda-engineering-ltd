import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaChevronRight,
  FaCircleMinus,
  FaCirclePlus,
  FaEnvelope,
  FaHouse,
  FaPhone,
  FaRegCircleCheck,
} from 'react-icons/fa6'
import { company } from '../data/siteData'
import { faqCategories } from '../data/faqData'

const colorClasses = {
  blue: 'bg-[var(--color-primary)]',
  orange: 'bg-[var(--color-brand-orange)]',
  green: 'bg-emerald-500',
  purple: 'bg-violet-600',
  red: 'bg-red-500',
  slate: 'bg-slate-600',
  cyan: 'bg-cyan-500',
}

function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openItems, setOpenItems] = useState({ '0-0': true })

  const active = faqCategories[activeCategory]
  const allQuestionCount = useMemo(
    () => faqCategories.reduce((total, category) => total + category.questions.length, 0),
    [],
  )

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <main className="bg-[#f4f8fd]">
      <section className="faq-hero relative isolate overflow-hidden px-5 pt-36 text-white md:pt-56 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,47,104,0.98)_0%,rgba(0,74,152,0.82)_43%,rgba(0,74,152,0)_64%)]" />
        <div className="hero-grid-lines" />
        <div className="relative z-10 mx-auto grid max-w-[1720px] gap-10 pb-24 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <nav className="flex items-center gap-3 text-sm font-bold text-white/90">
              <Link to="/" className="inline-flex items-center gap-2">
                <FaHouse className="text-xs" />
                Home
              </Link>
              <FaChevronRight className="text-[10px] text-white/60" />
              <span>FAQs</span>
            </nav>
            <h1 className="mt-7 max-w-2xl text-5xl font-black leading-tight md:text-7xl">
              Frequently Asked Questions
            </h1>
            <div className="mt-5 h-1 w-16 bg-[var(--color-brand-orange)]" />
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/90">
              Find answers to common questions about our engineering solutions, services and
              support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-sm font-black text-[var(--color-primary-deep)] shadow-xl shadow-blue-950/25"
              >
                Still have questions?
                <FaArrowRight />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-3 rounded-md border border-white/55 px-7 py-4 text-sm font-black text-white"
              >
                <FaPhone />
                Talk to an Engineer
              </a>
            </div>
          </div>

          <div className="faq-hero-collage relative hidden min-h-[430px] lg:block">
            <img
              src="/images/service hero background.png"
              alt="Water treatment and engineering solutions"
              className="absolute left-0 top-0 h-[440px] w-[58%] rounded-xl border-4 border-white object-cover shadow-2xl shadow-blue-950/40 [clip-path:polygon(12%_0,100%_0,86%_100%,0_88%)]"
            />
            <img
              src="/images/hero-solar.jpeg"
              alt="Solar power installation"
              className="absolute right-0 top-0 h-[210px] w-[45%] rounded-xl border-4 border-white object-cover shadow-xl [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
            />
            <img
              src="/images/hero-water-pumping.png"
              alt="Water pumping solutions"
              className="absolute bottom-0 right-0 h-[240px] w-[50%] rounded-xl border-4 border-white object-cover shadow-xl [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]"
            />
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-14 px-5 lg:px-8">
        <div className="mx-auto max-w-[1720px] rounded-xl bg-white p-3 shadow-2xl shadow-blue-950/10 md:p-5">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
            {faqCategories.slice(0, 6).map((category, index) => {
              const Icon = category.icon
              const isActive = index === activeCategory
              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setActiveCategory(index)}
                  className={`group flex min-h-24 flex-col items-center justify-center rounded-lg border px-2 py-3 text-center transition md:min-h-32 md:px-3 md:py-5 ${
                    isActive
                      ? 'border-[var(--color-primary)] bg-blue-50'
                      : 'border-transparent hover:border-[var(--color-border)] hover:bg-slate-50'
                  }`}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-xl text-[var(--color-primary)] md:h-16 md:w-16 md:text-3xl">
                    <Icon />
                  </span>
                  <span className="mt-2 text-xs font-black text-[var(--color-primary-deep)] md:mt-3 md:text-sm">
                    {category.shortTitle}
                  </span>
                  <span
                    className={`mt-2 h-1 w-8 rounded-full md:mt-3 md:w-9 ${
                      isActive ? 'bg-[var(--color-brand-orange)]' : 'bg-transparent'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-[1720px] gap-8 lg:grid-cols-[1fr_410px]">
          <div className="space-y-4">
            {faqCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon
              const isCategoryActive = categoryIndex === activeCategory
              return (
                <article
                  key={category.title}
                  className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-sm shadow-blue-950/5"
                >
                  <button
                    type="button"
                    onClick={() => setActiveCategory(categoryIndex)}
                    className="flex w-full items-center justify-between gap-5 px-7 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg text-xl text-white ${
                          colorClasses[category.color]
                        }`}
                      >
                        <CategoryIcon />
                      </span>
                      <span className="text-2xl font-black text-[var(--color-primary-deep)]">
                        {category.title}
                      </span>
                    </span>
                    {isCategoryActive ? (
                      <FaCircleMinus className="text-xl text-[var(--color-primary)]" />
                    ) : (
                      <FaCirclePlus className="text-xl text-[var(--color-primary-deep)]" />
                    )}
                  </button>

                  {isCategoryActive ? (
                    <div className="border-t border-[var(--color-border)] px-7 pb-5">
                      {category.questions.map((item, questionIndex) => {
                        const key = `${categoryIndex}-${questionIndex}`
                        const isOpen = Boolean(openItems[key])
                        return (
                          <div
                            key={item.question}
                            className="border-b border-[var(--color-border)] last:border-b-0"
                          >
                            <button
                              type="button"
                              onClick={() => toggleItem(categoryIndex, questionIndex)}
                              className="flex w-full items-center justify-between gap-5 py-5 text-left"
                            >
                              <span className="text-base font-black text-[var(--color-text)]">
                                {item.question}
                              </span>
                              {isOpen ? (
                                <FaCircleMinus className="shrink-0 text-lg text-[var(--color-primary)]" />
                              ) : (
                                <FaCirclePlus className="shrink-0 text-lg text-slate-400" />
                              )}
                            </button>
                            {isOpen ? (
                              <p className="pb-5 pr-10 text-base leading-8 text-[var(--color-text-muted)]">
                                {item.answer}
                              </p>
                            ) : null}
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>

          <aside className="space-y-5">
            <div className="relative overflow-hidden rounded-xl bg-[var(--color-primary-deep)] p-8 text-white shadow-xl shadow-blue-950/20">
              <div className="absolute inset-0 opacity-20">
                <div className="hero-grid-lines" />
              </div>
              <div className="relative z-10">
                <h2 className="max-w-xs text-3xl font-black leading-tight">
                  Can&apos;t find what you&apos;re looking for?
                </h2>
                <div className="mt-4 h-1 w-14 bg-[var(--color-brand-orange)]" />
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/85">
                  Our engineering team is ready to answer your questions and provide the right
                  solution.
                </p>
                <ul className="mt-7 space-y-4 text-sm font-bold">
                  {['Expert Advice', 'Quick Response', 'Professional Support', 'Reliable Solutions'].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3">
                        <FaRegCircleCheck className="text-[var(--color-brand-orange)]" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <img
                src="/images/nelda-hero.png"
                alt="Nelda engineer"
                className="relative z-10 mt-8 h-72 w-full rounded-xl object-cover object-top"
              />
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg shadow-blue-950/10">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-primary)] text-xl text-white">
                  <FaPhone />
                </span>
                <div>
                  <p className="text-sm font-black text-[var(--color-text-muted)]">Call Us</p>
                  <a href={company.phoneHref} className="text-2xl font-black text-[var(--color-primary-deep)]">
                    {company.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg shadow-blue-950/10">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-primary)] text-xl text-white">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm font-black text-[var(--color-text-muted)]">Email Us</p>
                  <a href={`mailto:${company.email}`} className="text-lg font-black text-[var(--color-primary-deep)]">
                    {company.email}
                  </a>
                </div>
              </div>
            </div>
            <img
              src="/images/hero-water-treatment.jpeg"
              alt="Water treatment plant"
              className="h-52 w-full rounded-xl object-cover shadow-lg shadow-blue-950/10"
            />
          </aside>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto flex max-w-[1720px] flex-col gap-8 rounded-xl bg-[var(--color-primary)] p-8 text-white shadow-xl shadow-blue-950/15 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-white/70">
              {allQuestionCount} common questions answered
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black">
              Need Engineering Solutions for Your Project?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/85">
              Talk to our engineers today and get a customized solution that works for you.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-sm font-black text-[var(--color-primary-deep)]"
            >
              Request a Quote
              <FaArrowRight />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-3 rounded-md border border-white/60 px-7 py-4 text-sm font-black text-white"
            >
              <FaPhone />
              Talk to an Engineer
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FAQ
