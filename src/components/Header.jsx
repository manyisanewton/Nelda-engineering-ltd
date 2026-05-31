import { NavLink } from 'react-router-dom'
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6'
import Logo from './Logo'
import { company } from '../data/siteData'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF, className: 'bg-[#1877F2]' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn, className: 'bg-[#0A66C2]' },
  { label: 'WhatsApp', href: company.whatsappHref, icon: FaWhatsapp, className: 'bg-[#25D366]' },
  { label: 'X', href: 'https://x.com', icon: FaXTwitter, className: 'bg-black' },
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="bg-[#fff3df] text-[var(--color-primary-deep)]">
        <div className="mx-auto flex h-10 max-w-[1720px] items-center justify-between gap-4 px-5 py-0 text-2xl font-bold leading-none lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={company.phoneHref} className="inline-flex items-center gap-2 text-[var(--color-primary-deep)]">
              <FaPhone className="text-xl text-[var(--color-primary-deep)]" />
              <span>{company.phone}</span>
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 text-[var(--color-primary-deep)]">
              <FaEnvelope className="text-xl text-[var(--color-primary-deep)]" />
              <span>{company.email}</span>
            </a>
            <span className="inline-flex items-center gap-2 text-[var(--color-primary-deep)]">
              <FaLocationDot className="text-xl text-[var(--color-primary-deep)]" />
              <span>{company.city}</span>
            </span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`grid h-9 w-9 place-items-center rounded-full text-base text-white shadow-sm transition hover:-translate-y-0.5 ${social.className}`}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[var(--color-border)] bg-white/95 text-[var(--color-text)] shadow-sm backdrop-blur">
        <div className="mx-auto flex h-32 max-w-[1720px] items-center justify-between px-5 lg:px-8">
          <NavLink to="/" aria-label={`${company.name} home`}>
            <Logo size="footer" />
          </NavLink>

          <nav className="hidden items-center gap-9 text-base font-bold md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-4 py-3 text-sm font-bold text-white shadow-sm shadow-blue-950/25"
          >
            <FaPhone className="text-xs" />
            Request Quote
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
