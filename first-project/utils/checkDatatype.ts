const checkNumberArray = (numberArray:number[]) => {
  numberArray.forEach(num => {
    if (isNaN(num)) {
      throw new Error("One or more provided values are not numbers!");
    }
  });
}

const checkNumber = (num:number)=> {
  if (isNaN(num)) {
    throw new Error("Provided number is NaN");
  }
}

export { checkNumberArray, checkNumber }