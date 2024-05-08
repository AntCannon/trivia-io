import "./Choice.css"

export default function Choice({
  choice,
  handleSelect
}) {

  function handleAttack(e) {
    const t = e.target
    t.disabled = true
    t.classList.add("disabled")
    handleSelect(e)
  } 

  return (
    <li>
      <button
        className="choice"
        name={choice}
        type="button"
        value={choice}
        onClick={handleAttack}
        readOnly
        >
        {choice}
      </button>
    </li>
  )
}