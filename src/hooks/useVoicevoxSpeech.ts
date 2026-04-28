import { useCallback, useRef, useState } from "react";
import { synthesizeVoicevoxSpeech } from "../api/voicevox";

type SpeakParams = {
    text: string;
    speaker: number;
};

function playAudioBlob(audioBlob: Blob) {
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    audio.addEventListener("ended", () => URL.revokeObjectURL(audioUrl), { once: true });
    audio.addEventListener("error", () => URL.revokeObjectURL(audioUrl), { once: true });

    return audio.play();
}

export function useVoicevoxSpeech() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const isSpeakingRef = useRef(false);

    const speak = useCallback(async ({ text, speaker }: SpeakParams) => {
        if (isSpeakingRef.current) return;

        isSpeakingRef.current = true;
        setIsSpeaking(true);

        try {
            const audioBlob = await synthesizeVoicevoxSpeech({ text, speaker });
            await playAudioBlob(audioBlob);
        } finally {
            isSpeakingRef.current = false;
            setIsSpeaking(false);
        }
    }, []);

    return {
        isSpeaking,
        speak,
    };
}
