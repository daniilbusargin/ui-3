import { useMemo, useState } from "react";
import { categoryLabels, products, type ProductCategory } from "../data/products";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";
import { cn } from "../lib/cn";

type Tab = "all" | ProductCategory;

const tabs: Tab[] = [
  "all",
  "materials",
  "courses",
  "individual",
  "speaking",
  "marathon",
  "dele",
];

export function CatalogSection() {
  const [active, setActive] = useState<Tab>("all");

  const visible = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="catalog" className="section container-page">
      <SectionHeading
        eyebrow="Каталог"
        title="Что купить"
        subtitle="От готовых PDF-шпаргалок до индивидуальных уроков — выбирай формат под свою цель."
      />

      <div
        className="mb-10 flex gap-2 overflow-x-auto pb-2 md:mb-12 md:flex-wrap md:overflow-visible"
        role="tablist"
        aria-label="Фильтр по категориям"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={cn(
              "pill shrink-0 whitespace-nowrap cursor-pointer",
              active === tab && "pill-active",
            )}
          >
            {categoryLabels[tab]}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-muted">
          В этой категории пока ничего нет — загляни позже.
        </p>
      )}
    </section>
  );
}
