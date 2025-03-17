import { useState } from "react"
import { EndViewProps } from "../models/layout"

export function EndView({ feeling, icon, setIsResult }: EndViewProps) {
    const [isDisabled, setIsDisabled] = useState(false)

    // Kun komponentin napista klikataan, asetetaan nappi disabloiduksi 
    // ja props-metodin avulla parent-komponentin isResult-muuttujan 
    // arvo epätodeksi, jotta tämän komponentin sijaan renderöidään 
    // StartView-komponentti. Näin napin painalluksella siirrytään 
    // aloitusnäkymään.
    const handleClick = () => {
        setIsDisabled(true)
        setIsResult(false)
    }

    return (
        <>
            {/*Näkymä, jossa näytetään (myöhemmin backendista saatava 
            sentiment-analyysin) tulos. Tulos ja siihen liittyvä kuva 
            saadaan propseina parent- eli App-komponentilta.*/}
            <div className="card">
                <p>Your text is {feeling}</p>
                <img src={icon} className="logo react" alt="Positive logo" />
                <button disabled={isDisabled} onClick={handleClick}>Back</button>
            </div>
        </>
    )
}