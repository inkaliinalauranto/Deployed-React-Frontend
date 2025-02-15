import { EndViewProps } from "../models/layout"

export function EndView({ feeling, icon, setIsResult }: EndViewProps) {
    return (
        <>
            <div className="card">
                <p>
                    Your sentiment is {feeling}
                </p>
                <img src={icon} className="logo react" alt="Positive logo" />
                <button onClick={() => { setIsResult(false) }}>Back</button>
            </div>
        </>
    )
}