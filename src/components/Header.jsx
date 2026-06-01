import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaXmark,
  FaXTwitter,
} from 'react-icons/fa6'
import Logo from './Logo'
import { company } from '../data/siteData'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: FaFacebookF, className: 'bg-[#1877F2]' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn, className: 'bg-[#0A66C2]' },
  { label: 'WhatsApp', href: company.whatsappHref, icon: FaWhatsapp, className: 'bg-[#25D366]' },
  { label: 'X', href: 'https://x.com', icon: FaXTwitter, className: 'bg-black' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="bg-[#fff3df] text-[var(--color-primary-deep)]">
        <div className="mx-auto flex h-9 max-w-[1720px] items-center justify-between gap-3 px-4 py-0 text-sm font-bold leading-none md:h-10 md:text-2xl lg:px-8">
          <div className="flex w-full min-w-0 items-center gap-x-4 gap-y-2 md:w-auto md:gap-x-6">
            <a href={company.phoneHref} className="inline-flex shrink-0 items-center gap-2 text-[var(--color-primary-deep)]">
              <FaPhone className="text-sm text-[var(--color-primary-deep)] md:text-xl" />
              <span>{company.phone}</span>
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex min-w-0 flex-1 items-center gap-2 text-[var(--color-primary-deep)] md:flex-none">
              <FaEnvelope className="shrink-0 text-sm text-[var(--color-primary-deep)] md:text-xl" />
              <span className="truncate">{company.email}</span>
            </a>
            <span className="hidden items-center gap-2 text-[var(--color-primary-deep)] sm:inline-flex">
              <FaLocationDot className="text-sm text-[var(--color-primary-deep)] md:text-xl" />
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
        <div className="mx-auto flex h-20 max-w-[1720px] items-center justify-between px-4 md:h-24 lg:h-28 lg:px-8">
          <NavLink to="/" aria-label={`${company.name} home`}>
            <Logo size="nav" />
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
            className="hidden items-center gap-2 rounded-md bg-[var(--color-primary)] px-4 py-3 text-sm font-bold text-white shadow-sm shadow-blue-950/25 md:inline-flex"
          >
            <FaPhone className="text-xs" />
            Request Quote
          </NavLink>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-md bg-[var(--color-primary)] text-xl text-white shadow-sm shadow-blue-950/20 md:hidden"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen ? (
          <nav className="border-t border-[var(--color-border)] bg-white px-4 py-3 shadow-lg shadow-blue-950/10 md:hidden">
            <div className="mx-auto grid max-w-[1720px] gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-4 py-3 text-base font-black ${
                      isActive
                        ? 'bg-blue-50 text-[var(--color-primary)]'
                        : 'text-[var(--color-text)]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export default Header
