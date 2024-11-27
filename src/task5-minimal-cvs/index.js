/**
 * Создаёт минимальную систему контроля версий
 * 
 * @param {Array} initialCommit Исходный коммит
 * @returns {Object} Интерфейс управления версиями
 */
export const getMinimalCVS = (initialCommit) => {
    const versionHistory = [Array.from(initialCommit)]; // Создаём копию начального массива

    return {
        head: () => versionHistory.at(-1), // Используем `at(-1)` для получения последней версии
        history: () => versionHistory.map(version => [...version]), // Копируем все версии
        push: (item) => {
            const currentVersion = versionHistory.at(-1); // Текущая последняя версия
            const newVersion = [...currentVersion, item]; // Добавляем элемент в новую версию
            versionHistory.push(newVersion); // Сохраняем новую версию
        },
        pop: () => {
            const latestVersion = versionHistory.at(-1); // Текущая последняя версия
            if (latestVersion.length === 0) return undefined; // Если массив пуст, возвращаем undefined
            const newVersion = latestVersion.slice(0, -1); // Удаляем последний элемент
            versionHistory.push(newVersion); // Сохраняем новую версию
            return latestVersion.at(-1); // Возвращаем удалённый элемент
        }
    };
};
