import { useEffect, useState } from 'react'
import './App.css'
import positive from './assets/positive.svg'
import negative from './assets/negative.svg'
import neutral from './assets/neutral.svg'

function App() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [isResult, setIsResult] = useState(false)
  const [feeling, setFeeling] = useState("")
  const [inputSentence, setInputSentence] = useState("")
  const [icon, setIcon] = useState(neutral)

  function getSentence(e: any) {
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

    console.log(feelings[randomNumber])
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
      {!isResult ?
        <div>
          <h6>Sentiment analysis</h6>
          <h4>What are you currently thinking?</h4>
          <form onSubmit={getSentence}>
            <input placeholder='Write a word or a sentence here' type="text" value={inputSentence} onChange={(e) => setInputSentence(e.target.value)} />
            <button disabled={isDisabled} type="submit">Send</button>
          </form>
        </div> :
        <div>
          <div className="card">
            <p>
              Your sentiment is {feeling}
            </p>
            <img src={icon} className="logo react" alt="Positive logo" />
            <button onClick={() => { setIsResult(false) }}>Back</button>
          </div>
        </div>
      }
    </>
  )
}

export default App
