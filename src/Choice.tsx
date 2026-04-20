import { Link } from "@tanstack/react-router";
import "./Choice.css";

function Choice() {
    return (
        <div>
            <p>睡眠法を選んでね</p>
            <Link to="/">Topに戻るのかな？</Link>
            <br />
            <Link to="/Shuffle">選べるわよ</Link>
        </div>
    );
}

export default Choice;
