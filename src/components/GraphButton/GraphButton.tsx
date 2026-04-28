import { useNavigate } from "@tanstack/react-router";
import Btn from "../Btn/Btn";
import { getAccessToken } from "../../utils/authStorage";

type Props = {
    text?: string;
};

function GraphButton({ text = "グラフへ" }: Props) {
    const navigate = useNavigate();

    const handleClick = async () => {
        await navigate({ to: getAccessToken() ? "/Memory" : "/login" });
    };

    return <Btn text={text} color="yellow" onClick={handleClick} />;
}

export default GraphButton;
