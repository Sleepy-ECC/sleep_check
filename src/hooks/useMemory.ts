import type { ComponentPropsWithoutRef } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSleepRecord, fetchSleepMethods, fetchSleepRecords } from "../api/memory";
import type { SleepMethod, SleepRecord } from "../api/memory";
import { validateSleepRecordForm } from "../features/memory/validateSleepRecordForm";
import { getAccessToken, getStoredUserId } from "../utils/authStorage";
import { getRecommendedSleepMethodName } from "../utils/recommendedSleepMethodStorage";
import { formatSleepDate, formatSleptMinutes, getTodaySleepDate } from "../utils/sleepRecordFormat";

type SleepRecordView = {
    id: string;
    methodName: string;
    sleepDateText: string;
    sleptTimeText: string;
};

type FormSubmitHandler = NonNullable<ComponentPropsWithoutRef<"form">["onSubmit"]>;

function getApiErrorMessage(data: { message?: string; error?: string }, fallback: string) {
    return data.message || data.error || fallback;
}

export function useMemory() {
    const [sleepMethods, setSleepMethods] = useState<SleepMethod[]>([]);
    const [sleepRecords, setSleepRecords] = useState<SleepRecord[]>([]);
    const [sleepMethodId, setSleepMethodId] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recommendedSleepMethodName] = useState(getRecommendedSleepMethodName);

    const sleepMethodNameById = useMemo(() => {
        return new Map(sleepMethods.map((sleepMethod) => [sleepMethod.id, sleepMethod.name]));
    }, [sleepMethods]);

    const sleepRecordViews: SleepRecordView[] = useMemo(() => {
        return sleepRecords.map((sleepRecord) => ({
            id: sleepRecord.id,
            methodName: sleepMethodNameById.get(sleepRecord.sleepMethodId) || "睡眠法",
            sleepDateText: formatSleepDate(sleepRecord.sleepDate),
            sleptTimeText: formatSleptMinutes(sleepRecord.sleptMinutes),
        }));
    }, [sleepMethodNameById, sleepRecords]);

    const loadSleepRecords = useCallback(async (accessToken?: string) => {
        const sleepRecordsResult = await fetchSleepRecords(accessToken);

        if (!sleepRecordsResult.ok) {
            throw new Error(getApiErrorMessage(sleepRecordsResult.data, "睡眠記録の取得に失敗しました。"));
        }

        const loadedSleepRecords = sleepRecordsResult.data.sleepRecords || [];
        setSleepRecords(loadedSleepRecords);

        return loadedSleepRecords;
    }, []);

    useEffect(() => {
        async function loadMemory() {
            setIsLoading(true);
            setError("");

            try {
                const accessToken = getAccessToken() || undefined;
                const [sleepMethodsResult] = await Promise.all([
                    fetchSleepMethods(),
                    loadSleepRecords(accessToken),
                ]);

                if (!sleepMethodsResult.ok) {
                    setError(getApiErrorMessage(sleepMethodsResult.data, "睡眠法の取得に失敗しました。"));
                    return;
                }

                setSleepMethods(sleepMethodsResult.data.sleepMethods || []);
            } catch (caughtError) {
                setError(caughtError instanceof Error ? caughtError.message : "通信に失敗しました。時間をおいてもう一度お試しください。");
            } finally {
                setIsLoading(false);
            }
        }

        void loadMemory();
    }, [loadSleepRecords]);

    const handleSubmit: FormSubmitHandler = async (event) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setError("");
        setMessage("");

        const accessToken = getAccessToken();
        const userId = getStoredUserId();

        if (!accessToken || !userId) {
            setError("睡眠記録の保存にはログインが必要です。");
            return;
        }

        const validation = validateSleepRecordForm({
            sleepMethodId,
            hours,
            minutes,
        });

        if (validation.error) {
            setError(validation.error);
            return;
        }

        setIsSubmitting(true);

        try {
            const { data, ok } = await createSleepRecord({
                accessToken,
                userId,
                sleepMethodId,
                sleepDate: getTodaySleepDate(),
                sleptMinutes: validation.sleptMinutes,
            });

            if (!ok || !data.sleepRecord) {
                setError(getApiErrorMessage(data, "睡眠記録の保存に失敗しました。"));
                return;
            }

            const loadedSleepRecords = await loadSleepRecords(accessToken);
            const isPersisted = loadedSleepRecords.some((sleepRecord) => sleepRecord.id === data.sleepRecord?.id);

            if (!isPersisted) {
                setError("保存レスポンスは返りましたが、DBの記録一覧に反映されていません。");
                return;
            }

            setHours("");
            setMinutes("");
            setSleepMethodId("");
            setMessage("睡眠記録を保存しました。");
        } catch {
            setError("通信に失敗しました。時間をおいてもう一度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        error,
        handleSubmit,
        hours,
        isLoading,
        isSubmitting,
        message,
        minutes,
        recommendedMessage: recommendedSleepMethodName
            ? `君へのおすすめは${recommendedSleepMethodName}じゃ`
            : "診断するとおすすめの睡眠法が表示されるぞ",
        setHours,
        setMinutes,
        setSleepMethodId,
        sleepMethodId,
        sleepMethods,
        sleepRecordViews,
    };
}
