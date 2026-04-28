import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import "./Diagnosis.css";
import HituImg from "../../components/HituImg/HituImg";
import MsgBox from "../../components/MsgBox/MsgBox";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import Btn from "../../components/Btn/Btn";
import { saveRecommendedSleepMethodName } from "../../utils/recommendedSleepMethodStorage";

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
                { text: "イメージする", type: "image" },
                { text: "手順に従う", type: "procedure" },
            ],
        },
        {
            text: "最後はどんな気持ちじゃ？",
            choices: [
                { text: "寝ないと！", type: "sleep" },
                { text: "まぁいいや〜", type: "wakeup" },
            ],
        },
    ];

    const isLast = step === questions.length - 1;

    const getResultIndex = (answers: number[]) => {
        return answers.reduce((acc, val) => acc * 2 + val, 0);
    };

    const resultPages = [
        "/Paradoxical",
        "/Alice",
        "/Shuffle",
        "/ImageRelax",
        "/CalmBreathing",
        "/Beigun",
        "/Pmr",
        "/WhiteNoise",
    ];

    const resultMethodNames = [
        "逆説的意図",
        "アリス式睡眠法",
        "認知睡眠シャッフル法",
        "イメージ誘導法",
        "4-7-8呼吸法",
        "米軍式睡眠法",
        "漸進的筋弛緩法",
        "ホワイトノイズ",
    ];

    const navigateToResult = (selectedAnswers: number[]) => {
        const resultIndex = getResultIndex(selectedAnswers);
        const path = resultPages[resultIndex];
        const methodName = resultMethodNames[resultIndex];

        if (methodName) {
            saveRecommendedSleepMethodName(methodName);
        }

        navigate({ to: path });
    };

    const imgPaths = ["normal", "surprise", "unazuki"] as const;

    return (
        <>
            <div className="title">
                <MsgBox text="診断を始めるぞう" />
                <HituImg type={imgPaths[step]} />
            </div>

            <QuestionBox
                question={questions[step]}
                step={step}
                total={questions.length}
                onSelect={(index) => {
                    const newAnswers = [...answers, index];
                    setAnswers(newAnswers);

                    if (isLast) {
                        navigateToResult(newAnswers);
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
                            navigateToResult(answers);
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
