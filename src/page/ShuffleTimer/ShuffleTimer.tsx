import "./ShuffleTimer.css";
import icon from "../../assets/question_icon.png";
import Btn from "../../components/Btn/Btn";
import GraphButton from "../../components/GraphButton/GraphButton";
import HituImg from "../../components/HituImg/HituImg";
import { useState } from "react";
import { useCognitiveShuffleSpeech } from "../../hooks/useCognitiveShuffleSpeech";
import { formatTimerTime, useCountdownTimer } from "../../hooks/useCountdownTimer";
import { useVoicevoxSpeech } from "../../hooks/useVoicevoxSpeech";
import { VOICEVOX_SPEAKERS } from "../../utils/voicevoxSpeakers";

const TIMER_SECONDS = 60 * 60;
const TIMER_START_SPEAKER = VOICEVOX_SPEAKERS.mochikoNormal;
const TIMER_START_MESSAGE = "認知シャッフル睡眠法を始めます";

function ShuffleTimer() {
    const [isOpen, setIsOpen] = useState(false);
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
            <picture className="icon_wrap" onClick={() => setIsOpen(true)}>
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
                <GraphButton />
            </div>
            {isOpen && (
                <div className="modal">
                    <div className="modal_content">
                        <div className="step_wrap">
                            <h2>ステップ1</h2>
                            <p>
                                スタートを押すと、猫、時計、電車…と脈絡のない単語が10秒ごとに流れてくるんじゃ。{" "}
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ2</h2>
                            <p>
                                <span>その単語を頭の中で想像するのじゃ！</span>
                                例えば猫なら「道端で見た猫」「ご飯を食べる猫」「ペットの猫」などなんでもよいぞ。{" "}
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ3</h2>
                            <p>そしたら自然と寝れるのじゃ！ </p>
                        </div>
                        <HituImg type="betSleep" />
                    </div>
                    <Btn text="閉じる" color="gray" onClick={() => setIsOpen(false)} />
                </div>
            )}
        </>
    );
}

export default ShuffleTimer;
