import { StartViewProps } from "../models/layout"
import { Form } from "./Form"

export function StartView({ setIsResult, setFeeling, setIcon }: StartViewProps) {
    return (
        <>
            <div>
                {/*Näytetään otsikko ja lomakekomponentti: */}
                <h4>Sentiment analysis</h4>
                <Form
                    setIsResult={setIsResult}
                    setFeeling={setFeeling}
                    setIcon={setIcon}
                />
                <p className="read-the-docs">
                    This application assesses the overall sentiment of the text you enter.
                </p>
            </div>
        </>
    )
}