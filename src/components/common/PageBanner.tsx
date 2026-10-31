interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="bg-ink-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.15] sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">{description}</p>
      </div>
    </section>
  );
}
