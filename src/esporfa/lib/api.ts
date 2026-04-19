export type ContactFormPayload = {
  name: string;
  contact: string;
  contactType: "telegram" | "email";
  level: string;
  goal: string;
  comment?: string;
  consent: true;
};

export type SubmitResult = { ok: true } | { ok: false; message: string };

/**
 * submitContactForm — отправка заявки на пробный урок.
 *
 * TODO: подключить бэкенд или отправку в Telegram через Bot API
 * sendMessage в чат с админами. Пока — console.log + toast «Заявка
 * принята, напишем в течение дня».
 */
export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<SubmitResult> {
  // eslint-disable-next-line no-console
  console.log("[esporfa] contact form submission", payload);
  await new Promise((r) => setTimeout(r, 600));
  return { ok: true };
}
