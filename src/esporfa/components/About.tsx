import { Instagram, Send, Youtube } from "lucide-react";
import { site } from "../config";

export function About() {
  return (
    <section id="about" className="section container-page">
      <div className="mx-auto max-w-2xl text-center">
        <div className="eyebrow mb-4">О школе</div>
        <h2 className="font-serif text-4xl italic leading-tight text-ink md:text-5xl">
          Без зубрёжки, без «повторите за мной»
        </h2>

        <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-ink/80 md:text-lg">
          <p>
            Мы собрали esporfa, потому что устали от уроков, где нужно
            заучивать 40 форм глагола и так и не суметь спросить, как пройти к
            метро. У нас наоборот: сначала — живая речь, потом — правила, которые
            её объясняют.
          </p>
          <p>
            На уроках много разговора, немного грамматики и очень много
            культурного контекста: сериалы, мемы, еда, сленг Мадрида и
            Мехико. Преподаватели живут в испаноязычных странах — и рассказывают,
            как язык звучит за окном.
          </p>
          <p>
            Если хочется попробовать бесплатно — у нас есть{" "}
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-terracotta underline-offset-4 transition-colors hover:text-terracotta"
            >
              YouTube-канал
            </a>
            : короткие видео про фразы, ошибки и реальную Испанию. Без воды.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Youtube size={16} strokeWidth={1.5} />
            YouTube
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Instagram size={16} strokeWidth={1.5} />
            Instagram
          </a>
          <a
            href={site.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Send size={16} strokeWidth={1.5} />
            Telegram-канал
          </a>
        </div>
      </div>
    </section>
  );
}
