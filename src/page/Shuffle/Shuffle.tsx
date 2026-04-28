import "./Shuffle.css";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";

function Shuffle() {
    return (
        <>
            <div className="top_title">
                <h2>あなたにおすすめの睡眠法は、</h2>
                <h1>認知睡眠シャッフル法</h1>
            </div>
            <div className="info_msg">
                <h2>認知睡眠シャッフル法とは</h2>
                <p>
                    カナダの心理学者リュック・ボードウィン博士が考案した、
                    <span>
                        関連のない言葉を次々と頭に思い浮かべることで、 脳の分析的な思考を停止させ、
                    </span>
                    入眠を促す心理テクニックじゃ。
                </p>
                <p>
                    不安や悩みで眠れない夜に、
                    <span>脳をリラックス状態へ</span>
                    導く効果が期待できるぞ。
                </p>
                <HituImg type="explanation" />
            </div>
            <div className="btns">
                <Btn text="最初に戻る" path="/" color="gray" />
                <Btn text="これにする" color="yellow" path="/ShuffleTimer" />
            </div>
        </>
    );
}

export default Shuffle;
