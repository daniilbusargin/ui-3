export type Testimonial = {
  id: string;
  text: string;
  name: string;
  progress: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    text: "Впервые язык даётся легко. Через два месяца поймала себя на том, что смотрю сериал и понимаю без субтитров.",
    name: "Аня",
    progress: "A2 → B1",
  },
  {
    id: "t2",
    text: "Шла ради переезда в Валенсию, а осталась ради самих уроков. Атмосфера — как будто болтаешь с подругой, но при этом реально учишься.",
    name: "Маша",
    progress: "A1 → A2",
  },
  {
    id: "t3",
    text: "Готовился к DELE B2, сдал с первого раза. Больше всего помогли пробные и разбор ошибок по устной части.",
    name: "Дима",
    progress: "B1 → B2",
  },
];
