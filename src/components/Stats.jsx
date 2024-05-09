import "./Stats.css"

export default function Stats({ userHP, maxUserHP }) {

  return (
    <>
      <p>HP: {userHP} / {maxUserHP}</p>
      <p>Attempted: <span>20</span></p>
      <p>Correct: <span>15</span></p>
      <p>Wrong: <span>5</span></p>
      <p>Rate: <span>75</span></p>
    </>
  )
}