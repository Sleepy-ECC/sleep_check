const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export function getApiBaseUrl() {
    // API URLの設定漏れを、undefinedへのfetchではなく明示的な設定エラーとして扱う。
    if (!API_BASE_URL) {
        throw new Error("VITE_BACKEND_API_URL is not set.");
    }

    return API_BASE_URL;
}