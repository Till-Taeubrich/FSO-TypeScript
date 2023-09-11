// import handleCLInput from "./utils/groupedUtils/handleCLInput"

// const cLArguments = handleCLInput()

const calculateBmi = (height:number, weight:number) => {
  const heightInMeter = height / 100
  const squaredHeight = heightInMeter * heightInMeter 
  const BMI = (weight / squaredHeight)

  switch (true) {
    case (BMI < 16):
      return 'Underweight (Severe thinness)'
    case (BMI <= 16.9):
      return 'Underweight (Moderate thinness)'
    case (BMI <= 18.4):
      return 'Underweight (Mild thinness)'
    case (BMI <= 24.9):
      return 'Normal range'
    case (BMI <= 29.9):
      return 'Overweight (Pre-obese)'
    case (BMI <= 34.9):
      return 'Obese (Class I)'
    case (BMI <= 39.9):
      return 'Obese (Class II)'
    case (BMI >= 40.0):
      return 'Obese (Class III)'
    default:
      return
  }
}

// console.log(calculateBmi(cLArguments[0], cLArguments[1]))

export default calculateBmi