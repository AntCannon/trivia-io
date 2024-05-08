import "./Questions.css"
import { useState, useEffect } from 'react'
import { getQuestions } from '../utils/fetch.js'
import Question from "./Question.jsx"

export default function Questions() {
  const [ questions, setQuestions ] = useState([])

  useEffect(() => {
    getQuestions()
      .then(data => {
        if (data.results) {
          setQuestions(data.results)
        }
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="questions-container">
      {questions.map( (trivia, i) => (
        <Question trivia={trivia} key={i} />
      ))
      }
    </section>
  )
}