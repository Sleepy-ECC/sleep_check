import "./MemoryView.css";

type Props = {
    text: string;
    time: string;
    totalTime: string;
};

function MemoryView({ text, time, totalTime }: Props) {
    return (
        <>
            <div className="view_wrap">
                <div className="view_title">
                    <h2>{text}</h2>
                    <p>{time}</p>
                </div>
                <h3>{totalTime}</h3>
            </div>
        </>
    );
}

export default MemoryView;
