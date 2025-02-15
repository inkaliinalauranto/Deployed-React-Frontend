import { useEffect, useState } from "react"
import positive from '../assets/positive.svg'
import negative from '../assets/negative.svg'
import neutral from '../assets/neutral.svg'
import { FormProps } from "../models/layout"

export function Form({ setIsResult, setFeeling, setIcon }: FormProps) {
    const [isDisabled, setIsDisabled] = useState(true)
    const [inputSentence, setInputSentence] = useState("")

    function getSentence(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setInputSentence("")
        setIsDisabled(true)
        setIsResult(true)
        // Arvotaan lauseen tunnelma, koska backendia ei vielä ole:
        const feelings = ["negative", "neutral", "positive"]
        const icons = [negative, neutral, positive]

        // Tallennetaan muuttujaan satunnainen numero väliltä 0-2: 
        const randomNumber = Math.floor(Math.random() * 3)
        // console.log(randomNumber)

        // Asetetaan feelings-arraysta feeling-tilamuuttujaan arvotun numeron 
        // määrittämän alkion arvo:
        setFeeling(feelings[randomNumber])
        setIcon(icons[randomNumber])
    }

    useEffect(() => {
        if (inputSentence.toString().trim().length !== 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [inputSentence])

    return (
        <>
            <h4>What are you currently thinking?</h4>
            <form onSubmit={getSentence}>
                <input
                    placeholder='Write a word or a sentence here'
                    type="text" value={inputSentence}
                    onChange={(e) => setInputSentence(e.target.value)} />
                    
                <button disabled={isDisabled} type="submit">Analyze</button>
            </form>
        </>
    )
}