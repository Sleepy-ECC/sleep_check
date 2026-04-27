type RegisterParams = {
    email: string;
    password: string;
    displayName: string;
};

export type RegisterResponse = {
    ok: boolean;
    user?: {
        id: string;
        email: string;
        displayName: string;
        createdAt: string;
    };
    accessToken?: string;
    message?: string;
    error?: string;
};

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export async function registerUser(params: RegisterParams) {
    if (!API_BASE_URL) {
        throw new Error("VITE_BACKEND_API_URL is not set.");
    }

    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });

    const data = (await response.json()) as RegisterResponse;

    return {
        data,
        ok: response.ok && data.ok,
    };
}
