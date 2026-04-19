export type TeacherLevel = "A1" | "A2" | "B1" | "B2" | "C1";

export type Teacher = {
  id: string;
  name: string;
  role: string;
  bio: string;
  levels: TeacherLevel[];
  photoPlaceholder: string;
  links: {
    instagram?: string;
    telegram?: string;
  };
  founder?: boolean;
};

export const teachers: Teacher[] = [
  {
    id: "valeria",
    name: "{{ИМЯ_ПРЕПОДА}} — Валерия",
    role: "Основатель · разговорный испанский · методика",
    bio: "{{БИО}} Живёт в Барселоне уже 7 лет. Преподаёт с нуля и доводит до свободного общения. Верит, что язык начинается с первой фразы, а не с двадцатого правила.",
    levels: ["A1", "A2", "B1", "B2"],
    photoPlaceholder: "{{ФОТО_ВАЛЕРИЯ}}",
    links: {
      instagram: "https://instagram.com/es.porfa",
      telegram: "https://t.me/esporfa",
    },
    founder: true,
  },
  {
    id: "teacher-2",
    name: "{{ИМЯ_ПРЕПОДА}}",
    role: "Подготовка к DELE B2–C1 · грамматика без скуки",
    bio: "{{БИО}} Родом из Мадрида, филолог. Любит объяснять сослагательное наклонение через сериалы и песни. С учениками — строго, но по-доброму.",
    levels: ["B1", "B2", "C1"],
    photoPlaceholder: "{{ФОТО_ПРЕПОДА_2}}",
    links: {
      instagram: "https://instagram.com/es.porfa",
    },
  },
  {
    id: "teacher-3",
    name: "{{ИМЯ_ПРЕПОДА}}",
    role: "Латиноамериканский испанский · произношение",
    bio: "{{БИО}} Мексика, Гвадалахара. Ставит произношение, учит живому уличному испанскому и объясняет, чем «carro» отличается от «coche».",
    levels: ["A1", "A2", "B1"],
    photoPlaceholder: "{{ФОТО_ПРЕПОДА_3}}",
    links: {
      telegram: "https://t.me/esporfa",
    },
  },
];
