import { Mail, Phone } from 'lucide-react';
import { BUSINESS } from '@/data/siteContent';

export default function CtaBand() {
  return (
    <section className="bg-brand-500">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold leading-[1.2] text-ink-900 sm:text-4xl">Ready to start your project?</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-800">
            Call or email to discuss your next construction project. We’ll schedule a convenient time to provide a free estimate.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-ink-800"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 px-7 py-3.5 text-base font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-white"
          >
            <Mail className="h-5 w-5" />
            Email Us
          </a>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 px-7 py-3.5 text-base font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
