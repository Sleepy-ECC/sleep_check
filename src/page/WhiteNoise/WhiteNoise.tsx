import "./WhiteNoise.css";
import { useState } from "react";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";

function WhiteNoise() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="top_title">
                <h2>あなたにおすすめの睡眠法は、</h2>
                <h1>ホワイトノイズ</h1>
            </div>

            <div className="info_msg">
                <h2>ホワイトノイズとは</h2>
                <p>
                    ホワイトノイズとは、
                    <span>一定で単調な音を流し続ける</span>
                    ことで、
                </p>
                <p>
                    周囲の雑音をかき消し、
                    <span>リラックスしやすい環境を作る睡眠法</span>
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
                                <span>リラックスした姿勢になる</span>
                                のじゃ
                            </p>
                        </div>

                        <div className="step_wrap">
                            <h2>ステップ2</h2>
                            <p>
                                次に、
                                <span>ホワイトノイズ（雨音や風の音など）を流す</span>
                                のじゃ
                            </p>
                        </div>

                        <div className="step_wrap">
                            <h2>ステップ3</h2>
                            <p>
                                音に身を任せて、
                                <span>余計な音や思考を気にせず過ごす</span>
                                と、 自然と眠くなってくるぞ
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

export default WhiteNoise;
