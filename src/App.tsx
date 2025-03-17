import { useState } from 'react'
import './App.css'
import { StartView } from './components/StartView'
import { EndView } from './components/EndView'
import { LoadingView } from './components/LoadingView'

function App() {

  const [isResult, setIsResult] = useState(false)
  const [feeling, setFeeling] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [icon, setIcon] = useState("")

  return (
    <>
      {/* Hyödynnetään ternary-operaatiota. Jos isResult-tilamuuttujan arvo 
      on tosi, näytetään StartView-komponentti ja muussa tapauksessa näytetään 
      EndView-komponentti */}
      {!isResult
        ? <StartView
          setIsLoading={setIsLoading}
          setIsResult={setIsResult}
          setFeeling={setFeeling}
          setIcon={setIcon}
        />
        : isLoading
          ? <LoadingView />
          : <EndView
            feeling={feeling}
            icon={icon}
            setIsResult={setIsResult} />
      }
    </>
  )
}

export default App
