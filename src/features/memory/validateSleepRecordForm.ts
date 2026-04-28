type ValidateSleepRecordFormParams = {
    sleepMethodId: string;
    hours: string;
    minutes: string;
};

type ValidateSleepRecordFormResult = {
    error: string;
    sleptMinutes: number;
};

export function validateSleepRecordForm({
    sleepMethodId,
    hours,
    minutes,
}: ValidateSleepRecordFormParams): ValidateSleepRecordFormResult {
    const hoursValue = Number(hours || 0);
    const minutesValue = Number(minutes || 0);
    const sleptMinutes = hoursValue * 60 + minutesValue;

    if (!sleepMethodId) {
        return {
            error: "睡眠法を選択してください。",
            sleptMinutes,
        };
    }

    if (
        !Number.isInteger(hoursValue) ||
        !Number.isInteger(minutesValue) ||
        hoursValue < 0 ||
        minutesValue < 0 ||
        minutesValue > 59 ||
        sleptMinutes <= 0
    ) {
        return {
            error: "睡眠時間を入力してください。",
            sleptMinutes,
        };
    }

    return {
        error: "",
        sleptMinutes,
    };
}
