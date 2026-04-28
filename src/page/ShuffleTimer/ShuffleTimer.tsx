import "./ShuffleTimer.css";
import icon from "../../assets/question_icon.png";
import Btn from "../../components/Btn/Btn";

function ShuffleTimer() {
    return (
        <>
            <picture className="icon_wrap">
                <img src={icon} alt="" />
            </picture>
            <div className="set_time">
                <h2>設定時間</h2>
                <span>60　:　00</span>
            </div>
            <div className="timer">
                <h2>60:00</h2>
            </div>
            <div className="btns">
                <Btn text="終了" color="gray" />
                <Btn text="スタート" color="yellow" />
            </div>
        </>
    );
}

export default ShuffleTimer;
