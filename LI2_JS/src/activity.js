/**
 * Получает случайную активность с помощью запроса к стороннему API.
 * @returns {Promise<string>} Промис с текстом случайной активности.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error('Failed to fetch activity:', error);
        return "К сожалению, произошла ошибка";
    }
}

/**
 * Обновляет текстовое содержимое HTML элемента с id 'activity' .
 * Получает случайную активность и обновляет DOM элемент с ее значением.
 * @returns {Promise<void>} Промис без возвращаемого значения
 */
export async function updateActivity() {
    const activity = await getRandomActivity();
    document.getElementById('activity').innerText = activity;
    setTimeout(updateActivity, 60000);
}

