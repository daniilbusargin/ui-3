import { useState } from "react";
import { ExternalLink, Send, X } from "lucide-react";
import type { Product } from "../data/products";
import { categoryLabels } from "../data/products";
import { createPayment } from "../lib/payments";
import { getBotDeepLink } from "../lib/telegram";
import { cn } from "../lib/cn";

type Props = { product: Product };

function formatPrice(product: Product): string {
  if (product.priceLabel) return product.priceLabel;
  return `${product.price.toLocaleString("ru-RU")} ₽`;
}

export function ProductCard({ product }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  const handleYooKassaPayment = async (productId: string, price: number) => {
    const res = await createPayment({
      productId,
      amount: price,
      description: product.title,
      returnUrl:
        typeof window !== "undefined" ? `${window.location.origin}/` : undefined,
    });

    if (res.status === "redirect") {
      window.location.href = res.url;
      return;
    }
    if (res.status === "pending") {
      setPendingMessage(res.message);
      setModalOpen(true);
      return;
    }
    setPendingMessage(res.message);
    setModalOpen(true);
  };

  const tgLink = getBotDeepLink(product.id);

  return (
    <>
      <article className="card flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
            {categoryLabels[product.category]}
          </span>
          {product.hitBadge && (
            <span className="inline-flex items-center rounded-sm bg-terracotta px-2 py-0.5 text-[10px] uppercase tracking-widest text-bg">
              хит
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl font-semibold leading-snug text-ink">
          {product.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm text-ink/70">
          {product.shortDescription}
        </p>

        <div className="mt-5">
          <div className="text-xs uppercase tracking-widest text-muted">
            Что внутри
          </div>
          <ul className="mt-2 space-y-1.5 text-sm text-ink/80">
            {product.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-terracotta">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          <span>
            Уровень: <span className="text-ink/80">{product.level}</span>
          </span>
          <span>
            Формат: <span className="text-ink/80">{product.format}</span>
          </span>
        </div>

        <div className="my-5 border-t border-line" />

        <div className="mt-auto">
          <div className="font-serif text-3xl italic text-ink">
            {formatPrice(product)}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() => handleYooKassaPayment(product.id, product.price)}
              className="btn-primary w-full"
              aria-label={`Купить на сайте: ${product.title}`}
            >
              Купить на сайте
            </button>
            <a
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full"
              aria-label={`Купить в Telegram: ${product.title}`}
            >
              <Send size={14} strokeWidth={1.5} />
              Купить в Telegram
            </a>
          </div>
        </div>
      </article>

      {modalOpen && (
        <PaymentFallbackModal
          productTitle={product.title}
          tgLink={tgLink}
          message={pendingMessage ?? ""}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

function PaymentFallbackModal({
  productTitle,
  tgLink,
  message,
  onClose,
}: {
  productTitle: string;
  tgLink: string;
  message: string;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Оплата"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4",
        "animate-fade-in",
      )}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md border border-line bg-bg p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="text-xs uppercase tracking-widest text-muted">
            {productTitle}
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="text-ink/60 transition-colors hover:text-ink"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        <h3 className="mt-3 font-serif text-3xl italic text-ink">
          Скоро здесь — онлайн-оплата
        </h3>
        <p className="mt-4 text-sm text-ink/70">{message}</p>
        <a
          href={tgLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 w-full"
          onClick={onClose}
        >
          <Send size={14} strokeWidth={1.5} />
          Открыть Telegram-бот
          <ExternalLink size={14} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
}
