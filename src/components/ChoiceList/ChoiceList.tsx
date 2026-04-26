import "./ChoiceList.css";
import { Link } from "@tanstack/react-router";
import icon from "../../assets/question_icon.png";

type Props = {
    text: string;
    path: string;
    index: number;
};

function ChoiceList({ text, path, index }: Props) {
    return (
        <>
            <Link to={path} className="list_wrap" key={index}>
                <h2>{text}</h2>
                <img src={icon} alt="" />
            </Link>
        </>
    );
}

export default ChoiceList;
