import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import "./Diagnosis.css";
import HituImg from "../../components/HituImg/HituImg";
import MsgBox from "../../components/MsgBox/MsgBox";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import Btn from "../../components/Btn/Btn";

function Diagnosis() {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    type Question = {
        text: string;
        choices: {
            text: string;
            type: React.ComponentProps<typeof HituImg>["type"];
        }[];
    };

    const questions: Question[] = [
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
                { text: "まぁいいや〜", type: "wakeup" },
            ],
        },
    ];

    const isLast = step === questions.length - 1;

    return (
        <>
            <div className="title">
                <MsgBox text="診断を始めるぞう" />
                <HituImg type="normal" />
            </div>
            <QuestionBox
                question={questions[step]}
                step={step}
                total={questions.length}
                onSelect={() => {
                    if (isLast) {
                        navigate({ to: "/Shuffle" });
                    } else {
                        setStep((prev) => prev + 1);
                    }
                }}
            />{" "}
            <div className="btn_group">
                <Btn
                    text="戻る"
                    path=""
                    color="gray"
                    onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                />
                <Btn
                    text={isLast ? "診断" : "進む"}
                    color={isLast ? "yellow" : "black"}
                    onClick={() => {
                        if (isLast) {
                            navigate({ to: "/Shuffle" });
                        } else {
                            setStep((prev) => prev + 1);
                        }
                    }}
                />{" "}
            </div>
        </>
    );
}

export default Diagnosis;
