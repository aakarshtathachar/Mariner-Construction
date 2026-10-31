import { Clock, MapPin, Wallet, type LucideIcon } from 'lucide-react';
import CtaBand from '@/components/common/CtaBand';
import PageBanner from '@/components/common/PageBanner';
import SectionHeading from '@/components/common/SectionHeading';

const ABOUT_IMAGE = '/living_room.webp';

const VALUES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'We do our best to accommodate your schedule. Contact us to set up a convenient appointment.',
  },
  {
    icon: Wallet,
    title: 'Free Estimates',
    description: 'Talk with us about your next construction project and schedule a time for a free estimate.',
  },
  {
    icon: MapPin,
    title: 'Based in Acton',
    description: 'Mariner Construction LLC is located at 97 Windsor Ave in Acton, Massachusetts.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Mariner Construction LLC"
        description="Based in Acton, Massachusetts, Mariner Construction is ready to discuss your next construction project."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <img
            src={ABOUT_IMAGE}
            alt="Basement living room finished by Mariner Construction"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          />
          <div>
            <SectionHeading
              eyebrow="About Mariner Construction"
              title="Let’s Talk About Your Project"
              align="left"
            />
            <div className="mt-6 flex flex-col gap-5 text-lg leading-relaxed text-ink-600">
              <p>
                Mariner Construction LLC is based at 97 Windsor Ave in Acton, Massachusetts. We welcome the opportunity
                to hear about the construction project you have in mind.
              </p>
              <p>
                Call (978) 479-5904 or email marinerconstructionllc@gmail.com to discuss your project. We have flexible
                business hours and will work with you to schedule a convenient time to provide a free estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Getting Started" title="A Convenient First Step" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold text-ink-900">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
