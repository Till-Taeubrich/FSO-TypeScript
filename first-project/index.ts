import express = require('express')
import calculateBmi from './bmiCalculator'

const app = express()

app.get('/', (_request, response) => {
  response.send('<h1>Hello Full Stack!</h1>')
})

app.get('/bmi', (_request, response) => {
  const weight = Number(_request.query.weight)
  const height = Number(_request.query.height)

  const bmi = calculateBmi(height, weight)

  const responseObject = {
    weight,
    height,
    bmi
  }

  response.json(responseObject)
})

const PORT = 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})