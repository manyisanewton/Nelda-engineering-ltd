import { FaBriefcase, FaEarthAfrica, FaLocationDot, FaScrewdriverWrench } from 'react-icons/fa6'

const stats = [
  { value: '100+', label: 'Projects Delivered', icon: FaBriefcase },
  { value: 'Water & Infrastructure', label: 'Specialists', icon: FaEarthAfrica },
  { value: 'End-to-End', label: 'Engineering Solutions', icon: FaScrewdriverWrench },
  { value: 'Serving Clients', label: 'Across Kenya', icon: FaLocationDot },
]

function HomeStatsBar() {
  return (
    <section className="relative z-20 -mt-10 px-5 lg:px-8">
      <div className="mx-auto grid max-w-[1720px] gap-5 rounded-md bg-white px-8 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.12)] md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className={`flex items-center gap-5 ${index !== stats.length - 1 ? 'md:border-r md:border-[var(--color-border)]' : ''}`}
            >
              <Icon className="text-4xl text-[var(--color-primary)]" />
              <div>
                <p className="text-xl font-black text-[var(--color-text)]">{stat.value}</p>
                <p className="text-sm font-bold text-[var(--color-text-muted)]">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HomeStatsBar
