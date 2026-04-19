import { testimonials } from "../data/testimonials";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Отзывы"
        title="Что говорят ученики"
      />

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((t) => (
          <figure key={t.id} className="card p-6 md:p-8">
            <blockquote className="font-serif text-xl italic leading-snug text-ink md:text-2xl">
              «{t.text}»
            </blockquote>
            <figcaption className="mt-6 flex items-baseline justify-between border-t border-line pt-4 text-sm">
              <cite className="font-serif italic not-italic text-ink/80">
                <span className="italic">{t.name}</span>
              </cite>
              <span className="text-xs uppercase tracking-widest text-muted">
                {t.progress}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
