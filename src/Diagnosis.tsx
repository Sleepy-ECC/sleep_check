import { Link } from "@tanstack/react-router";
import "./Diagnosis.css";

function Diagnosis() {
    return (
        <div>
            <p>診断、していく？</p>
            <Link to="/">Top</Link>
            <br />
            <Link to="/Shuffle">診断結果はこちらよ</Link>
        </div>
    );
}

export default Diagnosis;
