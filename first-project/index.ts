import express = require('express')
const app = express()

app.get('/', (_request, response) => {
  response.send('<h1>Hello Full Stack!</h1>')
})

const PORT = 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})