import { Link } from "@tanstack/react-router";
import "./Diagnosis.css";
import HituImg from "../../components/HituImg/HituImg";

function Diagnosis() {
    return (
        <>
            <div>
                <h2 className="title">診断を始めるぞう</h2>
                <HituImg type="normal" />
                <Link to="/">Top</Link>
            </div>
        </>
    );
}

export default Diagnosis;
