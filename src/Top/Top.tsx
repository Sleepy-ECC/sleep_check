import "./Top.css";
import Hituji from "../assets/hituzi.png";
import { Link } from "@tanstack/react-router";

function Top() {
    return (
        <>
            <div>
                <p className="head_msg">1日お疲れ様じゃ</p>
                <img src={Hituji} alt="" />
                <Link to="/Diagnosis">診断するかい？</Link>
                <br />
                <Link to="/Choice">選ぶこともできんでー</Link>
            </div>
        </>
    );
}

export default Top;
