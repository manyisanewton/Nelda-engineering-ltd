import PageHero from '../components/PageHero'
import { company, heroImages, projects } from '../data/siteData'

function Projects() {
  return (
    <main>
      <PageHero
        title="Our Projects"
        text="We handle practical engineering projects from design to completion across water, solar, borehole, plumbing and civil works."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-[1720px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project} className="overflow-hidden rounded-lg bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <img src={heroImages[index % heroImages.length].src} alt={project} className="h-80 w-full object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-black text-[var(--color-primary)]">{project}</h2>
                  <p className="mt-4 leading-7 text-[var(--color-text-muted)]">
                    Project Name: {project}
                    <br />
                    Location: {company.city}
                    <br />
                    Service Provided: Engineering installation and support
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
