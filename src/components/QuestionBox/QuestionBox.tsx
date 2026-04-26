import SelectBtn from "../SelectBtn/SelectBtn";
import "./QuestionBox.css";
import HituImg from "../HituImg/HituImg";

type Props = {
    question: {
        text: string;
        choices: { text: string; type: React.ComponentProps<typeof HituImg>["type"] }[];
    };
    step: number;
    total: number;
    onSelect: (index: number) => void;
};

export default function QuestionBox({ question, step, total, onSelect }: Props) {
    return (
        <div className="wrapper">
            <h3>{question.text}</h3>

            <div className="select_btn_wrap">
                {question.choices.map((choice, index) => (
                    <SelectBtn
                        key={index}
                        text={choice.text}
                        type={choice.type}
                        onClick={() => onSelect(index)}
                    />
                ))}{" "}
            </div>

            <div className="dots">
                {[...Array(total)].map((_, i) => (
                    <span key={i} className={`dot ${i === step ? "active" : ""}`} />
                ))}
            </div>
        </div>
    );
}
