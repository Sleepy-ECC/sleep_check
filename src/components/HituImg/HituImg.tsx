import normalHituji from "../../assets/hituzi.png";
import supriseHituji from "../../assets/surprise_hituji.png";
import headacheHituji from "../../assets/headache_hituji.png";
import trembleHituji from "../../assets/tremble_hituji.png";
import sleepHituji from "../../assets/sleep_hituji.png";
import wakeupHituji from "../../assets/wakeup_hituji.png";

type Props = {
    type: "normal" | "suprise" | "headache" | "tremble" | "sleep" | "wakeup";
};

export default function HituImg({ type }: Props) {
    const imgMap = {
        normal: normalHituji,
        suprise: supriseHituji,
        headache: headacheHituji,
        tremble: trembleHituji,
        sleep: sleepHituji,
        wakeup: wakeupHituji,
    };

    return (
        <picture>
            <img src={imgMap[type]} alt="" />
        </picture>
    );
}
