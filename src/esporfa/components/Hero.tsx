export function Hero() {
  const scrollTo = (hash: string) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="container-page pt-10 pb-16 md:pt-20 md:pb-24">
      <div className="grid gap-12 md:grid-cols-5 md:gap-12">
        <div className="md:col-span-3 animate-fade-in">
          <div className="eyebrow mb-6">¡Hola! · онлайн-школа испанского</div>
          <h1 className="font-sans text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
            Испанский —
            <br />
            <span className="font-serif italic font-normal text-terracotta">
              porfa, без занудства
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ink/70 md:mt-8 md:text-lg">
            Учим говорить живым языком, а не пересказывать учебник. С нуля до
            свободного общения — с преподавателями, которые сами живут в
            Испании и Латинской Америке.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary"
            >
              Записаться на пробный
            </button>
            <button
              onClick={() => scrollTo("#catalog")}
              className="btn-outline"
            >
              Посмотреть материалы
            </button>
          </div>
          <p className="mt-4 text-xs text-muted">
            Первый урок — знакомство, бесплатно
          </p>
        </div>

        <div className="md:col-span-2">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-[linear-gradient(135deg,#E8E1D5_0%,#D9C7B0_55%,#C8553D_100%)]">
      <div className="absolute inset-0 p-8 flex flex-col justify-between text-bg">
        <div className="text-xs uppercase tracking-[0.22em] opacity-80">
          Madrid · Valencia · CDMX
        </div>
        <div>
          <div className="font-serif text-5xl italic leading-none md:text-6xl">
            ¿Qué&nbsp;tal?
          </div>
          <div className="mt-3 max-w-[240px] text-sm opacity-90">
            Живой испанский — про тапас, сериалы и настоящие разговоры.
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-bg/70">
        {"{{ФОТО_HERO}}"}
      </div>
    </div>
  );
}
