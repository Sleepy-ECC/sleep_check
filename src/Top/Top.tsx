import "./Top.css";
import { Link } from "@tanstack/react-router";

function Top() {
    return (
        <div>
            <p>今日はどっちにしますか？</p>
            <Link to="/Diagnosis">診断するかい？</Link>
            <br />
            <Link to="/Choice">選ぶこともできんでー</Link>
        </div>
    );
}

export default Top;
