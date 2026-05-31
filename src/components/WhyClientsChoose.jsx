import { FaClock, FaGear, FaHandshake, FaHelmetSafety, FaPeopleGroup, FaShieldHalved } from 'react-icons/fa6'

const points = [
  { label: 'Professional Technical Support', icon: FaShieldHalved },
  { label: 'Quality Equipment', icon: FaGear },
  { label: 'Experienced Engineers', icon: FaPeopleGroup },
  { label: 'Reliable Installations', icon: FaHelmetSafety },
  { label: 'Fast Response Time', icon: FaClock },
  { label: 'After-Sales Support', icon: FaHandshake },
]

function WhyClientsChoose() {
  return (
    <section className="px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-[1720px] rounded-md bg-[var(--color-primary)] px-8 py-8 text-white shadow-[0_18px_50px_rgba(0,74,152,0.22)]">
        <p className="text-center text-xs font-black uppercase tracking-[0.28em] text-[var(--color-on-primary-muted)]">
          Why Clients Choose Us
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-6">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.label} className="flex items-center gap-3">
                <Icon className="text-3xl text-[var(--color-brand-orange)]" />
                <span className="text-sm font-black leading-tight">{point.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyClientsChoose
