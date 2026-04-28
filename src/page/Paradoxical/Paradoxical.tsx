import "./Paradoxical.css";
import { useState } from "react";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";

function Paradoxical() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="top_title">
                <h2>あなたにおすすめの睡眠法は、</h2>
                <h1>逆説的意図</h1>
            </div>
            <div className="info_msg">
                <h2>逆説的意図とは</h2>
                <p>
                    逆説的意図とは、無理に眠ろうとするのではなく、 あえて
                    <span>「眠らずに起きていよう」と意識する</span>
                    ことで、
                </p>
                <p>睡眠へのプレッシャーを減らし、 自然な眠気を引き出す睡眠法じゃ。</p>{" "}
                <HituImg type="explanation" />
            </div>
            <div className="btns">
                <Btn text="最初に戻る" path="/" color="gray" />
                <Btn text="これにする" color="yellow" onClick={() => setIsOpen(true)} />
            </div>
            {isOpen && (
                <div className="modal">
                    <div className="modal_content">
                        <div className="step_wrap">
                            <h2>ステップ1</h2>
                            <p>
                                まずは布団に入り、
                                <span>無理に眠ろうとしない</span>
                                ことを意識するんじゃ
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ2</h2>
                            <p>
                                目を閉じたまま、
                                <span>「まだ起きていよう」と軽く考える</span>
                                のじゃ
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ3</h2>
                            <p>
                                そのままリラックスしていると、
                                <span>自然と眠気が訪れる</span>
                                ので、流れに任せて眠るんじゃ！
                            </p>
                        </div>{" "}
                        <HituImg type="betSleep" />
                    </div>
                    <Btn text="閉じる" color="gray" onClick={() => setIsOpen(false)} />
                </div>
            )}
        </>
    );
}

export default Paradoxical;
