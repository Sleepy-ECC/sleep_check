import "./Top.css";
import { Link, useNavigate } from "@tanstack/react-router";
import SelectBtn from "../../components/SelectBtn/SelectBtn";
import MsgBox from "../../components/MsgBox/MsgBox";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";
import { getAccessToken } from "../../utils/authStorage";

function Top() {
    const navigate = useNavigate();

    const handleMemoryClick = async () => {
        await navigate({ to: getAccessToken() ? "/Memory" : "/login" });
    };

    return (
        <>
            <div className="wrapper">
                <MsgBox text="1日お疲れ様じゃ" />
                <HituImg type="normal" />
                <div className="select_btns">
                    <Link to="/Diagnosis">
                        <SelectBtn text="診断で選ぶ" type="uranai" />
                    </Link>

                    <Link to="/Choice">
                        <SelectBtn text="自分で選ぶ" type="choice" />
                    </Link>
                </div>
                <div className="foot_link">
                    <Btn text="睡眠記録を確認" color="yellow" onClick={handleMemoryClick} />
                    <Link to="/login">ログイン・新規登録はこちら</Link>
                </div>
            </div>
        </>
    );
}

export default Top;
