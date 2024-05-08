export default function Filters() {

  return (
    <>
      <form className="filters">
        <label>
          Amount: <input type="text" placeholder="# of Questions" />
        </label><br />
        <label>
          Difficulty: <select value="">--Select Difficulty
            <option value="hard">Hard</option>
            <option value="medium">Medium</option>
            <option value="easy">Easy</option>
          </select>
        </label><br />
        <label>
          Category: <select value="">--Select Category
            <option value="hard">Hard</option>
            <option value="medium">Medium</option>
            <option value="easy">Easy</option>
          </select>
        </label><br />
        <label>
          Type: <select value="">--Select Type
            <option value="hard">Hard</option>
            <option value="medium">Medium</option>
            <option value="easy">Easy</option>
          </select>
        </label>
      </form>
    </>
  )
}