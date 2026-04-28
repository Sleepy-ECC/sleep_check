import { getApiBaseUrl } from "./config";

export type SleepMethod = {
    id: string;
    code: string;
    name: string;
    description: string;
    category: string;
    hasAudio: boolean;
};

export type SleepRecord = {
    id: string;
    userId: string;
    sleepMethodId: string;
    sleepDate: string;
    sleptMinutes: number;
    createdAt: string;
};

type SleepMethodsResponse = {
    ok: boolean;
    sleepMethods?: SleepMethod[];
    message?: string;
    error?: string;
};

type SleepRecordsResponse = {
    ok: boolean;
    sleepRecords?: SleepRecord[];
    message?: string;
    error?: string;
};

type CreateSleepRecordResponse = {
    ok: boolean;
    sleepRecord?: SleepRecord;
    message?: string;
    error?: string;
};

type CreateSleepRecordParams = {
    userId: string;
    sleepMethodId: string;
    sleepDate: string;
    sleptMinutes: number;
    accessToken: string;
};

function getBearerHeaders(accessToken?: string): Record<string, string> {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
    }

    return headers;
}

export async function fetchSleepMethods() {
    const response = await fetch(`${getApiBaseUrl()}/sleep-methods`);
    const data = (await response.json()) as SleepMethodsResponse;

    return {
        data,
        ok: response.ok && data.ok,
    };
}

export async function fetchSleepRecords(accessToken?: string) {
    const response = await fetch(`${getApiBaseUrl()}/sleep-records`, {
        headers: getBearerHeaders(accessToken),
    });
    const data = (await response.json()) as SleepRecordsResponse;

    return {
        data,
        ok: response.ok && data.ok,
    };
}

export async function createSleepRecord(params: CreateSleepRecordParams) {
    const { accessToken, ...body } = params;
    const response = await fetch(`${getApiBaseUrl()}/sleep-records`, {
        method: "POST",
        headers: getBearerHeaders(accessToken),
        body: JSON.stringify(body),
    });
    const data = (await response.json()) as CreateSleepRecordResponse;

    return {
        data,
        ok: response.ok && data.ok,
    };
}
