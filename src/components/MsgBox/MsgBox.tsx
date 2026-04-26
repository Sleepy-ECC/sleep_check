import "./MsgBox.css";

type Props = {
    text: string;
};

export default function MsgBox({ text }: Props) {
    return (
        <section className="head_msg">
            <h2>{text}</h2>
        </section>
    );
}
