import "./Question.css"

export default function Question({ trivia }) {
  const {
    category,
    correct_answer,
    difficulty,
    incorrect_answers,
    question,
    type
  } = trivia

  const choices = [incorrect_answers, ...incorrect_answers]

  console.log(choices)
  
  return (
    <article className="question">
        <p>{category}</p>
        <p>{type}</p>
        <p>{question}</p>
        <ul className="choices">
          
        </ul>
      </article>
  )
}