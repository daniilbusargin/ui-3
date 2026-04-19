export type ProductCategory =
  | "materials"
  | "courses"
  | "individual"
  | "speaking"
  | "marathon"
  | "dele";

export type Product = {
  id: string;
  category: ProductCategory;
  title: string;
  shortDescription: string;
  bullets: string[];
  level: string;
  format: string;
  price: number;
  priceLabel?: string;
  hitBadge?: boolean;
};

export const categoryLabels: Record<ProductCategory | "all", string> = {
  all: "Все",
  materials: "Готовые материалы",
  courses: "Курсы по уровням",
  individual: "Индивидуальные уроки",
  speaking: "Разговорные клубы",
  marathon: "Марафоны",
  dele: "DELE/SIELE",
};

export const products: Product[] = [
  {
    id: "top-phrases",
    category: "materials",
    title: "Топ разговорных фраз",
    shortDescription:
      "Сборник живых фраз, которыми испанцы пользуются каждый день. С примерами и переводом.",
    bullets: [
      "200+ фраз по темам",
      "Примеры в диалогах",
      "Аудио от носителей",
    ],
    level: "A2+",
    format: "PDF",
    price: 490,
    hitBadge: true,
  },
  {
    id: "ind-lesson",
    category: "individual",
    title: "Индивидуальный урок",
    shortDescription:
      "Один урок с преподавателем. Знакомство, определение уровня и первая тема — за 60 минут.",
    bullets: [
      "60 минут один на один",
      "Персональная программа",
      "Домашка и разбор",
    ],
    level: "A1–C1",
    format: "Онлайн · Zoom",
    price: 2000,
    priceLabel: "от 2 000 ₽",
  },
  {
    id: "ind-pack-8",
    category: "individual",
    title: "Пакет из 8 индивидуальных уроков",
    shortDescription:
      "Лучший темп для результата: два урока в неделю в течение месяца. Программа под твою цель.",
    bullets: [
      "8 уроков по 60 мин",
      "Чат с преподавателем между уроками",
      "Материалы в подарок",
    ],
    level: "A1–C1",
    format: "Онлайн · Zoom",
    price: 15000,
  },
  {
    id: "course-a1",
    category: "courses",
    title: "Групповой курс A1 «с нуля»",
    shortDescription:
      "12 недель в небольшой группе до 6 человек. От первых звуков до простых диалогов.",
    bullets: [
      "24 занятия по 90 минут",
      "Чат поддержки и домашка",
      "Сертификат о прохождении",
    ],
    level: "A1",
    format: "Онлайн · группа до 6",
    price: 18000,
  },
  {
    id: "course-a2",
    category: "courses",
    title: "Групповой курс A2",
    shortDescription:
      "Продолжение после A1 или для тех, кто уже немного говорит. Прошедшие времена, субхунтив на подходе.",
    bullets: [
      "24 занятия по 90 минут",
      "Разговорные разминки",
      "Домашние задания с проверкой",
    ],
    level: "A2",
    format: "Онлайн · группа до 6",
    price: 18000,
  },
  {
    id: "speaking-club",
    category: "speaking",
    title: "Разговорный клуб",
    shortDescription:
      "Месячный абонемент: 4 встречи с носителем на интересные темы. Без учебников, только разговор.",
    bullets: [
      "4 встречи по 60 минут",
      "Группа до 5 человек",
      "Темы на выбор",
    ],
    level: "B1+",
    format: "Онлайн · абонемент",
    price: 3500,
  },
  {
    id: "marathon-past",
    category: "marathon",
    title: "Марафон «Прошедшие времена за 10 дней»",
    shortDescription:
      "Разложим pretérito indefinido, perfecto и imperfecto по полочкам. Без паники — с практикой.",
    bullets: [
      "10 коротких уроков",
      "Упражнения каждый день",
      "Финальный тест и разбор",
    ],
    level: "A2–B1",
    format: "Видео + PDF",
    price: 2900,
  },
  {
    id: "dele-prep",
    category: "dele",
    title: "Подготовка к DELE B1/B2",
    shortDescription:
      "Индивидуальная подготовка к экзамену: все 4 части, пробные тесты, стратегия.",
    bullets: [
      "План под дату экзамена",
      "Пробные тесты с разбором",
      "Тренировка устной части",
    ],
    level: "B1–B2",
    format: "Индивидуально",
    price: 2500,
    priceLabel: "от 2 500 ₽/урок",
  },
];
