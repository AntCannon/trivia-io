import "./Choices.css"
import Choice from "./Choice.jsx"

export default function Choices({
  choices,
  handleSelect
}) {

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