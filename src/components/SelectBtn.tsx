import "./SelectBtn.css";

type Props = {
    text: string;
    imgSrc: string;
};

export default function SelectBtn({ text, imgSrc }: Props) {
    return (
        <>
            <div className="btn_wrap">
                <img src={imgSrc} alt="" />
                <p>{text}</p>
            </div>
        </>
    );
}
