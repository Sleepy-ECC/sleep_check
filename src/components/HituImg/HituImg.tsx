import normalHituji from "../../assets/hituzi.png";
import supriseHituji from "../../assets/surprise_hituji.png";

type Props = {
    type: "normal" | "suprise";
};

export default function HituImg({ type }: Props) {
    const imgMap = {
        normal: normalHituji,
        suprise: supriseHituji,
    };

    return (
        <picture>
            <img src={imgMap[type]} alt="" />
        </picture>
    );
}
