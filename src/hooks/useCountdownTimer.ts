import { useEffect, useState } from "react";

export function formatTimerTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function useCountdownTimer(initialSeconds: number) {
    const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const intervalId = window.setInterval(() => {
            setRemainingSeconds((currentSeconds) => {
                if (currentSeconds <= 1) {
                    setIsRunning(false);
                    return 0;
                }

                return currentSeconds - 1;
            });
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setRemainingSeconds(initialSeconds);
    };

    return {
        remainingSeconds,
        remainingTime: formatTimerTime(remainingSeconds),
        isRunning,
        start,
        stop,
        reset,
    };
}
