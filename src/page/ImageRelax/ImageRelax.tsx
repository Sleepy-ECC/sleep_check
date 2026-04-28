import "./ImageRelax.css";
import { useState } from "react";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";
import GraphButton from "../../components/GraphButton/GraphButton";

function Beigun() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="top_title">
                <h2>あなたにおすすめの睡眠法は、</h2>
                <h1>イメージ誘導法</h1>
            </div>

            <div className="info_msg">
                <h2>イメージ誘導法とは</h2>
                <p>
                    イメージ誘導法とは、心の中で
                    <span>リラックスできる情景や映像を思い浮かべる</span>
                    ことで、
                </p>
                <p>
                    脳の緊張を和らげ、
                    <span>自然な眠気を引き出す睡眠法</span>
                    なのじゃ。
                </p>
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
                                <span>体の力を抜いてリラックス</span>
                                するんじゃ
                            </p>
                        </div>

                        <div className="step_wrap">
                            <h2>ステップ2</h2>
                            <p>
                                次に、
                                <span>静かな自然や安心できる風景を思い浮かべる</span>
                                のじゃ
                            </p>
                        </div>

                        <div className="step_wrap">
                            <h2>ステップ3</h2>
                            <p>
                                そのイメージをぼんやりと眺めながら、
                                <span>ゆったりした気持ちで過ごす</span>
                                と、 自然と眠くなってくるぞ
                            </p>
                        </div>

                        <HituImg type="betSleep" />
                    </div>

                    <div className="modal_actions">
                        <GraphButton />
                        <Btn text="閉じる" color="gray" onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Beigun;
