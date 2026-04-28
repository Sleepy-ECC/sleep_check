import "./Beigun.css";
import { useState } from "react";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";

function Beigun() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="top_title">
                <h2>あなたにおすすめの睡眠法は、</h2>
                <h1>米軍式睡眠法</h1>
            </div>
            <div className="info_msg">
                <h2>米軍式睡眠法とは</h2>
                <p>
                    米軍式睡眠法は、 戦時中のパイロットがどんな環境でも
                    2分以内に眠れるよう開発された、
                    <span>筋肉の弛緩と心理的リラックスを 組み合わせた </span>
                    手法 なのじゃ。
                </p>
                <p>
                    顔から足先まで順に力を抜き、
                    <span>最終的に思考を停止させることで入眠を促すのじゃ。</span>
                </p>
                <HituImg type="explanation" />
            </div>
            <div className="btns">
                <Btn text="最初に戻る" path="/Diagnosis" color="gray" />
                <Btn text="これにする" color="yellow" onClick={() => setIsOpen(true)} />
            </div>
            {isOpen && (
                <div className="modal">
                    <div className="modal_content">
                        <div className="step_wrap">
                            <h2>ステップ1</h2>
                            <p>
                                顔の
                                <span>筋肉をリラックス</span>
                                させ、肩と腕の力を抜くのじゃ
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ2</h2>
                            <p>
                                息を吐いて胸・お腹の力を抜き、脚の
                                <span>力を抜く</span>
                                んじゃ
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ3</h2>
                            <p>
                                そして
                                <span>心を無にする</span>
                                のじゃ！
                                <br />
                                すると眠れるぞ！
                            </p>
                        </div>
                        <HituImg type="betSleep" />
                    </div>
                    <Btn text="閉じる" color="gray" onClick={() => setIsOpen(false)} />
                </div>
            )}
        </>
    );
}

export default Beigun;
