import { useEffect, useRef } from "react";
import { getRandomCognitiveShuffleWord } from "../utils/cognitiveShuffleWords";
import { useVoicevoxSpeech } from "./useVoicevoxSpeech";

const WORD_SPEAK_INTERVAL_MS = 10000;

type UseCognitiveShuffleSpeechParams = {
    isRunning: boolean;
    speaker: number;
};

export function useCognitiveShuffleSpeech({ isRunning, speaker }: UseCognitiveShuffleSpeechParams) {
    const { speak } = useVoicevoxSpeech();
    const previousWordRef = useRef<string | undefined>(undefined);

    useEffect(() => {
        if (!isRunning) return;

        const intervalId = window.setInterval(() => {
            const word = getRandomCognitiveShuffleWord(previousWordRef.current);
            previousWordRef.current = word;

            speak({
                text: word,
                speaker,
            }).catch((error) => {
                console.error(error);
            });
        }, WORD_SPEAK_INTERVAL_MS);

        return () => window.clearInterval(intervalId);
    }, [isRunning, speak, speaker]);
}
