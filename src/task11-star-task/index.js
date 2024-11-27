/**
 * Останавливает время на определённое количество миллисекунд
 * 
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */
export async function theWorld(ms) {
    const seconds = Math.ceil(ms / 1000);
    for (let remaining = seconds; remaining >= 0; remaining--) {
        console.log(`Time will continue running in ${remaining}`);
        if (remaining > 0) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}