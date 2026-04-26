import "./Btn.css";
import { Link } from "@tanstack/react-router";

type Props = {
    text: string;
    path: string;
    color: "gray" | "black" | "yellow";
};

export default function Btn({ text, path, color }: Props) {
    return (
        <Link to={path} className={`btn ${color}`}>
            {text}
        </Link>
    );
}
