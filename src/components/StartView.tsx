import { StartViewProps } from "../models/layout"
import { Form } from "./Form"

export function StartView({ setIsResult, setFeeling, setIcon }: StartViewProps) {
    return (
        <>
            <div>
                {/*Näytetään otsikko ja lomakekomponentti: */}
                <h6>Sentiment analysis</h6>
                <Form
                    setIsResult={setIsResult}
                    setFeeling={setFeeling}
                    setIcon={setIcon}
                />
            </div>
        </>
    )
}