import "./Btn.css";
import { Link } from "@tanstack/react-router";

type Props = {
    text: string;
    path?: string;
    color: "gray" | "black" | "yellow";
    onClick?: () => void;
};

export default function Btn({ text, path, color, onClick }: Props) {
    if (onClick) {
        return (
            <button className={`btn ${color}`} onClick={onClick}>
                {text}
            </button>
        );
    }
    return (
        <Link to={path || "/"} className={`btn ${color}`}>
            {text}
        </Link>
    );
}
