import HituImg from "../HituImg/HituImg";
import "./SelectBtn.css";

type Props = {
    text: string;
    type: React.ComponentProps<typeof HituImg>["type"];
};

export default function SelectBtn({ text, type }: Props) {
    return (
        <>
            <div className="btn_wrap">
                <HituImg type={type} />
                <p>{text}</p>
            </div>
        </>
    );
}
