/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Исходный объект
 * @returns {Object} Объект с подсчётом типов значений
 */
export const solutionFn = (obj) => {
    const typeCounts = {};

    Object.entries(obj).forEach(([key, value]) => {
        const valueType = typeof value;
        typeCounts[valueType] = (typeCounts[valueType] ?? 0) + 1; 
    });

    return typeCounts;
};
