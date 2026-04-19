import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Instagram, Send, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "../config";
import { cn } from "../lib/cn";

type Column = {
  title: string;
  items: { label: string; to?: string; href?: string; external?: boolean }[];
};

const navColumn: Column = {
  title: "Навигация",
  items: [
    { label: "Преподаватели", href: "/#teachers" },
    { label: "Материалы", href: "/#catalog" },
    { label: "О школе", href: "/#about" },
    { label: "Записаться", href: "/#contact" },
  ],
};

const docsColumn: Column = {
  title: "Документы",
  items: [
    { label: "Публичная оферта", to: "/offer" },
    { label: "Политика конфиденциальности", to: "/privacy" },
    { label: "Согласие на обработку ПД", to: "/consent" },
    { label: "Пользовательское соглашение", to: "/terms" },
  ],
};

function AccordionColumn({ column }: { column: Column }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line md:border-none">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-ink md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {column.title}
        <ChevronDown
          className={cn("transition-transform", open && "rotate-180")}
          size={18}
          strokeWidth={1.5}
        />
      </button>
      <div className="hidden md:block">
        <h4 className="mb-4 text-sm font-medium text-ink">{column.title}</h4>
      </div>
      <ul
        className={cn(
          "space-y-3 overflow-hidden pb-4 text-sm text-ink/70 md:block md:pb-0",
          !open && "hidden",
        )}
      >
        {column.items.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link
                to={item.to}
                className="transition-colors hover:text-terracotta"
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className="transition-colors hover:text-terracotta"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-line bg-bg">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4 md:gap-10">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink/70">
              Онлайн-школа, где учат живому испанскому. Без занудства.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-ink/70 transition-colors hover:text-terracotta"
              >
                <Youtube size={18} strokeWidth={1.5} />
              </a>
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
            </div>
          </div>

          <AccordionColumn column={navColumn} />
          <AccordionColumn column={docsColumn} />

          <div className="border-b border-line md:border-none">
            <h4 className="mb-4 hidden text-sm font-medium text-ink md:block">
              Контакты и реквизиты
            </h4>
            <div className="md:hidden">
              <h4 className="py-4 text-sm font-medium text-ink">Контакты и реквизиты</h4>
            </div>
            <ul className="space-y-2 pb-4 text-sm text-ink/70 md:pb-0">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-terracotta"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://t.me/${site.tgContact.replace(/^@/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-terracotta"
                >
                  @{site.tgContact.replace(/^@/, "")}
                </a>
              </li>
              <li className="pt-2 text-muted">ИП {site.legal.fio}</li>
              <li className="text-muted">ИНН: {site.legal.inn}</li>
              <li className="text-muted">ОГРНИП: {site.legal.ogrnip}</li>
              <li className="text-muted">Адрес: {site.legal.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center">
          <div>© {year} esporfa. Все права защищены.</div>
          <div className="flex items-center gap-2">
            Платежи обрабатываются через
            <span
              aria-label="ЮKassa"
              className="inline-flex items-center rounded-sm border border-line px-2 py-0.5 font-medium text-ink/60"
            >
              ЮKassa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
