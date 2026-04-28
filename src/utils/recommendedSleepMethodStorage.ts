const RECOMMENDED_SLEEP_METHOD_KEY = "recommendedSleepMethodName";

export function saveRecommendedSleepMethodName(name: string) {
    localStorage.setItem(RECOMMENDED_SLEEP_METHOD_KEY, name);
}

export function getRecommendedSleepMethodName() {
    return localStorage.getItem(RECOMMENDED_SLEEP_METHOD_KEY) || "";
}
