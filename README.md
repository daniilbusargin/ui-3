# esporfa — онлайн-школа испанского языка

Лендинг онлайн-школы испанского с каталогом продуктов, формой записи на
пробный урок и юридическими страницами (оферта, политика, согласие, пользовательское
соглашение).

Стек: **React 18 + TypeScript + Vite + Tailwind CSS**, `react-router-dom`,
`react-hook-form` + `zod`, `lucide-react`, `sonner`.

## Быстрый старт

```bash
npm install
npm run dev      # dev-сервер на http://localhost:5173
npm run build    # продакшн-сборка в dist/
npm run preview  # предпросмотр сборки
```

## Структура

```
src/esporfa/
  components/      # UI-секции и мелкие компоненты
  pages/           # Index + юридические страницы (Offer, Privacy, ...)
  data/            # products.ts, teachers.ts, testimonials.ts
  lib/             # payments (ЮKassa-заглушка), api (контакт-форма), telegram
  config.ts        # бренд, соцсети, реквизиты (плейсхолдеры)
```

## TODO интеграции

- `src/esporfa/lib/payments.ts` — заглушка `createPayment()`. Заменить телом
  вызова ЮKassa API (`POST /v3/payments`).
- `src/esporfa/lib/api.ts` — заглушка `submitContactForm()`. Подключить
  бэкенд или отправку в Telegram через Bot API.
- `src/esporfa/config.ts` — заменить все `{{ПЛЕЙСХОЛДЕРЫ}}` на реальные
  реквизиты ИП, контакты, username Telegram-бота.

## Песочница заданий

В корне также живут задания из исходной песочницы (`src/task*`). Они
запускаются через Jest:

```bash
npm test          # все задачи
npm test -- taskN # конкретная задача
```
