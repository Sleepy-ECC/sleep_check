type StoredUser = {
    id?: string;
};

export function getAccessToken() {
    return localStorage.getItem("accessToken") || "";
}

export function getStoredUserId() {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
        return "";
    }

    try {
        const user = JSON.parse(storedUser) as StoredUser;
        return user.id || "";
    } catch {
        return "";
    }
}
