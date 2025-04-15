import { useEffect, useState } from "react"
import positive from '../assets/positive.svg'
import negative from '../assets/negative.svg'
import neutral from '../assets/neutral.svg'
import { FormProps } from "../models/layout"
import { getSentiment } from "../services/sentiment"
import { useSnapshot } from "valtio"
import { authStore } from "../store/auth_store"

export function Form({ setIsLoading, setIsResult, setFinalFeeling, setIcon }: FormProps) {
    const snap = useSnapshot(authStore)
    const [isDisabled, setIsDisabled] = useState(true)
    const [inputSentence, setInputSentence] = useState("")

    function getSentence(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        // setIsDisabled(true)
        setIsResult(true)

        // Tehtävässä 3 käytetty tapa, jossa tunne arvottiin backendin 
        // puuttumisen vuoksi:
        // --------------------------------------------------------------------
        // Arvotaan lauseen tunnelma, koska backendia ei vielä ole:
        // const feelings = ["negative", "neutral", "positive"]
        // const icons = [negative, neutral, positive]

        // // Tallennetaan muuttujaan satunnainen numero väliltä 0-2: 
        // const randomNumber = Math.floor(Math.random() * 3)
        // // console.log(randomNumber)

        // // Asetetaan feelings-arraysta feeling-tilamuuttujaan arvotun numeron 
        // // määrittämän alkion arvo:
        // setFeeling(feelings[randomNumber])
        // setIcon(icons[randomNumber])
        // --------------------------------------------------------------------


        const feelings = ["positive", "neutral", "negative"]
        const icons = [positive, neutral, negative]

        const request = { "text": inputSentence }

        getSentiment(request, snap.token).then((response) => {
            const feeling = response.result
            const iconIndex = feelings.indexOf(feeling)

            setFinalFeeling(feeling)
            setIcon(icons[iconIndex])
            setIsLoading(false)
            // setInputSentence("")
        })
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
            <h2>What are you currently thinking?</h2>
            <form onSubmit={getSentence}>
                <input
                    id="sentiment"
                    placeholder='Write a word or a sentence here'
                    type="text" value={inputSentence}
                    onChange={(e) => setInputSentence(e.target.value)} />

                <button disabled={isDisabled} type="submit">Analyze</button>
            </form>
        </>
    )
}