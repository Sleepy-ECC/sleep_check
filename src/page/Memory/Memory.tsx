import "./Memory.css";
import MsgBox from "../../components/MsgBox/MsgBox";
import HituImg from "../../components/HituImg/HituImg";
import MemoryView from "../../components/MemoryView/MemoryView";
import { useMemory } from "../../hooks/useMemory";

function Memory() {
    const {
        error,
        handleSubmit,
        hours,
        isLoading,
        isSubmitting,
        message,
        minutes,
        recommendedMessage,
        setHours,
        setMinutes,
        setSleepMethodId,
        sleepMethodId,
        sleepMethods,
        sleepRecordViews,
    } = useMemory();

    return (
        <div className="memory_wrap">
            <div className="memory_title">
                <h1>睡眠記録</h1>
            </div>
            <form className="sleep_input" onSubmit={handleSubmit}>
                <h2>睡眠法</h2>
                <select value={sleepMethodId} onChange={(event) => setSleepMethodId(event.target.value)}>
                    <option value="">-----</option>
                    {sleepMethods.map((sleepMethod) => (
                        <option key={sleepMethod.id} value={sleepMethod.id}>
                            {sleepMethod.name}
                        </option>
                    ))}
                </select>
                <h2>睡眠時間</h2>
                <div className="time_input">
                    <input
                        type="number"
                        min="0"
                        step="1"
                        placeholder="0"
                        value={hours}
                        onChange={(event) => setHours(event.target.value)}
                    />
                    <p>:</p>
                    <input
                        type="number"
                        min="0"
                        max="59"
                        step="1"
                        placeholder="0"
                        value={minutes}
                        onChange={(event) => setMinutes(event.target.value)}
                    />
                </div>
                <div className="time_text">
                    <p>時間</p>
                    <p>分</p>
                </div>
                {error && <p className="memory_status error">{error}</p>}
                {message && <p className="memory_status success">{message}</p>}
                <button className="btn yellow" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "保存中" : "日記を保存"}
                </button>
            </form>
            <div className="hituji_box">
                <MsgBox text={recommendedMessage} />
                <HituImg type="smile" />
            </div>
            <div className="memory_view">
                <h2>記録一覧</h2>
                <div>
                    {isLoading && <p className="memory_empty">読み込み中...</p>}
                    {!isLoading && sleepRecordViews.length === 0 && <p className="memory_empty">記録はまだありません。</p>}
                    {sleepRecordViews.map((sleepRecord) => (
                        <MemoryView
                            key={sleepRecord.id}
                            text={sleepRecord.methodName}
                            totalTime={sleepRecord.sleptTimeText}
                            time={sleepRecord.sleepDateText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Memory;
