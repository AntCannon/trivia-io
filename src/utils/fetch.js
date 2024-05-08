const URL = import.meta.env.VITE_API_BASE_URL

// let query = ""
// let amount = 5
// let amountQ = `amount=${amount}`

// get questions 

export function getQuestions() {
  const encoding = "encode!=[urlLegacy,base64,url3986]"
  return fetch(`${URL}&${encoding}`)
    .then(response => response.json())
}