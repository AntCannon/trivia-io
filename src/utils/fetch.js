const URL = import.meta.env.VITE_API_BASE_URL

// let query = ""
// let amount = 5
// let amountQ = `amount=${amount}`

// get questions 

export function getQuestions() {
  return fetch(`${URL}`)
    .then(response => response.json())
}