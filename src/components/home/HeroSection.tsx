import { ArrowRight, Phone } from 'lucide-react';
import InquiryForm from '@/components/forms/InquiryForm';
import { BUSINESS, STATS } from '@/data/siteContent';

const HERO_IMAGE = '/kitchen.webp';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-200">
            Construction in Acton, Massachusetts
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Let’s Build Your Next Project
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
            Mariner Construction LLC is ready to hear about your construction project. Call or email us to arrange a
            convenient appointment and receive a free estimate.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-ink-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-400"
            >
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>
            <a
              href="#/services"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Our Services
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm leading-snug text-ink-300">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-extrabold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <h2 className="text-2xl font-extrabold text-ink-900">Request a Quote</h2>
          <p className="mt-2 mb-6 leading-relaxed text-ink-600">Tell us about your project and we’ll arrange a convenient time for a free estimate.</p>
          <InquiryForm kind="quote" />
        </div>
      </div>
    </section>
  );
}
