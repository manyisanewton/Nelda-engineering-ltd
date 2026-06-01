import { company } from '../data/siteData'

function PageHero({ title, text, image, imageAlt }) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] px-5 pb-28 pt-36 text-white md:pb-56 md:pt-96 lg:px-8">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt || title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </>
      ) : null}
      <div className="hero-grid-lines" />
      <div className="relative z-10 mx-auto max-w-[1720px]">
        <div className="relative z-10">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--color-on-primary-muted)]">
            {company.name}
          </p>
          <div className="mt-4 h-1 w-16 bg-[var(--color-brand-orange)]" />
          <h1 className="hero-readable-text mt-5 max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            {title}
          </h1>
          {text ? (
            <p className="hero-readable-text mt-6 max-w-3xl text-lg leading-8 text-[var(--color-on-primary-soft)]">
              {text}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default PageHero
