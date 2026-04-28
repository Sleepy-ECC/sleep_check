import { getApiBaseUrl } from "./config";

export type VoicevoxVoice = {
    speaker: number;
    speakerName: string;
    styleName: string;
    styleType: string;
    speakerUuid: string;
    version: string;
    label: string;
};

export type VoicevoxSpeakersResponse = {
    ok: boolean;
    voices: VoicevoxVoice[];
    message?: string;
    error?: string;
};

type VoicevoxSynthesisParams = {
    text: string;
    speaker: number;
};

export async function fetchVoicevoxSpeakers() {
    const response = await fetch(`${getApiBaseUrl()}/voicevox/speakers`);
    const data = (await response.json()) as VoicevoxSpeakersResponse;

    return {
        data,
        ok: response.ok && data.ok,
    };
}

export async function synthesizeVoicevoxSpeech(params: VoicevoxSynthesisParams) {
    const response = await fetch(`${getApiBaseUrl()}/voicevox/synthesis`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });

    if (!response.ok) {
        throw new Error("VOICEVOXの音声合成に失敗しました。");
    }

    // 音声データはJSONではなくBlobとして受け取り、audio要素やObject URLで再生する
    return response.blob();
}
