import { Link } from 'react-router-dom'
import { FaArrowRight, FaLocationDot } from 'react-icons/fa6'
import { heroImages } from '../data/siteData'

const projects = [
  { title: 'Water Treatment Plant', location: 'Nairobi', image: heroImages[0].src },
  { title: 'Solar Pumping Project', location: 'Kajiado', image: heroImages[2].src },
  { title: 'Borehole Rehabilitation', location: 'Kiambu', image: heroImages[3].src },
  { title: 'Water Reticulation Project', location: 'Machakos', image: heroImages[5].src },
]

function FeaturedProjects() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-[1720px]">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--color-primary)]">
            Featured Projects
          </p>
          <h2 className="mt-2 text-4xl font-black text-[var(--color-text)]">Projects That Speak for Us</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[var(--color-brand-orange)]" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-md bg-white shadow-[0_14px_38px_rgba(15,23,42,0.1)]">
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-black text-[var(--color-text)]">{project.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-xs font-bold text-[var(--color-primary)]">
                  <FaLocationDot />
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 rounded-md border border-[var(--color-primary)] px-7 py-3 text-sm font-black text-[var(--color-primary)]"
          >
            View All Projects
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
