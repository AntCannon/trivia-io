import "./Question.css"
import { useState, useEffect } from "react"
import Choices from "./Choices.jsx"

export default function Question({ trivia }) {
  const [ t, setT ] = useState(null)
  const {
    category,
    correct_answer,
    difficulty,
    incorrect_answers,
    question,
    type
  } = trivia
  
  const choices = [correct_answer, ...incorrect_answers]
  
  const [ hP, setHP ] = useState(choices.length)

  function handleSelect(e) {
    setT(e.target)
    const value = e.target.value

    // hp
    if (value != correct_answer) {
      setHP(hP - 1)
    } else {
      setHP(0)
    }
  } 

  // check hp
  function checkHP(t) {
    if (!hP) {
      t.parentNode.parentNode.parentNode.classList.add("defeated")
    }
  }

  checkHP(t)
  
  return (
    <article className="question">
      <p>{category}</p>
      <p>{type}</p>
      <p>{question}</p>
      <Choices
        choices={choices}
        handleSelect ={handleSelect}
      />
      <div>
        <p>HP: {hP} / {choices.length}</p>
      </div>
    </article>
  )
}