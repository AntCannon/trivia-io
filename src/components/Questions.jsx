import "./Questions.css"
import { useState, useEffect } from 'react'
import { getQuestions } from '../utils/fetch.js'
import db from "../utils/db.json"
import Question from "./Question.jsx"

export default function Questions({ userHP, setUserHP }) {
  const [ questions, setQuestions ] = useState(db)

  // useEffect(() => {
  //   getQuestions()
  //     .then(data => {
  //       if (data.results) {
  //         setQuestions(data.results)
  //       } else {
  //         setQuestions(db)
  //       }
  //     })
  //     .catch(err => console.error(err))
  // }, [])

  return (
    <section className="questions-container">
      {questions.map( (trivia, i) => (
        <Question
          id={trivia.question}
          trivia={trivia}
          userHP={userHP}
          setUserHP={setUserHP}
          key={i} />
      ))
      }
    </section>
  )
}