import "./Question.css"

export default function Question() {

  return (
    <article className="question">
        <p>Category</p>
        <p>Type</p>
        <p>This is a trivia question</p>
        <ul className="choices">
          <li>Choice 1</li>
          <li>Choice 2</li>
          <li>Choice 3</li>
          <li>Choice 4</li>
        </ul>
      </article>
  )
}