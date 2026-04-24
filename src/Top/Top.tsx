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
                <div className="select_btns">
                    <Link to="/Diagnosis">
                        <SelectBtn text="診断で選ぶ" imgSrc={Hituji} />
                    </Link>

                    <Link to="/Choice">
                        <SelectBtn text="自分で選ぶ" imgSrc={Hituji} />
                    </Link>
                </div>
                <div className="foot_link">
                    <Link to="/">ログイン・新規登録はこちら</Link>
                </div>
            </div>
        </>
    );
}

export default Top;
