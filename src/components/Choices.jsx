import "./Choices.css"
import Choice from "./Choice.jsx"

export default function Choices({
  choices,
  correctAnswer
}) {

  return (
    <ul className="choices">
      {choices.map((choice, i) => (
        <Choice
          choice={choice}
          key={i}
          correctAnswer={correctAnswer}
        />
      ))
      }
    </ul>
  )
}