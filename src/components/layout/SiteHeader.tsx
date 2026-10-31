import { useState } from 'react';
import { Hammer, Menu, Phone, X } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/siteContent';

interface SiteHeaderProps {
  activeSection: string;
}

export default function SiteHeader({ activeSection }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) => {
    const isActive = href.replace('#/', '') === activeSection;
    return `text-sm font-semibold transition-colors ${
      isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-ink-900 transition group-hover:bg-brand-400">
            <Hammer className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold leading-tight text-ink-900">{BUSINESS.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-md sm:px-5"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 text-ink-900 transition hover:bg-ink-50 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile" className="border-t border-ink-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 ${linkClass(link.href)} hover:bg-ink-50`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
