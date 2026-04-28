export function getTodaySleepDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${date}`;
}

export function formatSleepDate(sleepDate: string) {
    const date = new Date(`${sleepDate}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
        return sleepDate;
    }

    return `${date.getMonth() + 1}月${date.getDate()}日`;
}

export function formatSleptMinutes(sleptMinutes: number) {
    const hours = Math.floor(sleptMinutes / 60);
    const minutes = sleptMinutes % 60;

    if (hours === 0) {
        return `${minutes}分`;
    }

    return `${hours}時間${minutes}分`;
}
