import { useState } from "react";
import "./Diagnosis.css";
import HituImg from "../../components/HituImg/HituImg";
import MsgBox from "../../components/MsgBox/MsgBox";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import Btn from "../../components/Btn/Btn";

function Diagnosis() {
    const [step, setStep] = useState(0);

    const questions = [
        {
            text: "今どちらに近いんじゃ？",
            choices: [
                { text: "頭がうるさい", type: "headache" },
                { text: "体が落ち着かない", type: "tremble" },
            ],
        },
        {
            text: "次はどうしてみるのじゃ？",
            choices: [
                { text: "イメージする", type: "normal" },
                { text: "手順に従う", type: "normal" },
            ],
        },
        {
            text: "最後はどんな気持ちじゃ？",
            choices: [
                { text: "寝ないと！", type: "surprise" },
                { text: "まぁいいや〜", type: "normal" },
            ],
        },
    ];

    return (
        <>
            <div className="title">
                <MsgBox text="診断を始めるぞう" />
                <HituImg type="normal" />
            </div>
            <QuestionBox />
            <div className="btn_group">
                <Btn text="戻る" path="" color="gray" />
                <Btn text="進む" path="" color="black" />
            </div>
        </>
    );
}

export default Diagnosis;
