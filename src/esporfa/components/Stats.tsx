import { site } from "../config";

const items = [
  { value: `${site.stats.students}+`, label: "учеников" },
  { value: `${site.stats.teachers}`, label: "преподавателей" },
  { value: "A1–C1", label: "все уровни" },
  { value: `${site.stats.videos}+`, label: "видео на YouTube" },
];

export function Stats() {
  return (
    <section aria-label="Школа в цифрах" className="border-y border-line bg-bg">
      <div className="container-page grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4 md:py-6">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={
              "flex flex-col items-start md:items-center md:text-center " +
              (i > 0 ? "md:border-l md:border-line md:pl-6" : "")
            }
          >
            <div className="font-serif text-3xl italic text-ink md:text-4xl">
              {item.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
