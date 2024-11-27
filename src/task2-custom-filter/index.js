/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Исходный массив
 * @param {Function} filterFn Фильтрующая функция, возвращающая true или false
 * @param {Boolean} inplace Указывает, модифицировать ли оригинальный массив
 * @returns {Array} Новый массив с элементами, прошедшими фильтр
 */
export const filter = (array, filterFn, inplace = false) => {
    const filtered = [];

    for (const [index, value] of array.entries()) {
        if (filterFn(value, index, array)) {
            filtered[filtered.length] = value; // Используем прямое присвоение вместо push
        }
    }

    if (inplace) {
        array.splice(0, array.length, ...filtered); // Используем splice для модификации массива
        return array;
    }

    return filtered;
};
