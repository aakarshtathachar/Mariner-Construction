import { Check, Phone } from 'lucide-react';
import CtaBand from '@/components/common/CtaBand';
import PageBanner from '@/components/common/PageBanner';
import { BUSINESS, PROCESS_STEPS, WORK_HIGHLIGHTS } from '@/data/siteContent';

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Home Remodeling in Acton"
        description="From kitchens and bathrooms to living rooms and basements, Mariner Construction LLC helps you update the rooms you live in every day."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <img
            src="/kitchen.webp"
            alt="Remodeled kitchen with white cabinets, granite countertops, and a brick accent wall"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-extrabold leading-[1.2] text-ink-900 sm:text-4xl">What We Do</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              Every project starts with a conversation. Tell us about the room you want to change, and we will arrange
              a convenient time to discuss the work and provide a free estimate.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {WORK_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-800">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-ink-900">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-brand-700">How it works</h3>
            <ol className="mt-5 flex flex-col gap-5">
              {PROCESS_STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-sm font-extrabold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-extrabold text-ink-900">{step.title}</p>
                    <p className="mt-1 leading-relaxed text-ink-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 font-semibold text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-md"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href="#/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 px-6 py-3.5 font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-white"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
