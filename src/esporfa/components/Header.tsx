import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Menu, Send, X } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "../config";
import { cn } from "../lib/cn";

const navItems = [
  { href: "#teachers", label: "Преподаватели" },
  { href: "#catalog", label: "Материалы" },
  { href: "#about", label: "О школе" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (hash: string) => {
    setOpen(false);
    if (!isLanding) {
      window.location.href = `/${hash}`;
      return;
    }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled || open
          ? "bg-bg/95 backdrop-blur border-b border-line"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" aria-label="esporfa — на главную" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className="text-sm text-ink/80 transition-colors hover:text-terracotta"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink/70 transition-colors hover:text-terracotta"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a
            href={site.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-ink/70 transition-colors hover:text-terracotta"
          >
            <Send size={18} strokeWidth={1.5} />
          </a>
          <button
            onClick={() => goTo("#contact")}
            className="btn-primary"
            aria-label="Перейти к форме записи"
          >
            Записаться
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="Мобильная навигация"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className="py-3 text-left text-base text-ink"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => goTo("#contact")}
              className="btn-primary mt-4 w-full"
            >
              Записаться
            </button>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ink/70"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href={site.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-ink/70"
              >
                <Send size={20} strokeWidth={1.5} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
