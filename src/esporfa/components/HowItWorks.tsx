import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    num: "01",
    title: "Заявка",
    text: "Оставляешь заявку или выбираешь продукт в каталоге.",
  },
  {
    num: "02",
    title: "Оплата",
    text: "Оплачиваешь на сайте через ЮKassa или в Telegram-боте.",
  },
  {
    num: "03",
    title: "Доступ",
    text: "Получаешь материалы или согласуем время уроков в чате.",
  },
  {
    num: "04",
    title: "Vamos",
    text: "Учимся — говорим по-испански с первого занятия.",
  },
];

export function HowItWorks() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Как это работает"
        title="Четыре шага до первого разговора"
      />

      <div className="grid gap-6 md:grid-cols-4 md:gap-0">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className="relative flex flex-col border-l border-line pl-6 pt-6 md:border-l-0 md:border-t md:pl-0 md:pt-8 md:pr-6"
          >
            <div className="font-serif text-sm italic text-terracotta md:text-base">
              {s.num}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-ink md:text-xl">
              {s.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-ink/70">{s.text}</p>
            {i < steps.length - 1 && (
              <div className="absolute -right-px top-8 hidden h-px w-4 bg-line md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
