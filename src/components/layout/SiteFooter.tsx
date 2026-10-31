import { Clock, Hammer, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/siteContent';

export default function SiteFooter() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <a href="#/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-ink-900">
              <Hammer className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold text-white">{BUSINESS.name}</span>
          </a>
          <p className="mt-6 leading-relaxed text-ink-300">{BUSINESS.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {NAV_LINKS.slice(1).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-brand-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
          <ul className="mt-6 flex flex-col gap-4">
            <li>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 transition hover:text-brand-300">
                <Phone className="h-5 w-5 shrink-0 text-brand-400" />
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 transition hover:text-brand-300">
                <Mail className="h-5 w-5 shrink-0 text-brand-400" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              {BUSINESS.address}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              <span>{BUSINESS.hours}</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-ink-300 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Free estimates available by appointment.</p>
        </div>
      </div>
    </footer>
  );
}
