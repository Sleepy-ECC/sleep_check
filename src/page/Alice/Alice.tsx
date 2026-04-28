import "./Alice.css";
import { useState } from "react";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";

function Alice() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="top_title">
                <h2>あなたにおすすめの睡眠法は、</h2>
                <h1>アリス式睡眠法</h1>
            </div>
            <div className="info_msg">
                <h2>アリス式睡眠法とは</h2>
                <p>
                    アリス式睡眠法とは、布団の上であぐらをかいて座り、
                    目を閉じてゆっくり呼吸をして、
                    <span>脳内に浮かぶイメージ をぼんやりと見続ける</span>
                    ことで、
                </p>
                <p>脳の雑念を取り除き、 自然な入眠を誘う睡眠法じゃ。</p>
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
                                まずは布団の上で座り、上半身の力を抜いて
                                <span>リラックスした状態</span>
                                を作るんじゃ
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ2</h2>
                            <p>
                                そしたら目を閉じて、 ゆっくり深呼吸をしながら、
                                <span>頭に思い浮かぶ 映像やイメージを想像</span>
                                するのじゃ
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ3</h2>
                            <p>
                                少し
                                <span>ウトウトしてきたら横になって眠る</span>
                                のじゃ！
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

export default Alice;
