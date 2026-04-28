import normalHituji from "../../assets/hituzi.png";
import surpriseHituji from "../../assets/surprise_hituji.png";
import headacheHituji from "../../assets/headache_hituji.png";
import trembleHituji from "../../assets/tremble_hituji.png";
import sleepHituji from "../../assets/sleep_hituji.png";
import wakeupHituji from "../../assets/wakeup_hituji.png";
import explanationHituji from "../../assets/explanation_hituji.png";
import betSleepHituji from "../../assets/bet_sleep_hituji.png";
import uranaiHituji from "../../assets/uranai_hituji.png";
import choiceHituji from "../../assets/choice_hituji.png";
import imageHituji from "../../assets/image_hituji.png";
import procedureHituji from "../../assets/procedure_hituji.png";
import unazukiHituji from "../../assets/unazuki_hituji.png";
import smileHituji from "../../assets/smile_hituji.png";

type Props = {
    type:
        | "normal"
        | "surprise"
        | "headache"
        | "tremble"
        | "sleep"
        | "wakeup"
        | "explanation"
        | "betSleep"
        | "uranai"
        | "choice"
        | "image"
        | "procedure"
        | "unazuki"
        | "smile";
};

export default function HituImg({ type }: Props) {
    const imgMap = {
        normal: normalHituji,
        surprise: surpriseHituji,
        headache: headacheHituji,
        tremble: trembleHituji,
        sleep: sleepHituji,
        wakeup: wakeupHituji,
        explanation: explanationHituji,
        betSleep: betSleepHituji,
        uranai: uranaiHituji,
        choice: choiceHituji,
        image: imageHituji,
        procedure: procedureHituji,
        unazuki: unazukiHituji,
        smile: smileHituji,
    };

    return (
        <picture>
            <img src={imgMap[type]} alt="" />
        </picture>
    );
}
