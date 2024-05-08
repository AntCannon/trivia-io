import "./Choice.css"

export default function Choice({
  choice,
  handleSelect
}) {

  

  return (
    <li>
      <button
        className="choice"
        name={choice}
        type="button"
        value={choice}
        onClick={handleSelect}
        >
        {choice}
      </button>
    </li>
  )
}