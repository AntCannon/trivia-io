import "./Questions.css"
import Question from "./Question.jsx"
export default function Questions() {

  return (
    <section className="questions-container">
      <Question />
      <article className="question">
        <p>Category</p>
        <p>Type</p>
        <p>This is a trivia question</p>
        <ul className="choices">
          <li>True</li>
          <li>False</li>
        </ul>
      </article>
    </section>
  )
}