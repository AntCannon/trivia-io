import "./Choices.css"
import Choice from "./Choice.jsx"

export default function Choices({ choices }) {

  return (
    <ul className="choices">
      {choices.map((choice, i) => (
        <Choice choice={choice} key={i} />
      ))
      }
    </ul>
  )
}