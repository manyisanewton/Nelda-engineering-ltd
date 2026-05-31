import PageHero from '../components/PageHero'
import {
  FaArrowRight,
  FaBuilding,
  FaClock,
  FaDroplet,
  FaEnvelope,
  FaFaucetDrip,
  FaIndustry,
  FaList,
  FaLocationDot,
  FaLock,
  FaPen,
  FaPhone,
  FaScrewdriverWrench,
  FaSolarPanel,
  FaUser,
  FaWater,
  FaWhatsapp,
  FaWrench,
} from 'react-icons/fa6'
import { company } from '../data/siteData'

const contactCards = [
  {
    title: 'Call Us',
    value: company.phone,
    note: "We're just a call away",
    icon: FaPhone,
  },
  {
    title: 'Email Us',
    value: company.email,
    note: 'We reply within 24 hours',
    icon: FaEnvelope,
  },
  {
    title: 'Visit Us',
    value: `${company.physicalAddress}, ${company.city}`,
    note: '1st Floor',
    icon: FaLocationDot,
  },
  {
    title: 'Working Hours',
    value: 'Mon - Sat | 8:00 AM - 5:00 PM',
    note: "We're open on weekdays",
    icon: FaClock,
  },
]

const serviceNeeds = [
  { title: 'Water Treatment', icon: FaDroplet },
  { title: 'Pumping Solutions', icon: FaFaucetDrip },
  { title: 'Solar Power', icon: FaSolarPanel },
  { title: 'Borehole Rehabilitation', icon: FaWrench },
  { title: 'Water Reticulation', icon: FaWater },
  { title: 'Plumbing Works', icon: FaScrewdriverWrench },
  { title: 'Civil Works', icon: FaBuilding },
]

function Field({ icon: Icon, placeholder, type = 'text' }) {
  return (
    <label className="relative block">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type={type}
        placeholder={placeholder}
        className="h-14 w-full rounded-lg border border-[var(--color-border)] bg-white pl-12 pr-4 text-sm font-bold text-[var(--color-text)] outline-none transition placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,74,152,0.12)]"
      />
    </label>
  )
}

function Contact() {
  return (
    <main>
      <PageHero
        title={`Contact ${company.displayName}`}
        text="Tell us what you need. Our team will guide you on the best solution for your water, energy, and infrastructure requirements."
        image="/images/contact hero.png"
        imageAlt="Nelda Engineering contact support"
      />

      <section className="bg-[var(--color-surface-soft)] px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-[1720px]">
          <div className="relative z-20 -mt-24 grid overflow-hidden rounded-2xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className={`p-7 ${index !== contactCards.length - 1 ? 'border-b border-[var(--color-border)] lg:border-b-0 lg:border-r' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-lg text-white shadow-lg shadow-blue-950/30">
                      <Icon />
                    </span>
                    <div>
                      <h2 className="text-lg font-black text-[var(--color-text)]">{card.title}</h2>
                      <div className="mt-2 h-0.5 w-7 bg-[var(--color-brand-orange)]" />
                      <p className="mt-5 text-sm font-black leading-6 text-[var(--color-text)]">{card.value}</p>
                      <p className="mt-3 text-sm font-semibold text-[var(--color-text-muted)]">{card.note}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <form className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] md:p-8">
              <h2 className="text-lg font-black text-[var(--color-text)]">What Service Do You Need?</h2>
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
                {serviceNeeds.map((service, index) => {
                  const Icon = service.icon
                  const selected = index === 0
                  return (
                    <button
                      key={service.title}
                      type="button"
                      className={`relative flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border bg-white p-3 text-center transition ${
                        selected
                          ? 'border-[var(--color-primary)] text-[var(--color-primary)] shadow-[0_12px_30px_rgba(0,74,152,0.14)]'
                          : 'border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)]'
                      }`}
                    >
                      {selected ? (
                        <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-[var(--color-primary)] text-[10px] text-white">
                          ✓
                        </span>
                      ) : null}
                      <Icon className="text-2xl" />
                      <span className="text-[0.72rem] font-black leading-tight">{service.title}</span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field icon={FaUser} placeholder="Full Name" />
                <Field icon={FaIndustry} placeholder="Company Name" />
                <Field icon={FaPhone} placeholder="Phone Number" />
                <Field icon={FaEnvelope} placeholder="Email Address" type="email" />
                <Field icon={FaList} placeholder="Service Required" />
                <Field icon={FaLocationDot} placeholder="Project Location" />
              </div>

              <label className="relative mt-4 block">
                <FaPen className="absolute left-4 top-5 text-slate-400" />
                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-white p-4 pl-12 text-sm font-bold text-[var(--color-text)] outline-none transition placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,74,152,0.12)]"
                />
              </label>

              <button
                type="button"
                className="mt-4 flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-[var(--color-primary)] px-6 text-sm font-black text-white shadow-lg shadow-blue-950/30 ring-2 ring-[var(--color-brand-orange)]/60"
              >
                Request Consultation
                <FaArrowRight />
              </button>

              <p className="mt-4 flex items-center justify-center gap-3 text-center text-sm font-semibold text-[var(--color-text-muted)]">
                <FaLock />
                Your information is safe with us. We respect your privacy.
              </p>
            </form>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(15,23,42,0.1)]">
                <iframe
                  title="Gatatha House, Munyu Road, Nairobi"
                  src="https://www.google.com/maps?q=Gatatha%20House%20Munyu%20Road%20Nairobi%20Kenya&output=embed"
                  className="h-[460px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.1)]">
                <h2 className="text-2xl font-black text-[var(--color-text)]">Quick Contact</h2>
                <div className="mt-6 grid gap-4 text-sm font-black text-[var(--color-text)]">
                  <a href={company.phoneHref} className="flex items-center gap-4">
                    <FaPhone className="text-[var(--color-primary)]" />
                    {company.phone}
                  </a>
                  <a href={`mailto:${company.email}`} className="flex items-center gap-4">
                    <FaEnvelope className="text-[var(--color-primary)]" />
                    {company.email}
                  </a>
                </div>
                <a
                  href={company.whatsappHref}
                  className="mt-6 flex h-14 items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 text-sm font-black text-white shadow-lg shadow-emerald-950/15"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-primary)] px-5 py-16 text-white lg:px-8">
        <div className="relative z-10 mx-auto flex max-w-[1720px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-5 h-1 w-14 bg-[var(--color-solar)]" />
            <h2 className="text-4xl font-black">Ready to Start Your Project?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--color-on-primary-soft)]">
              Speak with our engineering team today and receive professional guidance on the best
              solution for your requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-3 rounded-lg bg-[var(--color-brand-orange)] px-8 py-4 text-sm font-black text-[var(--color-primary-deep)]"
            >
              <FaEnvelope />
              Request Quote
              <FaArrowRight />
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-3 rounded-lg border border-white/60 px-8 py-4 text-sm font-black text-white"
            >
              <FaPhone />
              Call Us Now
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
