import "./Memory.css";
import Btn from "../../components/Btn/Btn";
import MsgBox from "../../components/MsgBox/MsgBox";
import HituImg from "../../components/HituImg/HituImg";
import MemoryView from "../../components/MemoryView/MemoryView";

function Memory() {
    return (
        <div className="memory_wrap">
            <div className="memory_title">
                <h1>睡眠記録</h1>
            </div>
            <div className="sleep_input">
                <h2>睡眠法</h2>
                <select name="" id="">
                    <option value="">-----</option>
                    <option value="">認知睡眠シャッフル法</option>
                    <option value="">米軍式睡眠法</option>
                    <option value="">4-7-8呼吸法</option>
                    <option value="">アリス式睡眠法</option>
                    <option value="">イメージ誘導法</option>
                    <option value="">漸進的筋弛緩法</option>
                    <option value="">ホワイトノイズ</option>
                    <option value="">逆説的意図</option>
                </select>
                <h2>睡眠時間</h2>
                <div className="time_input">
                    <input type="number" placeholder="0" />
                    <p>:</p>
                    <input type="number" placeholder="0" />
                </div>
                <div className="time_text">
                    <p>時間</p>
                    <p>分</p>
                </div>
                <Btn text="日記を保存" color="yellow" />
            </div>
            <div className="hituji_box">
                <MsgBox text="君へのおすすめは4-7-8呼吸法じゃ" />
                <HituImg type="smile" />
            </div>
            <div className="memory_view">
                <h2>記録一覧</h2>
                <div>
                    <MemoryView text="認知睡眠シャッフル法" totalTime="7時間30分" time="4月28日" />
                    <MemoryView text="アリス式睡眠法" totalTime="6時間30分" time="4月27日" />{" "}
                    <MemoryView text="4-7-8呼吸法" totalTime="8時間30分" time="4月26日" />{" "}
                    <MemoryView text="ホワイトノイズ" totalTime="5時間30分" time="4月25日" />
                </div>
            </div>
        </div>
    );
}

export default Memory;
