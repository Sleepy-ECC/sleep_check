import "./ShuffleTimer.css";
import icon from "../../assets/question_icon.png";
import Btn from "../../components/Btn/Btn";
import { useCognitiveShuffleSpeech } from "../../hooks/useCognitiveShuffleSpeech";
import { formatTimerTime, useCountdownTimer } from "../../hooks/useCountdownTimer";
import { useVoicevoxSpeech } from "../../hooks/useVoicevoxSpeech";
import { VOICEVOX_SPEAKERS } from "../../utils/voicevoxSpeakers";

const TIMER_SECONDS = 60 * 60;
const TIMER_START_SPEAKER = VOICEVOX_SPEAKERS.mochikoNormal;
const TIMER_START_MESSAGE = "認知シャッフル睡眠法を始めます";

function ShuffleTimer() {
    const { remainingTime, isRunning, start } = useCountdownTimer(TIMER_SECONDS);
    const { speak } = useVoicevoxSpeech();
    useCognitiveShuffleSpeech({
        isRunning,
        speaker: TIMER_START_SPEAKER,
    });

    const handleStart = async () => {
        if (isRunning) return;

        start();

        try {
            await speak({
                text: TIMER_START_MESSAGE,
                speaker: TIMER_START_SPEAKER,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <picture className="icon_wrap">
                <img src={icon} alt="" />
            </picture>
            <div className="set_time">
                <h2>設定時間</h2>
                <span>{formatTimerTime(TIMER_SECONDS)}</span>
            </div>
            <div className="timer">
                <h2>{remainingTime}</h2>
            </div>
            <div className="btns">
                <Btn text="終了" color="gray" />
                <Btn text="スタート" color="yellow" onClick={handleStart} />
            </div>
        </>
    );
}

export default ShuffleTimer;
