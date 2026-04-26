// import { Link } from "@tanstack/react-router";
import "./Choice.css";
import ChoiceList from "../../components/ChoiceList/ChoiceList";

type Select = {
    text: string;
    path: string;
};

const selects: Array<Select> = [
    { text: "認知シャッフル睡眠法", path: "/Shuffle" },
    { text: "米軍式睡眠法", path: "/" },
    { text: "4-7-8呼吸法", path: "/" },
    { text: "アリス式睡眠法", path: "/" },
    { text: "イメージ誘導法", path: "/" },
    { text: "漸進的筋弛緩法", path: "/" },
    { text: "ホワイトノイズ", path: "/" },
    { text: "逆説的意図", path: "/" },
];

function Choice() {
    return (
        <div className="choice_lists">
            {selects.map((item, index) => (
                <ChoiceList text={item.text} path={item.path} index={index} />
            ))}
        </div>
    );
}

export default Choice;
