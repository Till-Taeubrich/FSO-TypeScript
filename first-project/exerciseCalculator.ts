import handleCLInput from "./utils/groupedUtils/handleCLInput";

interface exercisesResult {
  numberOfDays: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number
}

const calculateExercises = (hours:number[]):exercisesResult => {
  const target = hours[0]
  const weeklyHours = hours.slice(1)

  const numberOfDays = weeklyHours.length

  const hourGoal = numberOfDays * target
  const actualHours = weeklyHours.reduce((a, b) => a + b)
  const calculateRating = () => {
    if (hourGoal < actualHours) {
      return {
        rating: 3,
        ratingDescription: 'Goal achieved!'
      }
    }
    if (hourGoal < actualHours + target) {
      return {
        rating: 2,
        ratingDescription: 'not too bad but could be better'
      }
    }
    if (hourGoal > actualHours) {
      return {
        rating: 1,
        ratingDescription: 'Exercised not enough'
      }
    }
  }

  const trainingDays = weeklyHours.filter(num => num !== 0).length
  const success = actualHours >= hourGoal
  const ratingResult = calculateRating()
  const average = actualHours / numberOfDays

  return {
    numberOfDays,
    trainingDays,
    success,
    rating: ratingResult.rating,
    ratingDescription: ratingResult.ratingDescription,
    target,
    average
  }
}

console.log(calculateExercises(handleCLInput()))