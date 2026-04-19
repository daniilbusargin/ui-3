export type PaymentRequest = {
  productId: string;
  amount: number;
  description: string;
  returnUrl?: string;
};

export type PaymentResult =
  | { status: "pending"; reason: "not-implemented"; message: string }
  | { status: "redirect"; url: string }
  | { status: "error"; message: string };

/**
 * createPayment — клиентский враппер над будущим вызовом к ЮKassa.
 *
 * TODO: интегрировать ЮKassa API https://yookassa.ru/developers/api
 * POST /v3/payments с {
 *   amount: { value: "490.00", currency: "RUB" },
 *   confirmation: { type: "redirect", return_url },
 *   description,
 *   metadata: { product_id }
 * }
 * Идемпотентный ключ передаётся в заголовке Idempotence-Key.
 *
 * Сейчас — заглушка: возвращает status: "pending", чтобы UI мог показать
 * модалку «онлайн-оплата скоро, пока — в Telegram-бот».
 */
export async function createPayment(
  req: PaymentRequest,
): Promise<PaymentResult> {
  void req;
  return {
    status: "pending",
    reason: "not-implemented",
    message:
      "Онлайн-оплата скоро появится. Пока что купить можно через Telegram-бот.",
  };
}
