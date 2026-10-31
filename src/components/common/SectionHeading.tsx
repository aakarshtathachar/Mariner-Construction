interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-[1.2] text-ink-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-ink-600">{description}</p>}
    </div>
  );
}
