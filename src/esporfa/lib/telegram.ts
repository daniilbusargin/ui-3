import { site } from "../config";

/**
 * Собирает deep-link вида https://t.me/<bot>?start=buy_<productId>.
 * Бот на aiogram/grammy парсит payload через /start и открывает карточку товара.
 */
export function getBotDeepLink(productId: string): string {
  const bot = site.tgBotUsername.replace(/^@/, "");
  return `https://t.me/${bot}?start=buy_${productId}`;
}

export function getSupportLink(): string {
  const handle = site.tgContact.replace(/^@/, "");
  return `https://t.me/${handle}`;
}
