import express = require('express')
import calculateBmi from './bmiCalculator'
import calculateExercises from './exerciseCalculator'
import { checkNumber } from './utils/checkDatatype'

const app = express()

app.use(express.json());

app.get('/', (_request, response) => {
  response.send('<h1>Hello Full Stack!</h1>')
})

app.get('/bmi', (request, response) => {
  const weight = Number(request.query.weight)
  const height = Number(request.query.height)

  const bmi = calculateBmi(height, weight)

  const responseObject = {
    weight,
    height,
    bmi
  }

  response.json(responseObject)
})

app.post('/exercises', (request, response) => {

  if (!request.body.target || !request.body.daily_exercises) {
    response.status(400).send({ error: 'unknown endpoint' }) 
  }

  if(isNaN(request.body.target) || request.body.daily_exercises.some(isNaN)){
    response.status(400).send({ error: 'malformatted parameters' })
  }

  try {
    const target = request.body.target
    checkNumber(target)

    const totalHours = request.body.daily_exercises
    totalHours.unshift(target)

    const responseData = calculateExercises(totalHours)
    response.send(responseData).status(200)

  } catch (error) {
    if(error instanceof Error){
      response.status(400).send({ error: error.message })
    }
  
    response.status(400).send({ error: 'something went wrong' });
  }
})

const PORT = 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})