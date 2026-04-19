import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  title: string;
  updated?: string;
  children: ReactNode;
};

export function LegalLayout({ title, updated, children }: Props) {
  useEffect(() => {
    document.title = `${title} — esporfa`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="container-page py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-terracotta"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            На главную
          </Link>

          <div className="mt-8 rounded-sm border border-terracotta/40 bg-terracotta/5 p-4 text-sm text-terracotta">
            ЧЕРНОВИК — требует согласования с юристом перед регистрацией ИП.
          </div>

          <h1 className="mt-10 font-sans text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-3 text-sm text-muted">Обновлено: {updated}</p>
          )}

          <article className="prose-legal mt-10 space-y-8 text-base leading-relaxed text-ink/85">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number?: string | number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 font-sans text-xl font-semibold text-ink md:text-2xl">
        {number !== undefined && (
          <span className="mr-2 font-serif italic text-terracotta">
            {number}.
          </span>
        )}
        {title}
      </h2>
      <div className="space-y-3 text-ink/80">{children}</div>
    </section>
  );
}
