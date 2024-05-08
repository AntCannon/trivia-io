import "./Question.css"
import { useState } from "react"
import Choices from "./Choices.jsx"

export default function Question({ trivia }) {
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
  
  return (
    <article className="question">
      <p>{category}</p>
      <p>{type}</p>
      <p>{question}</p>
      <Choices choices={choices} />
      <div>
        <p>HP: {hP} / {choices.length}</p>
      </div>
    </article>
  )
}