import SelectBtn from "../SelectBtn/SelectBtn";
import "./QuestionBox.css";

export default function QuestionBox() {
    return (
        <div className="wrapper">
            <h3>今どちらに近いんじゃ</h3>
            <div className="select_btn_wrap">
                <SelectBtn text="頭がうるさい" type="headache" />
                <SelectBtn text="体が落ち着かない" type="tremble" />
            </div>
            <div className="dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}
