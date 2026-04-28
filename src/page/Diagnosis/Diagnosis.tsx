import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import "./Diagnosis.css";
import HituImg from "../../components/HituImg/HituImg";
import MsgBox from "../../components/MsgBox/MsgBox";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import Btn from "../../components/Btn/Btn";

function Diagnosis() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
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

    const getResultIndex = (answers: number[]) => {
        return answers.reduce((acc, val) => acc * 2 + val, 0);
    };

    const resultPages = [
        "/Kari2",
        "/Kari3",
        "/Shuffle",
        "/Kari4",
        "/Kari5",
        "/Beigun",
        "/Kari6",
        "/Kari8",
    ];

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
                onSelect={(index) => {
                    const newAnswers = [...answers, index];
                    setAnswers(newAnswers);

                    if (isLast) {
                        const resultIndex = getResultIndex(newAnswers);
                        const path = resultPages[resultIndex];

                        navigate({ to: path });
                    } else {
                        setStep((prev) => prev + 1);
                    }
                }}
            />

            <div className="btn_group">
                <Btn text="戻る" path="/" color="gray" />

                <Btn
                    text={isLast ? "診断" : "進む"}
                    color={isLast ? "yellow" : "black"}
                    onClick={() => {
                        if (isLast) {
                            const resultIndex = getResultIndex(answers);
                            const path = resultPages[resultIndex];

                            navigate({ to: path });
                        } else {
                            setStep((prev) => prev + 1);
                        }
                    }}
                />
            </div>
        </>
    );
}

export default Diagnosis;
