import SectionHeading from '@/components/common/SectionHeading';
import { PROJECTS } from '@/data/siteContent';

export default function ProjectGallery() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Kitchens, Baths, Living Spaces & Decks"
          description="A few recent projects from homes around Acton. Contact us to discuss the room you have in mind."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <figure
              key={project.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 shadow-sm"
            >
              <img
                src={project.src}
                alt={project.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent p-6 pt-16 transition duration-300 group-hover:from-ink-900">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                  {project.category}
                </span>
                <p className="mt-1 text-lg font-extrabold text-white">{project.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
