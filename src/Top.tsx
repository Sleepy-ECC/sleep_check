import "./Top.css";
import { Link } from "@tanstack/react-router";

function Top() {
    return (
        <div>
            <p>今日はどっちにしますか？</p>
            <Link to="/Diagnosis">Diagnosis</Link>
            <br />
            <Link to="/About">Choice</Link>
        </div>
    );
}

export default Top;
