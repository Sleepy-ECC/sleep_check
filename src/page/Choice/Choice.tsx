// import { Link } from "@tanstack/react-router";
import "./Choice.css";
import ChoiceList from "../../components/ChoiceList/ChoiceList";
import Btn from "../../components/Btn/Btn";

type Select = {
    text: string;
    path: string;
};

const selects: Array<Select> = [
    { text: "認知シャッフル睡眠法", path: "/Shuffle" },
    { text: "米軍式睡眠法", path: "/Beigun" },
    { text: "4-7-8呼吸法", path: "/CalmBreathing" },
    { text: "アリス式睡眠法", path: "/Alice" },
    { text: "イメージ誘導法", path: "/ImageRelax" },
    { text: "漸進的筋弛緩法", path: "/Pmr" },
    { text: "ホワイトノイズ", path: "/WhiteNoise" },
    { text: "逆説的意図", path: "/Paradoxical" },
];

function Choice() {
    return (
        <>
            <div className="choice_lists">
                {selects.map((item, index) => (
                    <ChoiceList key={item.path} text={item.text} path={item.path} index={index} />
                ))}
            </div>
            <div className="back_btn">
                <Btn text="戻る" path="/" color="gray" />
            </div>
        </>
    );
}

export default Choice;
