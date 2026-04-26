import HituImg from "../HituImg/HituImg";
import "./SelectBtn.css";

type Props = {
    text: string;
    type: React.ComponentProps<typeof HituImg>["type"];
    onClick?: () => void;
};

export default function SelectBtn({ text, type, onClick }: Props) {
    return (
        <>
            <div className="btn_wrap" onClick={onClick}>
                <HituImg type={type} />
                <p>{text}</p>
            </div>
        </>
    );
}
