import "./Choices.css"
import { useState } from "react"
import Choice from "./Choice.jsx"

export default function Choices({
  choices,
  handleSelect
}) {
  
  const [ isShuffled, setIsShuffled ] = useState(false)

  if (choices.length === 4  && !isShuffled) {
    const spread = [...choices]
    const randomizedChoices = []
    for (let i = 0; i < 4; i++) {
      const randomN = Math.floor(Math.random()*spread.length)
      randomizedChoices.push(spread.splice(randomN, 1)[0])
    }
    choices = randomizedChoices
    setIsShuffled(true)
  }

  return (
    <ul className="choices">
      {choices.map((choice, i) => (
          <Choice
            choice={choice}
            key={i}
            handleSelect ={handleSelect}
        />
      ))
      }
    </ul>
  )
}