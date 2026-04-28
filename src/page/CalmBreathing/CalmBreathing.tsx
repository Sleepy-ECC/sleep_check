import "./CalmBreathing.css";

import { useState } from "react";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";

function CalmBreathing() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="top_title">
                <h2>あなたにおすすめの睡眠法は、</h2>
                <h1>4-7-8呼吸法</h1>
            </div>
            <div className="info_msg">
                <h2>4-7-8呼吸法とは</h2>
                <p>
                    4-7-8呼吸法は、米国の医師アンドルー・ワイルが提唱した、
                    副交感神経を優位にして心身をリラックスさせる呼吸法じゃ。
                </p>
                <p>
                    <span>「4秒吸って、7秒止め、8秒かけて吐く」を4回繰り返すだけ</span>
                    で、 60秒で眠りを誘い、ストレスや不安を軽減する効果が期待されておるぞ。{" "}
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
                                楽な姿勢を取ったら、口を閉じるんじゃ。 その状態で、
                                <span>鼻から静かに4秒かけて息を吸う</span>
                                のじゃ。
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ2</h2>
                            <p>次は7秒間、息を止めるのじゃ。 </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ3</h2>
                            <p>
                                最後に口から「シュー」と音を立てながら、
                                <span>8秒かけて息を全て吐き出すぞ。</span>
                                それを繰り返すと眠れるのじゃ
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

export default CalmBreathing;
