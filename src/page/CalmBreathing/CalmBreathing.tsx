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
                    副交感神経を優位にして心身をリラックスさせる呼吸法なのじゃ。
                    「4秒吸って、7秒止め、8秒かけて吐く」を4回繰り返すだけで、
                    60秒で眠りを誘い、ストレスや不安を軽減する効果が期待されておるぞ。{" "}
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

export default CalmBreathing;
