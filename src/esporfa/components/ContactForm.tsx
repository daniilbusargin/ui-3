import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { submitContactForm } from "../lib/api";
import { getSupportLink } from "../lib/telegram";
import { site } from "../config";
import { SectionHeading } from "./SectionHeading";
import { cn } from "../lib/cn";

const levels = [
  "Никогда не учил",
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "Не знаю",
] as const;

const goals = [
  "Путешествия",
  "Переезд",
  "Работа",
  "DELE",
  "Для себя",
  "Другое",
] as const;

const schema = z.object({
  name: z.string().min(2, "Как к тебе обращаться?"),
  contact: z
    .string()
    .min(3, "Telegram или email для связи"),
  contactType: z.enum(["telegram", "email"]),
  level: z.enum(levels),
  goal: z.enum(goals),
  comment: z.string().max(1000).optional(),
  consent: z
    .literal(true, {
      errorMap: () => ({ message: "Нужно согласиться с политикой" }),
    }),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      contactType: "telegram",
      level: "Не знаю",
      goal: "Для себя",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const res = await submitContactForm(values);
    if (res.ok) {
      toast.success("Заявка принята", {
        description: "Напишем в течение дня — увидимся на пробном.",
      });
      reset();
    } else {
      toast.error("Что-то пошло не так", { description: res.message });
    }
  };

  return (
    <section id="contact" className="section container-page">
      <SectionHeading
        eyebrow="Пробный урок"
        title="Записаться на пробный"
        subtitle="Первое занятие — знакомство. Определим уровень и поймём, подходим ли друг другу."
      />

      <div className="grid gap-10 md:grid-cols-5 md:gap-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-3"
          noValidate
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="field-label">
                Как тебя зовут
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-err" : undefined}
                className={cn("field", errors.name && "border-terracotta")}
                {...register("name")}
              />
              {errors.name && (
                <p id="name-err" className="mt-1 text-xs text-terracotta">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact" className="field-label">
                Telegram или email
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <select
                  aria-label="Способ связи"
                  className={cn("field sm:w-40")}
                  {...register("contactType")}
                >
                  <option value="telegram">Telegram</option>
                  <option value="email">Email</option>
                </select>
                <input
                  id="contact"
                  type="text"
                  placeholder="@username или mail@example.com"
                  aria-invalid={!!errors.contact}
                  className={cn("field flex-1", errors.contact && "border-terracotta")}
                  {...register("contact")}
                />
              </div>
              {errors.contact && (
                <p className="mt-1 text-xs text-terracotta">
                  {errors.contact.message}
                </p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="level" className="field-label">
                  Текущий уровень
                </label>
                <select id="level" className="field" {...register("level")}>
                  {levels.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="goal" className="field-label">
                  Цель
                </label>
                <select id="goal" className="field" {...register("goal")}>
                  {goals.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="comment" className="field-label">
                Комментарий
              </label>
              <textarea
                id="comment"
                rows={4}
                placeholder="Расскажи, что важно знать до первого урока"
                className="field resize-y"
                {...register("comment")}
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-ink/80">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-terracotta"
                aria-invalid={!!errors.consent}
                {...register("consent")}
              />
              <span>
                Согласен с{" "}
                <Link
                  to="/privacy"
                  className="underline decoration-terracotta underline-offset-4 hover:text-terracotta"
                >
                  политикой обработки персональных данных
                </Link>
                .
              </span>
            </label>
            {errors.consent && (
              <p className="-mt-3 text-xs text-terracotta">
                {errors.consent.message as string}
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto"
              >
                {isSubmitting ? "Отправляем…" : "Отправить заявку"}
              </button>
            </div>
          </div>
        </form>

        <aside className="md:col-span-2">
          <div className="card p-6 md:p-8">
            <div className="eyebrow mb-3">Или напрямую</div>
            <p className="text-base text-ink/80">
              Не любишь формы? Напиши сразу в Telegram — ответим быстро.
            </p>
            <a
              href={getSupportLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-5 w-full"
            >
              @{site.tgContact.replace(/^@/, "")}
            </a>
            <p className="mt-6 text-xs text-muted">
              Мы работаем по будням, отвечаем в течение дня.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
