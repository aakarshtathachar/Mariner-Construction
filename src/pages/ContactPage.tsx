import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import InquiryForm from '@/components/forms/InquiryForm';
import PageBanner from '@/components/common/PageBanner';
import { BUSINESS } from '@/data/siteContent';

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: 'Call us',
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email us',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: BUSINESS.address,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let’s Discuss Your Next Project"
        description={BUSINESS.estimateMessage}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="flex flex-col gap-6">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">{card.label}</p>
                    <p className="mt-1 text-lg font-semibold text-ink-900">{card.value}</p>
                  </div>
                </>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className="flex items-center gap-5 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={card.label}
                  className="flex items-center gap-5 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm"
                >
                  {content}
                </div>
              );
            })}

            <div className="rounded-2xl bg-ink-900 p-6 text-white">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-300" />
                <p className="font-extrabold">Flexible business hours</p>
              </div>
              <p className="mt-4 leading-relaxed text-ink-200">{BUSINESS.hours}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10">
            <h2 className="text-2xl font-extrabold text-ink-900">Send us a message</h2>
            <p className="mt-2 mb-8 leading-relaxed text-ink-600">
              Share a few details about your project. You can also call or email us directly to schedule a convenient appointment.
            </p>
            <InquiryForm kind="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
