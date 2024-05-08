import "./Choice.css"

export default function Choice({ choice }) {

  return (
    <li>
      <button
        className="choice"
        type="button"
        value={choice}>
        {choice}
      </button>
    </li>
  )
}