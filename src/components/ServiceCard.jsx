import { Link } from 'react-router-dom'
import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6'

function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon

  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-[0_14px_40px_rgba(15,23,42,0.1)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,74,152,0.16)]">
      <div className="relative h-72 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/18 to-transparent" />
      </div>

      <div className="px-6 pb-6 pt-7">
        <div className="flex items-start gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-2xl text-white shadow-lg shadow-blue-950/30">
            <Icon />
          </div>
          <h3 className="pt-1 text-xl font-black leading-snug text-[var(--color-text)]">{service.title}</h3>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-[var(--color-text-muted)]"
            >
              <FaCircleCheck className="text-[var(--color-brand-orange)]" />
              {tag}
            </span>
          ))}
        </div>

        <Link
          to="/services"
          className="mt-7 inline-flex items-center gap-3 text-sm font-black text-[var(--color-primary)] decoration-[var(--color-brand-orange)] decoration-2 underline-offset-4 hover:underline"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <FaArrowRight className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default ServiceCard
