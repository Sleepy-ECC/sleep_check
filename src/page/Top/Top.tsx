import "./Top.css";
import { Link } from "@tanstack/react-router";
import Hituji from "../../assets/hituzi.png";
import SelectBtn from "../../components/SelectBtn/SelectBtn";
import MsgBox from "../../components/MsgBox/MsgBox";
import HituImg from "../../components/HituImg/HituImg";

function Top() {
    return (
        <>
            <div className="wrapper">
                <MsgBox text="1日お疲れ様じゃ" />
                <HituImg type="normal" />
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
