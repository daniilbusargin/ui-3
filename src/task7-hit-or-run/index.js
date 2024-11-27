/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    const randomNumber = a + Math.floor(Math.random() * (b - a + 1)); // Вычисляем случайное число

    const checkPrime = (number) => {
        if (number < 2) return false; // Числа меньше 2 не являются простыми
        for (let divisor = 2; divisor * divisor <= number; divisor++) { // Проверяем до квадратного корня
            if (number % divisor === 0) return false; // Если делится нацело, не простое
        }
        return true;
    };

    return checkPrime(randomNumber) ? 'run' : 'hit'; // Возвращаем результат
};
