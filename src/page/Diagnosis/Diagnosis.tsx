import "./Diagnosis.css";
import HituImg from "../../components/HituImg/HituImg";
import MsgBox from "../../components/MsgBox/MsgBox";

function Diagnosis() {
    return (
        <>
            <div className="title">
                <MsgBox text="診断を始めるぞう"/>
                <HituImg type="normal" />
            </div>
        </>
    );
}

export default Diagnosis;
