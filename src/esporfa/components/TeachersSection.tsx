import { Instagram, Send } from "lucide-react";
import { teachers } from "../data/teachers";
import { SectionHeading } from "./SectionHeading";

export function TeachersSection() {
  return (
    <section id="teachers" className="section container-page">
      <SectionHeading
        eyebrow="Команда"
        title="Наши преподаватели"
        subtitle="Живём в Испании и Латинской Америке. Учим так, как хотели бы, чтобы учили нас."
      />

      <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {teachers.map((t) => (
          <article
            key={t.id}
            className="card flex flex-col p-6"
          >
            <div className="relative aspect-square w-full overflow-hidden border border-line bg-[linear-gradient(160deg,#EDE7DC_0%,#D4CFC2_100%)]">
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-muted">
                {t.photoPlaceholder}
              </div>
              {t.founder && (
                <div className="absolute left-3 top-3 rounded-sm bg-ink/80 px-2 py-1 text-[10px] uppercase tracking-widest text-bg">
                  Основатель
                </div>
              )}
            </div>

            <h3 className="mt-5 text-xl font-semibold text-ink">{t.name}</h3>
            <p className="mt-1 text-sm text-muted">{t.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">{t.bio}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.levels.map((lvl) => (
                <span key={lvl} className="pill">
                  {lvl}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 pt-4 border-t border-line">
              {t.links.instagram && (
                <a
                  href={t.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${t.name}`}
                  className="text-ink/60 transition-colors hover:text-terracotta"
                >
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
              )}
              {t.links.telegram && (
                <a
                  href={t.links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Telegram ${t.name}`}
                  className="text-ink/60 transition-colors hover:text-terracotta"
                >
                  <Send size={18} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
