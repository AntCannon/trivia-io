import "./Questions.css"

export default function Questions() {

  return (
    <section className="questions-container">
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