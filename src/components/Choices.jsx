import "./Choices.css"
import Choice from "./Choice.jsx"

export default function Choices({
  choices,
  handleSelect
}) {
  
  if (choices.length === 4) {
    const spread = [...choices]
    const randomizedChoices = []
    for (let i = 0; i < 4; i++) {
      const randomN = Math.floor(Math.random()*spread.length)
      randomizedChoices.push(spread.splice(randomN, 1)[0])
    }
    choices = randomizedChoices
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