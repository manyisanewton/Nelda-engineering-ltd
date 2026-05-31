import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import Logo from './Logo'
import { company } from '../data/siteData'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF, className: 'bg-[#1877F2]' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn, className: 'bg-[#0A66C2]' },
  { label: 'WhatsApp', href: company.whatsappHref, icon: FaWhatsapp, className: 'bg-[#25D366]' },
  { label: 'X', href: 'https://x.com', icon: FaXTwitter, className: 'bg-black' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[url('/images/footer-background.png')] bg-cover bg-center px-5 py-12 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[46%] bg-[linear-gradient(90deg,rgba(0,25,66,0.72),rgba(0,47,104,0.36)_58%,transparent)]" />
      <div className="footer-panel relative z-10 mx-auto max-w-[1720px] overflow-hidden px-0 py-0">
        <div className="relative z-10 grid gap-10 md:grid-cols-[1.25fr_0.6fr_0.8fr_1fr] xl:gap-24">
          <div className="md:max-w-md">
            <Logo variant="light" size="footer" />
            <p className="mt-5 leading-7 text-[var(--color-on-primary-soft)]">
              Innovative engineering solutions across water, energy, and civil engineering sectors.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Links</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-[var(--color-on-primary-soft)]">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Services</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-[var(--color-on-primary-soft)]">
              <span>Water Treatment</span>
              <span>Pumping Solutions</span>
              <span>Solar Installations</span>
              <span>Borehole Rehabilitation</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-[var(--color-on-primary-soft)]">
              <a href={company.phoneHref}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.physicalAddress}</span>
              <span>{company.postalAddress}</span>
              <span>{company.city}</span>
            </div>
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Nelda Engineering on ${social.label}`}
                    className={`grid h-10 w-10 place-items-center rounded-full text-base text-white shadow-sm transition hover:-translate-y-0.5 ${social.className}`}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 grid gap-8 border-t border-white/20 pt-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm text-[var(--color-on-primary-muted)]">© 2026 {company.displayName}. All rights reserved.</p>
            <p className="mt-2 text-sm font-semibold text-white">{company.slogan}</p>
          </div>
          <div className="lg:justify-self-end">
            <h3 className="text-base font-black">Subscribe to our Newsletter</h3>
            <form className="mt-4 flex max-w-md flex-col gap-3 sm:flex-row">
              <label className="relative block">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700" />
                <input
                  type="email"
                  placeholder="enter your email..."
                  className="h-12 w-full rounded-md border-0 bg-white pl-12 pr-4 text-sm font-semibold text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)] sm:w-64"
                />
              </label>
              <button type="button" className="h-12 rounded-md bg-[var(--color-dark)] px-8 text-sm font-black text-white shadow-lg shadow-blue-950/25">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
