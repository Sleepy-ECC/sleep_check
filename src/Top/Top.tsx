import "./Top.css";
import Hituji from "../assets/hituzi.png";
import { Link } from "@tanstack/react-router";
import SelectBtn from "../components/SelectBtn";

function Top() {
    return (
        <>
            <div className="wrapper">
                <section className="head_msg">
                    <h2>1日お疲れ様じゃ</h2>
                </section>
                <img src={Hituji} alt="" />
                <Link to="/Diagnosis">
                    <SelectBtn text="診断で選ぶ" imgSrc={Hituji} />
                </Link>

                <Link to="/Choice">選ぶこともできんでー</Link>
            </div>
        </>
    );
}

export default Top;
