import "./Pmr.css";
import { useState } from "react";
import HituImg from "../../components/HituImg/HituImg";
import Btn from "../../components/Btn/Btn";

function Pmr() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="top_title">
                <h2>あなたにおすすめの睡眠法は、</h2>
                <h1>漸進的筋弛緩法</h1>
            </div>
            <div className="info_msg">
                <h2>漸進的筋弛緩法とは</h2>
                <p>
                    漸進的筋弛緩法は、筋肉に意図的に力を入れた後、
                    <span>一気に脱力して緊張と弛緩の差を感じる</span>
                    ことで、
                </p>
                <p>心身をリラックスさせる手法なのじゃ。 </p>
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
                                まずは両手を握りしめ、ひじを曲げて力を入れ、一気に脱力するぞ
                                そして肩をすくめるように引き上げ、耳に近づけて力を入れ、一気に脱力じゃ
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ2</h2>

                            <p>
                                次に目を強くつぶり、口をすぼめて顔全体にシワを寄せ、脱力じゃ
                                そして足を伸ばし、つま先を立てて太ももやふくらはぎに力を入れ、一気に脱力じゃ
                            </p>
                        </div>
                        <div className="step_wrap">
                            <h2>ステップ3</h2>
                            <p>最後は全身に力を入れ、その後15〜30秒リラックスすると眠れるぞ~</p>
                        </div>
                    </div>
                    <Btn text="閉じる" color="gray" onClick={() => setIsOpen(false)} />
                </div>
            )}
        </>
    );
}

export default Pmr;
