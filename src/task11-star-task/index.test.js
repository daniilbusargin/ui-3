import { describe, expect, test } from '@jest/globals';
import { theWorld } from './index.js';

describe('Функция theWorld', () => {
    test('Корректно выполняет задержку на 3 секунды', async () => {
        console.log('Выведется до остановки времени');

        // Проверяем выполнение задержки
        const startTime = Date.now();
        await theWorld(3000); // Ждём завершения
        const elapsedTime = Date.now() - startTime;

        console.log('Выведется после того, как время продолжит ход');

        // Проверяем, что задержка была примерно 3 секунды
        expect(elapsedTime).toBeGreaterThanOrEqual(3000);
        expect(elapsedTime).toBeLessThan(3500); // Допустимая погрешность
    });
});