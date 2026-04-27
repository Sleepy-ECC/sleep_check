import { getApiBaseUrl } from "./config";

type RegisterParams = {
    email: string;
    password: string;
    displayName: string;
};

type LoginParams = {
    email: string;
    password: string;
};

export type AuthResponse = {
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


export async function registerUser(params: RegisterParams) {
    const response = await fetch(`${getApiBaseUrl()}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });

    const data = (await response.json()) as AuthResponse;

    return {
        data,
        // HTTPとして成功していても、API側がfalseなら失敗として扱う
        ok: response.ok && data.ok,
    };
}

export async function loginUser(params: LoginParams) {
    const response = await fetch(`${getApiBaseUrl()}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });

    const data = (await response.json()) as AuthResponse;

    return {
        data,
        // HTTPとして成功していても、API側がfalseなら失敗として扱う。
        ok: response.ok && data.ok,
    };
}
